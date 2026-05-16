"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { id: "request", label: "Your Request", color: "#6366f1", x: 50, y: 10 },
  { id: "mixer", label: "Home Mixer", color: "#8b5cf6", x: 50, y: 30, desc: "Orchestrates every stage" },
  { id: "thunder", label: "Thunder", color: "#06b6d4", x: 15, y: 55, desc: "In-network posts (Rust)" },
  { id: "phoenix", label: "Phoenix ML", color: "#10b981", x: 50, y: 55, desc: "Out-of-network ranking (JAX)" },
  { id: "grox", label: "Grox", color: "#f59e0b", x: 85, y: 55, desc: "Safety & spam filters (Python)" },
  { id: "feed", label: "Ranked Feed", color: "#6366f1", x: 50, y: 80 },
];

export default function PipelineDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full rounded-xl border border-border bg-muted/20 p-6 my-8">
      <p className="text-xs text-muted-foreground mb-4 font-mono uppercase tracking-widest">Live Architecture</p>
      <div className="relative w-full" style={{ height: 320 }}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Request → Mixer */}
          <motion.line
            x1="50" y1="14" x2="50" y2="26"
            stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.6"
            strokeDasharray="2 1"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
          {/* Mixer → Thunder */}
          <motion.line
            x1="46" y1="34" x2="20" y2="51"
            stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.6"
            strokeDasharray="2 1"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          />
          {/* Mixer → Phoenix */}
          <motion.line
            x1="50" y1="34" x2="50" y2="51"
            stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.6"
            strokeDasharray="2 1"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
          />
          {/* Mixer → Grox */}
          <motion.line
            x1="54" y1="34" x2="80" y2="51"
            stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.6"
            strokeDasharray="2 1"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          {/* Thunder → Feed */}
          <motion.line
            x1="20" y1="59" x2="46" y2="76"
            stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.4"
            strokeDasharray="2 1"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
          />
          {/* Phoenix → Feed */}
          <motion.line
            x1="50" y1="59" x2="50" y2="76"
            stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.4"
            strokeDasharray="2 1"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          {/* Grox → Feed */}
          <motion.line
            x1="80" y1="59" x2="54" y2="76"
            stroke="#6366f1" strokeWidth="0.5" strokeOpacity="0.4"
            strokeDasharray="2 1"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
          />
        </svg>

        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center cursor-default"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.08 }}
          >
            <motion.div
              className="rounded-xl px-3 py-1.5 text-xs font-bold text-white shadow-lg text-center whitespace-nowrap"
              style={{ backgroundColor: node.color }}
              animate={{
                boxShadow:
                  hovered === node.id
                    ? `0 0 20px ${node.color}80`
                    : `0 0 6px ${node.color}30`,
              }}
            >
              {node.label}
            </motion.div>
            {node.desc && hovered === node.id && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] text-muted-foreground mt-1 text-center max-w-[90px]"
              >
                {node.desc}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-2">
        Hover over a service to learn its role · All written in Rust (pipeline) and Python/JAX (ML)
      </p>
    </div>
  );
}
