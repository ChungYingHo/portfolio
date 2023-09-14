import styles from './Header.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const navigate = useNavigate()

    // 控制 hamburger
    const handleHamburger = ()=>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h2>Secret Base</h2>
                <ul className={`${styles['ul-hidden']} ${hamburgerOpen  ? styles['open-ul'] : ''}`}>
                    <li onClick={()=>navigate('/home')}>Home</li>
                    <li onClick={()=>navigate('/about')}>About</li>
                    <li onClick={()=>navigate('/skill')}>Skill</li>
                    <li onClick={()=>navigate('/portfolio')}>Portfolio</li>
                </ul>
                <div className={styles.hamburger} onClick={handleHamburger}>
                    <div className={styles.burger}/>
                    <div className={styles.burger}/>
                    <div className={styles.burger}/>
                </div>
            </nav>
        </div>
    )
}