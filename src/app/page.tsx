"use client";

import NextImage from "next/image";
import Link from "next/link"

import styles from "@/app/style/home.module.css";

import fanartText from "@/app/assets/fanart_text.svg";
import ocText from "@/app/assets/original_character_text.webp";
import fanartPanel from "@/app/assets/right_img.webp";
import ocPanel from "@/app/assets/oc_panel.webp";
import ocPanel_responsive from "@/app/assets/oc_panel_horizontal.webp";
import illustPanel from "@/app/assets/center_image.webp";
import original_text from "@/app/assets/ORIGINAL.webp";
import iconTos from "@/app/assets/doc_icon.webp";


import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";


function OriginalText(){

  

  return(

    <div className={`${styles.grid_item} ${styles.main_animated}`}>
      {Array(15).fill(0).map((_,i)=>(
      <NextImage key={i}  src={original_text} alt="" />
      ))}      

  </div>

  );

}


export default function Home() {

  let animationsEnabled = true;
 
  return (
    <main className={animationsEnabled ? styles.animationsEnabled : "" }>
      {/* <LoadingScreen isLoading={isLoading} /> */}
      <div className={styles.main_grid}>
        <Logo/>
        <Link href="/terms" className={`${styles.grid_item} ${styles.terms_btn} `}>
          <span><NextImage src={iconTos} alt="" width={16} height={16}/></span>
          <p>Terms of Service</p>
        </Link>
        <Link href="/commission" className={`${styles.grid_item} ${styles.commission_btn} `}>
          <p>Order Commission</p>
        </Link>
        <div className={`${styles.grid_item} ${styles.illustration}`}>

          <OriginalText/>

          <div className={`${styles.grid_item} ${styles.main_illust}`}>
            <NextImage width={940} height={743}  src={illustPanel} alt=""/>
          </div>

        </div>
        {/* Vertical image */}
        <Link aria-label="See original illustrations and character design" href="/original" className={`${styles.grid_item} ${styles.card_oc}`} style={{backgroundImage: `url(${ocPanel.src})`}}>
          <NextImage src={ocText} alt="" />
        </Link>
        {/* Horizontal image */}
        <Link aria-label="See original illustrations and character design" href="/original" className={`${styles.grid_item} ${styles.card_oc_responsive}`} style={{backgroundImage: `url(${ocPanel_responsive.src})`}}>
          <NextImage src={ocText} alt="" />
        </Link>
        
        <Link aria-label="See illustrations based on anime(manga/videogames characters)" href="/fanart" className={`${styles.grid_item} ${styles.card_fanart}`} style={ {backgroundImage: `url(${fanartPanel.src})`}}>
          <NextImage src={fanartText} alt="" />
        </Link>
        
        <Footer/>
      </div>
    </main>
  );
}

