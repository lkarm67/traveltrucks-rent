"use client";

import css from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link
          href="/"
          className={clsx(css.headerLogoLink, pathname === "/" && css.active)}
        >
          <Image
            src="/images/travel-trucks-logo.svg"
            alt="TravelTrucks"
            width={136}
            height={16}
            priority
          />
        </Link>

        {/* Burger */}
        <button
          className={css.burger}
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul className={css.headerMenu}>
          <li className={clsx(pathname === "/" && css.active)}>
            <Link href="/">Home</Link>
          </li>
          <li className={clsx(pathname === "/catalog" && css.active)}>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile modal */}
      {isOpen && (
        <div className={css.mobileMenuOverlay} onClick={() => setIsOpen(false)}>
          <div
            className={css.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={css.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            
            <Link
              href="/"
              className={clsx(pathname === "/" && css.active)}
              onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/catalog"
              className={clsx(pathname === "/catalog" && css.active)}
              onClick={() => setIsOpen(false)}
            >
              Catalog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;




/*"use client"

import css from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link href="/" className={clsx(css.headerLogoLink, pathname === "/" && css.active)}>
          <Image src="/images/travel-trucks-logo.svg" alt="TravelTrucks" width={136} height={16} priority />
        </Link>
      
        <ul className={css.headerMenu}>
          <li className={clsx(css.headerMenuLink, pathname === "/" && css.active)}>
            <Link href="/">Home</Link>
          </li>
          <li className={clsx(css.headerMenuLink, pathname === "/catalog" && css.active)}>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
*/