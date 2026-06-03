import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface RightScrollAreaProps {
  projects: Project[];
}

export function RightScrollArea({ projects }: RightScrollAreaProps) {
  return (
    <main className="w-full md:w-[70%] md:ml-[30%] min-h-screen bg-background relative z-0">
      <div className="max-w-5xl mx-auto px-12 md:px-24 py-24">
        {projects.length > 0 ? (
          <div className="flex flex-col">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="font-serif text-3xl text-foreground/50 mb-4">No projects found</h2>
            <p className="text-foreground/40 font-sans">
              Try adjusting your filters to see more results.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
