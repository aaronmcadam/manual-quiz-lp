import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { QuizQuestion } from "./quiz";

type QuizNavigationProps = {
  questions: QuizQuestion[];
  onButtonClick: (questionIndex: number) => void;
};

export function QuizNavigation({
  questions,
  onButtonClick,
}: QuizNavigationProps) {
  return (
    <nav aria-label="Progress" className="flex flex-col items-center">
      <ol role="list" className="flex items-center">
        {questions.map((question, questionIndex) => (
          <li
            key={question.title}
            className={cn(
              questionIndex !== questions.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative",
            )}
          >
            {question.status === "complete" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-brand/50" />
                </div>
                <button
                  onClick={() => onButtonClick(questionIndex)}
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 hover:bg-brand-300"
                >
                  <CheckIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-white"
                  />
                  <span className="sr-only">{`Question ${questionIndex + 1}`}</span>
                </button>
              </>
            ) : question.status === "current" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <button
                  onClick={() => onButtonClick(questionIndex)}
                  aria-current="step"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-600 bg-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-brand-600"
                  />
                  <span className="sr-only">{`Question ${questionIndex + 1}`}</span>
                </button>
              </>
            ) : (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <button
                  disabled={true}
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-transparent"
                  />
                  <span className="sr-only">{`Question ${questionIndex + 1}`}</span>
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
