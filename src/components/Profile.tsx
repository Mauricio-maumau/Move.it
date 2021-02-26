import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);

    return (
            <div className={styles.profileContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/pt/0/02/Homer_Simpson_2006.png" alt="imagem do homer"/>
            <div>
               <strong>Mauricio Maxuel</strong>
               <p>
                   <img src="icons/level.svg" alt="Level"/>
                   Level {level}
               </p>
            </div>
        </div>
    );
}