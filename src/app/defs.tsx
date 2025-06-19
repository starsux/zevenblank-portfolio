
import { StaticImageData } from 'next/image';

export type Artwork = {
    title:String,
    description:String,
    images:StaticImageData[],
    cover_index?:Number
}


