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

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params: {locale} }: LayoutProps) { 

  if (!routing.locales.includes(locale as any)) {
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
                  {children}
                </main>
              <Footer/>
            </ThemeContextProvider>
          </NextIntlClientProvider>
        </body>
      </html>
  );
}
