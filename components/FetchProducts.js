import Image from "next/image";

const FetchProducts = ({ post }) => {
  return (
    <div className='products-caption'>
      {post.map((data, index) => (
        <div className='column' key={index}>
          <div className='column-images'>
            <Image
              src={data.Attachments[0].url}
              height={300}
              width={400}
              alt={data.Name}
            />
          </div>
          <div className='column-heading'> {data.Name} </div>
        </div>
      ))}
    </div>
  );
};
export default FetchProducts;
