"use client"
import Image from "next/image";
import styles from "@/app/style/home.module.css";

import Footer from "@/app/partials/Footer";


import { Header, StatusCode } from "../partials";



export default function Page() {



    return (
        <main className={styles.animationsEnabled}>
            <div className={styles.main_grid}>

                <Header />


                <Footer />
            </div>
        </main>
    );
}