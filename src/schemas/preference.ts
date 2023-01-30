import { SocialURL } from "./shared";

export type PreferenceResponse = {
  data: PreferenceResponseDataObject;
};

export type PreferenceResponseDataObject = {
  id: number;
  attributes: {
    missionStatement: string;
    socialURLs: SocialURL[];
  };
};
