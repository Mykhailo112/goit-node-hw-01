import * as contactsServise from "./contacts.js";
import { Command } from "commander";
const program = new Command();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsServise.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contactsServise.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contactsServise.addContact(name, email, phone);
      return console.log(newContact);
    case "remove":
      const deleteContact = await contactsServise.removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
