'use client';

import { usePathname, useRouter } from "next/navigation";
import { Button, ButtonGroup } from "react-bootstrap";

type SwitchLanguageModeProps = {
  locale: string;
};

export default function SwitchLanguageMode({ locale }: SwitchLanguageModeProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <ButtonGroup size="sm" aria-label="Toggle dark mode">
      <Button
        variant="outline-secondary"
        className={`btn-lang ${locale === "en" ? 'en' : ''}`}
        onClick={() => handleLanguageChange("en")}
      >
        <span className={`${locale === "en" ? 'text-warning' : ''}`}>EN</span>
      </Button>
      <Button
        variant="outline-secondary"
        className={`btn-lang ${locale === "pl" ? 'pl' : ''}`}
        onClick={() => handleLanguageChange("pl")}
      >
        <span className={`${locale === "pl" ? 'text-warning' : ''}`}>PL</span>
      </Button>
    </ButtonGroup>
  );
}
