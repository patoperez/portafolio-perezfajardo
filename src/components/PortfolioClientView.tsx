"use client";

import { useState, useMemo } from "react";
import { LeftSidebar } from "./LeftSidebar";
import { RightScrollArea } from "./RightScrollArea";
import { PROJECTS } from "@/data/projects";

export function PortfolioClientView() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const handleToggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(() => {
    if (activeTags.length === 0) return PROJECTS;
    
    // OR logic: show projects that have at least one of the active tags
    return PROJECTS.filter((project) =>
      project.tags.some((tag) => activeTags.includes(tag))
    );
  }, [activeTags]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Mobile Header (Hidden on Desktop) */}
      <div className="md:hidden p-8 border-b border-foreground/10 bg-background z-20 sticky top-0">
        <h1 className="font-serif text-3xl mb-2">Patricio Pérez Fajardo</h1>
        <p className="text-xs text-foreground/70 uppercase tracking-widest">
          Data Analysis &middot; BI &middot; Operations
        </p>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <LeftSidebar activeTags={activeTags} onToggleTag={handleToggleTag} />
      </div>

      {/* Main Content Area */}
      <RightScrollArea projects={filteredProjects} />
    </div>
  );
}
