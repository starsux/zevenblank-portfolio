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
            {/* <Image src={}/> */}
          </div>
          <div className={stylesOriginal.visualizerInfoContainer}>
              <div className={stylesOriginal.descriptionTitleContainer}>
                <p>Title</p>
              </div>
              <div className={stylesOriginal.descriptionContainer}>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur consectetur sint totam beatae quos veritatis, aut quae nihil deleniti est, velit excepturi, laboriosam iusto dolorem voluptatum? Necessitatibus, corporis nostrum?
                Enim, eos odio expedita placeat harum commodi blanditiis aperiam recusandae earum voluptate quaerat sapiente tempora quam beatae tenetur nobis numquam reprehenderit! Repellat neque exercitationem deleniti, similique animi molestiae omnis excepturi?
                Excepturi, provident. Porro, quasi consequatur odit aliquid ipsum vel magnam ut iure quaerat voluptatibus esse minus libero, qui accusamus architecto. Tempore quod obcaecati consequuntur quam debitis eos hic est deleniti?
                Id, corporis earum maiores commodi illo asperiores illum quos qui harum obcaecati nesciunt reiciendis enim beatae. Eius minus dicta quas eligendi facere atque veritatis fugit rerum vitae, libero architecto nisi!
                Nam soluta neque vel, hic, eveniet nostrum voluptate iure magnam quia nulla rem fugit nisi atque officia perspiciatis consequatur sint. Dignissimos id asperiores rerum mollitia libero, sapiente debitis sunt explicabo?
                Obcaecati eaque sunt non facilis tenetur, quam et enim corporis perferendis quidem placeat culpa amet molestias eius dolorum nemo necessitatibus earum at sapiente eum mollitia! In dolor tempore fuga nemo!
                Atque similique quae incidunt voluptates sit beatae, at natus blanditiis architecto pariatur, in nam odit facere expedita ratione quas ea ullam est sed dignissimos. Quod voluptas impedit similique consectetur officiis?
                Laborum excepturi quo corrupti voluptate dignissimos minus deserunt unde? Quo rerum atque et magnam amet in iste, incidunt sit, quod esse veritatis culpa, ea nihil nulla. Natus cum magnam distinctio.
                Iste aliquam architecto natus molestiae est, ut corporis, quia quod illo ratione voluptates autem hic quaerat at eligendi molestias quam facere iusto asperiores, itaque placeat unde nobis veritatis. Itaque, ipsam!
                Quis beatae non dolorem possimus perferendis. Vero fuga consectetur iure nemo, itaque quos minima dolor magni cum modi excepturi deserunt doloremque culpa reprehenderit vel eos corporis fugiat molestias vitae porro.
                </p> */}
                </div>
          </div>
        </div>
        
        <div className={stylesOriginal.visualizerThumbsContainer}>
          {/* Iteration */}
          <div className={stylesOriginal.visualizerThumbsItem}>

          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}