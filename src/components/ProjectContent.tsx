import type { Project } from "@/data/types";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <main className="flex-1 p-6 lg:p-12 max-w-4xl">
      {/* Project Description */}
      <div className="mb-12">
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>

      {/* Project Sections */}
      <div className="space-y-16">
        {project.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-8 space-y-6"
          >
            <h2 className="text-3xl font-bold">{section.title}</h2>

            {section.image && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            )}

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed">{section.content}</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
