export type typeSituation = {
    title:string
    color:string,
    src:string,
    content: string
    imc:number[],
    yourImc?:number
}



export const situation = [{
    title:'Magreza',
    color:'bg-slate-500',
    src:'negative',
    content:'IMC entre 0 e 18,5',
    imc:[0,18.5],
    yourImc:0
},
{
    title:'Normal',
    color:'bg-green-600',
    src:'positive',
    content:'IMC entre 18,5 e 24,9',
    imc:[18.5,24.9],
    yourImc:0
},
{
    title:'Sobrepeso',
    color:'bg-amber-300',
    src:'negative',
    content:'IMC entre 25 e 29,99',
    imc:[25,29.99],
    yourImc:0
},
{
    title:'Obesidade',
    color:'bg-red-600',
    src:'negative',
    content:'IMC maior que 30',
    imc:[30,99],
    yourImc:0
},
]



export const imc = (heigth:number,weight:number):typeSituation | undefined =>{
    const calcImc = weight / (heigth * heigth)
    for(const i in situation){
        situation[i].yourImc = calcImc
        if(calcImc >= situation[i].imc[0] && calcImc <= situation[i].imc[1]){
            return situation[i]
        }
    }
}