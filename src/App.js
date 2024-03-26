import React, { memo, useEffect, useReducer, useState } from 'react';
import Meals from './Components/Meals/Meals';
import CartContext from './Store/cart-context';
import FilterInput from './Components/UI/FilterInput/FilterInput';
import Cart from './Components/UI/Cart/Cart';
import { cartReducer } from './reducer/CartReducer';

// 模拟一组食物数据
const MEALS_DATA = [
  {
      id: '1',
      title: '汉堡包',
      desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
      price: 12,
      img: '/img/meals/1.png'
  },
  {
      id: '2',
      title: '双层吉士汉堡',
      desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
      price: 20,
      img: '/img/meals/2.png'
  },
  {
      id: '3',
      title: '巨无霸',
      desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
      price: 24,
      img: '/img/meals/3.png'
  }, {
      id: '4',
      title: '麦辣鸡腿汉堡',
      desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
      price: 21,
      img: '/img/meals/4.png'
  }, {
      id: '5',
      title: '板烧鸡腿堡',
      desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
      price: 22,
      img: '/img/meals/5.png'
  }, {
      id: '6',
      title: '麦香鸡',
      desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
      price: 14,
      img: '/img/meals/6.png'
  }, {
      id: '7',
      title: '吉士汉堡包',
      desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
      price: 12,
      img: '/img/meals/7.png'
  }
];

const App = memo(() => {
  const [mealsData, setMealsData] = useState(MEALS_DATA);
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0
  })

  // useEffect(() => {
  //   const myHeaders = new Headers();
  //   myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

  //   const requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:4523/m1/1505156-0-default/api/student", requestOptions)
  //       const result = await response.text()
  //       console.log(result)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  //   fetchData()
  // }, [])
  
  // 存储购物车的数据
  // 商品，商品总数，商品总价
  // const [cartData, setCartData] = useState({
  //   items: [],
  //   totalAmount: 0,
  //   totalPrice: 0
  // });

  // 过滤函数
  const filterHandler = (keyword) => {
    // 如果传递一个空的字符串,默认匹配全部
    const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1)
    setMealsData(newMealsData)
  }


  return (
    <CartContext.Provider value={{...cartState, cartDispatch}}>
      <div>
        <FilterInput onFilter={filterHandler}></FilterInput>
        <Meals mealsData={mealsData}></Meals> 
        <Cart></Cart>
      </div>
    </CartContext.Provider>
    
  )
})

export default App
