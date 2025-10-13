'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Resume() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to Chinese version by default
        router.replace('/resume/zh');
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-text-primary opacity-60">Redirecting...</p>
        </div>
    );
}
