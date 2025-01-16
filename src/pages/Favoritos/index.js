import styles from './Favoritos.module.css';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';

export default function Favoritos() {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
        </>
    )
}