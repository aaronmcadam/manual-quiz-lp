import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CircleCheck } from "lucide-react";

export type QuizOptionProps = {
  onClick: () => void;
  isSelected: boolean;
  display: string;
  value: string | boolean;
};

export const QuizOption = React.memo(function QuizOption({
  onClick,
  isSelected,
  display,
  value,
}: QuizOptionProps) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className={cn("mt-2 h-auto flex flex-col relative", {
        "ring-2 ring-primary": isSelected,
        // TODO: only apply this after clicking the option because otherwise, when navigating back to a question,
        // the selected option will blink.
        "animate-blink": isSelected,
      })}
    >
      {isSelected ? (
        <CircleCheck className="h-5 w-5 text-primary absolute top-2 right-2" />
      ) : null}
      <span dangerouslySetInnerHTML={{ __html: display }} />
      {value}
    </Button>
  );
});
