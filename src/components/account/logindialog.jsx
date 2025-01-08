import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../constants"; // Assuming the QR code image is correctly imported
import React from "react";
import { GoogleLogin } from '@react-oauth/google';
const FlexBox = styled(Box)`
    display: flex;
`;

const dialogStyle = {
    height: "86%",
    width: "60%",
    marginTop: '10%',
    maxWidth: "100%",
    maxHeight: "80%",
    overflow: "hidden",
};

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
    overflow-y: auto;
`;

const LoginDialog = () => {

    const onLoginSuccess = ()=>{

    }

    const onLoginError = () =>{
        
    }
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
        >
            <FlexBox>
                <Container>
                    <Typography variant="h6" gutterBottom>
                       To Use Whatsapp Mobile Login
                    </Typography>
                    <List>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "16px",
                    }}
                >
                    <img
                        src={qrCodeImage}
                        alt="QR Code"
                        style={{ width: "200px", height: "200px", objectFit: "contain" }}
                    />
                    <Box>
                        <GoogleLogin
                            onSuccess = {onLoginSuccess}
                            onError = {onLoginError}
                        
                        />

                    </Box>
                </Box>
            </FlexBox>
        </Dialog>
    );
};

export default LoginDialog;
