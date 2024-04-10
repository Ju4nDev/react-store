import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <>
            <header className='menu'>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/sobre">Sobre</Link>
                        <Link to="/contato">Contato</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}