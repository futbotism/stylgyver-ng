import { Pipe, PipeTransform } from '@angular/core';
/**
 * The title case pipe changes a word to upper case
 *
 * ```html
 * <p>{{'hello | PipeTransform}}</p>
 * ```
 *
 * @export
 * @class MagyverfyString
 * @implements {PipeTransform}
 */
@Pipe({ name: 'titlecase' })
export class TitleCasePipe implements PipeTransform {
  transform(input: string): string {
    const words = input.split(' ');
    const casedWords = words.map(word => word[0].toLocaleUpperCase() + word.slice(1));
    return casedWords.join(' ');
  }
}
