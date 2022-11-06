import React, {useState} from "react";
import styled from 'styled-components';

import {COLORS} from '../../CommonStyles';

const Form = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    input, textarea {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
    }

    input[type=submit] {
        border: 4px solid ${COLORS.HEADER_BORDER};
        background-color: ${COLORS.HEADER_BACKGROUND};
        transition: background-color .5s ease-in-out;
        color: ${COLORS.HEADER_TEXT};
        cursor: pointer;

        &:hover {
            background-color: ${COLORS.INTRO_MENU_HOVERED};
            transition: background-color 0s ease-in-out;
        }
    }
`;

const MsgSentContainer = styled.div`
    text-align: center;
    margin-top: 90px;
`;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState<string>();

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.currentTarget.value);
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.currentTarget.value);
    }

    function handleMsgChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setMsg(e.currentTarget.value);
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        fetch("/api/send_mail.php", {
          method: "POST",
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: `name=${name}&email=${email}&msg=${msg}`
        }).then(response => {
            if (response.status === 200) {
                setIsSent(true);
            }
        }).catch(error => {
            setError(error);
        });
    }

    function showForm() {
        return (
            <Form onSubmit={onSubmit}>
                <input name="name" type="text" placeholder="Name" onChange={handleNameChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleEmailChange} required />
                <textarea name="msg" rows={5} placeholder="Write a message..." onChange={handleMsgChange} required></textarea>
                <input type="submit" value="Send" />
            </Form>
        );
    }

    function showMessageAfterSending() {
        if (error) {
            return <MsgSentContainer>There was an error when sending message, please use the other channels and send me the error message: {error}</MsgSentContainer>;
        } else {
            return <MsgSentContainer>Your message has been sent. Thank you!</MsgSentContainer>;
        }
    }

    return isSent ? showMessageAfterSending() : showForm();
};

export default ContactForm;