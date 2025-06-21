import stylesHome from "@/app/style/home.module.css";

import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";
import { OriginalBanner, FanartBanner } from "../partials";

export default function Page(){
    return (
        <main className={ stylesHome.animationsEnabled}>
          <div className={stylesHome.main_grid}>
            <Logo/>
            <OriginalBanner/>
            <FanartBanner/>
            <Footer />

          </div>
        </main>
      );
}