import { PortableTextBlock } from "sanity";

export type Page = {
  // underscores because sanity created this
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[]; //used for rich
}