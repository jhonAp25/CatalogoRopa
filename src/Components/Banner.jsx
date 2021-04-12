import React from 'react'   
import short from '../Img/SHORT3.png'
import short2 from '../Img/SHORT2.png'
import {useTransition,useSpring , animated} from 'react-spring'

const Banner = () => {
    const propsMancha = useSpring({transform: 'translateX(0%)', from: {transform : 'translateX(-50%)' },config: { mass: 10, tension: 900, friction: 140 }   })
    const propsMancha2 = useSpring({transform: 'translateX(0%)', from: {transform : 'translateX(50%)' },config: { mass: 10, tension: 900, friction: 140 }   })
    const propsShort = useSpring({
                                    transform: 'matrix(0.93,-0.37,0.37,0.93,0,0)' ,
                                    from: {transform : 'matrix(0.56,-0.21,0.21,0.56,0,0)' },
                                    config: { mass: 10, tension: 550, friction: 140 }  })
    const propsShort2 = useSpring({
                                    transform: 'matrix(0.96,0.28,-0.28,0.96,0,0)' ,
                                    from: {transform : 'matrix(0.58,0.17,-0.17,0.58,0,0)' },
                                    config: { mass: 10, tension: 550, friction: 140 }  })


    return (
        <div className='contentBanner' >

        <div className='banner1'>

            <div className='titulo'> 
                 <h1>Las mejores prendas deportivas</h1>
            </div>

            <animated.div style={propsShort}  className='img'>
                <img src={short} alt="" />
            </animated.div>

           <animated.div style={propsMancha} className='mancha'>
                <h4>Short M. Negro</h4>
                <h2>S/ 25.00</h2>
            </animated.div>
          
            
            
        </div>



        <div className='banner2'>

        <animated.div style={propsShort2}  className='img2'>
                <img src={short2} alt="" />
            </animated.div>

            <animated.div style={propsMancha2}  className='mancha2'>
                <h4>Short Clasico Azul</h4>
                <h2>S/ 25.00</h2>
            </animated.div>
 
            
        </div>

        <button className='ButtonVer'>
            VER PRENDAS 
        </button>


        </div>
       
    )
}

export default Banner
