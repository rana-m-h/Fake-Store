import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
       
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products.');
        setLoading(false);
      });
  }, []);


  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p className='text-light'>Loading...</p>;
  }

  return <>

<Helmet>
            <meta charSet="utf-8" />
            <title> Products</title>

        </Helmet>


 <div className="container">
<div>
   
      <div className=" row gy-5 mt-5">
        {products.map((product) => (
          <div key={product.id} className="col-md-2">
           <div className='p-3 product-card'>
           <img src={product.image} className='w-100 ' height={300}  alt={product.title} />
            <h6>{product.title.split(' ').splice(0, 2).join(' ')}</h6>
            <div className="d-flex py-3 justify-content-between align-items-center">
            <span color='font-sm'>{product.price} EGP</span>
             <span> <i className='fas fa-star  rating-color me-1'></i>
              {product.rating.rate} </span>
              </div>
           </div>
          </div>
        ))}
      </div>
    </div>
    
</div>
  </>;
}

export default App;

