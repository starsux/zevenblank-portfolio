"use client";

import NextImage from "next/image";


import styles from "@/app/style/home.module.css";

import illustPanel from "@/app/assets/center_image.webp";
import original_text from "@/app/assets/ORIGINAL.webp";
import { Header } from "./partials";

import { OriginalBanner, FanartBanner } from "./partials";


import Footer from "@/app/partials/Footer";


function OriginalText() {



  return (

    <div className={`${styles.grid_item} ${styles.main_animated}`}>
      {Array(15).fill(0).map((_, i) => (
        <NextImage key={i} src={original_text} alt="" />
      ))}

    </div>

  );

}


export default function Home() {

  let animationsEnabled = true;

  return (
    <main className={animationsEnabled ? styles.animationsEnabled : ""}>
      <div className={styles.main_grid}>
        <Header />
        <div className={`${styles.grid_item} ${styles.illustration}`}>

          <OriginalText />

          <div className={`${styles.grid_item} ${styles.main_illust}`}>
            <NextImage width={940} height={743} src={illustPanel} alt="" />
          </div>

        </div>


        <OriginalBanner/>
        <FanartBanner/>
        <Footer />
      </div>
    </main>
  );
}

