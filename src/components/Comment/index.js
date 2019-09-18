import React from 'react'
import { SRowItem, SFigure } from './styles';
import Avatar from '../../assets/avatar-icon.png';


const Comment = ( { comment } ) => {

    return (
        
        <SRowItem className="row-item">
            <div className="comment">
                <div className="comment-header">
                    <div className="img-box">
                        <SFigure image={Avatar}/>
                    </div>
                    <div className="comment-stats">
                        <h1>{comment.alias}</h1>
                        <div>
                            <span>rated </span> 
                            <span className="rate-note">{comment.rating.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
                <div className="comment-note">{comment.note}</div>
                <div className="rate"></div>
            </div>     
        </SRowItem>
    );
}

export default Comment;