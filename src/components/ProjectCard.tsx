"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.id}`} className="group block">
        <article className="project-card relative overflow-hidden rounded-2xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--muted)]">
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--card-hover)]">
            <div
              className="absolute inset-0 project-image"
              style={{ backgroundColor: project.color + '20' }}
            >
              {/* Placeholder gradient when no image */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color}10 100%)`
                }}
              />
              {/* Project Icon/Initial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-6xl font-bold opacity-20"
                  style={{ color: project.color }}
                >
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-[var(--foreground)] opacity-0 group-hover:opacity-5 transition-opacity duration-300"
            />

            {/* Arrow Icon */}
            <motion.div
              className="absolute top-4 right-4 p-2 rounded-full bg-[var(--background)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-[var(--muted)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted)]">{project.subtitle}</p>
              </div>
              <span className="text-xs text-[var(--muted-foreground)] whitespace-nowrap mt-1">
                {project.year}
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] line-clamp-2 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-[var(--background)] text-[var(--muted)] border border-[var(--border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

// Featured variant with larger size
export function FeaturedProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="col-span-full lg:col-span-2"
    >
      <Link href={`/work/${project.id}`} className="group block">
        <article className="project-card relative overflow-hidden rounded-3xl bg-[var(--card)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--muted)]">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Container */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden bg-[var(--card-hover)]">
              <div
                className="absolute inset-0 project-image"
                style={{ backgroundColor: project.color + '15' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}05 100%)`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[120px] font-bold opacity-10"
                    style={{ color: project.color }}
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-semibold mb-2 group-hover:text-[var(--muted)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--muted)] mb-2">{project.subtitle}</p>

              <p className="text-[var(--muted)] mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-[var(--background)] text-[var(--muted)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div
                className="inline-flex items-center gap-2 text-sm font-medium"
                whileHover={{ x: 4 }}
              >
                View Case Study
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
