import gsap from 'gsap'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

const App = () => {

  const flyRef = useRef()

  const [circle, setCircle] = useState(0)
  const [roti, setRoti] = useState(0)
  const [moti, setMoti] = useState(0)

  const randomX = gsap.utils.random(-500, 500, 100)
  const randomY = gsap.utils.random(-200, 200, 30)
  const randomRoti = gsap.utils.random(-360, 360, 30)

  useGSAP(() => {
    gsap.to(flyRef.current, {
      x: circle,
      y: moti,
      rotate: roti,
      duration: 0.5
    })
  },[circle, roti, moti])

  // ********************** important to note **************************

  // {scope:'main', dependencies:[randomX, randomY, randomRoti]}

  // {contextSafe} --> cover afterwards

  return (
    <main>
      <h1>Fly</h1>
      <img onClick={()=> {
        setCircle(randomX)
        setRoti(randomRoti)
        setMoti(randomY)
      }} className='makhiSize' ref={flyRef} src="/assets/imgs/makhi.png" alt="" />
    </main>
  )
}

export default App
