import { Media } from "./media";
import { Seo } from "./shared";

export type Business = {
  id: number;
  attributes: {
    name: string;
    logo: Media;
    seo: Seo;
    slug: string;
  };
};

export type BusinessResponse = {
  data: BusinessResponseDataObject;
};

export type BusinessResponseDataObject = Business;

export type BusinessListResponse = {
  data: BusinessListResponseDataItem[];
};

export type BusinessListResponseDataItem = Business;
