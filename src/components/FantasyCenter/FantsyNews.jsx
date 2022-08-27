import React from 'react';
import "../../styles/FantsyNews.css";

const FantsyNews = () => {
  return (
    <div className='FanN'>
      <div className='heading'>
        <p>FANTASY PREVIEWS</p>
        <hr className='hline'/>
      </div>
      <div className=' newscontent'>
      <div className='firstc'>
        <div>
            <img src='https://images-cricketcom.imgix.net/news-1661337129569?auto=compress&dpr=2&fit=clip&w=976&h=400' alt='img1'/>
        </div>
        <div >
            <p className='newscontenttxt'>Fantasy: Bank on Root, Rabada and Anderson to deliver</p>
            <p className='newscontenttxt2'>Here are a few tips that could help you create your <br className='xx'/> fantasy XI for the<br className='xx'/> 21 August</p>
        </div>
      </div>
      <div className='firstc'>
      <div>
            <img src='https://images-cricketcom.imgix.net/news-1661091020805' alt='img1'/>
        </div>
        <div >
            <p className='newscontenttxt'>Fantasy: Finn Allen and bowlers to shine again?</p>
            <p className='newscontenttxt2'>Here are a few tips that could help you create your <br className='xx'/> fantasy XI for the<br className='xx'/> 21 August</p>
        </div>
      </div>

      </div>
    </div>
  );
}

export default FantsyNews;
