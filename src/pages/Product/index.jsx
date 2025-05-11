import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState([])

  const getProduct = async () => {
    const request = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await request.json()

    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <h1>{product.id}</h1>
      <p>{product.description}</p>
    </div>
  );
}
