import FetchProducts from "./FetchProducts";

const ProductsSub = ({ post, caption }) => {
  return (
    <div className='products-sub'>
      <h2>{caption}</h2>
      <hr className='main-hr-products' />
      <FetchProducts post={post} />
    </div>
  );
};

export default ProductsSub;
