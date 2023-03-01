
import { toFormData } from 'axios';
import { useState } from 'react';
import './Each.css'
function Each3() {
  const [Datas,setDatas]=useState({
    email:'',
    fristpassward:'',
    confermation:'',
     check:true

  })
  console.log(Datas)
const handclick=(event)=>{
    const {name,value,type,checked}=event.target
 setDatas(prevstate=>{
    return {
        ...prevstate,
        [name]:type==='checkbox'?checked:value
    }
})
}
const handclick2=(event)=>{
    event.preventDefault()
   if (Datas.fristpassward === Datas.confermation) {
    console.log('sucssus')
    
   } else {
    console.log('error')
   }
}

  return(
    <div  >
        <form onSubmit={handclick2}>
<input type='email' placeholder='email' name='email' value={Datas.email} onChange={handclick}/><br/>
      <input type='text' onChange={handclick}  placeholder='passward'
      name='fristpassward' value={Datas.fristpassward} /><br/>
      <input type='text' onChange={handclick} placeholder='conforme'
       name='confermation' value={Datas. confermation} /><br/>
       <input type='checkbox' name='check' checked={Datas.check} onChange={handclick} />
     <label>are you student</label><br/>
     <button type='submit'>submit</button>
     </form>
    </div>
  )
}
export default Each3;