import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard - The Paper Trail Store",
    description: "Paper trail store fine graded stationaries at reasonalble price.",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex min-h-screen flex-col">

                <div className="w-full h-[calc(100vh-118px)] overflow-y-auto">
                    {children}
                </div>

            </body>
        </html>
    );
}