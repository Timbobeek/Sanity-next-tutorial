// all functions to use to grab data

import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./schemas/config/client-config";


export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    //groq query
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  )
}

export async function getProject(slug: string): Promise<Project> {


  return createClient(clientConfig).fetch(
    //groq query
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug: slug ?? '' }
  )
}