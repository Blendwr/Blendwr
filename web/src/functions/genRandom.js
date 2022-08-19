const genRandom = (min, max) => {
  const difference = max - min

  let rand = Math.random()

  rand = Math.floor(rand * difference)
  rand += min

  return rand
}

export default genRandom
