import { Template } from 'meteor/templating';
import { Contacts } from '../../api/stuff/stuff.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  contactsList() {
    return Contacts.find();
  },
});
