'use client';

import resumeData from '@/config/data/resume.json'
import { getSocialIcon } from '@/lib/social-icons'
import { formatDateToShort, formatDateRange } from '@/lib/date-utils'
import {
    Github,
    ArrowUpRight
} from 'lucide-react';
import { Link } from '@heroui/react'

export default function Resume() {
    const { basics, skills, work, projects, education, languages, publications, awards } = resumeData

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-10">
                    {/* 左侧栏 */}
                    <div className="lg:col-span-2">
                        <div className="text-center lg:text-left">
                            {/* 姓名和职位 */}
                            <h1 className="text-3xl text-black mb-1">
                                {basics.name}
                            </h1>
                            <h2 className="text-sm text-gray-500 mb-2">
                                {basics.label}
                            </h2>

                            {/* 联系信息 */}
                            <Link href={`mailto:${basics.email}`} className="text-xs text-gray-600 underline underline-offset-4 decoration-dashed decoration-1 mb-7">{basics.email}</Link>

                            {/* 社交链接 */}
                            <div className="flex items-center justify-center gap-3 md:justify-start mb-8">
                                {basics.profiles.map((profile, index) => (
                                    <Link
                                        key={index}
                                        href={profile.url}
                                        isExternal
                                        className="text-text-primary transition-colors"
                                    >
                                        {getSocialIcon(profile.network, "w-3.5 h-3.5")}
                                    </Link>
                                ))}
                                {/* <span className={`w-4 h-4 bg-red-500 text-white text-tiny rounded flex items-center justify-center font-bold`}>
                                    YT
                                </span> */}
                                {/* <span className={`w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-tiny rounded flex items-center justify-center font-bold`}>
                                    IG
                                </span> */}
                            </div>
                        </div>
                    </div>

                    {/* 右侧内容 */}
                    <div className="lg:col-span-6">
                        {/* 关于我 */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">About</span>
                            </h2>
                            <p className="md:pl-4 text-text-primary leading-relaxed">
                                {basics.summary}
                            </p>
                        </section>

                        {/* 技术栈 */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">Stacks</span>
                            </h2>
                            <div className="md:pl-4 space-y-4">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="grid grid-cols-4 md:grid-cols-7 space-x-4 items-start text-md text-text-primary mb-2 ">
                                            <span className="col-span-1 font-semibold leading-relaxed text-right">{skill.name}</span>
                                            <p className="col-span-3 md:col-span-6 font-light leading-relaxed">
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

                        {/* 开源项目 */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">Projects</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:pl-4">
                                {projects.map((project, index) => (
                                    <div key={index} className="text-text-primary">
                                        <h3 className="flex items-center gap-2 font-semibold text-md text-text-primary mb-2">
                                            <span className="mr-2">{project.displayName}</span>
                                            {project.githubUrl && (
                                                <Link href={project.githubUrl} isExternal className="text-text-primary opacity-60 hover:opacity-100 text-md">
                                                    <Github className="w-4 h-4" />
                                                </Link>
                                            )}
                                            {project.website && (
                                                <Link href={project.website} isExternal className="text-text-primary opacity-60 hover:opacity-100 text-md">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </Link>
                                            )}

                                        </h3>
                                        <p className="text-gray-500 mb-2 text-sm">
                                            {project.summary}
                                        </p>
                                        <div className="flex justify-start items-start text-xs">
                                            <span className="font-medium leading-relaxed">Skills：</span>
                                            <span className="font-light leading-relaxed">
                                                {project.skills.join('、')}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="flex items-center justify-start mt-8 md:pl-4">
                                <Link href="/projects" isExternal className="text-text-primary opacity-60 hover:opacity-80 underline underline-offset-5 decoration-dashed decoration-1 decoration-gray-400 text-sm">
                                    More Projects
                                    <ArrowUpRight className="w-4 h-4 ml-1" />
                                </Link>
                            </p>

                        </section>

                        {/* 工作经历 */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">Work Experience</span>
                            </h2>
                            <div className="space-y-8 md:pl-4">
                                {work.map((job, index) => (
                                    <div key={index} className="text-text-primary text-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="flex flex-wrap items-center gap-3 text-md font-semibold mb-1">
                                                    <Link href={job.website} isExternal className="text-text-primary hover:opacity-100 hover:text-black underline underline-offset-4 decoration-dashed decoration-1">{job.company}</Link>
                                                    <span className="font-light opacity-90">{job.position}</span>
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-xs opacity-80">
                                                    <span>
                                                        {formatDateToShort(job.startDate)} -  {
                                                            job.isCurrentRole || !job.endDate ? 'Present' : formatDateToShort(job.endDate)
                                                        }
                                                    </span>
                                                    <span>|</span>
                                                    <span>{job.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {job.summary && (
                                            <p className="font-semibold mb-3 italic">
                                                {job.summary}
                                            </p>
                                        )}
                                        {job.highlights && (
                                            <ul className="space-y-1 ml-4">
                                                {job.highlights.map((highlight, hIndex) => (
                                                    <li key={hIndex} className="flex items-start">
                                                        <span className="mr-2 mt-2 w-1.5 h-1.5 border border-black rounded-full flex-shrink-0"></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* 教育背景 */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">Education</span>
                            </h2>
                            {education.map((edu, index) => (
                                <div key={index} className="mb-4 md:pl-4 text-text-primary">
                                    <div className="flex flex-wrap items-center gap-1 text-text-primary text-md mb-1">
                                        <span className="font-medium">
                                            {edu.area}, {edu.studyType},
                                        </span>
                                        <span className="opacity-80">
                                            {edu.institution}
                                        </span>
                                    </div>
                                    <div className="text-sm opacity-60">
                                        {formatDateRange(edu.startDate, edu.endDate)}
                                    </div>
                                </div>
                            ))}
                        </section>
                        {/* 语言 */}
                        <section className="mb-8 md:mb-12">
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">Languages</span>
                            </h2>
                            <div className="flex flex-wrap items-center gap-1 text-text-primary md:pl-4">
                                {languages.map((language, index) => (
                                    <div key={index} className="flex items-center">
                                        <span className="font-medium">{language.language}</span>
                                        <span className="font-light ml-1">({language.fluency})</span>
                                        {index !== languages.length - 1 && <span className="ml-1">,</span>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 演讲与发表 */}
                        {/* <section className="mb-8 md:mb-12">
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">Talks</span>
                            </h2>
                            <div className="space-y-4 md:pl-4">
                                {publications.map((pub, index) => (
                                    <div key={index}>
                                        <h3 className="font-bold text-lg text-black">
                                            {pub.name} ~ {pub.publisher}
                                        </h3>
                                        <div className="text-sm text-gray-600">
                                            {pub.releaseDate}
                                            {pub.slides && (
                                                <>
                                                    {' • '}
                                                    <a
                                                        href={pub.slides}
                                                        target="_blank"
                                                        className="underline hover:text-black"
                                                    >
                                                        View Slides
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-gray-700 mb-1">
                                            {pub.summary}
                                        </p>

                                    </div>
                                ))}
                            </div>
                        </section> */}

                        {/* 荣誉奖项 */}
                        {/* <section>
                            <h2 className="text-md mb-4 tracking-wide">
                                <span className="bg-black text-white px-1">Awards</span>
                            </h2>
                            <div className="space-y-3 md:pl-4">
                                {awards.map((award, index) => (
                                    <div key={index} className="flex justify-between">
                                        <div>
                                            <h3 className="font-medium text-black">
                                                {award.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {award.awarder}
                                            </p>
                                        </div>
                                        <span className="text-sm text-gray-500">
                                            {award.fullDate.year}-{String(award.fullDate.month).padStart(2, '0')}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section> */}
                    </div>
                </div>
            </div>
        </div>
    )
}