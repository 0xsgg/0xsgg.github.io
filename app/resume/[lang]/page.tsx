import resumeZh from '@/config/data/resume-zh.json'
import resumeEn from '@/config/data/resume-en.json'
import ResumeContent from './ResumeContent'

// Generate static params for static export
export function generateStaticParams() {
    return [
        { lang: 'zh' },
        { lang: 'en' },
    ]
}

export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    const resumeData = lang === 'en' ? resumeEn : resumeZh

    return <ResumeContent resumeData={resumeData} lang={lang} />
}
