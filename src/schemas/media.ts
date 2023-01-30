export type Media = {
  data?: MediaData;
};

export type RequiredMedia = {
  data: MediaData;
};

export type MediaData = {
  attributes: {
    alternativeText: string;
    url: string;
  };
};
