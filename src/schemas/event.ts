import { Theme } from "react-styleguidist"
import { Media, RequiredMedia } from "./media"
import { SharedSeo, SharedTheme } from "./shared"

type Event = {
  id: number,
  attributes: {
    title: string,
    cover: RequiredMedia,
    description: string,
    logo: Media,
    start: string,
    end: string,
    theme: SharedTheme,
    seo: SharedSeo,
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
