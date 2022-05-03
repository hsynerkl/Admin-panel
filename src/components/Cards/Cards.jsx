import React from 'react'
import './Cards.css'
import { CardsData } from '../../Data/Data';
import Card from '../Card/Card';
const Cards = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="Cards">
                {CardsData.map((card, id) => {
                    return (
                        <div className="parentContainer">
                            <Card key={id}
                                title={card.title}
                                color={card.color}
                                barvalue={card.barValue}
                                value={card.value}
                                png={card.png}
                                series={card.series}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards