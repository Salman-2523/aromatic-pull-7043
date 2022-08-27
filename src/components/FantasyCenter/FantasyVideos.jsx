import React from 'react';
import Iframe from 'react-iframe'
import "../../styles/FantasyVideos.css"


const FantasyVideos = () => {
  return (
    <div className='fnaVid'>
    
    <div className='heading'>
    <p>FANTASY VIDEOS</p>
      
    </div>
    <hr className='hline'/>


    <div className='griidC'>
   <div>
    <Iframe url="https://www.youtube.com/embed/mSdYz5kI7ks" className='videsContent'/>
    <h1 className='videsContent2'>Kaun hogi aapki aaj ki fantasy picks? WI v IND, 3rd T20I, Fantasy Preview | Cricket.com</h1>
   </div>
   <div>
   <Iframe url="https://www.youtube.com/embed/mSdYz5kI7ks" className='videsContent'/>
    <h1 className='videsContent2'>Kaun hogi aapki aaj ki fantasy picks? WI v IND, 3rd T20I, Fantasy Preview | Cricket.com</h1>
   </div>
   <div>
   <Iframe url="https://www.youtube.com/embed/OhlWDTNXnNA" className='videsContent'/>
    <h1 className='videsContent2'>Kaun hogi aapki aaj ki fantasy picks? WI v IND, 2nd T20I, Fantasy Preview | Cricket.com</h1>
   </div>
   <div>
   <Iframe url="https://www.youtube.com/embed/JWWS4OIQDf8" className='videsContent'/>
    <h1 className='videsContent2'>Bangladesh vs New Zealand, T20I series, Mirpur I Fantasy Research Centre I Cricket.com</h1>
   </div>
    </div>
  </div>
  );
}

export default FantasyVideos;
