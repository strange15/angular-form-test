export interface MetroStationDTO {
  StationID: string;
  StationName: StationNameModel;
  LocationCity: string;
  LocationTown: string;
  BikeAllowOnHoliday: boolean;
  StationPosition: StationNameModel;
}

interface StationNameModel {
  Zh_tw: string;
  En: string;
}

interface StationNameModel {
  PositionLon: number;
  PositionLat: number;
  GeoHash: string;
}
