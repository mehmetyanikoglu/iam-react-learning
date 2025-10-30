import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setfirstName] = useState('Mehmet');
  const [lastName, setlastName] = useState('Yanıkoğlu');
  const [children, setChildren] = useState(["ahmet", "mehmet"]);
  const [counter, setCounter] =useState(0)// buradaki statein değeri her değiştiğinde tekrar render ediliyor 
  // buna dikkat edilmeli yoksa çok yavaş çalışır uygulama

  const counters = ()=>{
    setCounter(counter+1)
  }

  const handleChange = () => {
    debugger;
    setlastName("barış");
  }

  const handleChange2 = () => {
    setChildren(["ahmet2","mehmet2"]);
  }


  return (
    <>
      <div>{firstName}</div>
      <div><button onClick={() => { setfirstName('Ayşenur') }} >Adı Değiştir</button></div>
      <div>{lastName}</div>
      <div><button onClick={handleChange} >Adı Değiştir</button></div>
      <div>{children.map((children, index) => {
        return <div key={index}>{children}</div>
      }
        /*      <div>{children.map((children, index) => ( burda yuvarlak parantez kullanırsan otomatik return eder.
           <div key={index}>{children}</div>
          )}
        */
      )}</div>
      <div><button onClick={handleChange2} >Adı Değiştir</button></div>

      <div>{counter}</div>
      <div><button onClick={counters} >Arttır </button></div>

    </>
  )
}

export default App
