import './ModalContent.css'
export default function ModalContent({poke, closeModal}) {
  return (
    <div 
    onClick={closeModal}
    className='ModalBox'>
      <div
      onClick={e=> e.stopPropagation}
      className="modalContent">
     
        <h1 className='headingModal'>{poke.name}
        <img src={poke.sprite} alt="" />
        </h1>
        
        <div className="boxType">
          <p className='infoType'>
            {poke.apiTypes.map(type => (
              <span key={type.name}>
                <img src={type.image} alt={type.name}/>
                {type.name}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}