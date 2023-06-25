// import { createSlice } from "@reduxjs/toolkit";

// // const getInitialCard = () => {
// //   const localCard = window.localStorage.getItem("card");
// //   if (localCard) {
// //     return JSON.parse(localCard);
// //   }
// //   window.localStorage.setItem("card", JSON.stringify([]));
// //   return [];
// // };

// const initialValue = {
//   cardItems: getInitialCard(),
// };

// const cardSlice = createSlice({
//   name: "card",
//   initialState: initialValue,
//   reducers: {
//     addCard: (state, action) => {
//       state.cardItems.push(action.payload);
//       const card = window.localStorage.getItem("card");
//       if (card) {
//         const cardArr = JSON.parse(card);
//         cardArr.push({
//           ...action.payload,
//         });
//         window.localStorage.setItem("card", JSON.stringify(cardArr));
//       }
//       window.localStorage.setItem(
//         "card",
//         JSON.stringify([{ ...action.payload }])
//       );
//     },
//   },
// });

// export const { addCard } = cardSlice.actions;
// export default cardSlice.reducer;
