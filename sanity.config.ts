import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "vr6otv1n",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-09-26",
    basePath: "/admin",
    plugins: [deskTool()],
    // to show the schema types in studio cms
    schema: { types: schemas}
})

export default config;