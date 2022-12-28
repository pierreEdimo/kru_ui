import {KruTransaction} from "../models/transaction.type";
import styles from "../styles/transaction.module.scss";
import Image from "next/image";
import Link from "next/link";

export function TransactionList({transactions}: { transactions: KruTransaction[] }) {
    return (
        <div className={styles.transactionListContainer}>
            {
                transactions.map((transaction, index) => (
                        <Link href={"/"} style={{fontWeight: "lighter"}} key={index}>
                        <div className={styles.transactionContainer}>
                            <div style={{display: "flex", gap: "20px"}}>
                                <Image src={transaction.imageUrl} alt={"author-image"} width={50} height={50}
                                       style={{verticalAlign: "middle", borderRadius: "50%", objectFit: "cover"}}/>
                                <div>
                                    <p style={{fontWeight: "bold"}}>{transaction.name}</p>
                                    <p style={{
                                        fontSize: "14px",
                                        fontWeight: "light"
                                    }}>{transaction.createdDate} . {transaction.raison} </p>
                                </div>
                            </div>
                            <p style={{fontWeight: "bold"}}>
                                -XAF{transaction.amount}
                            </p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );

}