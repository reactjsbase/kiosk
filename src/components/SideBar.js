import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './SideBar.scss';

const SideBar = props => {
  const { totalPrice } = props;

             

  
  const PRICE_CATEGORY_LIST = [
    {
      id: 1,
      title: '상품 금액',
      price: `+${totalPrice.toLocaleString('en')}`,
    },
     
   
  ];

  return (
    <section className="sidebar">
      <div className="totalAmountOfPrice">
        <ul>
          {PRICE_CATEGORY_LIST.map(ele => (
            <ItemPrice key={ele.id} title={ele.title} price={ele.price} />
          ))}
        </ul>
        <div className="expectedPrice">
          <p>결제 예상 금액</p>
          <p>
            <span>{(totalPrice).toLocaleString('en')}</span>
            <span>원</span>
          </p>
        </div>
        <button>{`${(totalPrice).toLocaleString(
          'en'
        )}원 주문하기`}</button>
      </div>
    </section>
  );
};

export default SideBar;