import { QuizButton } from "@/components/quiz-button";
import { FacebookLogo } from "@/components/ui/logos/facebook-logo";
import { GoogleLogo } from "@/components/ui/logos/google-logo";
import { ManualLogo } from "@/components/ui/logos/manual-logo";
import { TwitterLogo } from "@/components/ui/logos/twitter-logo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="flex flex-col md:flex-row pt-8 px-6 lg:px-0 bg-brand/25">
        <div className="mx-auto max-w-2xl">
          <div>
            <span className="sr-only">Manual</span>
            <ManualLogo className="w-10 h-10" />
          </div>
          <div className="my-8 sm:mt-28">
            <h1 className="font-medium tracking-tight text-6xl sm:text-8xl text-brand">
              Be good
              <br /> to yourself
            </h1>
            <p className="mt-5 text-lg text-brand">
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
            <QuizButton />
          </div>
        </div>
        {/* TODO: Include the hero image on smaller screens, possibly setting it as a bg image instead of an inline element */}
        <Image
          src="/images/hero-bg.png"
          alt="Hero Image"
          className="hidden lg:inline flex-none mt-8 mr-8"
          width={596}
          height={697}
          priority
        />
      </div>

      {/* Treatments */}
      <div className="flex flex-col items-center pt-10 sm:pt-16 pb-24 px-6 lg:px-0">
        <h2 className="font-medium text-center text-brand tracking-tight text-3xl sm:text-4xl">
          What we can help with
        </h2>
        <div className="mt-8 sm:mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:relative">
            <Image
              src="/images/hair-loss.png"
              className="z-10"
              alt="Hair loss"
              width={370}
              height={445}
              priority
            />
            <span className="hidden sm:inline select-none text-brand/5 text-[450px] leading-none sm:absolute sm:left-[30%] sm:z-0">
              01
            </span>
            <div className="sm:pl-32 sm:z-10">
              <div className="flex flex-col max-w-80 mt-4 sm:mt-0">
                <h3 className="font-bold text-xs text-brand/75 uppercase tracking-wider">
                  Hair loss
                </h3>
                <h4 className="font-medium text-xl sm:text-2xl text-brand mt-2">
                  Hair loss needn’t be irreversible. We can help!
                </h4>
                <p className="mt-5 text-brand">
                  We’re working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:relative mt-20 sm:mt-44">
            <span className="hidden sm:inline select-none text-brand/5 text-[450px] leading-none sm:absolute sm:left-[30%] sm:z-0">
              02
            </span>
            <div className="sm:pl-32 sm:z-10">
              <div className="flex flex-col max-w-80 mt-4 sm:mt-0">
                <h3 className="font-bold text-xs text-brand/75 uppercase tracking-wider">
                  Erectile dysfunction
                </h3>
                <h4 className="font-medium text-xl sm:text-2xl text-brand mt-2">
                  Erections can be a tricky thing. But no need to feel down!
                </h4>
                <p className="mt-5 text-brand">
                  We’re working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out.
                </p>
              </div>
            </div>
            <Image
              src="/images/erectile-dysfunction.png"
              className="z-10"
              alt="Erectile dysfunction"
              width={370}
              height={445}
              priority
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

const footerNavigation = {
  product: [
    { name: "Popular", href: "#" },
    { name: "Trending", href: "#" },
    { name: "Guided", href: "#" },
    { name: "Products", href: "#" },
  ],
  company: [
    { name: "Press", href: "#" },
    { name: "Mission", href: "#" },
    { name: "Strategy", href: "#" },
    { name: "About", href: "#" },
  ],
  info: [
    { name: "Support", href: "#" },
    { name: "Customer Service", href: "#" },
    { name: "Get started", href: "#" },
  ],
};

function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-brand/10">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <ManualLogo className="w-[52px] h-[52px] sm:w-[74px] sm:h-[74px]" />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold leading-6 text-brand">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-5">
                  {footerNavigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-brand hover:text-brand/70"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs uppercase tracking-wider font-bold leading-6 text-brand">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-5">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-brand hover:text-brand/70"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-bold leading-6 text-brand">
                  Info
                </h3>
                <ul role="list" className="mt-6 space-y-5">
                  {footerNavigation.info.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-brand hover:text-brand/70"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs uppercase tracking-wider font-bold leading-6 text-brand">
                  Follow us
                </h3>
                <ul role="list" className="mt-6 flex gap-5">
                  <li>
                    <a href="#" className="leading-6 ">
                      <FacebookLogo className="text-primary hover:text-primary/70" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-6 ">
                      <GoogleLogo className="text-primary hover:text-primary/70" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="leading-6 ">
                      <TwitterLogo className="text-primary hover:text-primary/70" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-brand/10 border-t">
        <p className="text-center text-brand p-6">
          &copy; 2024 Manual. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
