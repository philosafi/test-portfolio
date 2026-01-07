import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Tashfeen Ahmed - Sr. Product Designer at Microsoft",
  description:
    "Designing experiences for human-AI interfaces, writing assistance, and data visualization. Currently at Microsoft, working on Microsoft 365 Copilot.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "Microsoft",
    "Copilot",
    "AI",
    "Human-Computer Interaction",
    "Portfolio",
  ],
  authors: [{ name: "Tashfeen Ahmed" }],
  openGraph: {
    title: "Tashfeen Ahmed - Sr. Product Designer at Microsoft",
    description:
      "Designing experiences for human-AI interfaces, writing assistance, and data visualization.",
    url: "https://tashfeen.me",
    siteName: "Tashfeen Ahmed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tashfeen Ahmed - Sr. Product Designer at Microsoft",
    description:
      "Designing experiences for human-AI interfaces, writing assistance, and data visualization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ClientLayout />
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <div className="noise-overlay" aria-hidden="true" />
        </ThemeProvider>
      </body>
    </html>
  );
}
