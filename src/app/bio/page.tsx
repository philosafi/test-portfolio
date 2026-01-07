"use client";

import { motion } from "framer-motion";
import { FadeInOnScroll, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { ArrowUpRight, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import Image from "next/image";

const experience = [
  {
    company: "Microsoft",
    role: "Senior Product Designer",
    period: "2021 - Present",
    location: "Dublin, Ireland",
    description:
      "Designing agentic experiences for Microsoft 365 Copilot and Microsoft Word. Among the first designers to integrate transformer-based language models (GPT) into Microsoft's ecosystem.",
  },
  {
    company: "MathWorks",
    role: "Product Designer",
    period: "2020 - 2021",
    location: "Cambridge, UK",
    description:
      "Focused on core MATLAB functionality, designing tools that empower engineers and scientists worldwide.",
  },
  {
    company: "KeepTruckin (now Motive)",
    role: "Product Designer",
    period: "2018 - 2020",
    location: "San Francisco, CA",
    description:
      "Designed the modern developer platform, empowering partners and developers to access powerful APIs and build tailored fleet management solutions.",
  },
  {
    company: "Bayut",
    role: "Product Designer",
    period: "2017 - 2018",
    location: "Dubai, UAE",
    description:
      "Led product design for the Bayut Mobile App, introducing a culture of rapid A/B testing and data-driven decision-making.",
  },
  {
    company: "Makerarm",
    role: "Lead Product Designer",
    period: "2015 - 2017",
    location: "San Francisco, CA",
    description:
      "Led the design of Makerarm, a groundbreaking desktop fabrication system that raised over $435,000 on Kickstarter.",
  },
];

const education = [
  {
    institution: "University of Edinburgh",
    degree: "MSc Design Informatics",
    period: "2020 - 2021",
    description:
      "Specialized in human-computer interaction and data science. Developed pyReality as part of dissertation.",
  },
  {
    institution: "LUMS",
    degree: "BSc Computer Science",
    period: "2012 - 2016",
    description:
      "Foundation in computer science with focus on software engineering and user experience.",
  },
];

const recognition = [
  {
    title: "25 Under 25",
    organization: "YSI Global",
    year: "2016",
  },
  {
    title: "World Economic Forum",
    organization: "Global Shaper",
    year: "2018",
  },
  {
    title: "Kickstarter Success",
    organization: "Makerarm - $435K raised",
    year: "2016",
  },
];

const mentoring = [
  { organization: "ADPList", role: "Design Mentor" },
  { organization: "Foundry", role: "Design & Data Mentor" },
  { organization: "AstroLabs", role: "Product Management Mentor" },
  { organization: "ProductHunt", role: "Community Manager" },
];

export default function BioPage() {
  return (
    <div className="page-transition pt-32">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--card)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-hover)] to-[var(--card)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-[var(--muted)]/20">TA</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-2 text-[var(--muted)] mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Dublin, Ireland</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
              Tashfeen Ahmed
            </h1>

            <p className="text-xl text-[var(--muted)] mb-6 leading-relaxed">
              I&apos;m a Senior Product Designer at Microsoft, shaping the future of
              digital experiences for Microsoft 365 Copilot.
            </p>

            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              With a Master&apos;s in Design Informatics from the University of
              Edinburgh, I&apos;ve honed my skills in understanding and applying the
              nuances of human-computer interaction and data science to meet and
              exceed user expectations.
            </p>

            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
              My design ethos is rooted in the belief that technology should
              empower, not overpower, enhancing human experiences without
              overshadowing them. It&apos;s about striking that perfect harmony
              between innovation and intuition.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:hello@tashfeen.me"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/tashfeen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-full font-medium text-sm hover:bg-[var(--card)] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-3xl font-semibold">Experience</h2>
            </div>
          </FadeInOnScroll>

          <StaggerContainer className="space-y-0" delay={0.2}>
            {experience.map((job, index) => (
              <StaggerItem key={job.company + job.period}>
                <div className="border-b border-[var(--border)] py-8 group">
                  <div className="grid lg:grid-cols-4 gap-4 lg:gap-8">
                    <div className="lg:col-span-1">
                      <span className="text-sm text-[var(--muted)]">
                        {job.period}
                      </span>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                      <p className="text-[var(--muted)] mb-3">
                        {job.company} · {job.location}
                      </p>
                      <p className="text-[var(--muted)]">{job.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-6 h-6" />
              <h2 className="text-3xl font-semibold">Education</h2>
            </div>
          </FadeInOnScroll>

          <StaggerContainer className="space-y-8" delay={0.2}>
            {education.map((edu) => (
              <StaggerItem key={edu.institution}>
                <div className="border border-[var(--border)] rounded-2xl p-8">
                  <div className="grid lg:grid-cols-4 gap-4 lg:gap-8">
                    <div className="lg:col-span-1">
                      <span className="text-sm text-[var(--muted)]">
                        {edu.period}
                      </span>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-[var(--muted)] mb-3">{edu.institution}</p>
                      <p className="text-[var(--muted)]">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recognition & Mentoring */}
      <section className="py-24 px-6 lg:px-8 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Recognition */}
            <FadeInOnScroll>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Recognition</h2>
              </div>
              <div className="space-y-4">
                {recognition.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between py-4 border-b border-[var(--border)]"
                  >
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-[var(--muted)]">
                        {item.organization}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--muted)]">{item.year}</span>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>

            {/* Mentoring */}
            <FadeInOnScroll delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Mentoring & Community</h2>
              </div>
              <div className="space-y-4">
                {mentoring.map((item) => (
                  <div
                    key={item.organization}
                    className="flex items-center justify-between py-4 border-b border-[var(--border)]"
                  >
                    <div>
                      <h3 className="font-medium">{item.organization}</h3>
                      <p className="text-sm text-[var(--muted)]">{item.role}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted)]" />
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll>
            <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
              &ldquo;At the intersection of AI and design, I navigate the uncharted
              waters of designing for systems powered by intelligent technologies,
              ensuring that as machines grow smarter, our experiences with them
              become more human.&rdquo;
            </blockquote>
            <cite className="text-[var(--muted)]">— On my work at Microsoft</cite>
          </FadeInOnScroll>
        </div>
      </section>
    </div>
  );
}
