import {Layout} from "../components/layout";
import {InnerLayout} from "../components/inner.layout";
import homeStyles from "../styles/Home.module.scss";
import styles from "../styles/paiement.module.scss";
import {Card} from "../components/card";
import Link from "next/link";

export default function Transaction() {

    function valider() {
        console.log("Hello World");
    }

    return (
        <>
            <Layout>
                <InnerLayout>
                    <div className={styles.mainBody}>
                        <div className={styles.paimentForm}>
                            <span className={homeStyles.bodyTitle}>Nouvelle transaction</span>
                            <div style={{height: "20px"}}></div>
                            <Card>
                                <form className={styles.customForm}>
                                    <input type={"text"} placeholder={"Nom d'utilisateur"}/>
                                    <input type={"text"} placeholder={"Numero de compte unique"}/>
                                    <input type={"number"} placeholder={"0"}/>
                                    <select>
                                        <option value={"XAF"}>XAF</option>
                                    </select>
                                    <select>
                                        <option value={"1"}>Envoie</option>
                                        <option value={"2"}>Requette de paiement</option>
                                    </select>
                                    <textarea placeholder={"Quelle est le but de cette transaction?"}></textarea>
                                </form>
                            </Card>
                            <div style={{height: "30px"}}></div>
                            <div className={styles.validationButton}
                                 style={{float: "right", display: "flex", gap: "20px"}}>
                                <Link href={"/"}>
                                    <button type={"button"}>Annuller</button>
                                </Link>
                                <button onClick={valider} type={"button"}>Envoyer</button>
                            </div>
                        </div>
                        <div className={styles.paimentTransaction}>
                            <Card>
                                <h4>Contacts recents</h4>
                            </Card>
                            <div style={{height: "30px"}}></div>
                            <Card>
                                <h4>Rep&#233;ter une Transaction</h4>
                            </Card>
                        </div>
                    </div>
                    <div className={styles.mobileMainBody}>
                        <div className={styles.mobilePaimentForm}>
                            <span className={homeStyles.bodyTitle}>Nouvelle transaction</span>
                            <div>
                                <Card>
                                    <form className={styles.customForm}>
                                        <input type={"text"} placeholder={"Nom d'utilisateur"}/>
                                        <input type={"text"} placeholder={"Numero de compte unique"}/>
                                        <input type={"number"} placeholder={"0"}/>
                                        <select>
                                            <option value={"XAF"}>XAF</option>
                                        </select>
                                        <select>
                                            <option value={"1"}>Envoie</option>
                                            <option value={"2"}>Requette de paiement</option>
                                        </select>
                                        <textarea placeholder={"Quelle est le but de cette transaction?"}></textarea>
                                    </form>
                                </Card>
                                <div style={{height: "20px"}}></div>
                                <div className={styles.validationButton}
                                     style={{float: "right", display: "flex", gap: "20px"}}>
                                    <Link href={"/"}>
                                        <button type={"button"}>Annuller</button>
                                    </Link>
                                    <button onClick={valider} type={"button"}>Envoyer</button>
                                </div>
                            </div>
                            <Card>
                                <h4>Contacts recents</h4>
                            </Card>
                            <Card>
                                <h4>Rep&#233;ter une Transaction</h4>
                            </Card>
                        </div>
                    </div>
                </InnerLayout>
            </Layout>
        </>
    )
}