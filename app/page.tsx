import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import PricingCards from "@/components/pricing-cards";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS, REVIEWS } from "@/utils/constants";
import { ArrowRightIcon, CreditCardIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <MaxWidthWrapper className="pt-32">
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-slate-50">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_100%)_inset] transition-colors duration-200 border border-slate-200 mb-8">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-white transition-colors duration-200 group-hover:bg-slate-50" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-indigo-500/20"></span>
              <span className="z-10 py-0.5 text-sm text-slate-700 flex items-center justify-center gap-1 font-medium">
                ✨ A top-notch template designed for success
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </span>
            </button>
            <h1 className="text-slate-900 text-center py-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full">
              Premium{" "}
              <span className="text-transparent mx-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text inline-block">
                saas
              </span>
              template to kickstart your project
            </h1>
            <p className="mb-12 text-lg tracking-tight text-slate-600 md:text-xl text-balance max-w-2xl mx-auto">
              Effortlessly streamline your link management with Faria.
              <br className="hidden md:block" />
              <span className="hidden md:block">
                Shorten, track, and organize all your links in one place.
              </span>
            </p>
            <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
              <Button asChild size="lg" className="rounded-full shadow-lg shadow-indigo-500/25">
                <Link href={"/signup"} className="flex items-center">
                  Start creating for free
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimationContainer>

          <AnimationContainer
            delay={0.2}
            className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
          >
            <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
            <div className="-m-2 rounded-[2.5rem] p-2 ring-1 ring-inset ring-slate-200 lg:-m-4 lg:rounded-[3rem] bg-white/50 backdrop-blur-3xl shadow-2xl">
              <BorderBeam size={250} duration={12} delay={9} />
              <div className="w-full h-[400px] md:h-[600px] bg-slate-100 rounded-[2rem] overflow-hidden relative">
                <Image src="https://picsum.photos/seed/dashboard/1920/1080" alt="Dashboard" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-slate-50 z-40"></div>
              <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-slate-50 z-50"></div>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>

      {/* Companies Section */}
      <MaxWidthWrapper>
        <AnimationContainer delay={0.4}>
          <div className="py-14">
            <div className="mx-auto px-4 md:px-8">
              <h2 className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider">
                Trusted by the best in the industry
              </h2>
              <div className="mt-8">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {COMPANIES.map((company) => (
                    <li key={company.name}>
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={120}
                        height={40}
                        quality={100}
                        className="w-28 h-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Features Section */}
      <MaxWidthWrapper className="pt-20">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Features" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-bold text-slate-900 mt-6">
              Manage Links Like a Pro
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-slate-600 max-w-lg">
              Faria is a powerful link management tool that helps you shorten,
              track, and organize all your links in one place.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <BentoGrid className="py-8">
            {CARDS.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Process Section */}
      <MaxWidthWrapper className="py-20">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="The Process" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-bold text-slate-900 mt-6">
              Effortless link management in 3 steps
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-slate-600 max-w-lg">
              Follow these simple steps to optimize, organize, and share your
              links with ease.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-6 md:gap-8">
          {PROCESS.map((process, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                    <span className="text-indigo-600 font-bold text-xl">{id + 1}</span>
                  </div>
                  <div className="flex flex-col relative items-start">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {process.title}
                    </h3>
                    <p className="mt-3 text-base text-slate-600">
                      {process.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Pricing Section */}
      <MaxWidthWrapper className="py-20">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Simple Pricing" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-bold text-slate-900 mt-6">
              Choose a plan that works for you
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-slate-600 max-w-lg">
              Get started with Faria today and enjoy more features with our pro
              plans.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <PricingCards />
        </AnimationContainer>
        <AnimationContainer delay={0.3}>
          <div className="flex flex-wrap items-start md:items-center justify-center lg:justify-evenly gap-6 mt-12 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <CreditCardIcon className="w-5 h-5 text-indigo-500" />
              <span className="text-slate-600 font-medium text-sm">
                No credit card required
              </span>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Reviews Section */}
      <MaxWidthWrapper className="py-20">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Our Customers" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-bold text-slate-900 mt-6">
              What our users are saying
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-slate-600 max-w-lg">
              Here&apos;s what some of our users have to say about Faria.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-6 md:gap-8 py-10">
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(0, 1).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index} className="w-full">
                <MagicCard key={index} className="md:p-0 w-full">
                  <Card className="flex flex-col w-full border-none h-min shadow-none">
                    <CardHeader className="space-y-0 flex flex-row gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                        <Image src={`https://picsum.photos/seed/${review.name}/100/100`} alt={review.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-slate-900">
                          {review.name}
                        </CardTitle>
                        <CardDescription className="text-slate-500">{review.username}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-slate-700 leading-relaxed">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(1, 2).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index} className="w-full">
                <MagicCard key={index} className="md:p-0 w-full">
                  <Card className="flex flex-col w-full border-none h-min shadow-none">
                    <CardHeader className="space-y-0 flex flex-row gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                        <Image src={`https://picsum.photos/seed/${review.name}/100/100`} alt={review.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-slate-900">
                          {review.name}
                        </CardTitle>
                        <CardDescription className="text-slate-500">{review.username}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-slate-700 leading-relaxed">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(2, 3).map((review, index) => (
              <AnimationContainer delay={0.2 * index} key={index} className="w-full">
                <MagicCard key={index} className="md:p-0 w-full">
                  <Card className="flex flex-col w-full border-none h-min shadow-none">
                    <CardHeader className="space-y-0 flex flex-row gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                        <Image src={`https://picsum.photos/seed/${review.name}/100/100`} alt={review.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-slate-900">
                          {review.name}
                        </CardTitle>
                        <CardDescription className="text-slate-500">{review.username}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-slate-700 leading-relaxed">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide p-0">
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="bg-gradient-to-b from-white to-slate-300 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-bold tracking-tight text-transparent mt-8">
                Step into the future of link management
              </h2>
              <p className="text-slate-400 mt-6 max-w-md mx-auto text-lg">
                Experience the cutting-edge solution that transforms how you
                handle your links. Elevate your online presence with our
                next-gen platform.
              </p>
              <div className="mt-10">
                <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold text-base px-8">
                  Get started for free
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
      </MaxWidthWrapper>
      
      <Footer />
    </div>
  );
};

export default HomePage;
