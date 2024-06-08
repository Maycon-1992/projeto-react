import Avatar from './Avatar'

function Card({ children }) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default function Perfil2() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Morty Sanchez',
                    imageId: 'QJ365qX'
                }}
            />
        </Card>
    )
}