/**
 * Created by gviloria on 10/16/16.
 */
import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Gabriel',
    last: 'Viloria',
    address: '3161 Ala Ilima St',
    telephone: '808-218-9262',
    email: 'gviloria@hawaii.edu',
  },
  {
    first: 'Angelo',
    last: 'Viloria',
    address: '808-868 Ala Ilima Place',
    telephone: '808-976-7754',
    email: 'angelov@hawaii.edu',
  },
  {
    first: 'Sally',
    last: 'Viloria',
    address: '45-419 Makalani St',
    telephone: '808-247-5385',
    email: 'sviloria@hawaii.edu',
  },
  {
    first: 'John',
    last: 'Viloria',
    address: '45-419 Makalani St',
    telephone: '808-247-5385',
    email: 'jviloria@hawaii.edu',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}