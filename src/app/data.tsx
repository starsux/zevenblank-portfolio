import { Artwork } from "./defs";

import urban1 from "@/app/assets/gallery/fanart/0.jpg"; 
import urban2 from "@/app/assets/gallery/fanart/3.jpg"; 



export const sampleArtworks: Artwork[] = [
  {
    title: "Sunset Over the Hills",
    description: "A vibrant depiction of the sun setting behind rolling hills, with warm hues of orange and purple blending in the sky.",
    images: [urban1,urban2],
    cover_index: 1
  },
  {
    title: "Urban Exploration",
    description: "Black and white photographs capturing abandoned buildings and graffiti-filled alleyways in a forgotten part of the city.",
    images: [urban1,urban2],

  },
  {
    title: "Abstract Geometry",
    description: "A series of abstract shapes and lines intersecting in bold colors, exploring form and space.",
        images: [urban1,urban2],

    cover_index: 0
  },
  {
    title: "Wildlife Wonders",
    description: "High-resolution photos of exotic animals in their natural habitats, showcasing the diversity of wildlife.",
        images: [urban1,urban2],

  },
  {
    title: "Minimalist Line Art",
    description: "Simple line drawings focused on minimalism and negative space, emphasizing form and balance.",
        images: [urban1,urban2],

  }
];

export let dataArtworks: Artwork[] = [];