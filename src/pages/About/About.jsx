import styles from './About.module.scss'

export default function About(){
    return(
        <div className={styles.container}>
            <div className={styles['sub-container']}>
                <div className={styles.content}>
                    <h2>Education</h2>
                    <div>
                        <h3>2019-2021, National Taiwan University</h3>
                        <p>- Master of Agronomy</p>
                    </div>
                    <div>
                        <h3>2015-2019, National Chiayi University</h3>
                        <p>- Bachelor of Agronomy</p>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2>Experience</h2>
                    <div>
                        <h3>2022-2023, Uni-President Enterprises Corporation</h3>
                        <p>- Business Partner (Business Operations)</p>
                    </div>
                </div>
            </div>

            <div className={styles['sub-container']}>
                <div className={styles.content}>
                    <h2>Certification</h2>
                    <div>
                        <h3>Front-End</h3>
                        <p>- ALPHA Camp Full Stack Web Development Program <span onClick={()=>window.open('https://lighthouse.alphacamp.co/certificates/e3ddc657-fff1-4418-a2a3-26410aba4c76', '_blank')}>(View)</span></p>
                        <p>- Meta Front-End Developer <span onClick={()=>window.open('https://www.coursera.org/account/accomplishments/specialization/certificate/FFURV7RSYVSZ', '_blank')}>(View)</span></p>
                    </div>

                    <div>
                        <h3>Data Analysis</h3>
                        <p>- Google Data Analytics <span onClick={()=>window.open('https://www.coursera.org/account/accomplishments/specialization/certificate/HXFUNXNGK2L5', '_blank')}>(View)</span></p>
                    </div>

                    <div>
                        <h3>Business Analysis</h3>
                        <p>- Wharton's Business Analytics Specialization <span onClick={()=>window.open('https://www.coursera.org/account/accomplishments/specialization/certificate/FRF28NXZEXN3', '_blank')}>(View)</span></p>
                    </div>
                </div>

                <div className={styles.content}>
                    <h2>Contact</h2>
                    <div>
                        <h3>Email: <a href='mailto:ag.cyho@gmail.com '>ag.cyho@gmail.com</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}