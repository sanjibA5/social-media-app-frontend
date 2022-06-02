import React from 'react'
import {TrendsData} from '../../../Data/TrendData'
import style from './Trends.module.css'


const Trends = () => {
  return (
    <div className={style.TrendCard}>
        <h3>Trends for You</h3>
        {
            TrendsData.map((trend)=>{
                return(
                <div className={style.trend}>
                    <span># {trend.name}</span>
                    <span> {trend.share}K share</span>
                </div>
                )
            })
        }
       
    </div>
  )
}

export default Trends