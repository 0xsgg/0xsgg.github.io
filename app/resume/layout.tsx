export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white light" data-theme="light">
            {children}
        </div>
    )
}