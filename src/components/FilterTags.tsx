import { AVAILABLE_TAGS } from "@/data/projects";

interface FilterTagsProps {
  activeTags: string[];
  onToggleTag: (tag: string) => void;
}

export function FilterTags({ activeTags, onToggleTag }: FilterTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {AVAILABLE_TAGS.map((tag) => {
        const isActive = activeTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onToggleTag(tag)}
            className={`px-3 py-1 text-sm border transition-colors duration-300 ${
              isActive
                ? "border-accent text-accent bg-accent/5"
                : "border-foreground/20 text-foreground/70 hover:border-accent hover:text-accent"
            } rounded-full`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
