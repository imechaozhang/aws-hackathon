import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, ButtonGroup, Box, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    button:{
        
        },
    appbar:{
        backgroundColor:'purple',
        marginTop:0
    }
}))

export default function Navbar() {
	
const akash = useStyles();
return (
		<div  >
			<AppBar className={akash.appbar} position="static">
				<Toolbar>
					<Typography variant="h6">Ai-Radiology</Typography>
                    <Box className={akash.button}>
                    <ButtonGroup variant='contained'>
                        <Button component={Link} to="/">Home</Button>
                        <Button component={Link} to="/about">About</Button>
                        <Button component={Link} to="/team">Team</Button>
                    </ButtonGroup>
                    </Box>
                </Toolbar>
			</AppBar>
        </div>
	);
}
