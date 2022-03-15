import { useHistory } from "react-router-dom";

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';

//import 'firebase/compat/auth';
import {auth, database, firebase} from '../services/firebase'
//import firebase from 'firebase/compat/app';


import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';


interface Props {
    toggleTheme(): void;
}

import '../styles/auth.scss'

import { Button } from '../components/Button'
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useContext, useState } from "react";
import { Container } from "../components/Header/styles";

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [ roomCode, setRoomCode ] = useState('');

    async function handleCreateRoom() {

        if (!user){
            await signInWithGoogle()
        }

        history.push('/rooms/new')

    }

    async function handleJoinRoom(event: FormEvent){
        event.preventDefault();

        if (roomCode.trim() == ''){
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()){
            alert('Room does not exists.')
            return;
        }

        if(roomRef.val().endedAt){
            alert('Room already closed.');
            return;
        }

        history.push(`/rooms/${roomCode}`)
    }


    const Header: React.FC<Props> = ({ toggleTheme }) => {
        const { colors, title } = useContext(ThemeContext);
        
    }
}