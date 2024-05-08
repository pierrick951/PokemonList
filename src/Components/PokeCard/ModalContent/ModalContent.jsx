import './ModalContent.css'
export default function ModalContent({poke, closeModal}) {
  return (
    <div 
    onClick={closeModal}
    className='ModalBox'>
      <div
      onClick={e=> e.stopPropagation}
      className="modalContent">
     
        <h1>{poke.name}</h1>
        <img src={poke.sprite} alt="" />
        <p>Type :
          <span>{poke.apiTypes[0].name}</span>
          <img src={poke.apiTypes[0].image} alt="" />
        
        </p>
      </div>
    </div>
  )
}