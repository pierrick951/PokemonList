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
        <p className='Stats'>Stats : </p>
        <div className="boxStats">
          <div className="boxStatsLeft">
            <p>HP : <span>{poke.stats.HP}</span>
            </p>
            <p>Attack : <span>{poke.stats.attack}</span>
            </p>
            <p>Defense : <span>{poke.stats.defense}</span>
            </p>
          </div>
          <div className="boxStatsRigth">
            <p>Attack Spe :
              <span> {poke.stats.special_attack}</span>
            </p>
            <p>Defense Spe :
              <span> {poke.stats.special_defense}</span>
            </p>
            <p>Speed :
              <span> {poke.stats.speed}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}