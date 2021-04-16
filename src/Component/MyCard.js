import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid'
import im from '../img/vs.png'
import { getMatchDetail } from '../api/Api';
import {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
const MyCard =({match})=>{
    const [detail, setDetail]=useState({})
    const [open,setOpen]=useState(false);

    const handleClick =(id)=>{
        
        getMatchDetail(id).then((data)=>{console.log("MATCH DATA",data)
        setDetail(data);
        handleOpen();
    })
        .catch((error)=>console.log(error));
    }

    const getMatchCard=()=>{
        return (
            <Card style={{margin:20}}>
                <CardContent>
                    
                    <Grid container justify="center" alignItems="center" spacing={4} >
                        <Grid item>
                         <Typography variant="h5" >{match["team-1"]}</Typography>   
                        </Grid>
                        <Grid item>

                       <img style={{width:85}} src={im} alt="not found" />
        

                        </Grid>
                        <Grid item>
                           <Typography variant="h5">{match["team-2"]}</Typography> 
                        </Grid>
                    </Grid>

                </CardContent>
                <CardActions>
                 <Grid container justify="center" >
                     
                 <Button onClick={()=>
               { handleClick(match.unique_id);}} item variant="contained" color="primary">Show details</Button>
                  <Button style={{marginLeft:5}} item variant="contained" color="primary">Start Time {new Date(match.dateTimeGMT).toLocaleDateString()}
                  </Button> 
                     
                     
                     </Grid> 
                 
                </CardActions>
            </Card>
        )
    }
    const handleClose=()=>{
        setOpen(false);

    }
    const handleOpen=()=>{
        setOpen(true);
    }

    const getDialog=()=>(
       <Dialog open={open} onClose={handleClose}>
           <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
           <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography>{detail.stat}</Typography>
                <Typography>
                   Match<span style={{fontStyle:"italic",fontWeight:"bold"}}>
                       {detail.matchStarted ? "Started":"Still not Started"}</span> 
                </Typography> 
                <Typography>
                <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                    {detail.score}
                    </span>

                </Typography>   
              </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose} color="primary" autoFocus>close</Button>  
           </DialogActions>
       </Dialog> 
    );

    return (
        <>
        {getMatchCard()}
       {getDialog()}
        </>
    )

}
export default MyCard;