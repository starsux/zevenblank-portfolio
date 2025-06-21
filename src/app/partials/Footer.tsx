import styles from "@/app/style/home.module.css";

import Image from "next/image";
import Link from 'next/link'

import email_icon from "@/app/assets/mdi_email.webp";
import twitter_icon from "@/app/assets/fa6-brands_square-x-twitter.svg";
import twitch_icon from "@/app/assets/mdi_twitch.svg";
import pixiv_icon from "@/app/assets/simple-icons_pixiv.svg";
import patreon_icon from "@/app/assets/patreon.svg";

export default function Footer(){
  return (
    <>
      <div
          className={`${styles.grid_item} ${styles.card_socials}`}>
            <Link aria-label="Twitter(X) link" href="https://x.com/zevenblank" target="_blank">
              <Image src={twitter_icon} alt="" />
            </Link>
            <Link aria-label="Patreon link" href="https://patreon.com/zevenblank" target="_blank">
              <Image src={patreon_icon} alt="" />
            </Link>
            <Link aria-label="Twitch link" href="https://twitch.com/zevenblank" target="_blank">
              <Image src={twitch_icon} alt="" />
            </Link>
            <Link aria-label="Pixiv link" href="https://www.pixiv.net/en/users/86175092" target="_blank">
              <Image src={pixiv_icon} alt="" />
            </Link>

        </div>
        <div className={`${styles.grid_item} ${styles.card_email} `}>
          <div className={styles.mail_image}>
            <Image src={email_icon} alt=""/>
          </div>
          <Link href="mailto:contact@zevenblank.art">contact@zevenblank.art</Link>
        </div>
    </>
  );
}