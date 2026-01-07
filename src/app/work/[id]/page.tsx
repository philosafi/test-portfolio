"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Wrench } from "lucide-react";
import { getProjectById, projects } from "@/data/projects";
import { FadeInOnScroll } from "@/components/PageTransition";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Project } from "@/data/projects";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);

  useEffect(() => {
    const id = params.id as string;
    const foundProject = getProjectById(id);
    if (!foundProject) {
      router.push("/");
      return;
    }
    setProject(foundProject);

    // Find next project
    const currentIndex = projects.findIndex((p) => p.id === id);
    const next = projects[(currentIndex + 1) % projects.length];
    setNextProject(next);
  }, [params.id, router]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-[var(--muted)]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="page-transition pt-24">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-8">
        <motion.button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4">
            {project.title}
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--muted)] mb-8">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--card)]"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}10 100%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-[200px] font-bold opacity-10"
              style={{ color: project.color }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      {project.details && (
        <>
          {/* Overview Section */}
          <section className="py-16 px-6 lg:px-8 bg-[var(--card)]">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <FadeInOnScroll className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                  <p className="text-lg text-[var(--muted)] leading-relaxed">
                    {project.details.overview}
                  </p>
                </FadeInOnScroll>

                {/* Sidebar */}
                <FadeInOnScroll delay={0.2}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] mb-2">
                        <Users className="w-4 h-4" />
                        Role
                      </div>
                      <p>{project.details.role}</p>
                    </div>

                    {project.details.team && (
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] mb-2">
                          <Users className="w-4 h-4" />
                          Team
                        </div>
                        <p>{project.details.team}</p>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] mb-2">
                        <Calendar className="w-4 h-4" />
                        Year
                      </div>
                      <p>{project.year}</p>
                    </div>

                    {project.details.tools && (
                      <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] mb-2">
                          <Wrench className="w-4 h-4" />
                          Tools
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.details.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-sm px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </FadeInOnScroll>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          {project.details.sections.map((section, index) => (
            <section
              key={section.title}
              className={`py-24 px-6 lg:px-8 ${
                index % 2 === 1 ? "bg-[var(--card)]" : ""
              }`}
            >
              <div className="max-w-6xl mx-auto">
                <FadeInOnScroll>
                  <div className="max-w-3xl">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                      {section.title}
                    </h2>
                    <p className="text-lg text-[var(--muted)] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </FadeInOnScroll>

                {section.image && (
                  <FadeInOnScroll delay={0.2}>
                    <div className="mt-12 relative aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--card-hover)]">
                      {/* Placeholder for section images */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`,
                        }}
                      />
                    </div>
                  </FadeInOnScroll>
                )}
              </div>
            </section>
          ))}
        </>
      )}

      {/* Next Project */}
      {nextProject && (
        <section className="py-24 px-6 lg:px-8 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <div className="text-center mb-8">
                <span className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">
                  Next Project
                </span>
              </div>

              <Link href={`/work/${nextProject.id}`} className="group block">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-3xl lg:text-5xl font-semibold mb-4 group-hover:text-[var(--muted)] transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-lg text-[var(--muted)]">
                    {nextProject.subtitle}
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 mt-6 text-[var(--foreground)]"
                    whileHover={{ x: 4 }}
                  >
                    View Project
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </Link>
            </FadeInOnScroll>
          </div>
        </section>
      )}
    </div>
  );
}
