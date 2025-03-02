import { useEffect, useState } from 'react'
import './App.css'

const URL = import.meta.env.VITE_API_URL
type Product = {name:string, price: number}
function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch(`${URL}/products`)
    .then(res => res.json())
    .then(data => {
      setProducts(data.data)
    })
  },[])

  return (
    <div>
      Salam
      {products.map((product: Product) => <div style={{border: '1px solid white', margin: '10px', padding: '10px'}}>
        {product.name}
        <div>{product.price}</div>
        </div>) }
    </div>
  )
}

export default App
