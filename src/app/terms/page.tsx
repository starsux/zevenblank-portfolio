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
          </div>
        </main>
      );
}