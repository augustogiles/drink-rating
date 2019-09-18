import styled from 'styled-components'

export const SContent = styled.div`
    background-color: #f7f3f0;
    padding: 8% 10%; 

    .content-header {
        margin: 0;
        h1 {margin: 0; font-size: 24px}
        h2 { margin:0; font-weight: 400; font-size: 20px}
    }

    .content-wrapper {
        display: flex;
        justify-content: space-evenly;
    }

    .img-container {
        height: 400px;

        img {
            height: 100%; 
        }
    } 

    .content-meta {
        display: flex;
        align-items: center;
    }

    .content-desc {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .meta {
        display: flex;
        margin: 0 -8px;
    }

    .block {
        display: flex;
        flex-direction: column;
        padding: 0 8px;
        margin-left: 0;
    }

    .block-desc {
        font-size:12px;
    }

    .block-meta-data {
        display: flex;
        font-weight: 300;
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
        padding: 4%;
        .content-meta {
            padding: 0;
            margin-left: 5%;

        }
        
        .img-container {
            display: flex;
            align-items: center;
            
            img {
                height: 50%;
            }

        }
    }

`

export const SRowItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    // padding: 10px 15px;
    // margin-top: 10px;
    // border-radius: 20px;
    flex-wrap: wrap;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 
                0px 0px 1px 0px rgba(0,0,0,0.14), 
                0px 2px 1px -1px rgba(0,0,0,0.12);

    .img-box {
         max-width: 100px;
         max-height: 120px;
         overflow: hidden;
         display: flex;
         align-self: center;
         position: relative;
         width: 100%;
         border-radius: 20px;
    }
    img {
        max-width: 100%;
        margin-top: -160%;
    }
    
    a { 
        color: inherit;
        font-weight: 700;
        text-decoration: none;
    } 

    a:hover {
        color: rgb(137, 24, 38);
        text-decoration:none; 
        cursor:pointer;  
    }

    .wine-desc {
        padding: 0 16px;
        height: 108px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title {
        font-size: 20px;
        font-weight: 600;
    }

    .meta {
        display: flex;
        margin: 0 -8px;
    }

    .block {
        display: flex;
        flex-direction: column;
        padding: 0 8px;
        margin-left: 0;
    }

    .block-desc {
        font-size:12px;
    }

    .block-meta-data {
        display: flex;
        font-weight: 300;
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

`

export const SComment = styled.div`
    display: flex
    // padding: 20px 30%;

    h2 { padding: 4% }

    ul {
        display: flex;
        flex-direction: column;
        padding: 6% 12%;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        h2 {}
        
        
    }
`



export const SFigure = styled.a`
    margin: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: 50%;
    width: 100px;
    height: 100px;
    cursor: pointer;
`