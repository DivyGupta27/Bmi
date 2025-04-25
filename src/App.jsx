import {useState } from 'react'
import './App.css'

function App() {
const[height,setheight]=useState('')
const[weight,setwidth]=useState('')



const button=(e)=>{
  e.preventDefault()
let height2=Number(height)/100
let weight2=Number(weight)
let bmi=(weight2/(height2**2)).toFixed(3)
let output=document.querySelector('section h1')
// output.innerHTML=bmi
if(bmi<18.5){
  output.innerHTML=`${bmi} Underweight`
}
else if(bmi>=18.5 & bmi<=24.9){
  output.innerHTML=`${bmi} Normal weight`
}
else if(bmi>=25 & bmi<=29.9){
  output.innerHTML=`${bmi} overweight`
}
else if(bmi>=30){
  output.innerHTML=`${bmi} obase`
}
else{
  output.innerHTML=`${bmi} error`
}

}


  return (
    <>
<video style={{ height: '110%', width: '100%' }}  src="https://itsbmicalculator.netlify.app/bgvideo.mp4"  autoPlay muted loop></video> 
     <div className=" h-[100%] flex justify-center items-center absolute inset-[10px]">
        <div className="calculator">
            <h1>BMI CALCULATOR</h1>
            <form className="form" onSubmit={button}>
                <div className="height">
                    <h1>Height(in Cm):</h1>
                    <input onInput={e=> setheight(e.target.value)} id="height" type="number" placeholder="Enter your height" value={height} name="height" required/>
                </div>
                
                <div className="weight">
                    <h1>Weight(in kg):</h1>
                    <input onInput={e=>setwidth(e.target.value)} id="weight" type="number" placeholder="Enter your weight" value={weight} name="weight" required/>
                </div>
                <div className="button">
                    <button className='bg-yellow-500'>Calculate</button>
                </div>
            </form>
            <section><h1 className='font-bold text-2xl text-amber-300 '></h1></section>
            </div>
    </div>

    </>
  )
}

export default App
