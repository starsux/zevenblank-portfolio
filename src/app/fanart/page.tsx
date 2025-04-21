import Image from "next/image";
import styles from "@/app/style/home.module.css";
import stylesGallery from "@/app/style/gallery.module.css";
import Masonry from '@mui/lab/Masonry';

import img0 from "@/app/assets/gallery/fanart/0.jpg";
import img1 from "@/app/assets/gallery/fanart/1.jpg";
import img2 from "@/app/assets/gallery/fanart/2.jpg";
import img3 from "@/app/assets/gallery/fanart/3.jpg";
import img4 from "@/app/assets/gallery/fanart/4.jpg";
import img5 from "@/app/assets/gallery/fanart/5.jpg";
import img6 from "@/app/assets/gallery/fanart/6.jpg";
import img7 from "@/app/assets/gallery/fanart/7.jpg";
import img8 from "@/app/assets/gallery/fanart/8.jpg";
import img9 from "@/app/assets/gallery/fanart/9.jpg";


import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";

const galleryImagesData = [
  { src: img0, alt: "Fanart 1" /* width/height might be auto-detected */ },
  { src: img1, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img2, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img3, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img4, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img5, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img6, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img7, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img8, alt: "Fanart 2" /* width/height might be auto-detected */ },
  { src: img9, alt: "Fanart 2" /* width/height might be auto-detected */ },
];

function Gallery() {
  return (
    // Container
    <Masonry
    columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} 
    spacing={3} 
  >
    {galleryImagesData.map((imgData, index) => (

      <div key={index} className={stylesGallery.galleryItem}>
        <Image
          src={imgData.src}
          alt={imgData.alt}
          quality={30} // Adjusted quality slightly
          placeholder="blur"

          style={{
            display: 'block', 
            width: '100%',
            height: 'auto',  
            borderRadius: 'inherit', 
          }}

        />
      </div>
    ))}
  </Masonry>
  );
}

export default function Page() {

  return (
    <main className={styles.animationsEnabled}>
      <div className={styles.main_grid}>
        <Logo />
        <div className={stylesGallery.info}>
          <h2 className={stylesGallery.galleryTitle}>Fanart Gallery</h2>
          <p style={{ textAlign: 'center', color: '#555', fontSize: '0.9em' }}>
             A collection of works inspired by various series.
          </p>
        </div>

        <div className={stylesGallery.galleryContainerWrapper}>
          <Gallery />
        </div>

        <Footer />
      </div>
    </main>
  );
}