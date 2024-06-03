import Image from "next/image";
import localFont from 'next/font/local'
import Link from 'next/link'

import styles from "@/app/style/home.module.css";

import iconLogo from "@/app/icon.svg";
import email_icon from "@/app/assets/mdi_email.svg";

const milletunFont = localFont({src:'../assets/Milletun.otf'});

export default function Page(){
    return (
        <main>
          <div className={styles.main_grid}>
            <Link href="/" className={`${styles.grid_item} ${styles.logo}`}>
              <Image src={iconLogo} alt="" />
            </Link>
            <div className={`${styles.grid_item} ${styles.header} ${milletunFont.className}`}>
              <h1>
                <span>Z</span>
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>N</span>
                <span>B</span>
                <span>L</span>
                <span>A</span>
                <span>N</span>
                <span>K</span>
              </h1>
            </div>
            <div className={`${styles.grid_item} ${styles.card_email} `}>
              <Image src={email_icon} alt=""/>
              <p>contact@zevenblank.art</p>
            </div>
          </div>
        </main>
      );
}