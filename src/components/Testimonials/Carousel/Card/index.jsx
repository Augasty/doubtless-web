import './card.styles.css'

const Card = ({feedback}) => {
  const {name,tag,review} = feedback
  return (
    <div className='box'>
      <div className="group">
        <div className="HeadC">{name}</div>
        <div className="tagC">{tag}</div>

        <div className='textC'>{review}</div>
      </div>
    </div>
  )
};

export default Card