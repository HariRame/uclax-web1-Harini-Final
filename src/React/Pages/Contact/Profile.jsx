import React from 'react';
import styled from 'styled-components';
import Player from './Player.jsx';
import {videos} from './videos.js';



const Profile = () => {
  // console.log('videos is',videos);

    return (
        <ProfileStyled className='Profile'>
            
                <div className ="wrk">See our chefs at work.</div>
              <div>
                   
                 
                  {
                      videos.map( (v) => {
                          console.log('v is', v.url);
                        return <Player urls = {v.url} titles = {v.title} />
                        })
                   } 
              
                
                <div>{videos.title}</div> 
              </div>
        </ProfileStyled> 
    );
}

export default Profile;

const ProfileStyled = styled.div`
      width: 50%;
      //margin-top: 100px;
      .wrk {
          
          height: 10px;
          text-align: center;
           font-size: 40px;
           font-weight: 20px;
           color: #9c1a1a;
           margin-bottom: 10px;
           padding: 30px;
      }
        
    
`;