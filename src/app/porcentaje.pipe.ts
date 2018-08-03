import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porcentaje'
})
export class PorcentajePipe implements PipeTransform {

  transform(valor: number, argumento: number): number {
    return valor*argumento/100;
  }

}
