import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavBarComponent from './NavBarComponent'

function HomeComponent() {
  const recivedData = useSelector(state => state.allProductsReducer)
  

  return (
    <div>
        <NavBarComponent/>
     
       
        <Typography variant='h1'>Welcome to Home </Typography>

<Grid container>
  <Grid item xs={6}>
  <Paper component={Box} style={{marginLeft:'20%',marginTop:'4%',marginBottom:'20%',backgroundColor:'blue',width:'80%'}}>
         <Carousel>
          {recivedData.list && recivedData.list.map((ele,index)=>{
            return <CarouselItem key={index}>
            <img
            style={{height:'400px'}}
            className="d-block w-100"
            src={ele.itemImage}
            alt="First slide"
            />
          </CarouselItem>
          })}
          </Carousel>
         </Paper>
  </Grid>
  <Grid item xs={6}>
  <Paper component={Box} style={{marginLeft:'10%',marginTop:'4%',marginBottom:'20%',backgroundColor:'blue',width:'80%'}}>
         <Carousel>
          {recivedData.list && recivedData.list.map((ele,index)=>{
            return <CarouselItem key={index}>
            <img
            style={{height:'400px'}}
            className="d-block w-100"
            src={ele.itemImage}
            alt="First slide"
            />
          </CarouselItem>
          })}
          </Carousel>
         </Paper>
  </Grid>
</Grid>

        
         {/* <Paper component={Box} style={{marginLeft:'20%',marginTop:'4%',marginBottom:'20%',marginRight:'20%',backgroundColor:'blue',width:'30%'}}>
         <Carousel>
          {recivedData.list && recivedData.list.map((ele,index)=>{
            return <CarouselItem key={index}>
            <img
            style={{height:'400px'}}
            className="d-block w-100"
            src={ele.itemImage}
            alt="First slide"
            />
          </CarouselItem>
          })}
          </Carousel>
         </Paper> */}

        {/* <Carousel>
          {recivedData.list && recivedData.list.map((ele,index)=>{
            return <CarouselItem key={index}>
            <img
            style={{height:'400px'}}
            className="d-block w-100"
            src={ele.itemImage}
            alt="First slide"
            />
          </CarouselItem>
          
          })}
          {/* <CarouselItem>
            <img
            className="d-block w-10"
            src={recivedData.list[0].itemImage}
            alt="First slide"
            />
          </CarouselItem>
          <CarouselItem>
            <img
            className="d-block w-10"
            src={recivedData.list[1].itemImage}
            alt="First slide"
            />
          </CarouselItem>
          <CarouselItem>
            <img
            className="d-block w-10"
            src={recivedData.list[2].itemImage}
            alt="First slide"
            />
          </CarouselItem> */}
        {/* </Carousel> */} 
    </div>
  )
}

export default HomeComponent