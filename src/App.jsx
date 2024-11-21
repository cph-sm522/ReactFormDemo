import './App.css'
import DemoList from './DemoList'
import MyForm from './MyForm'
import { useEffect, useState } from "react";

function App() {

  const [demoData, setDemoData] = useState([])

  function readData(){
      fetch('http://127.0.0.1:3000/info', {
          method: 'GET',
          headers: {'Accept': 'application-json'}})
          .then(response => response.json())
          .then(data => setDemoData(data))
          .catch((error) => console.error('Error: ', error)
          )
  }

  useEffect(() => {
      readData()
  }, [])

  return (
  <>
  <h1 className="heading">Un-Controlled Component Demo</h1>
  <div>
    <MyForm readData={readData}/>
    <DemoList demoData={demoData}/>
  </div>
  </>
  )
}

export default App
