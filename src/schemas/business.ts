import { Media } from "./media";

export type BusinessListResponse = {
  data: BusinessListResponseDataItem[];
};

export type BusinessListResponseDataItem = {
  id: number;
  attributes: {
    name: string;
    logo: Media;
  };
};
