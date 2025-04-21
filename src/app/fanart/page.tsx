"use client"
import Image from "next/image";
import styles from "@/app/style/home.module.css";
import stylesGallery from "@/app/style/gallery.module.css";
import Masonry from '@mui/lab/Masonry';

import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";

function importImages(context: any){
  return context.keys().map((filename: any) => {

      const altTextBase = filename.replace('./', '').replace(/\.\w+$/, ''); 
      return {
        src: context(filename), 
        alt: `Fanart ${altTextBase}`, 
      };

  });
}

// import data of images
const galleryImagesData = importImages(

  require.context(

    "@/app/assets/gallery/fanart", // image folder
    false,  // no subdirectories
    /\.(png|jpe?g|webp)$/i 
  )

);

function Gallery(props:any) {
  if (!props || props.images.length === 0) {
    return <p>Gomen! I forgot the images.</p>; 
    // todo: funny image here
  }


  return (
    // Container
    <Masonry
    columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} 
    spacing={3} >
    {props.images.map((imgData:any, index:any) => (

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
          <Gallery images={galleryImagesData} />
        </div>

        <Footer />
      </div>
    </main>
  );
}