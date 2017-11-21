const fs = require('fs');
const path = require('path');
const comments = require('parse-comments');

/**
 * WEBPACK PLUGIN TO GENERATE STYLEGUIDE META DATA
 * This will compile a new style guide meta on changes
 * 
 * TODO: only run the plugin on changes to the folder as given in the source
 * TODO: Add pipes, Directives, Modules, utils, Directives
 * 
 * @param {any} options 
 */

function StyleGuidelerPlugin(options) {
  this.options = options;
  this.styleguide = {};
}

StyleGuidelerPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {

    this.styleguide = new Styleguide();

    let requests = this.options.sources.map((source) => {
      return new Promise((resolve) => {
        this.styleguide[source.name] = new ComponentMeta(source);
        this.styleguide[source.name].buildComponentMeta(resolve);
      });
    }, Promise.resolve());

    Promise.all(requests).then(() => {
      fs.writeFile(this.options.outputPath, JSON.stringify(this.styleguide, null, 2), 'utf-8', () => console.log('The styleguide has been generated 🎨'));
    });

  }.bind(this));
};

module.exports = StyleGuidelerPlugin;

class Styleguide {
  constructor(options) {}
}

class ComponentMeta {
  constructor(source) {
    this.componentsList = {};
    this.menuList = [];
    this.source = source;
  }

  buildComponentMeta(resolve) {
    fs.readdir(this.source.path, (err, folders) => {
      if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
      }

      folders.forEach((target, index) => {

        var path = `${this.source.path}/${target}/${target}.component.ts`;

        if (!target.includes('module.ts') && !target.includes('index.ts') && !this.source.folderToIgnore.find(e => e === target)) {

          // create an array of lines for the currently reading document
          let lines = require('fs').readFileSync(path, 'utf-8')
            .split('\n')
            .filter(Boolean);

          let parsedComments = (comments(require('fs').readFileSync(path, 'utf-8')));
          let descriptions = [];

          parsedComments.forEach(comment => {
            descriptions.push(comment.description);
          })

          // Changes kebab-case into camelCase
          let link = convertToCamelCase(target);

          this.menuList.push({
            name: target,
            link: link,
            type: this.source.name
          });

          // Generate the meta for each folder contents
          this.componentsList[link] = {
            title: target.split('-').join(' '),
            descriptions: descriptions,
            link: link,
            inputs: findInputs(lines),
            outputs: findOutputs(lines)
          };
        }
      });
      resolve();
    });
  }
}

var convertToCamelCase = (string) => {
  return string.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
}

var findInputs = function(lines) {
  var inputs = [];
  lines.forEach(line => {
    if (line.includes('@Input')) {
      var linSplit = line.split(':')
      inputs.push({
        name: distillInputName(linSplit[0]),
        type: distillInputType(linSplit[1])
      });
    }
  })
  return inputs;
};

var findOutputs = function(lines) {
  var outputs = [];
  lines.forEach(line => {
    if (line.includes('@Output')) {
      var linSplit = line.split('=')
      outputs.push({
        name: distillOutputName(linSplit[0]),
        type: distillOutputType(linSplit[1])
      });
    }
  })
  return outputs;
};

var distillInputName = function(name) {
  if (name.includes('@Input()')) {
    name = name.replace('@Input()', '');
  }
  if (name.split('=').length > 0) {
    name = name.split('=')[0];
  }
  return name.trim();
}

var distillInputType = function(type) {
  if (type) {
    if (type.split('=').length > 0) {
      type = type.split('=')[0];
    }
    return type.trim().replace(';', '');
  }
}

var distillOutputName = function(name) {
  if (name.includes('@Output()')) {
    name = name.replace('@Output()', '');
  }
  if (name.split(':').length > 0) {
    name = name.split(':')[0];
  }
  return name.trim();
}

var distillOutputType = function(type) {

  if (type && type.split('<').length > 0) {
    type = type.split('<')[1];
  }
  if (type && type.split('>').length > 0) {
    type = type.split('>')[0];
  }
  return type && type.trim().replace(';', '');
}