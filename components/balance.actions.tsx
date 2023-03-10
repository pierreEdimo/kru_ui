import styles from "../styles/Home.module.scss";
import Image, {StaticImageData} from "next/image";

export function BalanceActions({title, imageSrc}: { title: string, imageSrc: StaticImageData, }) {
    return (
        <div className={styles.balanceActionContainer}>
            <Image src={imageSrc} alt={"action-image"} width={40} height={40}/>
            <p style={{textAlign: "center"}}>{title}</p>
        </div>
    )
}