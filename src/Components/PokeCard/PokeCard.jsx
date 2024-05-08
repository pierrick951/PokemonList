import './PokeCard.css'

export default function PokeCard({ poke }) {
    return (
        <>
            <li
            className='PokeLi'
            >
               <h2 className='headingpoke'>{poke.name}</h2>
               <div className="boxImg"><img src={poke.image} alt="Pokemon Image" /></div>
            </li>

        </>
    )
}