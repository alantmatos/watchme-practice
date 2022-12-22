import './App.css';
import Header from "./components/Header"
import ShowCatalog from "./components/ShowCatalog"
import {useState,  useEffect} from 'react'


function App() {

  const [ showData, setShowData ] = useState ([])


  useEffect(()=> {
    fetch('http://localhost:8081/shows')
    .then( response => response.json())
    .then((data) => {    
      setShowData(data)
      
    })
  },[]);

  //console.log(showData)



  return (
    <>
      <Header />
      <ShowCatalog showDataProp={showData}/>
      

    </>
  );
}

export default App;
