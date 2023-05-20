import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import { Contact } from 'components/Contact/Contact';
import { Spiner } from 'components/Spiner/Spiner';
import { List, ListItem } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(phonebookSelectors.selectPhonebookLoading);
  const isError = useSelector(phonebookSelectors.selectError);
  const filteredOutContacts = useSelector(
    phonebookSelectors.selectFilteredOutContacts
  );

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <Spiner />;
  }

  if (isError) {
    return toast.error('Error occurred while fetching contacts', {
      position: 'top-center',
      autoClose: 2000,
    });
  }

  return (
    <>
      {filteredOutContacts && (
        <List>
          {Boolean(filteredOutContacts.length === 0) && (
            <h2>No contacts found.</h2>
          )}
          {filteredOutContacts.map((contact, index) => (
            <ListItem key={contact.id}>
              <Contact contact={contact} index={index} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
