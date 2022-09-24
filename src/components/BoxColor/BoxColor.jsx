import './BoxColor.css'

function componentToHex(c) {
  const hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex;
}


function BoxColor({r, g, b}) {
  function rgbToHex() {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div className="BoxColor" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <p>rgb({r}, {g}, {b})</p>
      <p>{rgbToHex()}</p>
    </div>
  )
}

export default BoxColor