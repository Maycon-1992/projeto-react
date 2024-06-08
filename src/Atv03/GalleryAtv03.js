export function Profile() {
    return (
        <img
            src="https://www.nvidia.com/content/dam/en-zz/Solutions/titan/titan-rtx/nvidia-titan-rtx-shop-2c50-l.png"
            alt="RTX titan 24GB"
        />
    )
}

export default function Galeria() {

    return (
        <section>
            <h1> Esta aqui é a RTX titan edition que tem 24 GB ram e 40TFlops de potencia!</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}