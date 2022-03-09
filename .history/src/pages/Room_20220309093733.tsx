import logoImg from '../assets/images/logo.svg'


export function Room(){
    return(
        <div id ="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>código da sala</div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1>Sala React</h1>
                    <spam></spam>
                </div>
            </main>
        </div>
    );
}