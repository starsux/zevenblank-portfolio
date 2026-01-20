"use client"
import Image from "next/image";
import styles from "@/app/style/home.module.css";
import stylesForm from "@/app/style/form.module.css";

import Footer from "@/app/partials/Footer";
import { AtSign } from 'lucide-react';
import { Mail } from 'lucide-react';

import { Header, StatusCode } from "../partials";
import { useState } from "react";
import clsx from "clsx";

interface formProps {
    step: any;
    updateData: any;
    data: any;
    setStep: any;

}

interface summaryProps {
    type: string;
    background: string;
    characters: number;
    price: number;
}

function Form({ step, setStep, updateData, data }: formProps) {

    const [isEmail, setIsEmail] = useState(false);

    return (
        <div className={stylesForm.form_container}>
            {step === 0 && (
                <div className={stylesForm.step_content}>
                    <p className={stylesForm.rules_text}>
                        1. Please read the TOS (Terms Of Service). By continuing to fill out this form you accept it.
                        <br />
                        2. A payment plan is available for commissions over $50.
                        <br />
                        3. All payments are made through PayPal.
                        <br />
                        4. I have the right to reject a commission if I think it does not suit my style or I'm not confident with the theme.
                        <br />
                        5. If you need a work for a determinated deadline let me know in the section "Additional message".
                        <br />
                        6. You'll receive a confirmation email or message when i receive your request.
                        <br />
                        7. All progress and final work are sent via email or google drive.
                        <br />
                        8. If you have questions, please write it in the section "Additional message".
                        <br />
                        9. Be as clear as possible, communication is important for good work, I won't judge you just let me know.
                        <br />
                    </p>
                    <button onClick={() => setStep(1)} className={stylesForm.primary_btn}>
                        ACCEPT & NEXT
                    </button>
                </div>
            )}

            {step === 1 && (
                <div className={stylesForm.step_content}>
                    <div className={stylesForm.input}>
                        <span>
                            <AtSign />

                            {isEmail && <Mail />}
                        </span>
                        <input
                            type="text"
                            placeholder="Discord User / Email"
                            onChange={(e) => updateData({ contact: e.target.value })}

                        />
                    </div>
                    <select onChange={(e) => updateData({ type: e.target.value })}>
                        <option value="sketch">Sketch</option>
                        <option value="illustration">Full Illustration</option>
                        <option value="character-design">Character design</option>
                    </select>
                    <div className={stylesForm.btn_group}>
                        <button onClick={() => setStep(0)} className={stylesForm.outline_btn}>BACK</button>
                        <button onClick={() => setStep(2)} className={stylesForm.primary_btn}>NEXT</button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className={stylesForm.step_content}>
                    <textarea placeholder="Describe your idea..." />
                    <div className={stylesForm.upload_zone}>
                        <span>Drag & Drop references or paste links</span>
                    </div>
                    <button className={stylesForm.primary_btn}>SEND ORDER</button>
                </div>
            )}
        </div>
    );
}

function Summary({ summary }: { summary?: summaryProps }) {
    return (


        <div className={stylesForm.order_container}>
            <h2 className={stylesForm.galleryTitle}>Summary</h2>
            <div className={stylesForm.order_item_container}>
                <div className={stylesForm.order_item}>
                    <p>Type:</p>
                    <p>{summary?.type}</p>
                </div>
                <div className={stylesForm.order_item}>
                    <p>Background:</p>
                    <p>
                        {summary?.background}
                    </p>

                </div>
                <div className={stylesForm.order_item}>
                    <p>Characters:</p>
                    <p>
                        {summary?.characters}
                    </p>

                </div>
                <div className={stylesForm.order_item}>
                    <p>Price: </p>

                    <p>$ {summary?.price}</p>


                </div>
            </div>
            <div className={stylesForm.order_footer}>
                The price may be vary depending on the complexity of the work.
            </div>
        </div>
    );
}

function Progress({ progress }: { progress: number }) {
    return (
        <div className={stylesForm.progress_container}>
            <h2 className={stylesForm.galleryTitle}>Progress</h2>
            <div className={stylesForm.progressBar}>
                <div className={clsx(
                    stylesForm.progressItem,
                    progress >= 0 && stylesForm.progressActive
                )}>
                    <p>Rules</p>
                    <span>{progress >= 0 ? "◈" : "◇"}</span>
                </div>
                <div className={clsx(
                    stylesForm.progressItem,
                    progress >= 1 && stylesForm.progressActive
                )}>
                    <p>Details</p>
                    <span>{progress >= 1 ? "◈" : "◇"}</span>
                </div>
                <div className={clsx(
                    stylesForm.progressItem,
                    progress >= 2 && stylesForm.progressActive
                )}>
                    <p>References</p>
                    <span>{progress >= 2 ? "◈" : "◇"}</span>
                </div>
            </div>
        </div>
    );
}

const defaultSummary: summaryProps = {
    type: "---",
    background: "---",
    characters: 1,
    price: 0,
};

export default function Page() {

    const [summary, setSummary] = useState<summaryProps>(defaultSummary);
    const [progress, setProgress] = useState(0);

    return (
        <main className={styles.animationsEnabled}>
            <div className={styles.main_grid}>

                <Header />
                <Progress progress={progress} />
                <Form step={progress} setStep={setProgress} updateData={null} data={null} />
                <Summary summary={summary} />
                <Footer />
            </div>
        </main>
    );
}