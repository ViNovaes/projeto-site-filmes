import Exibicao from '../Exibicao/Exibicao'

function Lista({Titulo}, {Exibir}) {

    return (
        <>
            <div className="exibir">
                <h1>{Titulo}</h1>
                {Exibir.map((sobreView) =>
                    <Exibicao Titulo={sobreView.Titulo} img={sobreView.img} sobre={sobreView.sobre} />
                )}
            </div>
        </>
    )
}

export default Lista;