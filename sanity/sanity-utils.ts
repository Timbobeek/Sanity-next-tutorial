// all functions to use to grab data

import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  // use query language GROQ 
  const client = createClient({
    //with client, we can read data from studio
    projectId: "vr6otv1n",
    dataset: "production",
    apiVersion: "2023-09-26",
  });

  return client.fetch(
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
  const client = createClient({
    //with client, we can read data from studio
    projectId: "vr6otv1n",
    dataset: "production",
    apiVersion: "2023-09-26",
  });

  return client.fetch(
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