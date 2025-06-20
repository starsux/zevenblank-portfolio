import stylesHome from "@/app/style/home.module.css";
import styles from "@/app/style/partials.module.css";
import Link from "next/link";
import Image from "next/image";
import iconTos from "@/app/assets/doc_icon.webp";
import Logo from "@/app/partials/Logo";

// STATUS CODES IMPORT
import status500 from "@/app/assets/error_codes/500.png";


export function Header() {
  return     <>
      <Logo />
      <Link href="/terms" className={`${stylesHome.grid_item} ${stylesHome.terms_btn} `}>
        <span><Image src={iconTos} alt="" width={16} height={16} /></span>
        <p>Terms of Service</p>
      </Link>
      <Link href="/commission" className={`${stylesHome.grid_item} ${stylesHome.commission_btn} `}>
        <p>Order Commission</p>
      </Link>
    </>;
}


export function StatusCode({ code,description}: any) {

  return (
    <div className={styles.statusCode}>

      {(() => {
        switch (code) {
          case '500':
            return <Image width={500} height={500} src={status500.src} alt={code + "-status"} />
          default:
            return null
        }
      })()}


      <div className={styles.statusInfo}>
        <h2>ERROR {code}</h2>
        <p>{description}</p>
      </div>
    
    </div>
  );
}
