import Navbar from "@/components/Navbar";
import { validateRequest } from "@/lib/lucia/validate-request";


export default async function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-screen h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
            <main className="w-1/3 flex h-2/5">
                <div className="w-1/3 border-r px-4 flex-1 h-full flex flex-col ">
                    <Navbar />
                </div>
                <div className="w-2/3 px-4">
                    {children}
                </div>
            </main>
        </div>
    );
}
