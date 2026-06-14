"use client"

const skills = [
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "tailwind",
    "py",
    "npm",
    "nodejs",
    "mysql",
    "postgres",
    "supabase",
    "firebase",
    "mongodb",
    "prisma",
    "sqlite",
    "java",
    "html",
    "git",
    "github",
    "vscode",
    "idea",
    "figma",
    "express"
]

export default function SkillsMarquee() {
    // Create two different sequences for variety
    const row1 = [...skills, ...skills]
    const row2 = [...skills].reverse()
    const row2Full = [...row2, ...row2]

    return (
        <section className="w-full overflow-hidden py-6 sm:py-10">

            <h2 className="text-center text-lg font-semibold mb-6 sm:text-xl sm:mb-8">
                Languages and Tools:
            </h2>

            {/* Row 1 */}
            <div className="group relative overflow-hidden">
                <div className="flex animate-marquee gap-6 sm:gap-10 group-hover:[animation-play-state:paused]">
                    {row1.map((skill, i) => (
                        <div key={i} className="min-w-[40px] sm:min-w-[60px]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                                src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
                                alt={skill}
                                width={50}
                                height={50}
                                referrerPolicy="no-referrer"
                                className="opacity-90 hover:opacity-100 transition w-[36px] h-[36px] sm:w-[50px] sm:h-[50px]"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="group relative overflow-hidden mt-6">
                <div className="flex animate-marquee-reverse gap-6 sm:gap-10 group-hover:[animation-play-state:paused]">
                    {row2Full.map((skill, i) => (
                        <div key={i} className="min-w-[40px] sm:min-w-[60px]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                                src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
                                alt={skill}
                                width={50}
                                height={50}
                                referrerPolicy="no-referrer"
                                className="opacity-90 hover:opacity-100 transition w-[36px] h-[36px] sm:w-[50px] sm:h-[50px]"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
