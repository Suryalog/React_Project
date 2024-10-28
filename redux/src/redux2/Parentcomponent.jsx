import React, { useEffect, useState } from 'react'
import Childcomponent from './Childcomponent'

const Parentcomponent = () => {
    const[message,setMessage]=useState('this is my parent componen')
     const[emp,setEmp]=useState([{name:'surya',age:'23',desg:'TL',address:'13/31 trichy'},{name:'babu',age:'22',desg:'MAN',address:'13AP'}])
     const[name,setName]=useState('');
     useEffect(()=>{
       document.title=name
     },[name])
  return (
    <div>
        <form>
          <input type='text' onChange={(e)=>{setName(e.target.value)}}></input>
        </form>
      {/* <Childcomponent msg={message}/>
       <Childcomponent obj={emp}/>  */}
    </div>
  )
}

export default Parentcomponent
