import { AppBar ,styled,Toolbar,Box } from "@mui/material";
import LoginDialog from "./account/logindialog";


const Header  = styled(AppBar)`
    height : 170px;
    background-color : #00bfa5;
    box-shadow : none;
`

const Component = styled(Box)`
    height : 100vh;
    background : #DCDCDC;   
`
const Message  = ()=>{
    return(
        
        <>
        <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        </Component>


        <LoginDialog/>
        </>   
    )
}

export default  Message;