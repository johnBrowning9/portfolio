import { WrapText } from "@mui/icons-material"
import { Paper, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { Gallery } from './ImagesGallery'

const AboutMePaper = styled(Paper)`
    height: 88%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 10px;
    min-width: 300px;
`

export const AboutPage = () => {



    return(
        <>
        <AboutMePaper elevation={6}>
            <div>
                <Typography variant="subtitle1" style={{padding:'10px'}}>
                    I am a nerd, a soccer fan, a technology addict, and a US Navy Veteran.
                </Typography>

                <Typography variant="subtitle1" style={{padding:'10px'}}>
                    My Professional Journey:
                    
                </Typography>
                <Typography variant="subtitle1" style={{padding:'10px'}}>
                    
                    Share my values: 
                    
                </Typography>
                <Typography variant="subtitle1" style={{padding:'10px'}}>
                    
                    How I can help:
                </Typography>
                <Typography variant="subtitle1" style={{padding:'10px'}}>
                    
                    Maybe a picture of myself?
                </Typography>
            </div>
            <Gallery/>


        </AboutMePaper>
        </>
    )

}
