import styles from './Home.module.scss'

export default function Home(){
    return(
        <div className={styles.container}>
            <div className={styles['img-container']}>
                <img src={require('../../assets/self-01-1.png')} alt="Jeremy" className={styles.photo}/>
            </div>

            <div className={styles.detail}>
                <h3>Greeting!</h3>
                <h1>I am <span style={{color: '#ff6600'}}>Chung-Ying</span></h1>
                <p>
                    I am a professional Front-End developer, dedicated to achieving excellence in websites and applications, to create beautiful and engaging user experiences.
                </p>
                <div className={styles['icon-container']}>
                    <img src={require('../../assets/linkedin.png')} alt="linkedin" className={styles.icon} onClick={()=>window.open('https://www.linkedin.com/in/chung-ying-ho-150360233', '_blank')}/>
                    <img src={require('../../assets/github.png')} alt="github" className={styles.icon} onClick={()=>window.open('https://github.com/ChungYingHo', '_blank')}/>
                    <img src={require('../../assets/blogger.png')} alt="blog" className={styles.icon} onClick={()=>window.open('https://vocus.cc/user/@Jeremy_Ho', '_blank')}/>
                </div>
            </div>
        </div>
    )
}