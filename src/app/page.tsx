import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="font-bold text-4xl">Manual</h1>
      <h2 className="font-medium text-2xl">Be good to yourself</h2>
      <p className="mt-4">
        We’re working around the clock to bring you a holistic approach to your
        wellness. From top to bottom, inside and out.
      </p>
      <Button className="mt-4">Take the quiz</Button>
    </main>
  );
}
