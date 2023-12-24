import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VersaTalk",
  description: "Chat with anyone, anywhere in a language of your choice",
};

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Header />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import { ThemeProvider } from "@/components/theme-provider";
import ClientProviders from "@/components/ClientProviders";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <ClientProviders>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="flex flex-col min-h-screen">
          <FirebaseAuthProvider  >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
    </>
  );
}
