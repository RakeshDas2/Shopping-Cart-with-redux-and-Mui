import { Avatar, Card, CardActionArea, CardContent, Container, Fab, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import { changeQty, deleteFromCart } from '../redux/actions/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBarComponent from './NavBarComponent';
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
    <NavBarComponent/>
      <Container>
        <Grid container rowSpacing={1} >
          <Grid item xs={12} >
            {recivedData.list && recivedData.list.map((ele, index) => {
              return <Card key={index} style={{width:'60%'}}>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <Avatar src={ele.itemImage} />
                      </Grid>
                      <Grid item xs={7}>
                        <div style={{display:'flex'}}>
                        <Typography style={{marginLeft:'20px',marginTop:'6px'}}>{ele.itemName}- </Typography>
                      <Typography variant='h6' style={{marginLeft:'20px'}}>{ele.itemPrice*ele.itemQty}</Typography>
                        </div>
                        
                      </Grid>
                      <Grid item xs={4}>
                       <div style={{display:'flex',border:'2px solid blue',width:'90px'}} >
                       <AddCircleOutlineSharpIcon onClick={() => { incrementQty(ele.itemQty,index) }} /><Typography >{ele.itemQty}</Typography><RemoveCircleOutlineSharpIcon onClick={() => { decrementQty(ele.itemQty,index) }} /> <br/>
                        <DeleteIcon onClick={()=>{deleteData(index)}}/>
                       </div>
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