import ThemeContextProvider from "@/context/ThemeContextProvider";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import {routing} from '@/i18n/routing';
 import InstallBootstrap from "@/utils/InstallBootstrap";
import NavBar from "@/componets/Navigation/NavBar";
import Footer from "@/componets/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../globals.css";
import { Container } from "react-bootstrap";

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: 'pl' | 'en' };
};

export async function generateMetadata() {
  return {
    title: "pawelGrzesiewicz",
    description: "Welcome to my personal portfolio website.",
  };
}

export default async function RootLayout({ children, params }: LayoutProps) { 
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <ThemeContextProvider>
              <InstallBootstrap/>
              <NavBar locale={locale}/>
                <main className="container-fluid">
                  <Container>{children}</Container>
                </main>
              <Footer/>
            </ThemeContextProvider>
          </NextIntlClientProvider>
        </body>
      </html>
  );
}
