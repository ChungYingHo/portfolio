import styles from './PortCard.module.scss'

export default function PortCard({name, img, des, url, rwd}){
    return(
        <div className={styles.container}>
            <img src={img} alt={name} onClick={()=>window.open(url, '_blank')}/>
            <div className={styles.content}>
                <h3>{name} <span>{rwd}</span></h3>
                <p>{des}</p>
                <a href={url} target='_blank' rel="noreferrer">View the Website</a>
            </div>
        </div>
    )
}