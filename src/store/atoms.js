import {atom} from "recoil"

const atoms = {}

const memoAtomById = (key, data) => {
  const {id} = data;
  if (atoms[id]) {
    return atoms[id]
  } else {
    const result = atom({
      key: key + id,
      default: {...data}
    })
    atoms[id] = result
    return result
  }
}

export const userAtom = (data) => {
  return memoAtomById('user', data)
}

export const sectionAtom = (data) => {
  return memoAtomById('section', data)
}

userAtom({
  id: "userUUID1",
  firstName: "Marcello",
  lastName: "Montemagno",
  email: "marcello.montemagno@anEmail.com"
})

sectionAtom({
  id: "sectionUUID1",
  type: 'paper',
  position: 'a0',
  content: 'Section 1',
  createdBy: 'userUUID1'
})

sectionAtom({
  id: "sectionUUID2",
  type: 'paper',
  position: 'a1',
  content: 'Section 2',
  createdBy: 'userUUID1'
})

sectionAtom({
  id: "sectionUUID3",
  type: 'paper',
  position: 'a2',
  content: 'Section 3',
  createdBy: 'userUUID1'
})

sectionAtom({
  id: "sectionUUID4",
  type: 'summary',
  content: 'Summary 1',
  paperSectionId: 'sectionUUID1',
  createdBy: 'userUUID1'
})

sectionAtom({
  id: "sectionUUID5",
  type: 'summary',
  content: 'Summary 2',
  paperSectionId: 'sectionUUID2',
  createdBy: 'userUUID1'
})

sectionAtom({
  id: "sectionUUID6",
  type: 'summary',
  content: 'Summary 3',
  paperSectionId: 'sectionUUID3',
  createdBy: 'userUUID1'
})

export const sectionIdsAtom = atom({
  key: 'sectionIdsAtom',
  default: ["sectionUUID1", "sectionUUID2", "sectionUUID3", "sectionUUID4", "sectionUUID5", "sectionUUID6"]
})

export const userIdsAtom = atom({
  key: 'userIdsAtom',
  default: ["userUUID1"]
})
