import './Greetings.css'

function Greetings({ lang, children }) {
  const getGreeting = () => {
    if (lang === 'es') {
      return 'Hola'
    } else if (lang === 'fr') {
      return 'Bonjour'
    } else if (lang === 'en') {
      return 'Hello'
    } else if (lang === 'de') {
      return 'Hallo'
    }
  }

  return (
    <div className="Greetings">
      {getGreeting()} {children}
    </div>
  )
}

export default Greetings