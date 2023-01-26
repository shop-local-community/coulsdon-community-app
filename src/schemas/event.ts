export type EventListResponse = {
  data: EventListResponseDataItem[]
}

export type EventListResponseDataItem = {
  id: number,
  attributes: {
    title: string
  }
}
