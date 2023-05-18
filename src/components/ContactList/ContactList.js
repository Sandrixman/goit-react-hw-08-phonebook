import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectFilteredOutContacts,
} from 'redux/phonebook/selectors';
import { Contact } from 'components/Contact/Contact';
import { ContactsList, ListItem } from './ContactList.styled';

const ContactList = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filteredOutContacts = useSelector(selectFilteredOutContacts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching contacts.</div>;
  }

  return (
    <>
      {filteredOutContacts && (
        <ContactsList>
          {Boolean(filteredOutContacts.length === 0) && (
            <h2>No contacts found.</h2>
          )}
          {filteredOutContacts.map((contact, index) => (
            <ListItem key={contact.id}>
              <Contact contact={contact} index={index} />
            </ListItem>
          ))}
        </ContactsList>
      )}
    </>
  );
};

export default ContactList;
