import { Pipe, PipeTransform } from '@angular/core';
import { StationPositionModel } from './reactive-forms-auto-complete-searching/metro-station-DTO.model';

@Pipe({
  name: 'googleMapLink'
})
export class GoogleMapLinkPipe implements PipeTransform {

  transform({ PositionLat, PositionLon }: StationPositionModel, ...args: unknown[]): string {
    return `https://www.google.com/maps?q=${PositionLat},${PositionLon}&z=7`;
  }

}
