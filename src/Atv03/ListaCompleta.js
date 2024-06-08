
const today = new Date()

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'pt-br',
        { weekday: 'long' }
    ).format(date)
}

const person = {
    name: 'RTX 4090',
    theme: {
        backgroundColor: 'black',
        color: 'green'
    }
}

export default function TodoList() {
    const nome = 'RTX 4090'

    return (
        <>
            <div style={person.theme}>
                <h1>{person.name}' </h1>
                <img src="https://www.adrenaline.com.br/wp-content/uploads/2023/10/nvidia-geforce-rtx-4090-912x569.jpg" alt=" RTX" />
            </div>

            <h1>Hoje é {formatDate(today)}</h1>
            <h1>Evoluçao da Nvidia até a {nome}   </h1>
            <img src="https://www.cgchannel.com/wp-content/uploads/2000/01/230609_GeForceRTX40Series_SpecsChart_lg.jpg" alt="RTX 4090 " />

            <h2> Essa é a 4060 ti</h2>
            <img src="https://i.pcmag.com/imagery/reviews/05EXYovqkcFXCn0kqErFLvN-1.fit_lim.size_1050x591.v1684798082.jpg" alt="RTX 4060 ti " />

            <ul>
                <li >Tem 8gb ram GDDR6 </li>
                <li> tem 15,1 TFlops de potencia! superior ao PS5</li>
                <li> Este aqui é da nvidia</li>
            </ul>
        </>
    )
}