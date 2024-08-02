"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CheckIcon, CircleCheck } from "lucide-react";

type Option = {
  display: string;
  value: string | boolean;
  isRejection: boolean;
};

type Question = {
  question: string;
  type: string;
  options: Option[];
};

type QuizQuestion = {
  title: string;
  options: Option[];
  response: Option | null;
  status: "complete" | "current" | "upcoming";
};

export function Quiz() {
  const [questions, setQuestions] = React.useState<QuizQuestion[]>([]);

  // TODO: Perf: we may want to somehow preload the display HTML because
  // we're seeing some flicker when navigating between questions
  React.useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data: Question[]) =>
        setQuestions(
          // Map the fetched data to the view model state
          // Set the first question as "current" and the rest as "upcoming"
          data.map((q, i) => {
            if (i === 0) {
              return {
                title: q.question,
                options: q.options,
                response: null,
                status: "current",
              };
            }

            return {
              title: q.question,
              options: q.options,
              response: null,
              status: "upcoming",
            };
          }),
        ),
      );
  }, []);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentQuestion = questions[currentIndex];

  const visitorIsRejected = questions.some((q) => q.response?.isRejection);

  function handleOptionClick(option: Option) {
    setQuestions((currentQuestions) => {
      // Update the current question with its response and "complete" status
      // and set the next question as "upcoming"
      const updatedQuestions: QuizQuestion[] = currentQuestions.map((q, i) => {
        if (i === currentIndex) {
          return {
            ...q,
            response: option,
            status: "complete",
          };
        } else if (i === currentIndex + 1) {
          return {
            ...q,
            status: "current",
          };
        }
        return q;
      });

      return updatedQuestions;
    });
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="flex-grow m-auto max-w-2xl pt-24">
      {visitorIsRejected ? (
        <h3>You&apos;re not eligible for treatment</h3>
      ) : currentIndex === questions.length ? (
        <h3>You&apos;re eligible for treatment</h3>
      ) : currentQuestion ? (
        <div>
          <QuizNavigation
            questions={questions}
            onButtonClick={(questionIndex) => {
              setCurrentIndex(questionIndex);
            }}
          />
          <h3 className="font-medium text-2xl text-center mt-16">
            {currentQuestion.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {currentQuestion.options.map((o, i) => {
              const isOptionSelected = currentQuestion.response === o;

              return (
                <Button
                  key={i}
                  onClick={() => handleOptionClick(o)}
                  variant="outline"
                  className={cn("mt-2 h-auto flex flex-col relative", {
                    "ring-2 ring-primary": isOptionSelected,
                  })}
                >
                  {isOptionSelected ? (
                    <CircleCheck className="h-5 w-5 text-primary absolute top-2 right-2" />
                  ) : null}
                  <span dangerouslySetInnerHTML={{ __html: o.display }} />
                  {o.value}
                </Button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

type QuizNavigationProps = {
  questions: QuizQuestion[];
  onButtonClick: (questionIndex: number) => void;
};

export function QuizNavigation({
  questions,
  // This prop raises a warning from Next.js in tsc.
  // We can safely ignore it for now as we're not trying to use a server component in this file.
  // @see https://github.com/vercel/next.js/discussions/46795
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
