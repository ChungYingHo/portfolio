import styles from './SkillCard.module.scss'

export default function SkillCard({img, alt, name, react, express}){
    return(
        <div className={styles['icon-container']}>
            <img src={img} alt={alt} className={styles['circle-icon']}/>
            <p>{name}</p>
        </div>
    )
}