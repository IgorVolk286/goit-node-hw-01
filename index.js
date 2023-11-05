import * as actions from "./contacts.js";
import { program } from "commander";
// const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
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

invokeAction(argv);
