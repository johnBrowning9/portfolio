import { Button } from '@mui/material';
import React, { useState } from 'react';
import { AImage } from './Image';
import { ArrowBack,ArrowForward } from '@mui/icons-material';

const images = [ // Add my own images here into the array
    AImage('/headshot.jpg'),
    AImage('/muffins.jpg'),
    AImage('/testing1.jpg'),
    AImage('/ThankYou.jpg'),
];



export const Gallery = ():JSX.Element => { 



    // What states will I need? 

    // the indexes of the pictures that are currently displayed
    const [displayed, setDisplayed] = useState([0,1]);



    // functions 

    const handleDisplayChange = (from: string) => {

        // I need to stop the array from progressing if its at the end of the array

        // if Forward button pressed, 
        if(from === 'forward' && displayed[displayed.length-1]!==images.length-1){
            const updatedArray:number[] =
                displayed.map((index:number) => {
                return index+1;
            })

            setDisplayed(updatedArray)
        }

        // if Backward button pressed
        if(from === 'back' && displayed[0]!==0){
            const updatedArray:number[] =
                displayed.map((index:number) => {
                return index-1;
            })

            setDisplayed(updatedArray)
        }

    }

  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <Button onClick={()=> handleDisplayChange('back')} variant = 'contained' style={{width:'7%', backgroundColor: 'rgb(139, 0, 0, .15)', minWidth: '0', borderBottomLeftRadius:'10px', borderTopLeftRadius:'0px'}}>
            <ArrowBack sx={{color:'red'}}/>
        </Button>
        <div style={{display:'flex', overflowX:'hidden', flexDirection:'row'}}>

        

        
        {/** Filters the images array to only display the indices in the displayed array */}
        {displayed.map((img)=>{
            return images.filter((i)=>{
                return images.indexOf(i)===img.valueOf();
            })          
        })}

        
        </div>
        <Button onClick={()=> handleDisplayChange('forward')} variant = 'contained' style={{width:'7%', backgroundColor: 'rgb(139, 0, 0, .15)', minWidth: '0', borderBottomRightRadius:'10px', borderTopRightRadius:'0px'}}>
            <ArrowForward sx={{color:'red'}}/>
        </Button>
    </div>

  )
}