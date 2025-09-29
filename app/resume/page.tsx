'use client';
import { Link } from '@heroui/react'
import resumeData from '@/config/data/resume.json'
import { getCommonIcon, getSocialIcon } from '@/lib/icons'
import { formatDateToShort, formatDateRange, formatDateToDetailed } from '@/lib/date-utils'

export default function Resume() {
    const { basics, skills, work, projects, education, languages, publications, awards } = resumeData

    return (
        <div className="max-w-6xl mx-auto px-8 py-10 print:py-0">
            <div className="grid grid-cols-1 md:grid-cols-10">
                {/* 左侧栏 */}
                <div className="md:col-span-2">
                    <div className="text-center lg:text-left">
                        {/* 姓名和职位 */}
                        <h1 className="text-3xl text-black mb-1">
                            {basics.name}
                        </h1>
                        <h2 className="text-md font-light text-text-primary opacity-60 mb-1">
                            {basics.label}
                        </h2>

                        {/* 联系信息 */}
                        <Link href={`mailto:${basics.email}`} className="text-xs text-text-primary underline underline-offset-4 decoration-dashed decoration-1 mb-5">{basics.email}</Link>

                        {/* 社交链接 */}
                        <div className="flex items-center justify-center gap-3 md:justify-start mb-8">
                            {basics.profiles.map((profile, index) => {
                                const Icon = getSocialIcon(profile.network, "w-3.5 h-3.5");
                                return Icon ? <Link
                                    key={index}
                                    href={profile.url}
                                    isExternal={!['portfolio', 'github'].includes(profile.network.toLowerCase())}
                                    className="text-text-primary opacity-60 hover:opacity-100 transition-opacity"
                                >
                                    {Icon}
                                </Link> : ''
                            })}
                        </div>
                    </div>
                </div>

                {/* 右侧内容 */}
                <div className="md:col-span-6">
                    {/* 关于我 */}
                    <section className="mb-8 md:mb-12">
                        <h2 className="text-md mb-5 tracking-wide">
                            <span className="font-bold bg-black text-white pl-1 pr-3 py-[1px]">About</span>
                        </h2>
                        <div className="md:pl-4 print:pl-4 text-text-primary opacity-90 leading-relaxed space-y-4">
                            {basics.summary.split('\n\n').map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 print:grid-cols-5 mb-8 md:mb-12">
                        {/* 开源项目 */}
                        <section className="print:col-span-2 mb-8 md:mb-12">
                            <h2 className="text-md mb-7 tracking-wide">
                                <span className="font-bold bg-black text-white pl-1 pr-3 py-[1px]">Projects</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-4 print:pl-4">
                                {projects.map((project, index) => (
                                    <div key={index} className="text-text-primary">
                                        <h3 className="flex items-center gap-2 text-md font-semibold text-text-primary mb-2">
                                            <span className="mr-2">{project.displayName}</span>
                                            {project.githubUrl && (
                                                <Link href={project.githubUrl} isExternal className="text-md text-text-primary opacity-80 hover:opacity-100">
                                                    {getSocialIcon('github')}
                                                </Link>
                                            )}
                                            {project.website && (
                                                <Link href={project.website} isExternal className="text-mdtext-text-primary opacity-80 hover:opacity-100">
                                                    {getCommonIcon('arrowUpRight')}
                                                </Link>
                                            )}

                                        </h3>
                                        <p className="opacity-80 mb-2 text-sm">
                                            {project.summary}
                                        </p>
                                        <div className="flex justify-start items-start opacity-80 text-xs">
                                            <span className="font-medium leading-relaxed">Skills：</span>
                                            <span className="leading-relaxed">
                                                {project.skills.join('、')}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="flex items-center justify-start mt-8 md:pl-4">
                                <Link href="/projects" isExternal className="text-text-primary opacity-60 hover:opacity-80 underline underline-offset-5 decoration-dashed decoration-1 decoration-gray-400">
                                    More Projects &nbsp;
                                    {getCommonIcon('arrowUpRight')}
                                </Link>
                            </p>

                        </section>

                        {/* 工作经历 */}
                        <section className="print:col-span-3 print:pl-8">
                            <h2 className="text-md mb-7 tracking-wide">
                                <span className="font-bold bg-black text-white pl-1 pr-3 py-[1px]">Work Experience</span>
                            </h2>
                            <div className="space-y-8 md:pl-4 print:pl-4">
                                {work.map((job, index) => (
                                    <div key={index} className="text-text-primary text-md">
                                        <div className="flex flex-col mb-2">
                                            <h3 className="flex flex-wrap items-center gap-3 text-md font-bold mb-2">
                                                <Link href={job.website} isExternal className="text-md text-text-primary hover:text-black hover:opacity-100 underline underline-offset-4 decoration-dashed decoration-1">{job.company}</Link>
                                                <span className="font-light">{job.position}</span>
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-2 text-sm opacity-80">
                                                <span>
                                                    {formatDateToShort(job.startDate)} -  {
                                                        job.isCurrentRole || !job.endDate ? 'Present' : formatDateToShort(job.endDate)
                                                    }
                                                </span>
                                                <span>|</span>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                        {job.summary && (
                                            <p className="font-semibold italic mb-3">
                                                {job.summary}
                                            </p>
                                        )}
                                        {job.highlights && (
                                            <ul className="space-y-1 ml-4">
                                                {job.highlights.map((highlight, hIndex) => (
                                                    <li key={hIndex} className="flex items-top gap-2">
                                                        <span className="mt-[9px] w-1.5 h-1.5 border border-black rounded-full flex-shrink-0"></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* 技术栈 */}
                    <section className="mb-8 md:mb-12">
                        <h2 className="text-md mb-5 tracking-wide">
                            <span className="font-bold bg-black text-white pl-1 pr-3 py-[1px]">Stacks</span>
                        </h2>
                        <div className="md:pl-4 space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="grid grid-cols-[80px_1fr] gap-5 items-baseline text-md text-text-primary mb-2">
                                        <span className="text-right font-semibold leading-relaxed whitespace-nowrap">{skill.name}</span>
                                        <p className="font-light leading-relaxed">
                                            {
                                                skill.keywords.map((name, index) => {
                                                    return (
                                                        <span className="pr-2" key={index}>
                                                            {name}{index < skill.keywords.length - 1 ? '、' : ''}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 教育背景 */}
                    <section className="mb-8 md:mb-12">
                        <h2 className="text-md mb-5 tracking-wide">
                            <span className="font-bold bg-black text-white pl-1 pr-3 py-[1px]">Education</span>
                        </h2>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-4 md:pl-4 print:pl-4 text-text-primary">
                                <div className="flex flex-wrap items-center gap-1 text-text-primary text-md mb-1">
                                    <span className="font-semibold">
                                        {edu.area}, {edu.studyType},
                                    </span>
                                    <span className="font-light">
                                        {edu.institution}
                                    </span>
                                </div>
                                <div className="text-sm opacity-80">
                                    {formatDateRange(edu.startDate, edu.endDate)}
                                </div>
                            </div>
                        ))}
                    </section>
                    {/* 语言 */}
                    <section className="mb-8 md:mb-12">
                        <h2 className="text-md mb-5 tracking-wide">
                            <span className="font-bold bg-black text-white pl-1 pr-3 py-[1px]">Languages</span>
                        </h2>
                        <div className="flex flex-wrap items-center gap-1 text-text-primary md:pl-4 print:pl-4">
                            {languages.map((language, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="font-semibold">{language.language}</span>
                                    <span className="font-light ml-1">({language.fluency})</span>
                                    {index !== languages.length - 1 && <span className="ml-1">,</span>}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 切换入口 */}
                    <section className="grid items-center justify-center">
                        <div className="text-center no-print text-sm mt-2 mb-2">
                            <Link href="/resume.pdf" className="text-text-primary opacity-80 hover:opacity-100 underline underline-offset-4 decoration-dashed decoration-1" isExternal>
                                PDF Version
                            </Link>
                        </div>
                        <div className="text-center print-only text-sm mt-2 mb-2">
                            <Link href="/resume" className="text-text-primary opacity-80 hover:opacity-100 underline underline-offset-4 decoration-dashed decoration-1" isExternal>
                                Online Version
                            </Link>
                        </div>
                        <div className="text-center opacity-60 text-xs mt-1">
                            Last updated at {formatDateToDetailed()}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}