import { useEffect, useState } from 'react'
import axios from 'axios';
import Products from './components/Products';
// require('dotenv').config();

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products/")
    .then(function (response) {
      // handle success
      // console.log(response.data.products);
      setData(response?.data?.products);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("EXECUTED");
    });
  
  }, [])

  
  

  return (
    <>
      <Products data={data}/>
    </>
  )
}

export default App
