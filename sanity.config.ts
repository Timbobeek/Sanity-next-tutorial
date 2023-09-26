import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
    projectId: "vr6otv1n",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2023-09-26",
    basePath: "/admin",
    plugins: [deskTool()]
})

export default config;