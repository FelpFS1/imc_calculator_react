import { useState } from 'react'
import { Card } from './components/Card'
import { imc } from './helpers/imc'
import { situation } from './helpers/imc'
import { typeSituation } from './helpers/imc'


function App() {
  const [height,setHeight] = useState<number>(0)
  const [weight,setWeight] = useState<number>(0)
  const [toShow, setToShow] = useState<typeSituation | null | undefined>(null)

  const calcYourImc = () =>{
    if(height && weight){
      const calc = imc(height,weight)
      setToShow(calc)
    }else{
      alert('Preencha todos os campos!')
    }
  }
 
  return (
   <div className='w-screen h-screen'>
      <header className= 'w-screen md:w-4/5 h-20 bg-header-color m-auto p-11 mb-5' >
        <div className=' w-20 h-full flex items-center ' >
          <h1 className='border-2 rounded border-solid border-white px-1 text-center text-white font-bold'>IMC CALC</h1>
        </div>
      </header>
      <main className='flex flex-col md:flex-row grid-cols-1  md:w-4/5 gap-10 md:m-auto'>
        <div className='w-screen h-full text-center'>
          <h2 className=' text-2xl text-center mb-10'>Calcule seu IMC</h2>
          <p className='text-lg text-gray-500 text-center mb-10'>Insira seus dados solicitados para saber o seu IMC!</p>
          <input onChange={e => setHeight(parseFloat(e.target.value))} type='number' placeholder='Insira a sua altura EX: 1.80 (em metros)' className='w-9/12 md:w-full outline-none border-solid border-b-2 border-cyan-700 mb-8 rounded-xl p-1 text-center text-sm md:text-lg'></input>
          <input onChange={e => setWeight(parseFloat(e.target.value))} type='number' placeholder='Insira o seu peso EX: 70 (em Kg)' className='w-9/12 md:w-full outline-none border-solid border-b-2 border-cyan-700 mb-5 rounded-xl p-1 text-center text-sm md:text-lg'></input>
          <button onClick={calcYourImc} className='flex justify-center w-2/4  bg-cyan-800 p-1 text-white font-bold m-auto mt-7 rounded-lg'>Calcular</button>
        </div>
        {!toShow &&
        <div className='w-screen h-full grid grid-cols-2 gap-2'>
          {situation.map((value,key)=>{
            return <Card key={key} item={value}></Card>
          })}
        </div>
        }
        {
          toShow &&
          <div className='w-full h-100 px-10 py-14'>
            <Card item={toShow}></Card>
          </div>
        }

      </main>
   </div>
  )
}

export default App
