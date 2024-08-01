import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export default function Home() {
  return (
    <main>
      <div className="flex pt-8 bg-brand/25">
        <div className="mx-auto max-w-2xl">
          <div>
            <span className="sr-only">Manual</span>
            <Logo />
          </div>
          <div className="mt-28">
            <h2 className="font-medium tracking-tight text-8xl text-brand">
              Be good
              <br /> to yourself
            </h2>
            <p className="mt-5 text-lg text-brand">
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
            <Button size="lg" className="mt-9">
              Take the quiz
            </Button>
          </div>
        </div>
        <Image
          src="/images/hero-bg.png"
          alt="Hero Logo"
          className="flex-none mt-8 mr-8"
          width={596}
          height={697}
          priority
        />
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
