import React from 'react'
import { SContent, SComment } from './styles';
import Comment from '../../components/Comment'


const ItemDescription = ({ wine, comments }) => {

    const wineType = {
        "red": "Red",
        "white": "White",
        "rose": "Rosé",
        "fortified": "Fortified",
        "sparkling": "Sparkling",

    }

    return (
        <div className="content-detail">
            <SContent>
                <div className="content-wrapper">

                    <div className="img-container"> <img alt="img-detail" src={wine.src} /> </div>
                    <div className="content-meta">
                        <div className="content-desc">
                            <div className="content-header">
                                <h2 className="winery">{wine.winery}</h2>
                                <h1 className="wine-name">{wine.name}</h1>
                            </div>
                            <div className="location">{`${wineType[wine.type]} wine from ${wine.region} - ${wine.origin}`}</div>
                            <div className="meta">
                                <div className="block">
                                    <div className="block-desc">Average Rating</div>
                                    <div className="block-meta-data">
                                        <div className="data1">{wine.ratings_average.toFixed(1)}</div>
                                        <div className="data2">{wine.ratings_count} ratings</div>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="block-desc">Average Price</div>
                                    <div className="block-meta-data">
                                        <div className="data1">€ {wine.amount.toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SContent>
            <SComment>
                <h2>Ratings</h2>
                <ul className="comments-wrapper">
                    {comments.map(comment => <Comment comment={comment}/>)}
                </ul>
            </SComment>
        </div>
    );
}

export default ItemDescription;