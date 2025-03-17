import Image from "next/image";
import Link from 'next/link'

import styles from "@/app/style/home.module.css";

import fanartText from "@/app/assets/fanart_text.svg";
import ocText from "@/app/assets/original_character_text.svg";
import fanartPanel from "@/app/assets/right_img.png";
import ocPanel from "@/app/assets/oc_panel.webp";
import ocPanel_responsive from "@/app/assets/oc_panel_horizontal.webp";
import illustPanel from "@/app/assets/center_image.png";
import original_text from "@/app/assets/ORIGINAL.svg";

import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";


export default function Home() {



  return (
    <main>
      <div className={styles.main_grid}>
        <Logo/>
        <Link href="/terms" className={`${styles.grid_item} ${styles.terms_btn} `}>
          <p>Terms of Service</p>
        </Link>
        <Link href="/commission" className={`${styles.grid_item} ${styles.commission_btn} `}>
          <p>Order Commission</p>
        </Link>
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
        
        <Link aria-label="See illustrations based on anime(manga/videogames characters)" href="/fanart" className={`${styles.grid_item} ${styles.card_fanart}`} style={ {backgroundImage: `url(${fanartPanel.src})`}}>
          <Image src={fanartText} alt="" />
        </Link>
        
        <Footer/>
      </div>
    </main>
  );
}

