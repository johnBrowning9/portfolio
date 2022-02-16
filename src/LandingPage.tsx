import * as React from 'react';

//import { DashboardSidebar } from "./Sidebar";
import Header from "./Header";
import { Footer } from "./Footer";
import { CardView} from './CardView';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, fabClasses } from '@mui/material';
import { Hi } from './Hi';
import { randomInt } from 'crypto';
import { ContactPage } from './ContactPage';
import { AboutPage } from './AboutPage';
import { FlashOnOutlined } from '@mui/icons-material';


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
    background-color:whitesmoke;
`

const SiderButton = styled(Button)` //<{isHovering?:boolean}>  This is for dynamic styles
    //transition: background-color .1s ease;
    z-index:1;
    border-color: red;
    height:30px;
    width:95%;
    border-radius:25px;
    background-color: black;
`
//background-color: ${(props) => (props.isHovering ? 'red' : 'black')};


export function LandingPage(): JSX.Element {

    const [scrollViewState, setScrollViewState] = useState(()=>{return(<><Hi/></>)})
    const [isHovering, setIsHovering] = useState(false);
    
    const handleSidebarClick = (fromWhere:string) => {
        if(fromWhere==='About'){
            setScrollViewState(()=>{return(<><AboutPage/></>)})    
        }
        if(fromWhere==='Work'){
            setScrollViewState(()=>{return(<><WorkView/><Footer/></>)}) 
        }
        if(fromWhere==='Contact'){
            setScrollViewState(()=>{return(<><ContactPage/></>)})
        }
        if(fromWhere==='Home'){
            setScrollViewState(()=>{return(<><Hi/></>)})
        }
    }

    

    

    const Sider = () => {


        /** It could be cool to have the background image cycle around, like a barber pole effect. */
        return(
            <AppBar style={{width:'110px', height:'100%', position:'absolute', left:'0', flex:'auto', flexDirection:'column', backgroundColor:'transparent', borderRightStyle:'groove', backgroundImage: 'url(/codeBackground.jpg)', backgroundSize:'cover'}}>
                
                <Toolbar style={{flex:'auto', flexDirection:'column', placeContent:'center', justifyContent:'space-around', paddingTop:'100px', paddingBottom:'100px', paddingLeft:'0px', paddingRight:'0px'}}>
                    
                    <Button onClick={() => handleSidebarClick('Home')} style={{backgroundColor:'black', height:'60px', position:'absolute', top:'0', width:'100%', borderBottom: 'dotted', borderBottomColor:'red'}}>
                    
                        <Typography color='white'>
                            .dev
                        </Typography>

                    </Button>
                    <SiderButton variant='outlined' size= 'large' onClick={() => handleSidebarClick('About')} sx={{"&.MuiButton-root:hover": {backgroundColor: "red", borderColor:'red'}}}> 
                        <Typography color='white' noWrap sx={{fontSize: 15}}>
                            About
                        </Typography>
                    </SiderButton>
    
                    <SiderButton variant='outlined' size= 'large' onClick={() => handleSidebarClick('Work')} sx={{"&.MuiButton-root:hover": {backgroundColor: "red", borderColor:'red'}}}>
                        <Typography color='white' noWrap sx={{fontSize: 15}}>
                            Work
                        </Typography>
                    </SiderButton>
    
                    <SiderButton variant='outlined'size='large' onClick={()=>handleSidebarClick('Contact')} sx={{"&.MuiButton-root:hover": {backgroundColor: "red", borderColor:'red'}, padding:0}}> {/*onClick={()=>router.push('/ContactPage')} */}
                        <Typography color='white' noWrap sx={{fontSize: 15}}>
                            Contact
                        </Typography>
                    </SiderButton>            
                </Toolbar>
            </AppBar>  
        )
    }   
    
    return(
    
        <div style={{height:'100%', width:'100%', bottom:0, top:0}}>
            <Header/>
            <Sider/>
            <div style={{display: 'flex', flexDirection: 'row'}}> 
                
                
                

                <ScrollPort>
                    {scrollViewState}
                </ScrollPort>
            </div>
        </div>

    );
}






