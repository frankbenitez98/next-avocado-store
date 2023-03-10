import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = useState<TProduct>()
  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
  }, [id])
  return (
    <section>
      <h1>Página producto: {id}</h1>
      <div>Nombre: {product?.name}</div>
    </section>
  )
}

export default ProductPage
