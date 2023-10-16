import Lista from '../Listas/Lista';
import PaperGirls from '../../img/paperGirls.jpg';
import PercyJackson from '../../img/percyJackson.jpg';
import TLOU from '../../img/thelastofus.jpeg'
import Facadas from '../../img/16facadas.jpeg'
import percyDisney from '../../img/percy.jpg'
import mazerRunner from '../../img/MazeRunner.jpg'
import shameless from '../../img/shameless.jpg'
import miranha from '../../img/HomemAranha-NoWayHome.jpg'

import './Main.css';

function Main() {

    const filmes =[
        {nome: 'Percy Jackson', img: PercyJackson, sobre: 'O adolescente Percy Jackson descobre que os deuses gregos e as criaturas mitológicas são reais. Ele é filho de uma divindade e logo entra para um acampamento de treinamento para semideuses. Enquanto tenta se adaptar a seus novos poderes e amigos, ele descobre que o Raio-Mestre do poderoso Zeus foi roubado e ele é o principal suspeito. Assim, ele tenta solucionar o mistério junto com seus novos colegas, Grover e Annabeth.'},
        {nome:'Dezesseis Facadas', img: Facadas, sobre:'O temido Assassino das Dezesseis Facadas retorna 35 anos após sua primeira onda de assassinatos para fazer outra vítima. Jamie, de 17 anos, acidentalmente viaja de volta no tempo até 1987, determinada a deter o assassino antes que ele comece a agir.',},
        {nome:'Maze Runner: Correr ou Morrer', img: mazerRunner, sobre:'Em um futuro apocalíptico, o jovem Thomas é escolhido para enfrentar o sistema. Ele acorda dentro de um escuro elevador em movimento e não consegue se lembrar nem de seu nome. Na comunidade isolada em que foi abandonado, Thomas conhece outros garotos que passaram pela mesma situação. Para conseguir escapar, ele precisa descobrir os sombrios segredos guardados em sua mente e correr muito.',},
        {nome:'Homem-Aranha: Sem Volta para Casa', img: miranha, sobre:'Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.',},

    ]

    const serie =[
        {nome: 'Paper Girls', img: PaperGirls, sobre: 'A rota de entrega de jornais de Erin, Mac, Tiffany e KJ é interrompida no Dia do Inferno, 1988, quando viajam no tempo sem saber. Agora, as meninas buscam um caminho de volta para a década de 1980 e conhecem duas facções que viajam no tempo.'},
        {nome:'The Last of us', img: TLOU, sobre:'Joel, um sobrevivente duro e cínico, e a jovem e impetuosa Ellie se conectam pela dificuldade do mundo em que vivem. Juntos, eles enfrentam circunstâncias brutais e monstros impiedosos durante uma difícil jornada pelos EUA após um surto apocalíptico.',},
        {nome:'Percy Jackson and the Olympians', img: percyDisney, sobre:'Percy Jackson and the Olympians é uma futura série de televisão americana criada pela 20th Television para o Disney+, baseada na série de livros de mesmo nome escrita por Rick Riordan. Jonathan E. Steinberg e Dan Shotz servem como showrunners, com cada temporada adaptando um livro da saga',},
        {nome:'Shameless', img: shameless, sobre:'Frank tem seis filhos e passa a maior parte de seu tempo bebendo em bares. As crianças, lideradas por Fiona, a primogênita, tentam se virar como podem, apesar do estranho comportamento do pai. Juntos, eles formam uma família pouco convencional.',},

    ]

    /* {nome:'', img: , sobre:'',}, */


    return(
        <main>
            <Lista exibir={filmes} titulo={"Filmes"}/>
            <Lista exibir={serie} titulo={"Série"}/>
        </main>
    )
}

export default Main;