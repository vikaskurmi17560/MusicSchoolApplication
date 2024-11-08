"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { ST } from "next/dist/shared/lib/utils";
const musicSchoolContent = [
    {
        title: 'Unleash Your Musical Potential with Tailored Lessons',
        description:
            'Explore music at your own pace with lessons designed to match your unique learning style. Our tailored approach empowers you to achieve personal growth and unlock new levels of creativity. At our music school, every student’s journey is supported with passion and precision.',
    },
    {
        title: 'Inspire and Grow with One-on-One Guidance',
        description:
            'Your music goals are our priority. Experience the benefits of one-on-one guidance that focuses on your strengths, needs, and aspirations. Together, we create a pathway that harmonizes your goals with expert instruction and encouragement.',
    },
    {
        title: 'Experience Music Like Never Before',
        description:
            'Dive into a vibrant learning environment where every session brings new discoveries. Our school fosters a passion for music that goes beyond technique, building confidence, skill, and a deep connection with your instrument and art form.',
    },
    {
        title: 'Real-Time Interaction & Support',
        description:
            'Benefit from live feedback that enhances your understanding of musical concepts as you practice. This interactive experience allows you to make adjustments instantly, creating a learning process that’s both dynamic and rewarding.',
    },
    {
        title: 'Innovative Curriculum for Modern Musicians',
        description:
            'Stay ahead with a curriculum that evolves alongside the latest trends and technologies in music education. Our programs equip you with relevant skills, ensuring you’re ready for every opportunity in today’s ever-changing music landscape.',
    },
    {
        title: 'Endless Learning Paths to Explore',
        description:
            'With a vast collection of resources and diverse courses, you’ll always find something to inspire your next step. Whether honing current skills or learning something new, our platform supports your continuous growth as a musician.',
    },
];

function WhyChooseUS() {
    return (
        <div className="no-scrollbar" >
            <StickyScroll content={musicSchoolContent} />
        </div>
    )
}
export default WhyChooseUS;