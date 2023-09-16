import styles from './Toolbar.module.scss'

export default function Toolbar({setActivePage, activePage}){
    return(
        <div className={styles.container}>
            <h3 className={activePage === 'selected' ? styles.selected : ''} onClick={()=>setActivePage('selected')}>Selected Works</h3>
            <h3 className={activePage === 'practice' ? styles.selected : ''} onClick={()=>setActivePage('practice')}>Practice Projects</h3>
        </div>
    )
}