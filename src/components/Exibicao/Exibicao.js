import './Exibicao.css'

function Exibicao({ nome, sobre, img }) {
    return (
        <div className='filmes-sobre'>
            <h3>{nome}</h3>
            <img src={img} alt={nome} />
            <p>{sobre}</p>
        </div>
    )
}

export default Exibicao;