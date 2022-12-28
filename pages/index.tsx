import Head from 'next/head'
import {Layout} from "../components/layout";
import {AppBar} from "../components/app.bar";
import {InnerLayout} from "../components/inner.layout";
import styles from "../styles/Home.module.scss";
import {Card} from "../components/card";
import Link from "next/link";
import {BalanceActions} from "../components/balance.actions";
import send from "../public/send-money.png";
import arrow from "../public/arrow.png";
import download from "../public/download.png";
import bill from "../public/bill.png";
import {KruTransaction} from "../models/transaction.type";
import {TransactionList} from "../components/transaction.list";


export default function Home() {

    const TransactionLists: KruTransaction[] = [
        {
            name: "Majorie",
            imageUrl: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            amount: 500.0,
            createdDate: Date.now(),
            raison: "Envoie"
        },
        {
            name: "Taylor",
            imageUrl: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            amount: 240.0,
            createdDate: Date.now(),
            raison: "Paiement"
        },
        {
            name: "Pierrette",
            imageUrl: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            amount: 40.0,
            createdDate: Date.now(),
            raison: "Envoie"
        },
        {
            name: "Odeth",
            imageUrl: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
            amount: 10.0,
            createdDate: Date.now(),
            raison: "Reception"
        },
    ]

    return (
        <>
            <main>
                <Layout>
                    <InnerLayout>
                        <div className={styles.homeFlex}>
                            <section className={styles.mainInfo}>
                                <span className={styles.bodyTitle}>Bienvenu sur kru</span>
                                <div style={{height: 30}}></div>
                                <Card>
                                    <div className={styles.balanceCardContainer}>
                                        <div className={styles.balanceFlex}>
                                            <div>
                                                <h4>Balance</h4>
                                                <p>CMRHLA183932223982</p>
                                                <p style={{fontSize: 14, color: "gray"}}>disponible</p>
                                            </div>
                                            <p style={{fontSize: 32}}><b>XAF</b>1000</p>
                                        </div>
                                        <div className={styles.balanceActionSection}>
                                            <Link href={"/"}>
                                                <BalanceActions title={"Charger"} imageSrc={arrow}></BalanceActions>
                                            </Link>
                                            <Link href={"/"}>
                                                <BalanceActions title={"Envoyer"} imageSrc={send}></BalanceActions>
                                            </Link>
                                            <Link href={"/"}>
                                                <BalanceActions title={"Requete"} imageSrc={download}></BalanceActions>
                                            </Link>
                                            <Link href={"/"}>
                                                <BalanceActions title={"Facture"} imageSrc={bill}></BalanceActions>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                                <div style={{height: 30}}></div>
                                <Card>
                                    <h4>Transactions Recentes</h4>
                                    <div style={{height: 20}}></div>
                                </Card>
                            </section>
                            <section className={styles.contactInfo}>
                                <Card>
                                    <h4>Mes Contacts Recents</h4>
                                </Card>
                                <div style={{height: 30}}></div>
                                <Card>
                                    <h4>Mon Portefeuille</h4>
                                </Card>
                            </section>
                        </div>
                        <div className={styles.mobileHomeContainer}>
                            <span className={styles.bodyTitle}>Bienvenu sur kru</span>
                            <Card>
                                <div className={styles.balanceCardContainer}>
                                    <div className={styles.balanceFlex}>
                                        <div>
                                            <h4>Balance</h4>
                                            <p>CMRHLA183932223982</p>
                                            <p style={{fontSize: 14, color: "gray"}}>disponible</p>
                                        </div>
                                        <p style={{fontSize: 32}}><b>XAF</b>1000</p>
                                    </div>
                                    <div className={styles.balanceActionSection}>
                                        <Link href={"/"}>
                                            <BalanceActions title={"Charger"} imageSrc={arrow}></BalanceActions>
                                        </Link>
                                        <Link href={"/"}>
                                            <BalanceActions title={"Envoyer"} imageSrc={send}></BalanceActions>
                                        </Link>
                                        <Link href={"/"}>
                                            <BalanceActions title={"Requete"} imageSrc={download}></BalanceActions>
                                        </Link>
                                        <Link href={"/"}>
                                            <BalanceActions title={"Facture"} imageSrc={bill}></BalanceActions>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <h4>Mes Contacts Recents</h4>
                            </Card>
                            <Card>
                                <h4>Mon Portefeuille</h4>
                            </Card>
                            <Card>
                                <h4>Transactions Recentes</h4>
                                <div style={{height: 20}}></div>
                            </Card>
                        </div>
                    </InnerLayout>
                </Layout>
            </main>
        </>
    )
}
