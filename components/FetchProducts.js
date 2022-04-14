// import { useState, useEffect } from "react";

// const FetchProducts = ({ trail }) => {
//   const [imageData, setImageData] = useState([]);
//   useEffect(() => {
//     const importAll = (r) => {
//       let images = {};
//       r.keys().map((item) => {
//         images[item.replace("./", "")] = r(item).default.src;
//       });
//       return Object.entries(images);
//     };
//     const images = importAll(
//       require.context(`../public/propics/`, false, /\.(png|jpe?g|svg)$/)
//     );
//     setImageData(images);
//   }, [setImageData]);
// };
// export default FetchProducts;
