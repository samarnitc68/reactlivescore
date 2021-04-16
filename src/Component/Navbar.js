import React from 'react'
import {AppBar, Toolbar,IconButton, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
const Navbar=()=> {
    return (
        <AppBar postion="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Typography variant="h6">Live Score</Typography>
            </Toolbar>

        </AppBar>
    )

};
export default Navbar;