import * as React from 'react';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Button, Link } from '@mui/material';
import { styled } from '@mui/system';

const LinkButton = styled(Button)`
    background-color: rgb(139, 0, 0, .15);
    border-radius: 25px; 
    margin-right: 10px;
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
            <div style={{position:'absolute', left:'120px'}}>This site is a work in progress...</div>

            <LinkButton>
                <Link href='https://github.com/johnBrowning9' style={{paddingTop:'6px'}}>
                    <GitHub sx={{color:'red'}}>
                    </GitHub>  
                </Link>      
            </LinkButton>

                

            <LinkButton>
                
                    <Instagram sx={{color:'red'}}>
                    
                    </Instagram>
               
            </LinkButton>

            <LinkButton>
                <Link href='https://www.linkedin.com/in/johntbrowning/' style={{paddingTop:'6.5px'}}>
                    <LinkedIn sx={{color:'red'}}>

                    </LinkedIn>
                </Link>
            </LinkButton>

        </HeaderDiv>


    )
}