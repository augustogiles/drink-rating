import styled from 'styled-components'

export const SRowItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    margin-top: 10px;
    border-radius: 20px;
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

    @media (max-width: 425px) {
        justify-content: center;

        .img-box {
            display: flex;
            justify-content: center;
            max-width: 100%;
            border-radius: 20px;

            a {
                border-radius: 20px
            }
        }

        .wine-desc {
            align-items: center;

            .title {
                display: flex;
                padding-top: 2%;
                
                a:hover {
                    color: rgb(137, 24, 38);
                    text-decoration:none; 
                    cursor:pointer;  
                }
            }
        }
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