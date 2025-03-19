"use client";

import styles from "@/app/style/home.module.css";
import STerms from "@/app/style/terms.module.css";

import Footer from "@/app/partials/Footer";
import Logo from "@/app/partials/Logo";
import { useState } from "react";


function TermsMenu(props : any){

  
  return(
    <div className={`${styles.grid_item} ${STerms.menu_container}`}>
    <h2>Terms of service</h2>
    <p>Please read carefully.</p>
    <ol>
      <li onClick={() => props.onClickTerm(1)}>
        <span>{props.termsIndex == 1 ? "◈" : "◇"}</span>
        <p>1. General</p> 
      </li>
      <li onClick={() => props.onClickTerm(2)}>
        <span>{props.termsIndex == 2 ? "◈" : "◇"}</span>
        <p>2. Terms and conditions</p>
      </li>
      <li onClick={() => props.onClickTerm(3)}>
        <span>{props.termsIndex == 3 ? "◈" : "◇"}</span>
        <p>3. Commission</p>
      </li>
      <li onClick={() => props.onClickTerm(4)}>
        <span>{props.termsIndex == 4 ? "◈" : "◇"}</span>
        <p>4. Usage permission</p>
      </li>
      <li onClick={() => props.onClickTerm(5)}>
        <span>{props.termsIndex == 5 ? "◈" : "◇"}</span>
        <p>5. Commercial usage (digital and physical)</p>
      </li>
      <li onClick={() => props.onClickTerm(6)}>
        <span>{props.termsIndex == 6 ? "◈" : "◇"}</span>
        <p>6. Commissions Process</p>
      </li>
    </ol>
  </div>

  );
}

function TermsContent({index}: {index: any}){


  return(

    <div className={STerms.TermsContent}>

      {index === 1 && (
        <div>
          <p>As general rule: </p>
          <ol>
            <li>All commissions only include the digital file of the illustration unless stated otherwise.</li>
            <li>Paypal Invoice will be the main method for payments, invoices are due within 1 week by default.</li>
            <li>A payment plan is available for commissions over $50.</li>
            <li>The completed illustration will only be sent to the client once the invoice has been fully paid.</li>
            <li>I have the right to reject a commission if I think it does not suit my style or I&apos;m not confident with the theme. Please do not take it as an insult in any way.</li>
          </ol>
        </div>
      )}

      {index === 2 && (
        <div>
          <p>Commission Terms and Condition</p>
          <p>Please read the Terms and Conditions below carefully before paying any invoice.</p>
          <p>Only make a payment when you agree with the following:</p>
          <ol>
            <li>This invoice is for a digital, customised illustration, the item(s) you purchased will be entirely digital.</li>
            <li>Nothing will be printed nor mailed to your address after you have paid for the invoice.</li>
            <li>There will not be any tracking information for the digital items.</li>
            <li>You have seen the sketch(es) of all item(s) listed in this invoice and are confident to proceed with having the item(s) finalised and completed by the seller (Zevenblank).</li>
            <li>You understand that all item(s) listed in this invoice are created and customised by the seller (Zevenblank) based on the information provided by the buyer (you), meaning any change of mind refund request can not be fulfilled as these items have no resell value.</li>
            <li>For enquires regarding the progress of the illustration, you will need to communicate directly with the seller. (Zevenblank)</li>
            <li>The item(s) you purchased will be sent to you via your nominated communication method once completed(Email/Discord/Twitter/Instagram)</li>
            <li>If your nominated communication method is unreachable for over 4 weeks after the illustration is completed. The file(s) will be sent to your Paypal email address.</li>
            <li>The seller (Zevenblank) will not be liable for any loss of digital item(s) purchased in this invoice once it has been sent to the buyer(you).</li>
            <li>All item(s) listed in the invoice will be created and expected to be completed within 6 months unless otherwise stated.</li>
            <li>The item(s) you purchase in this invoice are for personal use only, commercial usage is not permitted. (Such as reprinting or reselling)</li>
            <li>The item(s) you purchase in this invoice will be published publicly on social media platforms unless otherwise stated.</li>
            <li>You are over 18 and are paying using your own account.</li>
            <li>If you have any questions or concerns, please send me an email at contact@zevenblank.art</li>
          </ol>
        </div>
      )}

      {index === 3 && (
        <div>
           <p>Commission</p>
           <p>You (buyer) have the right to cancel the commission after a sketch has been provided to you.</p>
           <p>Minor changes can be made to the illustration(s) after you confirmed the sketch.</p>
           <p>Cost may incur for major changes requested for the illustration(s) after you confirmed the sketch.</p>
           <p>Commissions generally take 2-4 weeks to complete(when there is no queue), and no longer than 6 months.</p>
           <p>Any time limit or deadline regarding the commission must be advised when you provide the commission detail.</p>
           <p>All commissions could be posted on social media platforms and this website unless otherwise stated in the invoice.</p>
        </div>
      )}

      {index === 4 && (
         <div>
            <p>Usage Permission</p>
            <p>Please never claim the design and illustration as your own creation.</p>
            <p>You do not need to ask me if you want to use my fan art for social media icons or wallpaper. Credits are appreciated however not necessary in this situation.</p>
            <p>Do not use a commission artwork for any purposes if you are not the one who requested it.</p>
            <p>You can repost my artworks with proper credits linking to the original source.</p>
            <p>All prices listed are for personal use only. You can print out the illustration for yourself but you can not sell it to anyone else. Please request a quote if you want to commission for commercial purposes.</p>
         </div>
      )}

      {index === 5 && (
        <div>
             <p>Content Monertisation</p>
             <p>Additional fees will only apply if your videos are monetised and earn more than $100 for each video.</p>
          </div>
      )}

      {index === 6 && <p>6. Commissions Process</p>}

    </div>

  );

}

export default function Page(){

  const [termsIndex, setTermsIndex] = useState(1);

  function onClickTermHandler(i : any){
    setTermsIndex(i);
  }

    return (
        <main className={ styles.animationsEnabled}>
          <div className={styles.main_grid}>
            <Logo/>
            <TermsMenu termsIndex={termsIndex} onClickTerm={onClickTermHandler}/>
            <TermsContent index={termsIndex} />
            <Footer/>

          </div>
        </main>
      );
}