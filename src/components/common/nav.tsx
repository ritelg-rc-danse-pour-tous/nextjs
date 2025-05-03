"use client";

import Link from "@/components/ui/link";
import { useRef } from "react";

export default function Nav() {
  const ulRef = useRef<HTMLUListElement>(null);

  function toggleMenuMobile(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    ulRef.current?.classList.toggle("active");
  }

  function removeActive(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    ulRef.current?.classList.remove("active");
  }

  return (
    <nav className="top-navbar">
      <button
        onClick={toggleMenuMobile}
        className="nav-btn-menu js-close"
        title="Menu Mobile"
      ></button>
      <Link href="/" className="nav-logo" title="Accueil" />

      <ul ref={ulRef}>
        <li>
          <button onClick={toggleMenuMobile} className="close js-close">
            x
          </button>
        </li>
        <li>
          <Link href="/" onClick={removeActive}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/#nos-cours" onClick={removeActive}>
            Nos cours
          </Link>
        </li>
        <li>
          <Link href="/qui-sommes-nous" onClick={removeActive}>
            Qui sommes nous ?
          </Link>
        </li>
        {/* <li>
          <Link href="/#contact" onClick={removeActive}>
            Contact
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
