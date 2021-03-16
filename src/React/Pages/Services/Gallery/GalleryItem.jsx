import React, {useState} from 'react';
import Lightbox from 'React/Shared/Lightbox/Lightbox';
import ChefNames from './ChefNames.jsx';
import Cost from './Cost.jsx';
import styled from 'styled-components';

const GalleryItem = ({item}) => {

    const [showLightbox, showLightBoxUpdate] = useState(false);

    const handleOnHide= () => {
        showLightBoxUpdate(false);
    }
    const handleOnShow = () => {
        console.log('HELLO');
        showLightBoxUpdate(true);
    }
    
    const des = item.description;
    //console.log('description is', des.length, des );

    return (
        
        <GalleryItemStyled className='GalleryItem'>
            <div className = 'piece' onClick = {handleOnShow}>
                <img src = {item.image } alt = {item.title} />
                <h2>{item.title} </h2> 
                <h3>{item.category}</h3>
            </div>
            <Lightbox
                show = { showLightbox}
                onHide = { handleOnHide}>
                    {/* des[] = item.description; */}
                    <img src = {item.image } alt = {item.title} />
                    {<h2>{item.title}</h2>}
                    <div>
                        <div className ='lightBoxCol'>Chef
                          <div className='chefCost'>
                          {
                                des.map ( (d,idx) => {
                                return <ChefNames key = {idx} d = {d}/>
                                })
                            }
                          </div>
                            
                          
                        
                        </div>
                        
                        <div className ='lightBoxCol'>Cost
                          <div className='chefCost'>
                          {
                                des.map ( (d,idx) => {
                                return <Cost key = {idx} d = {d}/>
                                })
                            }
                          </div>
                            
                        
                        </div>
                        
                    </div>
                    <div>
                        {/* <div className = 'lightBoxMenu'>
                            {item.description[0].chef}
                        </div>
                        <div className = 'lightBoxMenu'>
                            {item.description[0].cost}
                        </div>  */}
                        {/* {
                        des.map ( (d,idx) => {
                           return <ChefNames key = {idx} d = {d}/>
                        })
                        } */}
                        
                    

                    </div>
                    
                        
                        
                        
                    
                    
                    
            </Lightbox>

        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;
    margin: 10px;

    .piece {
        h2 {
        position: absolute;
        bottom:0px; left: 0px; right: 0px;
        background-color: rgba(255,255,255,0.66);
        margin: 0px;
        padding: 5px;

        }

        h3 {
        position: absolute;
        top: 0px; left:0px; right: 0px;
        background-color: rgba(255,255,255,0.749);
        margin: 0px;
        padding: 5px;
        text-align: right;
        }
    }

    .Lightbox {
        
        image {
            display: block;
        max-width: 100%;
        }
        h2 {
            background-color: maroon;
            color: white;
            padding: 10px;
            margin: 0px;
        }
       
    }

    
    .lightBoxCol {
        /* margin-top: 30px; */

        
        /* margin: 30px;  */
        display: inline-block;
        font-size: 25px;
        margin: 20px;
        padding: 10px;
        
        color: maroon;

    }

    .chefCost {
        padding: 10px;
        font-size: 15px;
        color: black;
    }

    
    
       

    
    
`;