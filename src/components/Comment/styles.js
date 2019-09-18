import styled from 'styled-components'

export const SRowItem = styled.li`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px

    width: 68%;
    height: 200px;
    
    border-radius: 20px;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 
                0px 0px 1px 0px rgba(0,0,0,0.14), 
                0px 2px 1px -1px rgba(0,0,0,0.12);

    .img-box {
         width: 42px;
         height: 42px;
         margin: 0 2%;
         overflow: hidden;
         display: flex;
         align-self: center;
         position: relative;
         border-radius: 20px;
    }

    .comment {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-evenly;
        
        padding: 0 2%;
        width: 100%;
        height: 100%;
    }
    
    .comment-header {
        width: 100%;
        display: flex;
        h1 {margin:0; font-size: 24px; font-weight: 700;}
        span {font-size: 12px;}
        span.rate-note {font-size: 20px; font-weight: 600;}
    }

    .comment-note {
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
        font-size: 18px;
        padding: 0 4%;
    }

    .data1 {
        font-size: 24px;
        padding: 0 8px;
    }

    .data2 {
        font-size: 8px;
        display: flex;
        align-items: flex-end;
        margin-bottom: 4px;
    }

    @media (max-width: 425px) {

        width: 100%;
        height: 300px;

        .comment-header {
            padding: 0 4%;
        }
        
    }

`


export const SFigure = styled.div `
    margin: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: 50%;
    width: 42px;
    height: 42px;
    cursor: pointer;
`