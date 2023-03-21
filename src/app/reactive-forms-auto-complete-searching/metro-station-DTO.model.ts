export interface MetroStationDTO {
  StationID: string;
  StationName: StationNameModel;
  LocationCity: string;
  LocationTown: string;
  BikeAllowOnHoliday: boolean;
  StationPosition: StationPositionModel;
}

export interface StationNameModel {
  Zh_tw: string;
  En: string;
}

export interface StationPositionModel {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}
