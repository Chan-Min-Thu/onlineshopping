import React,{useEffect,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'

function Scroll() {
  const [backScroll, setBackScroll] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        return setBackScroll(true)

      }else{
        return setBackScroll(false)
      }
    })
  }, [])
  function scrollUp (){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div>
      { backScroll &&
      <FontAwesomeIcon className='icon' style={{position:"fixed", bottom:"50px", right:"50px"}} onClick={scrollUp} icon={faArrowUp}/>
      }
      </div>
  )
}

export default Scroll