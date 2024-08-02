"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CheckIcon, CircleCheck } from "lucide-react";

type Option = {
  display: string;
  value: string;
  isRejection: boolean;
};

type Question = {
  question: string;
  type: string;
  options: Option[];
};

export function Quiz() {
  const [questions, setQuestions] = React.useState<Question[]>([]);

  // TODO: Perf: we may want to somehow preload the display HTML because
  // we're seeing some flicker when navigating between steps
  React.useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentQuestion = questions[currentIndex];

  // TODO: we may want to consolidate these state values into
  // an object we can use to read the overall quiz state
  // make this take account of any amount of questions
  // for now, we'll hard code the amount of questions
  const [chosenOptions, setChosenOptions] = React.useState<
    Record<number, number | null>
  >({
    0: null,
    1: null,
    2: null,
  });

  const visitorIsRejected = Object.values(chosenOptions).some((o) => o === -1);

  return (
    <div className="flex-grow m-auto max-w-2xl pt-24">
      {visitorIsRejected ? (
        <h3>You&apos;re not eligible for treatment</h3>
      ) : currentIndex === questions.length ? (
        <h3>You&apos;re eligible for treatment</h3>
      ) : currentQuestion ? (
        <div>
          <QuizNavigation />
          <div className="flex gap-4">
            {questions.map((_q, i) => (
              <Button
                key={i}
                className={currentIndex === i ? "border-primary" : ""}
                onClick={() => {
                  setCurrentIndex(i);
                }}
                disabled={chosenOptions[i] === null}
                variant="outline"
              >{`Step ${i + 1}`}</Button>
            ))}
          </div>
          <h3 className="font-medium text-2xl text-center mt-16">
            {currentQuestion.question}
          </h3>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {currentQuestion.options.map((o, i) => (
              <Button
                key={o.value}
                onClick={() => {
                  setCurrentIndex(currentIndex + 1);
                  setChosenOptions((currentChosenOptions) => {
                    return {
                      ...currentChosenOptions,
                      [currentIndex]: o.isRejection ? -1 : i,
                    };
                  });
                }}
                variant="outline"
                className={cn("mt-2 h-auto flex flex-col relative", {
                  "ring-2 ring-primary": chosenOptions[currentIndex] === i,
                })}
              >
                {chosenOptions[currentIndex] === i ? (
                  <CircleCheck className="h-5 w-5 text-primary absolute top-2 right-2" />
                ) : null}
                <span dangerouslySetInnerHTML={{ __html: o.display }} />
                {o.value}
              </Button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

// const steps = [
//   { name: "Step 1", href: "#", status: "complete" },
//   { name: "Step 2", href: "#", status: "complete" },
//   { name: "Step 3", href: "#", status: "current" },
//   { name: "Step 4", href: "#", status: "upcoming" },
//   { name: "Step 5", href: "#", status: "upcoming" },
// ];

const steps = [
  { name: "Step 1", href: "#", status: "complete" },
  { name: "Step 2", href: "#", status: "current" },
  { name: "Step 3", href: "#", status: "upcoming" },
];

export function QuizNavigation() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIndex) => (
          <li
            key={step.name}
            className={cn(
              stepIndex !== steps.length - 1 ? "pr-8 sm:pr-20" : "",
              "relative",
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-brand/50" />
                </div>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 hover:bg-brand-300"
                >
                  <CheckIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-white"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === "current" ? (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  aria-current="step"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-600 bg-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-brand-600"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
