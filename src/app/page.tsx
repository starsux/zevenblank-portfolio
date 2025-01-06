import Image from "next/image";
import localFont from 'next/font/local'
import Link from 'next/link'

import styles from "@/app/style/home.module.css";

import iconLogo from "@/app/icon.svg";
import fanartText from "@/app/assets/fanart_text.svg";
import ocText from "@/app/assets/original_character_text.svg";
import fanartPanel from "@/app/assets/right_img.png";
import email_icon from "@/app/assets/mdi_email.svg";
import twitter_icon from "@/app/assets/fa6-brands_square-x-twitter.svg";
import twitch_icon from "@/app/assets/mdi_twitch.svg";
import pixiv_icon from "@/app/assets/simple-icons_pixiv.svg";
import patreon_icon from "@/app/assets/patreon.svg";
import ocPanel from "@/app/assets/oc_panel.webp";
import ocPanel_responsive from "@/app/assets/oc_panel_horizontal.webp";
import illustPanel from "@/app/assets/center_image.png";
import original_text from "@/app/assets/ORIGINAL.svg";

const milletunFont = localFont({src:'./assets/Milletun.otf'});
  

export default function Home() {



  return (
    <main>
      <div className={styles.main_grid}>
        <Link href="/" className={`${styles.grid_item} ${styles.logo}`} aria-label="Go to home page">
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
        <div className={`${styles.grid_item} ${styles.illustration}`}>

          <div className={`${styles.grid_item} ${styles.main_animated}`}>
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
            <Image src={original_text} alt="" />
          </div>

          <div className={`${styles.grid_item} ${styles.main_illust}`}>
            <Image src={illustPanel} alt=""/>
          </div>

        </div>
        {/* Vertical image */}
        <Link aria-label="See original illustrations and character design" href="/original" className={`${styles.grid_item} ${styles.card_oc}`} style={{backgroundImage: `url(${ocPanel.src})`}}>
          <Image src={ocText} alt="" />
        </Link>
        {/* Horizontal image */}
        <Link aria-label="See original illustrations and character design" href="/original" className={`${styles.grid_item} ${styles.card_oc_responsive}`} style={{backgroundImage: `url(${ocPanel_responsive.src})`}}>
          <Image src={ocText} alt="" />
        </Link>
        
        <Link aria-label="See illustrations based on anime(manga/videogames characters)" href="/fanart" className={`${styles.grid_item} ${styles.card_fanart}`} style={{backgroundImage: `url(${fanartPanel.src})`}}>
          <Image src={fanartText} alt="" />
        </Link>
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
          <Image src={email_icon} alt=""/>
          <p>contact@zevenblank.art</p>
        </div>
      </div>
    </main>
  );
}

