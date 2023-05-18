import { useSelector, useDispatch } from 'react-redux';
import { selectLoading } from 'redux/phonebook/selectors';
import { deleteContact } from 'redux/phonebook/operations';
import { Spiner } from 'components/Spiner/Spiner';
import { ContactName, ContactPhone, Button } from './Contact.styled';

export const Contact = ({ contact, index }) => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  return (
    <>
      <ContactName>
        {index + 1}. {contact.name}:
      </ContactName>
      <ContactPhone>{contact.phone}</ContactPhone>
      <Button
        onClick={() => dispatch(deleteContact(contact.id))}
        disabled={isLoading}
      >
        {isLoading ? <Spiner /> : 'Delete'}
      </Button>
    </>
  );
};
