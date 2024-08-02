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
import { DialogClose } from "@radix-ui/react-dialog";
import { Quiz } from "./quiz";

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
        <Quiz />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
