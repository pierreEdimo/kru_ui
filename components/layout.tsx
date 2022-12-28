import styles from "../styles/layout.module.scss";
import React from "react";

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className={styles.layoutContainer}>
                {children}
            </div>
        </>
    )
}