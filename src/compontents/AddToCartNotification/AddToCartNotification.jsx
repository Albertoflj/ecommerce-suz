// import { useEffect } from "react";
// import "./addtocartnotification.scss";
// import { store } from "../../redux/store";
// import getStatus from "redux-resource/lib/utils/get-status";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// const AddToCartNotification = (props) => {
//   const [classForStatus, setClassForStatus] = useState("");
//   const [textForStatus, setTextForStatus] = useState("");

//   //!!SUCCESS NOTIFICATION NOT WORKING
//   const state = useSelector((state) => state.cartQuantity);
//   useEffect(() => {
//     if (state.status === "loading") {
//       setClassForStatus("loadingNotification");
//       setTextForStatus("Item is being added.");
//       setTimeout(() => {
//         setClassForStatus("");
//         setTextForStatus("");
//       }, 3000);
//     } else if (state.status === "failedNotification") {
//       setClassForStatus("failed");
//       setTextForStatus("An error has occurred.");
//     } else if (state.status === "succeededNotification") {
//       setClassForStatus("succeeded");
//       setTextForStatus("Item has been added.");
//     }
//     // console.log(state.status);
//     // console.log(classForStatus, textForStatus);
//   }, [state]);
//   return (
//     <div className="add-to-cart-notification">
//       <div className={`add-to-cart-notification-body ${classForStatus}`}>
//         <div className="notification-arrow"></div>
//         <div className="notification-text">
//           <div className="notification-text">
//             <p>{textForStatus}</p>
//           </div>
//           {/* <div className="notification-close">
//           <button>Close</button>
//         </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToCartNotification;
