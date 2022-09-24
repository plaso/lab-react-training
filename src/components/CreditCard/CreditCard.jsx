import masterCard from '../../assets/images/master-card.svg';
import visa from '../../assets/images/visa.png'
import './CreditCard.css'

function CreditCard({
  type, number, expirationMonth,
  expirationYear, bank, owner, bgColor, color
}) {
  const style = {
    backgroundColor: bgColor,
    color
  }

  return (
    <div className="CreditCard" style={style}>
      <div className="CreditCard__image">
        {type === 'Master Card' && (<img src={masterCard} />)}
        {type === 'Visa' && (<img src={visa} />)}

      </div>
      <p className="CreditCard__number">•••• •••• •••• {number.slice(-4)}</p>

      <div className="CreditCard__info">
        <p>Expires {expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth}/{expirationYear.toString().slice(-2)}</p>
        <p>{bank}</p>
      </div>
      <div>
        <p>{owner}</p>
      </div>
    </div>
  )
}

export default CreditCard