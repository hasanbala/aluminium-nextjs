// import { useState, useEffect } from "react";
// import Image from "next/image";

// const ShowProducts = ({ post }) => {
//   const [imageData, setImageData] = useState([]);

//   useEffect(() => {
//     const importAll = (r) => {
//       // console.log(r.keys());
//       let images = {};
//       r.keys().map((item) => {
//         // console.log(r(item).default.src);
//         images[item.replace("./", "")] = r(item).default.src;
//       });
//       // const data = Object.entries(images);
//       return Object.entries(images);
//     };
//     const images = importAll(
//       require.context("../public/propics", false, /\.(png|jpe?g|svg)$/)
//     );
//     // setImageData(Object.keys(images).map((key) => ({ [key]: images[key] })));
//     // setImageData(Object.keys(images).sort((a, b) => a - b));
//     // console.log(images.entries());
//     // setImageData(images);

//     setImageData(images);
//   }, [setImageData]);

//   // const dataPic = Object.keys(images).map((key) => ({ [key]: images[key] }));
//   // console.log(imageData.map((a, b) => a - b));
//   // const data = Object.entries(imageData);
//   // console.log(imageData);

//   return (
//     <div className='products-caption'>
//       {post.map((item, index) => (
//         <div className='column' key={index}>
//           <div className='column-images'>
//             {console.log(typeof index)}
//             <Image src={item[1]} height={300} width={400} />
//           </div>
//           <div className='column-heading'>{item[0].replace(".jpg", "")}</div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ShowProducts;
