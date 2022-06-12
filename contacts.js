const fs = require('fs/promises')
const path = require('path')
const objectID = require('bson-objectid')

const contactsPath = path.join(__dirname, 'db/contacts.json')

const listContacts = async () => {
  const data = await fs.readFile(contactsPath)
  return JSON.parse(data)
}

const getContactById = async (id) => {
  const contacts = await listContacts()
  const result = contacts.find((contact) => contact.id === id)
  if (!result) {
    return null
  }
  return result
}

const addContact = async (name, email, phone) => {
  const contacts = await listContacts()
  const newContact = {
    id: objectID(),
    name,
    email,
    phone,
  }
  contacts.push(newContact)
  // await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContact
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
}
