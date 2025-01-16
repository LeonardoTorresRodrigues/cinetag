import Rodape from "../../components/Rodape";
import Cabecalho from "../../components/Cabecalho";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";

export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Rodape />
        </>
    )
}
