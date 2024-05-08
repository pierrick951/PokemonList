import './ModalContent.css'
export default function ModalContent({poke, closeModal}) {
  return (
    <div 
    onClick={closeModal}
    className='ModalBox'>
      <div
      onClick={e=> e.stopPropagation}
      className="modalContent">
        <button
             onClick={closeModal}
        >X</button>
        <h1>{poke.name}</h1>
        <p>Type :
          <span>{poke.apiTypes.name}</span>
        
        </p>
      </div>
    </div>
  )
}