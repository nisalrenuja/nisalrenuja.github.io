"use client";

import Section from "./Section";
import { PROJECTS } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeInUpVariants } from "@/lib/animations";

export default function Projects() {
  return (
    <Section id="work" className="py-16 md:py-24">
      <div className="space-y-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Selected work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Systems that went live
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Platforms serving real traffic — national news sites, government
            infrastructure, election-night dashboards, and marketplaces. Built
            end to end, from architecture through deployment.
          </p>
        </div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={`project-${project.title.replace(/\s/g, '-')}-${project.period.replace(/\s/g, '')}`}
              variants={fadeInUpVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {project.period}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-accent hover:text-white transition-all"
                    aria-label={`View ${project.title} project details`}
                  >
                    <ExternalLink size={18} aria-hidden="true" />
                  </a>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
