import { useSelector, useDispatch } from 'react-redux';
import { selectPhonebookLoading } from 'redux/phonebook/selectors';
import { deleteContact } from 'redux/phonebook/operations';
import { Spiner } from 'components/Spiner/Spiner';
import { ContactName, ContactPhone, Button } from './Contact.styled';

export const Contact = ({ contact, index }) => {
  const isLoading = useSelector(selectPhonebookLoading);
  const dispatch = useDispatch();

  return (
    <>
      <ContactName>
        {index + 1}. {contact.name}:
      </ContactName>
      <ContactPhone>{contact.number}</ContactPhone>
      <Button
        onClick={() => dispatch(deleteContact(contact.id))}
        disabled={isLoading}
      >
        {isLoading ? <Spiner /> : 'Delete'}
      </Button>
    </>
  );
};
