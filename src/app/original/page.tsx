import styles from "@/app/style/home.module.css";


import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";



export default function Page(){
    return (
        <main>
          <div className={styles.main_grid}>
            <Logo/>
            <Footer/>
          </div>
        </main>
      );
}