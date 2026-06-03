import { FilterTags } from "./FilterTags";
import { Mail } from "lucide-react";

interface LeftSidebarProps {
  activeTags: string[];
  onToggleTag: (tag: string) => void;
}

export function LeftSidebar({ activeTags, onToggleTag }: LeftSidebarProps) {
  return (
    <aside className="fixed top-0 left-0 w-[30%] h-screen p-[60px] flex flex-col justify-between z-10 border-r border-foreground/5">
      <div className="space-y-4">
        <h1 className="font-serif text-5xl tracking-tight leading-none text-foreground">
          Patricio Pérez<br />Fajardo
        </h1>
        <p className="text-sm font-medium text-foreground/70 uppercase tracking-widest mt-4 max-w-[80%] leading-relaxed">
          Data Analysis &middot; Business Intelligence &middot; Operations
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center py-12">
        <h3 className="text-xs font-semibold tracking-wider text-foreground/40 mb-6 uppercase">
          Filter Projects
        </h3>
        <FilterTags activeTags={activeTags} onToggleTag={onToggleTag} />
      </div>

      <div className="space-y-6">
        <a 
          href="mailto:patricio@perezfajardo.com" 
          className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent transition-colors"
        >
          <Mail className="w-4 h-4" />
          patricio@perezfajardo.com
        </a>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-foreground/50 hover:text-accent transition-colors tracking-wide" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" className="text-foreground/50 hover:text-accent transition-colors tracking-wide" aria-label="GitHub">
            GitHub
          </a>
        </div>
      </div>
    </aside>
  );
}
