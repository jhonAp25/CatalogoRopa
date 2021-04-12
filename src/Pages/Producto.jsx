import { Grid, IconButton, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import imagenes from '../Img/importImg'

function Producto({match}) {
    const [ like , setLike ]=useState(true)
  
    return (
        <div className="content">
           
     
        <Grid container spacing={2} >
           <Grid item lg={2} className='contentReference'  >
                <div className="BoxReference">
                     <Link  to={`/producto/${parseInt(match.params.idprod)  + 1 }`} > <img src={imagenes[parseInt(match.params.idprod)]} className='imgReference' alt=""/>   </Link> 
                </div>
                <div className="BoxReference">
                    <Link  to={`/producto/${parseInt(match.params.idprod) +2  }`} > <img src={imagenes[parseInt(match.params.idprod) +1]} className='imgReference' alt=""/>  </Link> 
                </div>
                <div className="BoxReference">
                    <Link  to={`/producto/${parseInt(match.params.idprod)+3 }`} >  <img src={imagenes[parseInt(match.params.idprod) + 2]} className='imgReference' alt=""/> </Link>  
                </div>
                <div className="BoxReference">
                    <Link  to={`/producto/${parseInt(match.params.idprod)+4 }`} ><img src={imagenes[parseInt(match.params.idprod) + 3]} className='imgReference' alt=""/>  </Link> 
                </div>
            </Grid> 
           <Grid item lg={5} xm={12} >
                <div className="boxProducto">
                    <IconButton aria-label="" onClick={()=>{setLike(!like)}}className='contentLike'>
                       
                    <i className={`${like ?'far ': 'fas '}fa-heart iconLike`} ></i>
                   
                    </IconButton>
              
                   <img src={imagenes[match.params.idprod - 1]} className='imgPrincipal' alt=""/>
                </div>
            </Grid> 
           <Grid item lg={5} >
           <div className="boxDescripcion">
               <div className="tittuloDes">
                   <h1>Prendas Deportivas </h1>
               </div>
               <div className="bodyDes">

                <p>Pantalón de Vestir para Hombre. </p>

                <p>Material fabricado Tela Wafer. </p> 

                <p>Con elásticos en los laterales y entalle slim fit para delinear la figura masculina sin descuidar la comodidad. </p> 

                <p> Edición limitada: 200 unidades numeradas.</p>

                <p> Venta de Por Mayor y Menor.</p>
               </div>

               <div className="precioDes">
                   <h1>S/ 25.00</h1>
               </div>
               <div className='footerDes' >
               <button className='ButtonDes'>
                    ANIADIR CARRITO
            </button>
               </div>
           </div>
            </Grid> 
        </Grid>
    </div>
    )
}

export default Producto
