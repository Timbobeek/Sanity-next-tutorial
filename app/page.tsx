import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-7xl font-extrabold py-20">Hello, I am <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Timmy</span></h1>
      <p className="mt-3 text-x1 text-lime-600">Hi hello hey</p>
      <h2 className="mt-24 font-bold text-blue-700 text-3x1">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any) => (
          <div key={project._id} className="border border-yellow-500 rounded-lg p-3">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
