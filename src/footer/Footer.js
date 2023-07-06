import style from './Footer.module.css';
import React from 'react';
import { format } from 'date-fns'

class Footer extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.line}></div>
        <div className={style.row}>
          <div className={style.date}>© 2018-{format(new Date(), 'yyyy')} RitmStyle</div>
          <div className={style.text}>Сделано d-e-n.info</div>
        </div> 
      </div>
    );
  }  
}

export default Footer;
