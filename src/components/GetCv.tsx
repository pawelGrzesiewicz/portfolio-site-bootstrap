import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function GetCv() {
    const t = useTranslations("AboutPage");

    return (
        <div className="text-center mt-5 d-flex justify-content-md-end justify-content-center">
            <Link
                href="https://drive.google.com/file/d/1FKL2MzXiutYH6hU9IoQzeLeKUoR36Ks6/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
            >
                <Button
                    variant="outline-warning"
                    className="btn-cv px-4 py-2"
                >
                    {t('getCv')}
                </Button>
            </Link>
        </div>
    );
}