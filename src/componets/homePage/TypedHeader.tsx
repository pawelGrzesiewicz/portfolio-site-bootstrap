import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Typed from 'typed.js';

export default function TypedHeader() {
    const t = useTranslations('HomePage');

    useEffect(() => {
        const options = {
            strings: [t('typed-text-1'), t('typed-text-2')],
            typeSpeed: 100,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
        };

        const typed = new Typed('.typed-text', options);
        return () => {
            typed.destroy();
        };
    }, [t]);

    return (
        <>
            <h2 className="display-6 mb-3">{t('text-1')}</h2>
            <h1 className="display-1 fw-bold mb-3">{t('text-2')}</h1>
            <h2 className="text-gradient display-6">
                {t('text-3')} <span className="typed-text text-gradient"></span>
            </h2>
        </>
    );
};
