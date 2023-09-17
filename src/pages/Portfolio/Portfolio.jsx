import styles from './Portfolio.module.scss'
import { useState } from 'react'
import PortCard from '../../components/PortCard/PortCard'
import Toolbar from '../../components/Toolbar/Toolbar'
import { portfolioList } from '../../data/portfolio-list'
import { practiceList } from '../../data/practice-list'

export default function Portfolio(){
    const [activePage, setActivePage] = useState('selected')
    return(
        <div className={styles.container}>
            <Toolbar setActivePage={setActivePage} activePage={activePage}/>
            {activePage === 'selected' && 
                <div>
                    {portfolioList.map((data)=>{
                        return(
                            <PortCard key={data.id} name={data.name} img={data.img} des={data.des} url={data.url} rwd={data.rwd}/>
                        )
                    })}
                </div>
            }
            {activePage === 'practice' &&
                <div>
                    {practiceList.map((data)=>{
                        return(
                            <PortCard key={data.id} name={data.name} img={data.img} des={data.des} url={data.url} rwd={data.rwd}/>
                        )
                    })}
                </div>
            }
        </div>
    )
}