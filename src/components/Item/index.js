import React from 'react'
import { SRowItem, SFigure } from './styles';


const Item = ( { wine, index, onClickForDetails } ) => {
    function handleClick(e){
        e.preventDefault();
        onClickForDetails(index);
    }

    return (
        
        <SRowItem className="row-item">
            <div className="img-box">
                <SFigure image={wine.thumb} onClick={handleClick}/>
            </div>
            <div className="wine-desc">
                <div className="title"><a href={`/wine/${index}`} onClick={handleClick}>{wine.name}</a></div>
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
            
        </SRowItem>
    );
}

export default Item;