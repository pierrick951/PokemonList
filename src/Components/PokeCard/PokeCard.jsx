import { useState } from 'react'
import { createPortal } from "react-dom"
import ModalContent from './ModalContent/ModalContent'

import './PokeCard.css'

export default function PokeCard({ poke }) {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <li
            onClick={()=> setShowModal(!showModal)}
                className='PokeLi'
            >
                <h2 className='headingpoke'>{poke.name}</h2>
                <div className="boxImg">
                    <img src={poke.image} alt="Pokemon Image" />
                </div>
            </li>
            {showModal && createPortal(<ModalContent poke={poke} closeModal={() => setShowModal(!showModal)}/>, document.body)}

        </>
    )
}