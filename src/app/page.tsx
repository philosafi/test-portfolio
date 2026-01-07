"use client";

import { Hero } from "@/components/Hero";
import { ProjectCard, FeaturedProjectCard } from "@/components/ProjectCard";
import { FadeInOnScroll } from "@/components/PageTransition";
import { projects, getFeaturedProjects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Selected Work</h2>
                <p className="text-[var(--muted)]">
                  A collection of projects I&apos;ve worked on over the years
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Regular Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(2).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      {otherProjects.length > 0 && (
        <section className="py-24 px-6 lg:px-8 bg-[var(--card)]">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">More Projects</h2>
                <p className="text-[var(--muted)]">
                  Other explorations and side projects
                </p>
              </div>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section Teaser */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              My design ethos is rooted in the belief that technology should
              empower, not overpower.
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              Enhancing human experiences without overshadowing them. It&apos;s about
              striking that perfect harmony between innovation and intuition.
            </p>
            <motion.a
              href="/bio"
              className="inline-flex items-center gap-2 text-[var(--foreground)] font-medium link-underline"
              whileHover={{ x: 4 }}
            >
              Learn more about me
              <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
