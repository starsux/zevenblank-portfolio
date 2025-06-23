import stylesHome from "@/app/style/home.module.css";
import styles from "@/app/style/partials.module.css";
import Link from "next/link";
import Image from "next/image";
import iconTos from "@/app/assets/doc_icon.webp";
import Logo from "@/app/partials/Logo";
import fanartText from "@/app/assets/fanart_text.svg";
import fanartPanel from "@/app/assets/right_img.webp";
import ocPanel from "@/app/assets/oc_panel.webp";
import ocPanel_responsive from "@/app/assets/oc_panel_horizontal.webp";
import ocText from "@/app/assets/original_character_text.webp";


// STATUS CODES IMPORT
import status500 from "@/app/assets/error_codes/500.png";


export function Header() {
  return     <>
      <Logo />
      <Link href="/terms" className={`${stylesHome.grid_item} ${stylesHome.terms_btn} `}>
        <span><Image src={iconTos} alt="" width={16} height={16} /></span>
        <p>Terms of Service</p>
      </Link>
      <Link href="https://forms.gle/AB5fcqoxjcfytgUf9" target="_blank" className={`${stylesHome.grid_item} ${stylesHome.commission_btn} `}>
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


export function OriginalBanner(){
  return (
  <>
        <Link aria-label="See illustrations based on anime(manga/videogames characters)" href="/fanart" className={`${stylesHome.grid_item} ${stylesHome.card_fanart}`} style={{ backgroundImage: `url(${fanartPanel.src})` }}>
          <Image src={fanartText} alt="" />
        </Link>
  </>)
}

export function FanartBanner(){
  return (
  <>
        {/* Vertical image */}
        <Link aria-label="See original illustrations and character design" href="/original" className={`${stylesHome.grid_item} ${stylesHome.card_oc}`} style={{ backgroundImage: `url(${ocPanel.src})` }}>
          <Image src={ocText} alt="" />
        </Link>
        {/* Horizontal image */}  
        <Link aria-label="See original illustrations and character design" href="/original" className={`${stylesHome.grid_item} ${stylesHome.card_oc_responsive}`} style={{ backgroundImage: `url(${ocPanel_responsive.src})` }}>
          <Image src={ocText} alt="" />
        </Link>
  </>)
}