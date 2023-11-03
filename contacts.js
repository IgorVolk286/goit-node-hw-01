import fs from "fs/promises";

import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

export async function listContacts() {
  const listAll = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(listAll);
}

export async function getContactById(contactId) {
  const listContact = await listContacts();
  const contact = await listContact.find((contact) => contactId === contact.id);
  return contact || null;
}

export async function removeContact(contactId) {
  const listContact = await listContacts();
  const deleteContactIndex = listContact.findIndex(
    (contact) => contactId === contact.id
  );
  console.log(deleteContactIndex);
  if (deleteContactIndex === -1) {
    return null;
  }

  const [deleteContact] = listContact.splice(deleteContactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(listContact, null, 2));
  return deleteContact;
}
export async function addContact(name, email, phone) {
  const contact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  const listContact = await listContacts();
  listContact.push(contact);
  fs.writeFile(contactsPath, JSON.stringify(listContact, null, 2));
  return contact;
}
