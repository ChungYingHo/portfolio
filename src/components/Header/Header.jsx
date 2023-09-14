import styles from './Header.module.scss'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header(){
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    // 控制 hamburger
    const handleHamburger = ()=>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h2>Secret Base</h2>
                <ul className={`${styles['ul-hidden']} ${hamburgerOpen  ? styles['open-ul'] : ''}`}>
                    <li onClick={()=>navigate('/home')}className={location.pathname.startsWith("/home") ? styles.isActive : ''}>Home</li>
                    <li onClick={()=>navigate('/about')} className={location.pathname.startsWith("/about") ? styles.isActive : ''}>About</li>
                    <li onClick={()=>navigate('/skill')} className={location.pathname.startsWith("/skill") ? styles.isActive : ''}>Skill</li>
                    <li onClick={()=>navigate('/portfolio')} className={location.pathname.startsWith("/portfolio") ? styles.isActive : ''}>Portfolio</li>
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