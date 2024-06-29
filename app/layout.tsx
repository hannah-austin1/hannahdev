import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { chooseTheme, cn } from "@/lib/utils";
import { loadIcons } from "@iconify-icon/react";
import { skills } from "@/lib/skils";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Hannah Austin",
  description: "Hannah Austin's personal site",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiKey = process.env.NS_TOKEN || "";
  const baseUrl = process.env.NS_URL;
  const requestHeaders = new Headers();
  requestHeaders.set("accept", "application/json");
  requestHeaders.set("api-secret", apiKey);
  const response = await fetch(`${baseUrl}/entries/sgv`, {
    method: "GET",
    headers: requestHeaders,
    next: { revalidate: 3600 },
  });
  const sugars = await response.json();
  const theme = chooseTheme(sugars[0].sgv);

  const iconStrings = skills.map((skill) => skill.icon);
  loadIcons(iconStrings, (loaded, missing, pending, unsubscribe) => {
    if (loaded.length) {
      console.log(`Icons have been loaded and is ready to be renderered.`);
      return;
    }

    if (missing.length) {
      console.log(`Icons ${missing} do not exist.`);
      return;
    }
  });

  return (
    <html data-theme={theme} lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
