export type Artwork = {
    title:String,
    description:String,
    images:String[]
    cover_index?:Number
}

export const sampleArtworks: Artwork[] = [
  {
    title: "Sunset Over the Hills",
    description: "A vibrant depiction of the sun setting behind rolling hills, with warm hues of orange and purple blending in the sky.",
    images: [
      "/images/sunset-hills-1.jpg",
      "/images/sunset-hills-2.jpg",
      "/images/sunset-hills-3.jpg"
    ],
    cover_index: 1
  },
  {
    title: "Urban Exploration",
    description: "Black and white photographs capturing abandoned buildings and graffiti-filled alleyways in a forgotten part of the city.",
    images: [
      "/images/urban-explore-1.png",
      "/images/urban-explore-2.png"
    ]
  },
  {
    title: "Abstract Geometry",
    description: "A series of abstract shapes and lines intersecting in bold colors, exploring form and space.",
    images: [
      "/images/abstract-geo-1.svg",
      "/images/abstract-geo-2.svg",
      "/images/abstract-geo-3.svg",
      "/images/abstract-geo-4.svg"
    ],
    cover_index: 0
  },
  {
    title: "Wildlife Wonders",
    description: "High-resolution photos of exotic animals in their natural habitats, showcasing the diversity of wildlife.",
    images: [
      "/images/wildlife-1.jpg",
      "/images/wildlife-2.jpg",
      "/images/wildlife-3.jpg"
    ],
    cover_index: 2
  },
  {
    title: "Minimalist Line Art",
    description: "Simple line drawings focused on minimalism and negative space, emphasizing form and balance.",
    images: [
      "/images/minimal-line-1.png"
    ]
  }
];
