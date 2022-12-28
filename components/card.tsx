import React from "react";
import styles from "../styles/card.module.scss";

export function Card({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    );
}