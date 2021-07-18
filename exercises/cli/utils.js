const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json'

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contactsJsonStr = fs.readFileSync(getFilePath(), encoding = 'utf-8').toString();
  const contactsJsonObj = JSON.parse(contactsJsonStr);
  return contactsJsonObj;
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
	const contactsJsonStr = JSON.stringify(contacts, null, 2);
	fs.writeFileSync(getFilePath(), contactsJsonStr, encoding = 'utf-8')
}

const getFilePath = () => {
	return path.join(__dirname, contactsLocation);
}

getContacts();

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

