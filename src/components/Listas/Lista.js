import Exibicao from '../Exibicao/Exibicao'
import './Lista.css'

function Lista({ exibir, titulo }) {

    return (
        <>
            <h1>{titulo}</h1>
            <div className="exibir">
                {exibir.map((catalogo) =>
                    <Exibicao nome={catalogo.nome} img={catalogo.img} sobre={catalogo.sobre} />
                )}
            </div>
        </>
    )
}

export default Lista;