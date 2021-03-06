import React from 'react'
import { Typography,Button,Card,CardMedia,CardContent,CardActions } from '@material-ui/core'
 

import useStyles from "./styles";

const CartItem = ({item,onupdatecartquantity,onremovefromcart }) => {

    const classes=useStyles();
    return (
        <Card>
            <CardMedia image={item.media.source}  alt={item.name} className={classes.media}/>
            <CardContent classes={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}

                </Typography>

            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=>onupdatecartquantity(item.id,item.quantity-1)} >-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=>onupdatecartquantity(item.id,item.quantity+1)} >+</Button>
                </div>
                <Button variant="contained" color="secondary" type="button" onClick={()=>onremovefromcart(item.id)}>Remove</Button>

            </CardActions>



        </Card>
            
    
    )
}

export default CartItem
