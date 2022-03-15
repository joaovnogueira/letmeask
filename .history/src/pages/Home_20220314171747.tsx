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
import { FormEvent, useState } from "react";
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


    return(
        <div id = 'page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real </p>
            </aside>
            <main>
                <div className="main-content">
                    <button id='Logo'>Letmeask</button>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImage} alt="Logo do Google" />
                        Crie sua sala com o Google 
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                           type="text" 
                           placeholder="Digite o código da sala"
                           onChange={event => setRoomCode(event.target.value)}
                           value = {roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
            const Header: React.FC<Props> = ({toggleTheme}) </Props>
            <Container>
                    Hello World
                    <Switch
                        onChange={toggleTheme}
                        checked={true}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={10}
                        width={40}
                        handleDiameter={10}
                        offColor="#a8a8b3"
                        onColor="#a8eb12"
                        
                    />  
            </Container>
        </div>
    )
}