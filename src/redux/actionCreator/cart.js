// import { sizeProduct, idProduct, timeProduct, deliveryProduct, counterUpAction
//   , counterDownAction, pictProduct, nameProduct, priceProduct } from "./actionString"

// export const counterUp = () => ({
//     type: counterUpAction
// });

// export const counterDown = () => ({
//     type: counterDownAction
// })
// export const setIdProduct = (id) => {
//     return {
//       type: idProduct,
//       payload: {
//         id
//       }
//     }
//   }
  
//   export const setSize = (size) => {
//     return {
//       type: sizeProduct,
//       payload: {
//         size
//       }
//     }
//   }
  
//   export const setDelivery = (delivery) => {
//     return {
//       type: deliveryProduct,
//       payload: {
//         delivery
//       }
//     }
//   }
  
//   export const setTime = (time) => {
//     return {
//       type: timeProduct,
//       payload: {
//         time
//       }
//     }
//   }
  
//   export const setPictures = (pictures) => {
//     return {
//       type: pictProduct,
//       payload: {
//         pictures
//       }
//     }
//   }
  
//   export const setName = (name) => {
//     return {
//       type: nameProduct,
//       payload: {
//         name
//       }
//     }
//   }
  
//   export const setPrice = (price) => {
//     return {
//       type: priceProduct,
//       payload: {
//         price
//       }
//     }
//   }


import { setCartFulfilled } from "./actionString";

export const AddCart = (size, delivery, id) => ({
  type: setCartFulfilled,
  productId: id,
  size: size,
  delivery: delivery 
})
