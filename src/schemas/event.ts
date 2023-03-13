import { Media, RequiredMedia } from "./media";
import { Seo, Theme } from "./shared";

export type Event = {
  id: number;
  attributes: {
    title: string;
    cover: RequiredMedia;
    description: string;
    logo: Media;
    start: string;
    end: string;
    theme: Theme;
    seo: Seo;
    slug: string;
    eventbriteEventId?: string;
  };
};

export type EventResponse = {
  data: EventResponseDataObject;
};

export type EventResponseDataObject = Event;

export type EventListResponse = {
  data: EventListResponseDataItem[];
};

export type EventListResponseDataItem = Event;
