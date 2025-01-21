'use client';

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

type SwitchLanguageModeProps = {
  locale: string;
};

export default function SwitchLanguageMode({ locale }: SwitchLanguageModeProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = ((e: ChangeEvent<HTMLInputElement>) => {
    const newLocate = e.target.value;
    const path = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocate}/${path}`);
  })
  return (
    <div id="modeSwitchContainer" className="btn-group btn-group-sm mx-4" role="group" aria-label="Toggle Mode">
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="englishMode"
        value="en"
        onChange={handleLanguageChange}
        />
      <label
        className={`btn btn-outline-secondary ${locale === 'en' ? 'bg-warning' : ''}`}
        htmlFor="englishMode"
      >
        EN
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="polishMode"
        value="pl"
        onChange={handleLanguageChange}
        />
      <label
        className={`btn btn-outline-secondary ${locale === 'pl' ? 'bg-warning' : ''}`}
        htmlFor="polishMode"
      >
        PL
      </label>
    </div>
  );
}
