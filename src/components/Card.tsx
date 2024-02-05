import { typeSituation } from "../helpers/imc"
import  positive from '../assets/positive.png'
import  negative  from '../assets/negative.png'

type Props = {
    item:typeSituation
}


export const Card = ({ item }:Props)=>{
    return(
        <div className={`${item.color} min-w-full h-60 rounded-2xl text-center p-10  `}>
            <img className="flex m-auto p-2 opacity-40 border-solid border-4 rounded-full" src={item.src === 'positive' ? positive : negative}  width={100}/>
            <h1 className=" text-white font-bold">{item.title}</h1>
            <p className="text-white">{item.content}</p>
            {item.yourImc != 0 &&
            <p className="text-white">Seu IMC: <span className="font-extrabold">{(item.yourImc)?.toFixed(1)}</span></p>}
            </div>
    )
}