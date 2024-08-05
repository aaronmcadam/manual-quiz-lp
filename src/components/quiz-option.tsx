import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Check, CircleCheck, X } from "lucide-react";

export type QuizOptionProps = {
  onClick: () => void;
  isSelected: boolean;
  display: string;
  value: string | boolean;
};

export const QuizOption = React.memo(
  function QuizOption({
    onClick,
    isSelected,
    display,
    value,
  }: QuizOptionProps) {
    const type = display === "Yes" || display === "No" ? "boolean" : "image";

    return (
      <Button
        onClick={onClick}
        variant="outline"
        className={cn(
          "mt-2 h-auto flex flex-col items-center justify-center relative",
          {
            "ring-2 ring-primary": isSelected,
            // TODO: only apply this after clicking the option because otherwise, when navigating back to a question,
            // the selected option will blink.
            "animate-blink": isSelected,
          },
        )}
      >
        {isSelected ? (
          <CircleCheck className="h-5 w-5 text-primary absolute top-2 right-2" />
        ) : null}
        {display === "Yes" ? (
          <div className="flex items-center h-[154px]">
            <Check className="flex-grow text-brand-600 h-16 w-16" />
          </div>
        ) : null}
        {display === "No" ? (
          <div className="flex items-center h-[154px]">
            <X className="text-brand-600 h-16 w-16" />
          </div>
        ) : null}
        <span
          className={cn({ "h-[154px]": type === "image" })}
          dangerouslySetInnerHTML={{ __html: display }}
        />
        {value}
      </Button>
    );
  },
  (prevProps, nextProps) => {
    const arePropsEqual =
      prevProps.isSelected === nextProps.isSelected &&
      prevProps.display === nextProps.display;

    return arePropsEqual;
  },
);
