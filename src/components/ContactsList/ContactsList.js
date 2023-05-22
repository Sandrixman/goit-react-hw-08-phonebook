import { ListItem, List, Divider, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import { Contact } from 'components/Contact/Contact';
import { Spiner } from 'components/Spiner/Spiner';
import { ListItemWripper } from './ContactsList.styled';

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
      <Typography
        variant="h4"
        component="h2"
        color="slategray"
        textAlign="center"
      >
        Contacts
      </Typography>
      {filteredOutContacts && (
        <List sx={{ maxWidth: 500, p: 0, m: 'auto' }}>
          {Boolean(filteredOutContacts.length === 0) && (
            <Typography variant="h5" component="p" textAlign="center" mt="20px">
              No contacts found.
            </Typography>
          )}
          {filteredOutContacts.map((contact, index) => (
            <ListItemWripper key={contact.id}>
              <ListItem>
                <Contact contact={contact} index={index} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </ListItemWripper>
          ))}
        </List>
      )}
    </>
  );
};
