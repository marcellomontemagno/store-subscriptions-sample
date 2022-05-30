const createRandomIntegerBetween = (minInclusive, maxInclusive) => {
  minInclusive = Math.ceil(minInclusive);
  maxInclusive = Math.floor(maxInclusive);
  return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) + minInclusive);
}

export default createRandomIntegerBetween
