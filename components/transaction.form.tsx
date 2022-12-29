import styles from "../styles/paiement.module.scss";
import homeStyles from "../styles/Home.module.scss";
import {Card} from "./card";
import React from "react";
import Link from "next/link";

interface transactionFormProps {
}

const TransactionForm: React.FC<transactionFormProps> = () => {
    return (
        <>
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
                <button type={"button"}>Envoyer</button>
            </div>
        </>
    )
}

export default TransactionForm;