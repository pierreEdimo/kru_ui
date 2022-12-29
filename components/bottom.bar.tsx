import styles from "../styles/bottom.bar.module.scss";
import React from "react";
import {Layout} from "./layout";
import home from "../public/home.png";
import operation from "../public/operation.png";
import wallet from "../public/wallet.png";
import transaction from "../public/transaction.png";
import Link from "next/link";
import Image from "next/image";


interface BottomBarProps {
}

const BottomBar: React.FC<BottomBarProps> = () => {
    return (
        <>
            <div className={styles.bottomBar}>
                <Layout>
                    <div className={styles.bottomBarContent}>
                        <Link href={"/"}>
                            <Image src={home} alt={"home-image"} width={35} height={35}/>
                        </Link>
                        <Link href={"/transaction"}>
                            <Image src={operation} alt={"paiement-image"} width={35} height={35}/>
                        </Link>
                        <Link href={"/portefeuille"}>
                            <Image src={wallet} alt={"wallet-image"} width={35} height={35}/>
                        </Link>
                        <Link href={"/historique"}>
                            <Image src={transaction} alt={"transaction-image"} width={35} height={35}/>
                        </Link>
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default BottomBar;