import Image from "next/image";
import localFont from 'next/font/local'
import Link from 'next/link'

import styles from "@/app/style/home.module.css";

import iconLogo from "@/app/icon.svg";



const milletunFont = localFont({src:'../assets/Milletun.otf'});

export default function Page(){
    return (
        <main>
          <div className={styles.main_grid}>
            <Link href="/" className={`${styles.grid_item} ${styles.logo}`}>
              <Image src={iconLogo} alt="" />
              <p>| Home</p>
            </Link>
          </div>
        </main>
      );
}