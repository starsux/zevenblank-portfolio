import iconLogo from "@/app/icon.svg";
import Link from 'next/link'
import Image from "next/image";
import styles from "@/app/style/home.module.css";

export default function Logo(){
    return(
        <Link href="/" className={`${styles.grid_item} ${styles.logo}`} aria-label="Go to home page">
          <Image src={iconLogo} alt="" />
          <p>| Home</p>
        </Link>

    );
}