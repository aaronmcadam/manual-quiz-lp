import { CheckCircle } from "lucide-react";
import { CircleX } from "lucide-react";

export type QuizResultProps = {
  status: "accepted" | "rejected";
};

export function QuizResult({ status }: QuizResultProps) {
  return (
    <div>
      <h2 className="font-medium text-2xl text-center mt-16">
        Finished! Your result is...
      </h2>
      <div className="mt-16">
        {status === "accepted" ? <SuccessAlert /> : <ErrorAlert />}
      </div>
    </div>
  );
}

function SuccessAlert() {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircle aria-hidden="true" className="h-5 w-5 text-green-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">
            You’re eligible for treatment
          </h3>
          <div className="mt-2 text-sm text-green-700">
            <p>
              Great news! We have the perfect treatment for your hair loss.
              Proceed to{" "}
              <a href="http://www.manual.co" className="underline">
                www.manual.co
              </a>
              , and prepare to say hello to your new hair!
            </p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <a
                href="http://www.manual.co"
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Visit manual.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorAlert() {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CircleX aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Sorry, you’re not eligible for treatment
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>
              Unfortunately, we are unable to prescribe this medication for you.
              This is because finasteride can alter the PSA levels, which may be
              used to monitor for cancer. You should discuss this further with
              your GP or specialist if you would still like this medication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
