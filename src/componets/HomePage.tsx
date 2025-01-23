import { useTranslations } from 'next-intl';
import React from 'react'

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('text-1')}</h1>
      <p>{t('text-2')}</p>
    </div>
  )
}
