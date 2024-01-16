import { useState } from 'react'

function Ass({text}) {
    const [open,setOpen] = useState(false);

    const handlePlus = () => {
      setOpen(true)
    }
    const handleMinus = () => {
      setOpen(false)
    }
  return (
    <div>
    <div className='bg-rose-300  mt-[60px] w-[50%] h-[50px] ml-[350px] flex'>
    <p className='font-bold text-2xl ml-4' >{text}</p> 
    <i class="fa-solid fa-minus  text-3xl ml-[580px] mt-1 hidden"  onClick={handleMinus} style={{display: open === true ? "block" : "none"}}></i>
    <i  class="fa-solid fa-plus text-3xl ml-[580px] mt-1" onClick={handlePlus}  style={{display: open === true ? "none" : "block"}} ></i>
    </div>
    <div style={{display: open === true ? "block" : "none"}} className='bg-white w-[50%] h-[160px] shadow-xl ml-[350px] text-xl text-black px-5 mt-4'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ullam!
    </div>
    </div>
  )
}

export default Ass