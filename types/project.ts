import { PortableTextBlock } from "sanity";

export type Project = {
  // underscores because sanity created this
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[]; //used for rich
}