'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const featuredWebinars = [
        {
            title: 'Understanding Music Theory',
            description:
                'Dive deep into the fundamentals of music theory and enhance your musical skills.',
            slug: 'understanding-music-theory',
            isFeatured: true,
        },
        {
            title: 'The Art of Songwriting',
            description:
                'Learn the craft of songwriting from experienced musicians and songwriters.',
            slug: 'the-art-of-songwriting',
            isFeatured: true,
        },
        {
            title: 'Mastering Your Instrument',
            description:
                'Advanced techniques to master your musical instrument of choice.',
            slug: 'mastering-your-instrument',
            isFeatured: true,
        },
        {
            title: 'Music Production Essentials',
            description:
                'Get started with music production with this comprehensive overview.',
            slug: 'music-production-essentials',
            isFeatured: true,
        },
        {
            title: 'Live Performance Techniques',
            description:
                'Enhance your live performance skills with expert tips and strategies.',
            slug: 'live-performance-techniques',
            isFeatured: true,
        },
        {
            title: 'Digital Music Marketing',
            description:
                'Learn how to promote your music effectively in the digital age.',
            slug: 'digital-music-marketing',
            isFeatured: true,
        },
        {
            title: 'Sound Engineering Basics',
            description:
                'Learn the fundamentals of sound engineering for both studio and live settings.',
            slug: 'sound-engineering-basics',
            isFeatured: true,
        },
        {
            title: 'Music Licensing and Royalties',
            description:
                'Understand the complex world of music licensing and how royalties work for artists.',
            slug: 'music-licensing-and-royalties',
            isFeatured: true,
        },
        {
            title: 'The Future of AI in Music Production',
            description:
                'Explore how artificial intelligence is shaping the future of music creation and production.',
            slug: 'the-future-of-ai-in-music-production',
            isFeatured: true,
        },
    ];




    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
                </div>

                <div className="mt-10">
                    <HoverEffect
                        items={featuredWebinars.map((webinar) => (
                            {
                                key: webinar.slug, // Add a unique key
                                title: webinar.title,
                                description: webinar.description,
                                link: `/webinar/${webinar.slug}`, // Dynamically generate the link
                            }
                        ))}
                    />
                </div>

                <div className="mt-10 text-center">
                    <Link href="#"
                        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars