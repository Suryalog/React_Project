import React from 'react'

const Childcomponent = ({msg,obj=[]})=> {
    // const{msg}=props;
  return (
    <div>
      <p>this is child along with {msg}</p>
      <ul>
        {obj.map((item,ind)=>(
            <li key={ind}>{item.name}-{item.desg}-{item.age}-{item.address}</li>
        
        ))}
      </ul>
    </div>
  )
}

export default Childcomponent
