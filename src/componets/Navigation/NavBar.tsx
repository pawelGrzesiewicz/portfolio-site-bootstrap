import Link from 'next/link'
import React from 'react'
import SwitchDarkMode from './SwitchDarkMode'

export default function NavBar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link href="/home">
      <button className="navbar-brand btn" aria-label="Go to Home">pawelGrzesiewicz</button>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
       <Link href="/home">
         <button className="nav-link" aria-label="Go to Home">HOME</button>
       </Link>
       <Link href="/about">
         <button className="nav-link" aria-label="Go to About">ABOUT</button>
       </Link>
       <Link href="/projects">
         <button className="nav-link" aria-label="Go to Projects">PROJECTS</button>
       </Link>
       <Link href="/contact">
         <button className="nav-link" aria-label="Go to Contact">CONTACT</button>
       </Link>
       <Link href="/blog">
         <button className="nav-link disabled" aria-label="Blog (currently unavailable)">BLOG</button>
       </Link>
      </ul>
      <SwitchDarkMode/>
      <div className="d-flex">
            <button className="btn btn-outline-primary">
              PL | AN
            </button>
          </div>
    </div>
  </div>
</nav>
  )
}
