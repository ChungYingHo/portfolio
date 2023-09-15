import styles from './Portfolio.module.scss'
import PortCard from '../../components/PortCard/PortCard'
import { portfolioList } from '../../data/portfolio-list'

export default function Portfolio(){
    return(
        <div className={styles.container}>
            {portfolioList.map((data)=>{
                return(
                    <PortCard key={data.id} name={data.name} img={data.img} des={data.des} url={data.url}/>
                )
            })}
        </div>
    )
}