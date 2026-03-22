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
        <section className="w-full overflow-hidden py-10">

            <h2 className="text-center text-xl font-semibold mb-8">
                Languages and Tools:
            </h2>

            {/* Row 1 */}
            <div className="group relative overflow-hidden">
                <div className="flex animate-marquee gap-10 group-hover:[animation-play-state:paused]">
                    {row1.map((skill, i) => (
                        <div key={i} className="min-w-[60px]">
                            <img
                                src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
                                alt={skill}
                                width={50}
                                height={50}
                                referrerPolicy="no-referrer"
                                className="opacity-90 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="group relative overflow-hidden mt-6">
                <div className="flex animate-marquee-reverse gap-10 group-hover:[animation-play-state:paused]">
                    {row2Full.map((skill, i) => (
                        <div key={i} className="min-w-[60px]">
                            <img
                                src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
                                alt={skill}
                                width={50}
                                height={50}
                                referrerPolicy="no-referrer"
                                className="opacity-90 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
