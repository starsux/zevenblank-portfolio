"use client"
import Image from "next/image";
import styles from "@/app/style/home.module.css";
import stylesOriginal from "@/app/style/original.module.css";

import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";
import { useState } from "react";
import clsx from "clsx";

import { dataArtworks } from "../data";

import { Header,StatusCode } from "../partials";


function importImages(context: any) {
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

function CardWorks({ artworks, currentSelected, setCurrentIndex, setVisualizerindex }: any) {


  return (
    <>
      {artworks.map((data: any, index: any) => (
        <div key={index} className={stylesOriginal.thumbnailItem} onClick={() => { setCurrentIndex(index); setVisualizerindex(0) }}>
          {currentSelected != index && <p>{data.title}</p>}
          <Image
            src={data.images[data.cover_index === undefined ? 0 : data.cover_index]}
            alt={data.description}
            quality={80} // Adjusted quality slightly
            width={100}
            height={100}

          />
        </div>
      ))}
    </>

  );
}


export default function Page() {

  const [artworkIndex, setArtworkIndex] = useState(0);
  const [visualizerindex, setVisualizerindex] = useState(0);


  return (
    <main className={styles.animationsEnabled}>
      <div className={styles.main_grid}>
        {dataArtworks.length != 0 &&
          <>
                  <Logo />

            <div className={stylesOriginal.thumbnailContainer}>
              <CardWorks artworks={dataArtworks} currentSelected={artworkIndex} setCurrentIndex={setArtworkIndex} setVisualizerindex={setVisualizerindex} />
            </div>

            <div className={stylesOriginal.visualizerContainer}>
              <div className={stylesOriginal.visualizerImageContainer}>
                <Image src={dataArtworks[artworkIndex].images[visualizerindex]} alt="" quality={50} />

              </div>
              <div className={stylesOriginal.visualizerInfoContainer}>
                <div className={stylesOriginal.descriptionTitleContainer}>
                  <h2>{dataArtworks[artworkIndex].title}</h2>
                </div>
                <div className={stylesOriginal.descriptionContainer}>
                  <p>{dataArtworks[artworkIndex].description}</p>
                </div>
              </div>
            </div>

            <div className={stylesOriginal.visualizerThumbsContainer}>
              {dataArtworks[artworkIndex].images.map((src: any, i: any) => (

                <div key={i} className={clsx({
                  [`${stylesOriginal.visualizerThumbsItem} ${stylesOriginal.active}`]: i === visualizerindex
                  , [`${stylesOriginal.visualizerThumbsItem}`]: i != visualizerindex
                })} onClick={() => { setVisualizerindex(i) }}>
                  <Image src={src} alt="" quality={30} />
                </div>

              ))}

            </div>
          </>
        }

        {dataArtworks.length === 0 && <>
          <Header/>
          <StatusCode code={"500"} description="Works coming..."/>
        </>}

        <Footer />
      </div>
    </main>
  );
}