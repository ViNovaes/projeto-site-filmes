import Lista from '../Listas/Lista';
import paperGirls from '../../img/paperGirls.jpg';
import PercyJackson from '../../img/percyJackson.jpg';

import './Main.css';

function Main() {

    const filmes =[
        {Titulo: 'Percy Jackson', img: PercyJackson, sobre: 'O adolescente Percy Jackson descobre que os deuses gregos e as criaturas mitológicas são reais. Ele é filho de uma divindade e logo entra para um acampamento de treinamento para semideuses. Enquanto tenta se adaptar a seus novos poderes e amigos, ele descobre que o Raio-Mestre do poderoso Zeus foi roubado e ele é o principal suspeito. Assim, ele tenta solucionar o mistério junto com seus novos colegas, Grover e Annabeth.'}
    ]

    const serie =[
        {Titulo: 'Paper Girls', img: paperGirls, sobre: 'A rota de entrega de jornais de Erin, Mac, Tiffany e KJ é interrompida no Dia do Inferno, 1988, quando viajam no tempo sem saber. Agora, as meninas buscam um caminho de volta para a década de 1980 e conhecem duas facções que viajam no tempo.'}
    ]

    return(
        <Main>
            <Lista Exibir={filmes}/>
            <Lista Exibir={serie}/>
        </Main>
    )
}

export default Main;