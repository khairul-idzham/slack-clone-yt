import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { db } from '../firebase';
import firebase from '@firebase/app-compat';

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState("");

    const sendMessage = e => {
        e.preventDefault()

        if (!channelId){
            return false;
        };

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Khairul Idzham",
            userImage: "https://image.shutterstock.com/shutterstock/photos/396979387/display_1500/stock-vector-k-alphabet-avatar-business-letter-logo-black-396979387.jpg"
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    };

    return (
        <ChatInputContainer>
            <form action="">
                <input
                    value={ input }
                    onChange={ (e) => setInput(e.target.value) }
                    placeholder={ `Message ${ channelName }` }
                />
                <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;
