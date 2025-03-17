import styles from "@/app/style/home.module.css";
import STerms from "@/app/style/terms.module.css";

import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";


function TermsMenu(){
  return(
    <div className={`${styles.grid_item} ${STerms.menu_container}`}>
    <h2>Terms of service</h2>
    <p>Please read carefully.</p>
    <ol>
      <li>
        <span>◈</span>
        <p>1. General</p>
      </li>
      <li>
        <span>◇</span>
        <p>2. Terms and conditions</p>
      </li>
      <li>
        <span>◇</span>
        <p>3. Commission</p>
      </li>
      <li>
        <span>◇</span>
        <p>4. Usage permission</p>
      </li>
      <li>
        <span>◇</span>
        <p>5. Commercial usage (digital and physical)</p>
      </li>
      <li>
        <span>◇</span>
        <p>6. Commissions Process</p>
      </li>
    </ol>
  </div>

  );
}

export default function Page(){
    return (
        <main>
          <div className={styles.main_grid}>
            <Logo/>
          <TermsMenu/>
            <Footer/>

          </div>
        </main>
      );
}