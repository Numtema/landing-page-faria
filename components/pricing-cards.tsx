"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PLANS } from "@/utils/constants";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';
import { motion } from "framer-motion";

const PricingCards = () => {
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex p-1 bg-slate-100 rounded-full mb-12">
                <button
                    onClick={() => setActiveTab("monthly")}
                    className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all",
                        activeTab === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    )}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setActiveTab("yearly")}
                    className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all",
                        activeTab === "yearly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                    )}
                >
                    Yearly
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {PLANS.map((plan) => (
                    <Card
                        key={plan.name}
                        className={cn(
                            "flex flex-col w-full border-slate-200 rounded-[2.5rem] relative overflow-hidden",
                            plan.name === "Pro" && "border-2 border-indigo-500 shadow-xl"
                        )}
                    >
                        {plan.name === "Pro" && (
                            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                        )}
                        <CardHeader className={cn(
                            "border-b border-slate-100",
                            plan.name === "Pro" ? "bg-indigo-50/50" : "bg-slate-50/50"
                        )}>
                            <CardTitle className={cn(plan.name !== "Pro" && "text-slate-700", "text-xl font-semibold")}>
                                {plan.name}
                            </CardTitle>
                            <CardDescription className="text-slate-500">
                                {plan.info}
                            </CardDescription>
                            <h5 className="text-4xl font-bold mt-4 text-slate-900">
                                ${activeTab === "monthly" ? plan.price.monthly : plan.price.yearly}
                                <span className="text-lg text-slate-500 font-medium">
                                    {plan.name !== "Free" ? (activeTab === "monthly" ? "/mo" : "/yr") : ""}
                                </span>
                            </h5>
                        </CardHeader>
                        <CardContent className="pt-8 space-y-4">
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircleIcon className="text-indigo-500 w-5 h-5 shrink-0" />
                                    <p className="text-slate-700 text-sm">
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter className="w-full mt-auto pt-8">
                            <Button
                                asChild
                                variant={plan.name === "Pro" ? "purple" : "outline"}
                                className="w-full"
                            >
                                <Link href={plan.btn.href}>
                                    {plan.btn.text}
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default PricingCards;
