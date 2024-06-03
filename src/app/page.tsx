import Image from "next/image";
import localFont from 'next/font/local'
import styles from "@/app/style/home.module.css";
import iconLogo from "@/app/icon.svg";
import fanartText from "@/app/assets/fanart_text.svg";
import ocText from "@/app/assets/original_character_text.svg";
import fanartPanel from "@/app/assets/ink_grayscale.png";
import email_icon from "@/app/assets/mdi_email.svg";
import twitter_icon from "@/app/assets/fa6-brands_square-x-twitter.svg";
import twitch_icon from "@/app/assets/mdi_twitch.svg";
import pixiv_icon from "@/app/assets/simple-icons_pixiv.svg";
import patreon_icon from "@/app/assets/patreon.svg";
import ocPanel from "@/app/assets/oc_panel.png";
import illustPanel from "@/app/assets/illustration.png";
import original_text from "@/app/assets/ORIGINAL.svg";

const milletunFont = localFont({src:'./assets/Milletun.otf'});

export default function Home() {
  return (
    <main>
      <div className={styles.main_grid}>
        <div className={`${styles.grid_item} ${styles.logo}`}>
          <Image src={iconLogo} alt="" />
        </div>
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
            <Image src={illustPanel} alt="" />
          </div>

        </div>
        <div className={`${styles.grid_item} ${styles.card_oc}`} style={{backgroundImage: `url(${ocPanel.src})`}}>
          <Image src={ocText} alt="" />
        </div>
        <div className={`${styles.grid_item} ${styles.card_fanart}`} style={{backgroundImage: `url(${fanartPanel.src})`}}>
          <Image src={fanartText} alt="" />
        </div>
        <div
          className={`${styles.grid_item} ${styles.card_socials}`}>
            <Image src={twitter_icon} alt="" />
            <Image src={patreon_icon} alt="" />
            <Image src={twitch_icon} alt="" />
            <Image src={pixiv_icon} alt="" />

          </div>
        <div className={`${styles.grid_item} ${styles.card_email} `}>
          <Image src={email_icon} alt=""/>
          <p>contact@zevenblank.art</p>
        </div>
      </div>
    </main>
  );
}
