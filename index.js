// // const argv = require('yargs').argv
const contacts = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const result = await contacts.listContacts()
      console.log(result)
      break

    case 'get':
      const contact = await contacts.getContactById(id)
      console.log(contact)
      break

    case 'add':
      const newContact = await contacts.addContact(name, email, phone)
      console.log(newContact)
      break

    // case 'remove':
    //   // ... id
    //   break

    default:
      console.warn('\x1B[31m Unknown action type!')
      break
  }
}

// invokeAction({ action: 'list' })
// invokeAction({ action: 'get', id: '5' })
invokeAction({
  action: 'add',
  name: 'Denis Fedash',
  email: '0501054104d@gmail.com',
  phone: '(050) 105-4104',
})
