import { Card, CardActionArea, CardActions, CardMedia, Container, Fab, Grid, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart,deleteProductFromProducts } from '../redux/actions/actions';
import NavBarComponent from './NavBarComponent';


function Products() {

    const recivedData = useSelector(state => state.allProductsReducer)
    console.log(recivedData);
  const dispatch=useDispatch()

    const addToCartElement=(data)=>{
dispatch(addProductToCart(data))
    }

    const deleteProduct=(index)=>{
        dispatch(deleteProductFromProducts(index))
    }

   
    return (
        <>
        <NavBarComponent/>
            <Container>
                <Grid container spacing={3} >
                    {recivedData.list && recivedData.list.map((ele, index) => {

                        return <Grid item xs={3} key={index}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia component='img'
                                              height='200'
                                             image={ele.itemImage}

                                    />
                                    <Typography variant='h6'>  {ele.itemName}</Typography>
                                    <Typography variant='subtitle2'> {ele.itemDesc}</Typography>
                                    <Typography variant='h6'> <CurrencyRupeeIcon fontSize='small'/>  {ele.itemPrice}</Typography>
                                    </CardActionArea>
                                    <CardActions>
                                    <Fab variant="extended" color='secondary' onClick={()=>{addToCartElement(ele)}}><Typography variant='caption'>Add to cart</Typography></Fab>
                                    <Fab color='error' onClick={()=>{deleteProduct(index)}}><DeleteForeverRoundedIcon/></Fab>
                                    </CardActions>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </Container>

        </>
    )
}

export default Products