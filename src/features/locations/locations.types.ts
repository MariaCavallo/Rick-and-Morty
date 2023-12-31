import { PaginationInfo } from '../pagination';

export interface LocationsResult {
  results: Location[];
  info: PaginationInfo;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
