import { socialMedia } from '@/constants/constants'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container fluid="xxl" className='py-3 position-absolute bottom-0'>
            <div className=''>
                <p className="">
                     Ⓒ 2023 pawelGrzesiewicz.
                </p>
            </div>


            <div className=''>
                <div className=''>
                    {socialMedia.map((social) => (
                        <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer"
                           className=''>
                            {social.name === "github" && <i className="bi bi-github"></i>}
                            {social.name === "codewars" && <i className="bi bi-flower1"></i>}
                            {social.name === "linkedin" && <i className="bi bi-linkedin"></i>}
                        </a>
                    ))}
                </div>
            </div>
            </Container>
    )
}
