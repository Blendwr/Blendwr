const calcθ = (oldXPos, xPos, oldYPos, yPos) => {
  const dx = oldXPos - xPos
  const dy = oldYPos - yPos

  const θ = Math.atan2(dy, dx)

  return θ
}

export default calcθ
