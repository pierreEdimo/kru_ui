import {Layout} from "../components/layout";
import {InnerLayout} from "../components/inner.layout";
import homeStyles from "../styles/Home.module.scss";
import styles from "../styles/paiement.module.scss";
import {Card} from "../components/card";
import Link from "next/link";
import TransactionForm from "../components/transaction.form";

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
                            <TransactionForm/>
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
                                <TransactionForm/>
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