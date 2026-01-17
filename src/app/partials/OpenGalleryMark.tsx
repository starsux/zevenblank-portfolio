import styles from "@/app/style/partials.module.css";

export function OpenGalleryLabel({ visible, name }: { visible: string; name: string }){
    if (visible !== name) return null;  
    return(
        <div className={`${styles.gallery_label}`} >

            <p>[ OPEN GALLERY ]</p>

        </div>
    )
}