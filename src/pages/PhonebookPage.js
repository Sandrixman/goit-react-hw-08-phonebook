import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

const PhonebookPage = () => {
  return (
    <>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
};

export default PhonebookPage;
