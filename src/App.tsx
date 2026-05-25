import './App.css'
import PeopleTable from './components/PeopleTable/PeopleTable.tsx'
import ProductTable from './components/ProductTable/ProductTable.tsx'
import { getPeople } from './services/people.service.ts'
import { getProduct } from './services/product.service.ts'

function App() {
  const people = getPeople()
  const products = getProduct()

  return (
    <>
      <h1>HELLO WORD EN TS</h1>
      <PeopleTable data={people} title='Duck Tales'/>
      <ProductTable data={products}/>
    </>
  )
}
export default App
