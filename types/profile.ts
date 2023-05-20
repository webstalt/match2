export type Profile = {
  id: string;
  name: string;
  age?: number;
  description: string;
  photos: {downloadUrl: string}[];
};
