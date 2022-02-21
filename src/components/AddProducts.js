import { Button, Card, CardActionArea, CardActions, CardContent, Container, Fab, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/actions/actions';
import NavBarComponent from './NavBarComponent';

function AddProducts() {
    const [product, setProduct] = useState({
        itemImage:'',
        itemName: '',
        itemDesc: '',
        itemPrice: '',
        itemQty:1
    })
    const dispatch = useDispatch()
    
    const CHARACTER_LIMIT=120
    const CHARACTER_LIMIT1=20
    const eventHandler = (e) => {
        const productCopy = { ...product }
        productCopy[e.target.name] = e.target.value
        setProduct(productCopy)

    }

    const addData = () => {
        if(product.itemName!==''){
        dispatch(addProduct(product)) 
        setProduct({
            itemImage:'',
            itemName: '',
            itemDesc: '',
            itemPrice: '',
            itemQty:1
        })
        }
    }

    const clearLocalStorage=()=>{
        localStorage.clear()
    }
    return (
        < >
        {/* <Button onClick={()=>{clearLocalStorage()}}>Clear</Button> */}
        <NavBarComponent/>
            <Container >
                <Box sx={{ width: 500, marginTop: 10, marginLeft: 40 }}>
                    <Card >
                        <CardActionArea>
                            <CardContent>
                                <Typography variant='h4'>Add Products</Typography>
                                <TextField
                                    label='Item Name'
                                    margin='normal'
                                    fullWidth
                                    color="secondary" 
                                    variant='outlined'
                                    name='itemName'
                                    inputProps={{
                                        maxLength: CHARACTER_LIMIT1
                                      }}
                                    onChange={eventHandler}
                                    value={product.itemName}
                                />
                                <TextField
                                    label='Item Details'
                                    margin='normal'
                                    fullWidth
                                    color="secondary" 
                                    variant='outlined'
                                    name='itemDesc'
                                    multiline
                                    maxRows={3}
                                    inputProps={{
                                        maxLength: CHARACTER_LIMIT
                                      }}
                                    onChange={eventHandler}
                                    value={product.itemDesc}
                                />
                                <TextField
                                    label='Item Price'
                                    margin='normal'
                                    fullWidth
                                    color="secondary" 
                                    variant='outlined'
                                    type='number'
                                    name='itemPrice'
                                    onChange={eventHandler}
                                    value={product.itemPrice}
                                />
                                <TextField
                                    label='Image'
                                    placeholder='paste image url'
                                    margin='normal'
                                    fullWidth
                                    color="secondary" 
                                    variant='outlined'
                                    type='url'
                                    name='itemImage'
                                    onChange={eventHandler}
                                    value={product.itemImage}
                                />
                            </CardContent>
                            </CardActionArea>
                            <CardActions>

                            <Fab color='secondary' onClick={() => { addData() }}><AddIcon /></Fab>
                            </CardActions>
                    </Card>
                </Box>
            </Container>
        </>
    )
}

export default AddProducts