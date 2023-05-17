import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { ContactsList, ListItem } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(state => state.phonebook.filter);

  const { data, isLoading, isError } = useGetContactsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching contacts.</div>;
  }

  const filteredOutContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
