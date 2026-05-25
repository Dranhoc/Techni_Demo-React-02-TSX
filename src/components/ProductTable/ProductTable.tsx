import './ProductTable.css'
import type { ProductData, Products } from "../../@types/product"


type ProductTableProps = { 
  data : Products
}

export default function ProductTable ({ data } : ProductTableProps) {


  return (

    <ul>
    {data.map( product => (
      <ProductCard  key={product.id} {...product}/>
    ))}

    </ul>
  )
}

function ProductCard({name, description, price, isPromo} : ProductData) {
  return (
    <>
      <li>
        <h3>{name}</h3>
        <p>{description}</p>
        <span className={`${isPromo ? 'promo' : ''}`}>{price.toLocaleString('fr-FR')}€</span>
      </li>
  
    </>
  )
}


