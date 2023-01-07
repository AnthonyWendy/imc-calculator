import { level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: level
}

export const GridItem = ({ item}: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gradIcon}>
                <img src={item.icon == 'up' ? upImage:downImage} alt="" width="30"/>
            </div>
            <div className={styles.gradTitle}>{item.title}</div>
            <div className={styles.gradInfo}>
                <>
                    O seu IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}