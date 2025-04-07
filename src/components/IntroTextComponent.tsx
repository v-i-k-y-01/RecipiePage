import { Typography } from "@mui/material";

interface Props{
    title: string;
    content: string;
}
function  IntroText ({title,content}:Props){
    return(
        <>
        <Typography sx={{
              fontFamily: 'Young Serif',
              fontSize: 20,
              fontWeight: 'bold',
              mb:1
            }}>
        <h1>{title}</h1> 
        </Typography>
        <p>{content}</p>
        </>
    );
}

export default IntroText;