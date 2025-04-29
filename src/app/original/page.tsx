"use client"
import Image from "next/image";
import styles from "@/app/style/home.module.css";
import stylesOriginal from "@/app/style/original.module.css";

import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";
import { useState } from "react";

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
const thumbsImagesData = importImages(

  require.context(

    "@/app/assets/gallery/fanart", // image folder
    false,  // no subdirectories
    /\.(png|jpe?g|webp)$/i 
  )

);

function CardWorks(props:any){
  

  
  return(
    <>
      {props.images.map((imgData:any, index:any) => (
      <div key={index} className={stylesOriginal.thumbnailItem} onClick={() =>props.setCurrentIndex(index)}>
        <p>WORK TITLE</p>
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
    </>

  );
}


export default function Page() {

  const [currentIndex,setCurrentIndex] = useState(0);


  return (
    <main className={styles.animationsEnabled}>
      <div className={styles.main_grid}>
        <Logo />
        <div className={stylesOriginal.thumbnailContainer}>
          <CardWorks images={thumbsImagesData} setCurrentIndex={setCurrentIndex}/>
        </div>

        <div className={stylesOriginal.visualizerContainer}>
          <div className={stylesOriginal.visualizerImageContainer}>
            <Image src={thumbsImagesData[1].src} alt=""/>
            
          </div>
          <div className={stylesOriginal.visualizerInfoContainer}>
              <div className={stylesOriginal.descriptionTitleContainer}>
                <h2>Title</h2>
              </div>
              <div className={stylesOriginal.descriptionContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores quos atque praesentium aliquid id eos earum deserunt ab tempore non accusantium ea minima laboriosam, necessitatibus rem voluptate alias beatae.
                Iusto, distinctio vel. Assumenda id iste aliquid repudiandae vel enim accusamus mollitia dolor? Eos aperiam quae veniam? Iusto aut fugiat dolore aliquam neque sint pariatur consequatur corporis? Nobis, accusantium nemo. </p>
                </div>
          </div>
        </div>
        
        <div className={stylesOriginal.visualizerThumbsContainer}>
          {Array(5).fill(0).map((_,i)=>(

          <div key={i} className={stylesOriginal.visualizerThumbsItem}>
            <Image src={thumbsImagesData[1].src}  alt=""/>
          </div>

          ))}

        </div>

        <Footer />
      </div>
    </main>
  );
}