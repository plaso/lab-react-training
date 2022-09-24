function Ratings({ children }) {
  const number = Math.round(children)

  return (
    <p>{new Array(5).fill().map((_, i) => {
      const star = i < number ? '★' : '☆'

      return star
    })}</p>
  )
}

export default Ratings