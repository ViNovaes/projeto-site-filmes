import './Exibicao.css'

function Exibicao(titulo, sobre, img){
    return(
        <div className='filmes-sobre'>
            <img src={img} alt={titulo}/>
            <h1>{titulo}</h1>
            <p>{sobre}</p>
            
        </div>
    )
}

export default Exibicao;