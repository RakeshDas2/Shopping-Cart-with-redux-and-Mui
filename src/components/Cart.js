import { Avatar, Card, CardActionArea, CardContent, Container, Fab, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import { changeQty, deleteFromCart } from '../redux/actions/actions';
import DeleteIcon from '@mui/icons-material/Delete';
function Cart() {
  const recivedData = useSelector(state => state.cartProductsReducer)
  console.log(recivedData);
  const dispatch=useDispatch()

  const [qty, setQty] = useState(1)
  const [individualPrice, setIndividualPrice] = useState([])
  const [totalPrice, setTotalPrice] = useState('')
  const [index,setIndex]=useState(0)

  useEffect(() => {
    const arrayOfPrice = recivedData.list.map((ele) => {
      return parseInt( ele.itemPrice*ele.itemQty)
    })
    setIndividualPrice(arrayOfPrice)
  }, [recivedData])

  console.log(individualPrice);

  useEffect(() => {
    const totalValue = individualPrice.reduce((a, b) => {
    
      return parseInt(a) + parseInt(b)
    }, 0)

    setTotalPrice(totalValue)
  }, [individualPrice])


  useEffect(()=>{
    dispatch(changeQty({qty,index}))
  },[qty,index])

  console.log((totalPrice));

  const incrementQty = (qty,index) => {
   setIndex(index)
    setQty(qty + 1)
  }
  const decrementQty = (qty,index) => {
    if (qty > 1) {
      setQty(qty - 1)
      setIndex(index)
    }
  }

  const deleteData=(index)=>{
    dispatch(deleteFromCart(index))
  }
  return (
    <>
      <Container>
        <Grid container >
          <Grid item sx={12} >
            {recivedData.list && recivedData.list.map((ele, index) => {
              return <Card key={index}>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={4}>
                      <Grid item sx={3}>
                        <Avatar src={ele.itemImage} />
                      </Grid>
                      <Grid item sx={6}>
                        <Typography>{ele.itemName}</Typography>
                        <Typography>{ele.itemPrice}</Typography>
                      </Grid>
                      <Grid item sx={3}>
                        <AddCircleOutlineSharpIcon onClick={() => { incrementQty(ele.itemQty,index) }} />{ele.itemQty}<RemoveCircleOutlineSharpIcon onClick={() => { decrementQty(ele.itemQty,index) }} /> <br/>
                        <DeleteIcon onClick={()=>{deleteData(index)}}/>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>

            })}
          </Grid>
          <Typography>Total Price = {totalPrice}</Typography>
        </Grid>
      </Container>
    </>
  )
}

export default Cart