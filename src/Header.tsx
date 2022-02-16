import * as React from 'react';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Button, Link } from '@mui/material';
import { styled } from '@mui/system';

const LinkButton = styled(Button)`
    background-color: rgb(139, 0, 0, .15);
    border-radius: 25px; 
    justify-content: center;
    margin-top: 5px; 
    
`

const HeaderDiv = styled('div')`
    height:50px;
    width:100%;
    background-color: transparent;
    position: absolute;
    top:0;
    z-index:1;
    display: flex;
    flex-direction: row;
    justify-content:flex-end;

`

export default function Header():JSX.Element {


    return(
        <HeaderDiv> 
        
            <div style={{backgroundColor:'transparent', display:'flex', flexDirection:'row', marginRight:'23px', justifyContent:'space-between', width:'230px'}}>
            <LinkButton variant = 'outlined' sx={{color:'red', border: '1px solid red', backgroundColor: 'black', "&.MuiButton-root:hover": {backgroundColor: "red", borderColor:'red'}}}> 
                <Link href='https://github.com/johnBrowning9' style={{paddingTop:'6px'}}>
                    <GitHub sx={{color:'white'}}>
                    </GitHub>  
                </Link>      
            </LinkButton>

                

            <LinkButton variant = 'outlined' sx={{color:'red', border: '1px solid red', backgroundColor: 'black', "&.MuiButton-root:hover": {backgroundColor: "red", borderColor:'red'}}}>
                
                    <Instagram sx={{color:'white'}}>
                    
                    </Instagram>
               
            </LinkButton>

            <LinkButton variant = 'outlined' sx={{color:'red', border: '1px solid red', backgroundColor: 'black', "&.MuiButton-root:hover": {backgroundColor: "red", borderColor:'red'}}}>
                <Link href='https://www.linkedin.com/in/johntbrowning/' style={{paddingTop:'6.5px'}}>
                    <LinkedIn sx={{color:'white'}}>

                    </LinkedIn>
                </Link>
            </LinkButton>
            </div>

        </HeaderDiv>


    )
}