"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tashfeen",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/tashfeenahmed",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tashfeenahmed",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@tashfeen.me",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let&apos;s work together</h3>
            <p className="text-[var(--muted)] max-w-md mb-6">
              I&apos;m always interested in hearing about new projects and opportunities.
              Feel free to reach out.
            </p>
            <motion.a
              href="mailto:hello@tashfeen.me"
              className="inline-flex items-center gap-2 text-[var(--foreground)] font-medium link-underline"
              whileHover={{ x: 4 }}
            >
              hello@tashfeen.me
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          {/* Right Column */}
          <div className="md:text-right">
            <h4 className="text-sm font-medium text-[var(--muted)] mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--card)] hover:bg-[var(--card-hover)] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Tashfeen Ahmed. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
              Work
            </Link>
            <Link href="/bio" className="hover:text-[var(--foreground)] transition-colors">
              Bio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
