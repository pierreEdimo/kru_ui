import React from "react";
import styles from "../styles/inner.layout.module.scss";

export function InnerLayout({children}:{children: React.ReactNode}){
    return (
            <div className={styles.innerLayout}>
                {children}
            </div>
    )
}