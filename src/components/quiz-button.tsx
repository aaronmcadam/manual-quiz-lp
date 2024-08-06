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
import { DialogClose } from "@radix-ui/react-dialog";
import { Quiz } from "./quiz";

export function QuizButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-9">
          Take the quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-brand-800">
            Is Manual Right For You?
          </DialogTitle>
          <DialogDescription className="text-brand-800">
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
