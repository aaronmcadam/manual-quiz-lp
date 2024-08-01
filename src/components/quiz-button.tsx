"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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

export function QuizButton() {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-9">
          Take the quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-full h-full">
        <DialogHeader>
          <DialogTitle>Is Manual Right For You?</DialogTitle>
          <DialogDescription>
            Help us provide you with the best possible care by answering a few
            quick questions.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {visitorIsRejected ? (
            <h3>You&apos;re not eligible for treatment</h3>
          ) : currentIndex === questions.length ? (
            <h3>You&apos;re eligible for treatment</h3>
          ) : currentQuestion ? (
            <div className="mt-8">
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
              <h3>{currentQuestion.question}</h3>
              <div className="flex gap-4">
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
                    className={cn(
                      "mt-2 h-auto",
                      chosenOptions[currentIndex] === i ? "border-primary" : "",
                    )}
                  >
                    <span dangerouslySetInnerHTML={{ __html: o.display }} />
                    {o.value}
                  </Button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <DialogFooter>
          {/* <Button variant="outline">Close</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
