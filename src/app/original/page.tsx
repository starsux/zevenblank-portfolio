import Image from "next/image";
import localFont from 'next/font/local'
import Link from 'next/link'

import styles from "@/app/style/home.module.css";

import iconLogo from "@/app/icon.svg";
import email_icon from "@/app/assets/mdi_email.svg";
import twitter_icon from "@/app/assets/fa6-brands_square-x-twitter.svg";
import twitch_icon from "@/app/assets/mdi_twitch.svg";
import pixiv_icon from "@/app/assets/simple-icons_pixiv.svg";
import patreon_icon from "@/app/assets/patreon.svg";


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
            <div
              className={`${styles.grid_item} ${styles.card_socials}`}>
                <Link href="https://x.com/zevenblank" target="_blank">
                  <Image src={twitter_icon} alt="" />
                </Link>
                <Link href="https://patreon.com/zevenblank" target="_blank">
                  <Image src={patreon_icon} alt="" />
                </Link>
                <Link href="https://twitch.com/zevenblank" target="_blank">
                  <Image src={twitch_icon} alt="" />
                </Link>
                <Link href="https://www.pixiv.net/en/users/86175092" target="_blank">
                  <Image src={pixiv_icon} alt="" />
                </Link>
    
            </div>
            <div className={`${styles.grid_item} ${styles.card_email} `}>
              <Image src={email_icon} alt=""/>
              <p>contact@zevenblank.art</p>
            </div>
          </div>
        </main>
      );
}