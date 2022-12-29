import styles from "../styles/app.bar.module.scss";
import {Layout} from "./layout";
import Link from "next/link";
import bell from "../public/notification (1).png";
import Image from "next/image";
import user from "../public/user (1).png";

export function AppBar({title}: { title: string }) {
    return (
        <header className={styles.appHeader}>
            <Layout>
                <div className={styles.appHeaderContent}>
                    <div className={styles.menuItems}>
                        <h2 className={styles.title}>{title}</h2>
                        <Link href="/">Dashboard</Link>
                        <Link href="/transaction">Transactions</Link>
                        <Link href="/portefeuille">Portefeuilles</Link>
                        <Link href="/historique">Historique</Link>
                    </div>
                    <div className={styles.menuIcons}>
                        <Link href="/">
                            <Image src={bell} alt={"notification-image"} width={25} height={25}/>
                        </Link>
                        <Link href="/">
                            <Image src={user} alt={"user-image"} width={25} height={25}/>
                        </Link>
                    </div>
                </div>
                <div className={styles.mobileAppHeaderContent}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.menuIcons}>
                        <Link href="/">
                            <Image src={user} alt={"user-image"} width={25} height={25}/>
                        </Link>
                    </div>
                </div>
            </Layout>
        </header>
    );
}