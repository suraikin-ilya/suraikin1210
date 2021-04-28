import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
})
export class WeightPipe implements PipeTransform {
  transform(weight: string): string {
    return +weight !== 0 && `${weight} кг`;
  }
}
