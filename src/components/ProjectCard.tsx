import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/${project.id}`} className="block group border-b border-foreground/10 last:border-b-0 py-16 px-8 -mx-8 transition-colors duration-500 hover:bg-foreground/[0.02]">
      <article className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer">
        <div className="col-span-1 md:col-span-7 order-2 md:order-1 space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="font-serif text-4xl group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h2>
              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-foreground/40 hover:text-accent transition-colors duration-300 mt-2"
                  aria-label="External Source"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GitHub
                </a>
              )}
            </div>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl font-sans">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold tracking-wider uppercase text-foreground/50 bg-foreground/5 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-5 order-1 md:order-2 overflow-hidden bg-foreground/5 rounded-sm aspect-[4/3] relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      </article>
    </Link>
  );
}


