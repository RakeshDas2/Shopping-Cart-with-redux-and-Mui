import { AppBar, Badge, Button, Container, IconButton, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


function NavBarComponent(props) {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    // const gotoSignIn = () => {
    //     props.history.push('/')
    // }

    const gotoCart=()=>{
        props.history.push('/cart')
    }
    const recivedData=useSelector(state=>state.cartProductsReducer)
    return (

        <>
            <Container>
                <AppBar>
                    <Toolbar>
                        {/* <Button color='inherit' sx={{ flexGrow: 0 }}>Home</Button>
                        <Button color='inherit' >Products</Button>
                        <Button color='inherit'>AddProducts</Button>
                        <Button color='inherit' onClick={() => { gotoSignIn() }}>LogOut</Button> */}


                        <Typography variant='h4' sx={{ flexGrow: 1 }}>
                            <Link to='/home' style={{ textDecoration: 'none', marginLeft: '-740px' }}>Home</Link>
                        </Typography>


                        <Typography variant='h6' p={1}>
                            <Link to='/products' style={{ textDecoration: 'none' }}>Products</Link>
                        </Typography>
                        <Typography variant='h6' p={1}>
                            <Link to='/add_product' style={{ textDecoration: 'none' }}>AddProducts</Link>
                        </Typography>
                        <IconButton aria-label="cart"  p={2}>
                            <StyledBadge badgeContent={recivedData.list.length} color="secondary">
                                <ShoppingCartIcon  onClick={()=>{gotoCart()}}/>
                            </StyledBadge>
                        </IconButton>
                        <Typography variant='h6' p={2}>
                            <Link to='/' style={{ textDecoration: 'none' }}>Logout</Link>
                        </Typography>


                    </Toolbar>
                </AppBar>
            </Container>
            <br />
            <br />
            <br />
            <br />

        </>

    )
}

export default withRouter(NavBarComponent)