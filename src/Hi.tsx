import React from 'react';
import {Box, Container, Typography, Stack, Button} from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';

const HiDiv = styled('div')`
    background-color: 'grey';
`


export const Hi = () => {

    // Cannot get this function working
    // function TypingAnimationComponent():JSX.Element {
    //     console.log('in TypingAnimationComponent')
    //     const firstLineArr:string[] = ['H','i','!',',',' ','I','m',' ','J','o','h','n'];
    //     const secondLineArr:string[] = ['I',' ','m','a','k','e',' ','f','u','n', ' ', 't','h','i','n','g','s'];
        
    //     let currentIndex:number = 0;
    //     const displayArr1:string[] = [];
    //     const displayArr2:string[] = [];
    //     const getRandomInt = ():number => {
    //         const min:number = Math.ceil(500); // in milliseconds
    //         const max:number = Math.floor(1000);
    //         return Math.floor(Math.random() * (max - min) + min);
    //     }
    
    //     const updateArray = () => {
    //         currentIndex++;
    //         displayArr1.push(firstLineArr[currentIndex]);
    //         console.log(currentIndex);
    //         console.log(displayArr1.length);
    //         if(currentIndex===secondLineArr.length-1){
    //             clearInterval(intervalId);
    //         }
    //     }
        
    //     const intervalId = setInterval(()=>{updateArray()},getRandomInt()); // need to clear the interval once the arrays are done.
    //     console.log(intervalId)
    //     // useEffect(()=> {
            
    //     //     displayArr1.push(firstLineArr[currentIndex]);
    //     //     console.log(currentIndex);
    //     //     console.log(displayArr1.length);
    //     //     // set the character in the function
    //     //     //setInterval(getChar,getRandomInt());
    //     // }); // add a dependancy of each time a new character is typed.
        
    //     return(
    //         <>
    //             <Typography
    //             component="h1"
    //             variant="h2"
    //             align="center"
    //             color="text.primary"
    //             gutterBottom
    //             >
    //                 Hi! I'm John      {/* make this type out dynamically with keyboard sounds ! */}
    //             </Typography>
    //             <Typography variant="h5" align="center" color="text.secondary" paragraph>
    //                 I make 
    //             </Typography>
    //         </>

    //     ) 
    
    // }




    return(
        <>
        
        <Box
        sx={{
        bgcolor: 'whitesmoke',
        pt: 8,
        pb: 6,
        display: 'flex',
        textAlignLast: 'right'
        }}
        >
        <Container maxWidth="sm">
        <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
        >
            Hi! I'm John :) {/* make this type out dynamically with keyboard sounds ! */}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            I make fun things on the web
        </Typography>
        <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
        >
        <Typography variant="h6" align="center" color="text.secondary" paragraph sx={{borderBottomStyle:'dashed'}}>
            Software Engineer // Web developer // Music enthusiast 
        </Typography>

        {/* Add a picture of myself here */}



        </Stack>
        </Container>
        </Box>
        
        </>
    )
}