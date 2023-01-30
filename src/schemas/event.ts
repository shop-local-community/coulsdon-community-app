import { Media, RequiredMedia } from "./media"

type Event = {
  id: number,
  attributes: {
    title: string,
    cover: RequiredMedia,
    logo: Media,
    start: string,
    end: string,
    slug: string,
    eventbriteEventId?: string
  }
}

export type EventResponse = {
  data: EventResponseDataObject
}

export type EventResponseDataObject = Event & {
  attributes: {
    start: string,
    end: string
  }
};

export type EventListResponse = {
  data: EventListResponseDataItem[]
}

export type EventListResponseDataItem = Event;
