import createRandomIntegerBetween from "../utils/createRandomIntegerBetween"

const createUser = () => {
  const ranId = createRandomIntegerBetween(1, 100)
  return {
    id: ranId,
    firstName: "Will" + ranId,
    lastName: "Hawker",
    email: "will.hawker@anEmail.com"
  }
}

export default createUser
