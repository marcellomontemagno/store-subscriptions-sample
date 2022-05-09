const createUser = () => {
  const ranId = Math.floor(Math.random() * 100) + 1;
  return {
    id: ranId,
    firstName: "Will" + ranId,
    lastName: "Hawker",
    email: "will.hawker@anEmail.com"
  }
}

export default createUser
