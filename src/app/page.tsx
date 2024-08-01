import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-bold text-4xl">Manual</h1>
        <h2 className="font-medium text-2xl">Be good to yourself</h2>
        <p className="mt-4">
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
        <Button className="mt-4">Take the quiz</Button>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h3 className="font-medium text-xl">What we can help with</h3>
        <h4>Hair loss</h4>
        <h5 className="font-medium text-lg">
          Hair loss needn’t be irreversible. We can help!
        </h5>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
      </div>
    </main>
  );
}
