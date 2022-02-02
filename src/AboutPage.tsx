import { WrapText } from "@mui/icons-material"
import { Paper, Typography } from "@mui/material"
import { styled } from "@mui/system"

const AboutMePaper = styled(Paper)`
    height: 80%;
    //width: 80%;
    /* margin-left: 80px;
    margin-top: 60px; */
    margin: 60px;
`

export const AboutPage = () => {



    return(
        <>
        <AboutMePaper elevation={6}>
            <Typography variant="subtitle1" style={{padding:'20px'}}>
                I am a nerd, a soccer fan, a technology addict, and a US Navy Veteran.
            </Typography>

            <Typography variant="subtitle1" style={{padding:'20px'}}>
                My Professional Journey:
                
            </Typography>
            <Typography variant="subtitle1" style={{padding:'20px'}}>
                
                Share my values: 
                
            </Typography>
            <Typography variant="subtitle1" style={{padding:'20px'}}>
                
                How I can help:
            </Typography>
            <Typography variant="subtitle1" style={{padding:'20px'}}>
                
                Maybe a picture of myself?
            </Typography>



        </AboutMePaper>
        </>
    )

}
