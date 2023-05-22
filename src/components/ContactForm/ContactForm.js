import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { string, object } from 'yup';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material';
import {
  BoxStyled,
  FormErrorWrapper,
  ErrorText,
  Button,
} from './ContactForm.styled';

const id = nanoid();

export const ContactForm = () => {
  const contacts = useSelector(phonebookSelectors.selectAllContacts);
  const isLoading = useSelector(phonebookSelectors.selectPhonebookLoading);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const schema = object({
    name: string().required(),
    number: string().required(),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  const handleSubmit = (values, { resetForm }) => {
    const isContactExists = contacts.some(
      contact => contact.name === values.name
    );

    isContactExists
      ? toast.error(`${values.name} is already in contacts`, {
          position: 'top-center',
        })
      : dispatch(phonebookOperations.addContact(values));

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <BoxStyled>
            <Typography variant="h3" component="h2" mb="20px">
              Phonebook
            </Typography>
            <Field id={id} name="name" label="Name" variant="outlined" />
            <FormErrorWrapper>
              <FormError name="name" />
            </FormErrorWrapper>
            <Field
              id={id}
              name="number"
              label="Phone"
              type="tel"
              variant="outlined"
            />
            <FormErrorWrapper>
              <FormError name="number" />
            </FormErrorWrapper>
            <Button
              type="submit"
              endIcon={<SendIcon />}
              loading={isLoading}
              loadingPosition="end"
              variant="contained"
            >
              Add contact
            </Button>
          </BoxStyled>
        </Form>
      </Formik>
    </>
  );
};
