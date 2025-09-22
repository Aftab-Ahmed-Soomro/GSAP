import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import './FirstDesign.css'

const FirstDesign = () => {

    const containerRef = useRef()
    const boxRef = useRef()

    useGSAP(()=> {
        gsap.from(boxRef.current, {
        y: 200, 
        opacity: 0,
        rotate: 720,
        duration: 1,
        delay: 1
        },{scope:containerRef})
    })

  return (
    <main>
        <div ref={containerRef} className="container1">
          <div className="circle"></div>
          <div ref={boxRef} className="box"></div>
        </div>

        <div className="container2">
          <div className="circle"></div>
          <div className="box"></div>
        </div>
    </main>
  )
}

export default FirstDesign
