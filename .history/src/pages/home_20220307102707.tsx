import { useHistory } from "react-router-dom";

//import 'firebase/compat/auth';
import {auth, firebase} from '../services/firebase'
//import firebase from 'firebase/compat/app';


import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';


import '../styles/auth.scss'

import { Button } from '../components/Button'
import { useContext } from "react";
import { AuthContext } from "../App";

export function Home() {
    const history = useHistory();
    const{ user, signInWithGoogle } = useContext(AuthContext)

    function handleCreateRoom() {

        
        history.push('/rooms/new')

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
                    <img src={logoImg} alt="Letmeask Logo"/>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImage} alt="Logo do Google" />
                        Crie sua sala com o Google 
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input 
                           type="text" 
                           placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}