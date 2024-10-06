import Navbar from "@/components/Navbar";


export default async function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-screen sm:h-screen flex sm:flex-row flex-col sm:items-center sm:justify-center font-[family-name:var(--font-geist-sans)]">
            <main className="flex sm:flex-row flex-col sm:h-3/5 duration-200">
                <div className="sm:w-1/3 border-r px-4 flex-1 h-full flex flex-col pt-4">
                    <Navbar />
                </div>
                <div className="sm:w-2/3 px-4">
                    {children}
                </div>
            </main>
        </div>
    );
}
