import React from 'react';
import { AppBar,Toolbar, IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import  logo from "../../assets/commerce.jpg";


import UseStyles from "./styles";
import { Link,useLocation } from 'react-router-dom';


const Navbar = ({totalItems}) => {
    const classes=UseStyles();
    let location=useLocation();

    
    return (
        <>
         <AppBar  psoition ="fixed" className={classes.appbar}  color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" classeName={classes.title} color="inherit">
                    <img  src={logo} alt="Computer Store "  height="25px" className={classes.image} />
                    Computer Store
                </Typography>
                <div  className={classes.grow}/>
                {location.pathname==="/" &&(
                <div className={classes.button} >
                <IconButton component={Link} to ="/cart" aria-label="Show Cart Items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart/>

                    </Badge>

                </IconButton>
                </div> )}

            </Toolbar>



             </AppBar>   
        </>
    )
}

export default Navbar;
