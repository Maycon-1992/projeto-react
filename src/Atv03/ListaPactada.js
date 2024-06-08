function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " FINISHED"}
            </del>
        )
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>fatos e frases da serie </h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Ricky do universo 127"
                />
                <Item
                    isPacked={false}
                    name=" AH Ricky tu virou um pepino cacilds!"
                />
                <Item
                    isPacked={false}
                    name="Você deveria saber morty, quq quando mexe entre dimensões diferentes, da uma confusão danada!"
                />
            </ul>
        </section>
    );
}