import { useDeleteContactMutation } from 'redux/contactsApi';
import { Loading } from 'components/Loading/Loading';
import { ContactName, ContactPhone, Button } from './Contact.styled';

export const Contact = ({ contact, index }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ContactName>
        {index + 1}. {contact.name}:
      </ContactName>
      <ContactPhone>{contact.phone}</ContactPhone>
      <Button onClick={() => deleteContact(contact.id)} disabled={isLoading}>
        {isLoading ? <Loading /> : 'Delete'}
      </Button>
    </>
  );
};
