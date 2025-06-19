import styles from "@/app/style/home.module.css";
import Link from "next/link";
import Image from "next/image";
import iconTos from "@/app/assets/doc_icon.webp";
import Logo from "@/app/partials/Logo";

export function Header() {
  return     <>
      <Logo />
      <Link href="/terms" className={`${styles.grid_item} ${styles.terms_btn} `}>
        <span><Image src={iconTos} alt="" width={16} height={16} /></span>
        <p>Terms of Service</p>
      </Link>
      <Link href="/commission" className={`${styles.grid_item} ${styles.commission_btn} `}>
        <p>Order Commission</p>
      </Link>
    </>;
}
