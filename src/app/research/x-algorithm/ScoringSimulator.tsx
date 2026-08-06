"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Weights are illustrative; actual values are runtime params (not hardcoded in source)
const actions = [
  { key: "favorite", label: "Favorite", weight: 1.0, type: "positive" },
  { key: "reply", label: "Reply", weight: 1.2, type: "positive" },
  { key: "retweet", label: "Retweet", weight: 1.5, type: "positive" },
  { key: "quote", label: "Quote", weight: 1.3, type: "positive" },
  { key: "click", label: "Click", weight: 0.5, type: "positive" },
  { key: "profile_click", label: "Profile Click", weight: 0.8, type: "positive" },
  { key: "vqv", label: "VQV (Video Quality View)", weight: 0.7, type: "positive" },
  { key: "photo_expand", label: "Photo Expand", weight: 0.4, type: "positive" },
  { key: "share", label: "Share", weight: 1.4, type: "positive" },
  { key: "share_via_dm", label: "Share via DM", weight: 1.1, type: "positive" },
  { key: "share_via_copy_link", label: "Share via Copy Link", weight: 0.6, type: "positive" },
  { key: "dwell", label: "Dwell (discrete)", weight: 0.9, type: "positive" },
  { key: "quoted_click", label: "Quoted Post Click", weight: 0.5, type: "positive" },
  { key: "quoted_vqv", label: "Quoted Post VQV", weight: 0.5, type: "positive" },
  { key: "dwell_time", label: "Dwell Time (continuous)", weight: 0.8, type: "positive" },
  { key: "click_dwell_time", label: "Click Dwell Time (continuous)", weight: 0.6, type: "positive" },
  { key: "follow_author", label: "Follow Author", weight: 2.0, type: "positive" },
  { key: "not_interested", label: "Not Interested", weight: -2.0, type: "negative" },
  { key: "block_author", label: "Block Author", weight: -5.0, type: "negative" },
  { key: "mute_author", label: "Mute Author", weight: -3.0, type: "negative" },
  { key: "report", label: "Report", weight: -4.0, type: "negative" },
  { key: "not_dwelled", label: "Not Dwelled", weight: -1.0, type: "negative" },
];

export default function ScoringSimulator() {
  const [probs, setProbs] = useState<Record<string, number>>(
    Object.fromEntries(actions.map((a) => [a.key, a.type === "positive" ? 0.3 : 0.05]))
  );

  const score = actions.reduce((sum, a) => sum + a.weight * probs[a.key], 0);
  const maxScore = actions.filter(a => a.type === "positive").reduce((s, a) => s + a.weight, 0);
  const minScore = actions.filter(a => a.type === "negative").reduce((s, a) => s + a.weight, 0);
  const normalized = (score - minScore) / (maxScore - minScore);

  const scoreColor = score > 1 ? "#10b981" : score > 0 ? "#6366f1" : "#ef4444";

  return (
    <div className="my-8 rounded-xl border border-border overflow-hidden">
      <div className="bg-muted/30 border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">Interactive</p>
          <h3 className="text-sm font-bold text-foreground">Scoring Formula Simulator</h3>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-0.5">Final Score</p>
          <motion.p
            key={Math.round(score * 100)}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold font-mono"
            style={{ color: scoreColor }}
          >
            {score.toFixed(2)}
          </motion.p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: scoreColor, width: `${Math.max(2, normalized * 100)}%` }}
              animate={{ width: `${Math.max(2, normalized * 100)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Drag the sliders below to see how each predicted action probability affects the final score.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-3">Positive Signals</p>
            {actions
              .filter((a) => a.type === "positive")
              .map((action) => (
                <ActionSlider
                  key={action.key}
                  action={action}
                  value={probs[action.key]}
                  onChange={(v) => setProbs((p) => ({ ...p, [action.key]: v }))}
                />
              ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-3">Negative Signals</p>
            {actions
              .filter((a) => a.type === "negative")
              .map((action) => (
                <ActionSlider
                  key={action.key}
                  action={action}
                  value={probs[action.key]}
                  onChange={(v) => setProbs((p) => ({ ...p, [action.key]: v }))}
                />
              ))}
            <div className="mt-6 rounded-lg bg-muted/40 border border-border/50 px-4 py-3">
              <p className="text-xs font-mono text-muted-foreground">
                Score = Σ (weight<sub>i</sub> × P(action<sub>i</sub>))
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Current: {actions.map(a => `${a.weight > 0 ? '+' : ''}${a.weight}×${probs[a.key].toFixed(2)}`).join(' + ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionSlider({
  action,
  value,
  onChange,
}: {
  action: (typeof actions)[0];
  value: number;
  onChange: (v: number) => void;
}) {
  const contribution = action.weight * value;
  const isPositive = action.type === "positive";

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-foreground/80">{action.label}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">
            w={action.weight > 0 ? "+" : ""}{action.weight}
          </span>
          <span
            className="text-xs font-mono font-semibold w-12 text-right"
            style={{ color: isPositive ? "#10b981" : "#ef4444" }}
          >
            {contribution >= 0 ? "+" : ""}{contribution.toFixed(2)}
          </span>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none bg-muted cursor-pointer"
        style={{
          accentColor: isPositive ? "#10b981" : "#ef4444",
        }}
      />
      <div className="flex justify-between text-[10px] text-muted-foreground mt-0.5">
        <span>P=0</span>
        <span>P={value.toFixed(2)}</span>
        <span>P=1</span>
      </div>
    </div>
  );
}
