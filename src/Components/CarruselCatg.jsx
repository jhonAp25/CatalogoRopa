import './Slider.scss';

import React, { useState } from 'react'
import {useTransition, animated} from 'react-spring'
import IconButton from '@material-ui/core/IconButton'
import  imagenes  from '../Img/importImg'
import { Link } from "react-router-dom";



export const ItemC =({imgC,id, levelPROP})=> {
     const [cards,setCards]=useState([])
   
        const className = "item level" + levelPROP;
        return <div className={className}>
            <Link  to={`/producto/${id}`} >
                <img src={imgC} alt="" className ='imgCarrusel'  id={id}/>
            </Link >
           
        </div>;
    
}
 const Carousel =({itemsP ,activeP , imgs })=> {

    
  
        const [itemsC, setItems]=useState(itemsP)
        const [active,setActive]=useState(activeP)
        const [direction, setDirection]=useState("")
        const [imgCat, setImgCat]=useState(imgs)
       

       

    const generateItems=()=> {
        var items = [];
        var level;
     //Codigo por terminar si solo hay 3 elementos 
       

            for (var i = active - 2; i < active + 3; i++) {
                var index = i;
                if (i  < 0) {
                    index = itemsC.length + i;
                } else if (i >= itemsC.length) {
                    index = i % itemsC.length;
                }
                level = active - i;
                items.push(<ItemC key={index} levelPROP={level} id={itemsC[index]}  imgC={imagenes[index]} ></ItemC>)
            }
           
            return items 
      
       
    }
    const moveLeft=()=> {
        var newActive = active;
        newActive--;
        setActive( newActive < 0 ? itemsC.length - 1 : newActive)
        setDirection( "left")
        console.log(active);
        
    }
   const moveRight=()=> {
       
        var newActive = active;
        setActive( (newActive + 1) % itemsC.length)
        setDirection("righ")
             
    }
  
        
    
        return (
            <>
           
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left"onClick={moveLeft}>
                    <IconButton >
                      <i class="fas fa-chevron-left"></i>
                    </IconButton>
                
                </div>
                <div  >
                    {generateItems()}
                </div>
                <div className="arrow arrow-right"  onClick={moveRight} >
                    <IconButton >
                       <i class="fas fa-chevron-right"></i>
                    </IconButton>
                   
                </div>
            </div>
            </>
        );
    
        }





export { Carousel}



   
  
