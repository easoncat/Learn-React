export function cartReducer(state, action) {
    const newCart = {...state};
    switch(action.type) {
      case "ADD":
        if(newCart.items.indexOf(action.meal) === -1) {
            newCart.items.push(action.meal);
            action.meal.amount = 1;
          } else {
            action.meal.amount+=1;
        }
          newCart.totalAmount += 1
          newCart.totalPrice += action.meal.price
        return newCart
      case "REMOVE":
        action.meal.amount -= 1;

        // 检查商品数量是否为 0
        if(action.meal.amount === 0) {
        // 从购物车中移除商品
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
        }

        newCart.totalAmount -= 1
        newCart.totalPrice -= action.meal.price
        return newCart
      case "CLEAR":
        // 清空购物车商品
        newCart.items.forEach(item => {delete item.amount})
        newCart.items = [];
        newCart.totalAmount = 0;
        newCart.totalPrice = 0;
        return newCart
      default:
        return state;
    }
  }