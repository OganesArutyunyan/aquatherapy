import style from './Format.module.css';
import React from 'react';
import leftBlue from './left blue.png';
import rightBlue from './right blue.png';
import formatPicture from './formatPicture.png';

class Format extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.title}>        
          <img src={leftBlue} />
          <div className={style.text}>Новый формат сеансов</div>
          <img src={rightBlue} />        
        </div>

        <div className={style.row}>
          <div className={style.column}>
              <div className={style.date}>03.03.2023</div>
              <div className={style.subtitle}>Новый формат сеансов</div>
              <div className={style.itemText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget massa vitae tempus at pretium lacus viverra. 
              Vitae libero vivamus quis enim quam vitae dictumst nulla duis. 
              Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. 
              Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. 
              Tristique in leo donec proin odio eget. 
              Neque ut in egestas lacus sit nunc, nec. 
              Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.<br></br><br></br>
              Tempor facilisis tellus ac, odio. A amet congue tristique nibh malesuada lectus. Purus quam dapibus rhoncus iaculis amet tristique. 
              Mattis fusce lorem fames mauris orci rhoncus, amet fringilla. Quis integer vitae at vitae urna etiam sed eu sit.<br></br><br></br>
              Vitae turpis ullamcorper habitant fermentum aliquet volutpat. </div>              
          </div>

          <div className={style.picture}>
              <img src={formatPicture}/>
          </div>
        </div>

      </div>
    );
  }  
}

export default Format;
