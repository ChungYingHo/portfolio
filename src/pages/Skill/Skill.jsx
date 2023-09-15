import styles from './Skill.module.scss'
import SkillCard from '../../components/SkillCard/SkillCard'

export default function Skill(){
    return(
        <div className={styles.container}>
            <div className={styles['top-area']}>
                <h2>Summary</h2>
                <p>
                    In the field of front-end development, I have the capability to implement <span style={{color: '#ff6600'}}>Responsive Web Design (RWD) </span>and <span style={{color: '#ff6600'}}>integrate APIs</span>. I accelerate website development using popular frameworks like <span style={{color: '#ff6600'}}>React</span> and <span style={{color: '#ff6600'}}>Bootstrap</span>. Furthermore, I possess a basic understanding of back-end frameworks and databases, having built simple projects using Express and MongoDB Atlas. In pursuit of my academic and career goals, I have completed Google's Data Analytics certification course, giving me proficiency in data analysis techniques involving R and SQL, as well as experience with data visualization tool Tableau.
                </p>
            </div>

            <div className={styles['bottom-area']}>
                <div className={styles['sub-container']}>
                    <h3>Front-End</h3>
                    <div className={styles.content}>
                        <SkillCard img={require('../../assets/html.png')} alt={'html'} name={'HTML'}/>
                        <SkillCard img={require('../../assets/css.png')} alt={'css'} name={'CSS'}/>
                        <SkillCard img={require('../../assets/javascript.png')} alt={'javascript'} name={'JavaScript'}/>
                        <SkillCard img={require('../../assets/sass.png')} alt={'scss'} name={'SASS/SCSS'}/>
                        <SkillCard img={require('../../assets/bootstrap.png')} alt={'bootstrap'} name={'Bootstrap'}/>
                        <SkillCard img={require('../../assets/react.png')} alt={'react'} name={'React'}/>
                    </div>
                </div>

                <div className={styles['sub-container']}>
                    <h3>Back-End</h3>
                    <div className={styles.content}>
                        <SkillCard img={require('../../assets/nodejs.png')} alt={'node'} name={'Node.js'}/>
                        <SkillCard img={require('../../assets/express.png')} alt={'express'} name={'Express'}/>
                        <SkillCard img={require('../../assets/MongoDB_ForestGreen.png')} alt={'MongoDB'} name={'MongoDB'}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}