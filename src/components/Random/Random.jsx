function Random({ min, max }) {
  const random = Math.floor(Math.random() * (max - min) + min)

  return (
    <div>Random value between {min} and {max} ={'>'} {random}</div>
  )
}

export default Random