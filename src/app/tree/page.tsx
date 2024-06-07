import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

import styles from "@/app/style/home.module.css";
import styles_link from "@/app/style/link.module.css";

import iconLogo from "@/app/icon.svg";
import email_icon from "@/app/assets/mdi_email.svg";
import fanartText from "@/app/assets/fanart_text.svg";
import ocText from "@/app/assets/original_character_text.svg";
import ocPanel from "@/app/assets/oc_panel.webp";
import fanartPanel from "@/app/assets/ink_grayscale.webp";

import pfp_twitch from "@/app/assets/mdi_twitch.svg"
import pfp_x from "@/app/assets/mdi_twitch.svg"
import pfp_patreon from "@/app/assets/mdi_twitch.svg"
import pfp_instagram from "@/app/assets/mdi_twitch.svg"
import pfp_youtube from "@/app/assets/mdi_twitch.svg"
import pfp_pixiv from "@/app/assets/mdi_twitch.svg"

const milletunFont = localFont({ src: "../assets/Milletun.otf" });

export default function Page() {
  return (
    <main>
      <div className={styles.main_grid}>
        <Link href="/" className={`${styles.grid_item} ${styles.logo}`}>
          <Image src={iconLogo} alt="" />
        </Link>
        <div
          className={`${styles.grid_item} ${styles.header} ${milletunFont.className}`}
        >
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
          <Image src={email_icon} alt="" />
          <p>contact@zevenblank.art</p>
        </div>
        <div className={`${styles_link.tree_container}`}>
          <div className={`${styles_link.tree_banner}`}>
          </div>
          <Link target="_blank"  href="https://x.com/zevenblank" className={`${styles_link.tree_item}`}>
            <Image src={pfp_twitch} alt=""/>
            <p>Twitter</p>
          </Link>
          <Link target="_blank" href="https://patreon.com/zevenblank" className={`${styles_link.tree_item}`}>
            <Image src={pfp_twitch} alt=""/>
            <p>Patreon</p>
          </Link>
          <Link target="_blank" href="https://www.pixiv.net/en/users/86175092" className={`${styles_link.tree_item}`}>
            <Image src={pfp_twitch} alt=""/>
            <p>Pixiv</p>
          </Link>
          <Link target="_blank" href="https://twitch.tv/zevenblank" className={`${styles_link.tree_item}`}>
            <Image src={pfp_twitch} alt=""/>
            <p>Twitch</p>
          </Link>
          <Link target="_blank" href="https://instagram.com/zevenblank" className={`${styles_link.tree_item}`}>
            <Image src={pfp_twitch} alt=""/>
            <p>Instagram</p>
          </Link>
          <Link target="_blank" href="https://www.youtube.com/channel/UCYeQ_F7W4SOI94y5RXA2hnQ" className={`${styles_link.tree_item}`}>
            <Image src={pfp_twitch} alt=""/>
            <p>Youtube</p>
          </Link>

        </div>
        <Link
          aria-label="See original illustrations and character design"
          href="/original"
          className={`${styles.grid_item} ${styles.card_oc}`}
          style={{ backgroundImage: `url(${ocPanel.src})` }}>
          <Image src={ocText} alt="" />
        </Link>
        <Link
          aria-label="See illustrations based on anime(manga/videogames characters"
          href="/fanart"
          className={`${styles.grid_item} ${styles.card_fanart}`}
          style={{ backgroundImage: `url(${fanartPanel.src})` }}
        >
          <Image src={fanartText} alt="" />
        </Link>
      </div>
    </main>
  );
}
