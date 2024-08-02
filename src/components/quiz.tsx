"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CircleCheck } from "lucide-react";
import { QuizNavigation } from "./quiz-navigation";
import { QuizResult } from "./quiz-result";

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

export type QuizQuestion = {
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
            return {
              title: q.question,
              options: q.options,
              response: null,
              status: i === 0 ? "current" : "upcoming",
            };
          }),
        ),
      );
  }, []);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentQuestion = questions[currentIndex];

  const isRejected = questions.some((q) => q.response?.isRejection);
  const isAccepted = questions.every((q) => q.status === "complete");

  function handleOptionClick(option: Option) {
    // Update the current question with its response and "complete" status
    // and set the next question as "upcoming"
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, i) => {
        if (i === currentIndex) {
          return {
            ...q,
            response: option,
            status: "complete",
          };
        }

        return q;
      }),
    );

    // Add a small delay to show the selected option before moving to the next question
    setTimeout(() => {
      setQuestions((prevQuestions) =>
        prevQuestions.map((q, i) => {
          if (i === currentIndex + 1 && q.status === "upcoming") {
            return {
              ...q,
              status: "current",
            };
          }

          return q;
        }),
      );

      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);
  }

  // If the number of options is a multiple of 3, use 3 columns, otherwise 2
  const gridColCount = currentQuestion?.options.length % 3 === 0 ? 3 : 2;

  return (
    <div className="flex-grow m-auto max-w-2xl pt-24">
      {isRejected ? (
        <QuizResult status="rejected" />
      ) : isAccepted ? (
        <QuizResult status="accepted" />
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
          <div
            className={cn("grid gap-4 grid-cols-3 mt-8", {
              "grid-cols-2": gridColCount === 2,
            })}
          >
            {currentQuestion.options.map((o, i) => {
              const isOptionSelected = currentQuestion.response === o;

              return (
                <Button
                  key={i}
                  onClick={() => handleOptionClick(o)}
                  variant="outline"
                  className={cn("mt-2 h-auto flex flex-col relative", {
                    "ring-2 ring-primary": isOptionSelected,
                    // TODO: only apply this after clicking the option because otherwise, when navigating back to a question,
                    // the selected option will blink.
                    "animate-blink": isOptionSelected,
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
