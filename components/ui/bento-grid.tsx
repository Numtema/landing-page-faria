import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, CalendarIcon, Link2Icon, SearchIcon, WaypointsIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import Image from "next/image";

export const CARDS = [
    {
        Icon: Link2Icon,
        name: "Shorten links",
        description: "Create short links that are easy to remember and share.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute right-0 top-10 w-[80%] origin-top rounded-l-[2rem] border border-border bg-slate-50 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 p-6">
                <div className="space-y-2">
                    <div className="h-4 w-1/2 bg-slate-200 rounded-full"></div>
                    <div className="h-10 w-full bg-white border border-slate-200 rounded-xl"></div>
                    <div className="h-10 w-1/3 bg-indigo-600 rounded-xl mt-2"></div>
                </div>
            </div>
        ),
    },
    {
        Icon: SearchIcon,
        name: "Search your links",
        description: "Quickly find the links you need with AI-powered search.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border bg-white rounded-[2rem] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:-translate-x-10 p-4 shadow-sm">
                <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-xl flex items-center px-4 mb-4">
                    <SearchIcon className="w-5 h-5 text-slate-400 mr-2" />
                    <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-10 w-full bg-slate-50 rounded-xl"></div>
                    <div className="h-10 w-full bg-slate-50 rounded-xl"></div>
                    <div className="h-10 w-full bg-slate-50 rounded-xl"></div>
                </div>
            </div>
        ),
    },
    {
        Icon: WaypointsIcon,
        name: "Connect your apps",
        description: "Integrate with your favorite apps and services.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <div className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 flex items-center justify-center">
                 <Image src="https://picsum.photos/seed/integrations/600/300" alt="Integrations" width={600} height={300} className="rounded-[2rem] opacity-80" />
            </div>
        ),
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Keep track of your links with our calendar view.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute right-0 top-10 origin-top rounded-l-[2rem] border border-border bg-white transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105 p-4 w-[80%] shadow-sm">
                <div className="grid grid-cols-7 gap-2 mb-2">
                    {[...Array(7)].map((_, i) => <div key={i} className="h-6 w-full bg-slate-100 rounded-md"></div>)}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {[...Array(28)].map((_, i) => <div key={i} className={`h-8 w-full rounded-md ${i === 12 ? 'bg-indigo-600' : 'bg-slate-50'}`}></div>)}
                </div>
            </div>
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-6",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-slate-200 overflow-hidden rounded-[2.5rem]",
            "bg-white shadow-sm hover:shadow-md transition-shadow",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-8 transition-all duration-300 group-hover:-translate-y-10 bg-gradient-to-t from-white via-white to-transparent pt-20">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-2 origin-left transition-all duration-300 ease-in-out group-hover:scale-75">
                <Icon className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">
                {name}
            </h3>
            <p className="max-w-lg text-slate-600">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer rounded-full" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
    </div>
);

export { BentoCard, BentoGrid };
