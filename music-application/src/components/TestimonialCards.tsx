"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
        quote:
            'Enrolling here was the best decision for my music journey. The guidance helped me refine my skills and bring my unique style to life!',
        name: 'Jordan Smith',
        title: 'Guitar Student',
    },
    {
        quote:
            "I've never felt so supported and encouraged. This school helped me grow as a pianist and performer with a truly holistic approach to music.",
        name: 'Lily Brown',
        title: 'Piano Student',
    },
    {
        quote:
            "Thanks to the personalized coaching, my vocal abilities have reached new heights. I’m so grateful for the individual attention I received.",
        name: 'Carlos Rivera',
        title: 'Vocal Student',
    },
    {
        quote:
            'Finding the perfect violin instructor was a challenge until I joined this school. My teacher understands exactly where I want to go with my music.',
        name: 'Sophia Green',
        title: 'Violin Student',
    },
    {
        quote:
            'The production classes here completely changed how I think about music creation. A must for anyone interested in producing their own music!',
        name: 'Daniel Kim',
        title: 'Music Production Student',
    },
    {
        quote:
            'The collaborative environment here is incredible. Not only did I improve my skills, but I also learned the importance of working with other musicians.',
        name: 'Olivia Harris',
        title: 'Drum Student',
    },
    {
        quote:
            "This school gave me the confidence to pursue music professionally. The practical knowledge and skills I gained here are invaluable.",
        name: 'Ethan Davis',
        title: 'Music Business Student',
    },
];

function TestimonialCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}
export default TestimonialCards