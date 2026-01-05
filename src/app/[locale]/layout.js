import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from "next-intl/server";
import {routing} from '@/i18n/routing';
import { notFound } from "next/navigation";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Restaurant AI Chatbot | Automate Orders & Reservations",
  description:
    "Launch a restaurant-ready AI chatbot that automates orders, reservations, and guest support across WhatsApp and web chat.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
