import * as actions from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const listContact = await actions.listContacts();
      return console.log(listContact);

    case "get":
      const oneContact = await actions.getContactById(id);
      return console.log(oneContact);

    case "add":
      const addedContact = await actions.addContact(name, email, phone);
      return console.log(addedContact);

    case "remove":
      const deleteContact = await actions.removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction({
  action: "get",
  id: "-ghIG4ngbMpacE77LYs3_",
});
