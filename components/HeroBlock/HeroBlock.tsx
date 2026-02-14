"use client";

import css from './Heroblock.module.css';
import Link from 'next/link';
import Image from 'next/image';

const HeroBlock = () => {
  return (
    <section className={css.heroBlock}>

      {/* Background image */}
      <Image
        src="/images/hero-img-2x.jpg"
        alt="Camper in nature"
        fill
        priority
        className={css.heroImage}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className={css.overlay}></div>

      <div className={css.container}>
        <div className={css.heroContent}>
          <div className={css.heroTitleBox}>
            <h1 className={css.heroTitle}>Campers of your dreams</h1>
            <p className={css.heroDescription}>You can find everything you want in our catalog</p>
          </div>
          <Link
            href="/catalog"
            className="buttonAnchor"
          >
            View Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroBlock;