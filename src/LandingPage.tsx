import * as React from 'react';

//import { DashboardSidebar } from "./Sidebar";
import Header from "./Header";
import { Footer } from "./Footer";
import { CardView} from './CardView';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Hi } from './Hi';
import { randomInt } from 'crypto';


    // Just an idea for client side routing. This is using the React Router. Try this only after I get everything else working.

    // const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
    //     return (
    //       <a ref={ref} {...props} onClick={handleClick}> 
    //         {props.children}
    //       </a>
    //     )
    //   })
    //   <Link to="/" component={FancyLink} />

const WorkView = styled(CardView)`
    height:auto;
    width:100%;
`

const ScrollPort = styled('div')`
    bottom:0;
    top:0;
    left:100px;
    right:0;
    position:absolute;
    overflow-x:hidden;
    overflow-y:auto;
    height:100%;
    background-color:honeydew;
`

const SiderButton = styled(Button)`
    z-index:1;
    border-color: red;
    height:30px;
    width:95%;
`


export function LandingPage(): JSX.Element {

    const [scrollViewState, setScrollViewState] = useState(()=>{return(<><Hi/></>)})
    
    const handleSidebarClick = (fromWhere:string) => {
        if(fromWhere==='About'){
            setScrollViewState(()=>{return(<>About</>)})    
        }
        if(fromWhere==='Work'){
            setScrollViewState(()=>{return(<><WorkView/><Footer/></>)}) 
        }
        
        if(fromWhere==='About'){
            setScrollViewState(()=>{return(<>Hello</>)}) 
        }
    }

    

    

    const Sider = () => {

        return(
            <AppBar style={{width:'110px', height:'100%', position:'absolute', left:'0', flex:'auto', flexDirection:'column', backgroundColor:'black', borderRightStyle:'groove'}}>
                <Toolbar style={{flex:'auto', flexDirection:'column', placeContent:'center', justifyContent:'space-around', paddingTop:'100px', paddingBottom:'100px', paddingLeft:'0px', paddingRight:'0px'}}>
                    
                    <SiderButton variant='outlined' size= 'large' onClick={() => handleSidebarClick('About')}> {/* Not sure if this function will work */}
                        <Typography color='white' noWrap sx={{fontSize: 15}}>
                            About
                        </Typography>
                    </SiderButton>
    
                    <SiderButton variant='outlined' size= 'large' onClick={() => handleSidebarClick('Work')}>
                        <Typography color='white' noWrap sx={{fontSize: 15}}>
                            Work
                        </Typography>
                    </SiderButton>
    
                    <SiderButton variant='outlined' size= 'large' onClick={()=>handleSidebarClick('About')}>
                        <Typography color='white' noWrap sx={{fontSize: 15}}>
                            About
                        </Typography>
                    </SiderButton>
    
                    <SiderButton variant='outlined'size='large' sx={{padding:0}} onClick={()=>handleSidebarClick('Contact')}> {/*onClick={()=>router.push('/ContactPage')} */}
                        <Typography color='white' noWrap sx={{fontSize: 15}}>
                            Contact
                        </Typography>
                    </SiderButton>            
                </Toolbar>
            </AppBar>  
        )
    }   
    
    return(
    
        <div style={{height:'100%', width:'100%', bottom:0, top:0}}> {/* toolbars */}
            <Header/>
            <Sider/>
            <div style={{display: 'flex', flexDirection: 'row'}}> 
                
                
                

                <ScrollPort> {/* this is the scrollview */}
                    {scrollViewState}
                </ScrollPort>
            </div>
        </div>

    );
}






