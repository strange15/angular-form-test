import { Pipe, PipeTransform } from '@angular/core';
import { StationPositionModel } from './reactive-forms-auto-complete-searching/metro-station-DTO.model';

@Pipe({
  name: 'locationString'
})
export class LocationStringPipe implements PipeTransform {

  transform({ PositionLat, PositionLon }: StationPositionModel, ...args: unknown[]): string {
    return `${PositionLat}, ${PositionLon}`;
  }

}
