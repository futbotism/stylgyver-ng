import { Pipe, PipeTransform } from '@angular/core';
/**
 * The magyver pipe append 'magyver to given string
 *
 * ```html
 * <p>{{'hello | MagyverfyString}}</p>
 * ```
 *
 * @export
 * @class MagyverfyString
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'MagyverfyString'
})
export class MagyverfyString implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + '-Magyverfy';
  }

}
