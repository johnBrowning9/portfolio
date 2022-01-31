import * as React from 'react';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Button, Link } from '@mui/material';
import { styled } from '@mui/system';

const LinkButton = styled(Button)`

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
                <Link href='https://github.com/johnBrowning9'>
                    <GitHub>
                    </GitHub>  
                </Link>      
            </LinkButton>

                

            <LinkButton>
                
                    <Instagram>
                    
                    </Instagram>
               
            </LinkButton>

            <LinkButton>
                <Link href='https://www.linkedin.com/in/johntbrowning/'>
                    <LinkedIn>

                    </LinkedIn>
                </Link>
            </LinkButton>

        </HeaderDiv>


    )
}