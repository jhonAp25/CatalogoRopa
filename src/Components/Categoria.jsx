import React, { useState } from 'react'
import  buzoClasico  from '../Img/buzoClasico.png'
import  buzo  from '../Img/buzoo.png'
import  buzoPuma  from '../Img/BuzoPuma.png'
import  casaca  from '../Img/Casaca.png'
import  jogger  from '../Img/images.png'
import  poloNike  from '../Img/poloNike.png'
import  poloNike2  from '../Img/poloNike2.png'
import  poloNike3  from '../Img/poloNike3.png'
import  poloN  from '../Img/polosNike.png'
import short from '../Img/SHORT3.png'
import short2 from '../Img/SHORT2.png'  
import { IconButton, Grid ,Box,Button ,Container , Tab, Tabs ,AppBar ,withStyles ,makeStyles} from '@material-ui/core';
import { Carousel } from './CarruselCatg'

const Categoria = () => {

    const [card, setCard]=useState("card")
    const [cardSelect, setCardSelect]=useState("cardSelect")
    const [valueTabs , setValueTabs]=useState(0)



 const backImg =()=>{
    setCardSelect("card")

 }
 const nextImg =()=>{
    
}
const  handleTabs =(e, value)=> {
    setValueTabs(value)
  }
 
  var items = [1, 2, 3, 4, 5,6,7,8,9,10];
  var imgs =['short1','short2','short3','short4','short5']

  const StyledTabs = withStyles({
    root: {
      justifyContent: "center"
    },
    indicator: {
       backgroundColor: "#3e3d3d","& > span": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "#3e3d3d"
      }
    }
  })(Tabs);
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: "none",
      minWidth: 72,
      color: '#060606',
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
  
      "&:hover": {
        color: "#060606",
        opacity: 1,
        fontWeight: 400,
      },
      "&$selected": {
        color: "#060606",
        fontWeight: 600,
        background: "linear-gradient( 0deg, #cecdcd 0%, #ffffff00 100%)"
      },
      "&:focus": {
        color: "#060606"
      }
    },
    selected: {}
  }))((props) => <Tab disableRipple {...props} />);

  
    return (

        <Container maxWidth='xl'>

       
        <Grid spacing={1} >
            <Grid>
           
                <StyledTabs  value={valueTabs} centered onChange={handleTabs}  
                    >
                    <StyledTab  label="Buzo" className='tabsCustom'  />
                    <StyledTab  label="Polo"  className='tabsCustom' />
                    <StyledTab  label="Short" className='tabsCustom' />
                </StyledTabs>
         
            </Grid>

            <Grid items >
            <div value={valueTabs} hidden={valueTabs !== 0} index={0} className='contentCard'>
            {valueTabs === 0 && (
      
                <Carousel itemsP={items} activeP={5} imgs={imgs}></Carousel>
           
            )}
        </div>

            </Grid>



            <Grid items >
        <div value={valueTabs} hidden={valueTabs !== 1} index={1} className='contentCard' >
        {valueTabs === 1 && (
      
                <>
                    <div className={card}>
                        <img className='buzoImg' src={casaca} alt=""/>
                    </div>
                    <div className={card} >
                        <img className='buzoImg' src={short} alt=""/>
                    </div>
                    <div className={cardSelect}>
                        <img className='buzoImg' src={short2} alt=""/>
                    </div>
                    <div className={card}>
                        <img className='buzoImg' src={poloN} alt=""/>
                    </div>
                    
                    <div className='icons'>
                    <IconButton onClick={backImg} className='left'>
                        <i class="fas fa-caret-square-left"></i>
                    </IconButton>

                    <IconButton onClick={nextImg} className='right'>
                    <i class="fas fa-caret-square-right"></i>
                    </IconButton>
                    </div>
                </>
            
            )}
        </div>
            </Grid>
         
        </Grid>
        </Container>
        
    )
}

export default Categoria
