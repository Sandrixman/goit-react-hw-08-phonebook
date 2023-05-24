import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { string, object } from 'yup';
import { toast } from 'react-toastify';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import SendIcon from '@mui/icons-material/Send';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { FormErrorWrapper, ErrorText } from './ContactForm.styled';

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
        <Box
          component={Form}
          sx={{
            display: 'grid',
            justifyItems: 'center',
            mx: 'auto',
            my: '30px',
            padding: '20px',
          }}
        >
          <Typography variant="h3" component="h2" mb="20px">
            Phonebook
          </Typography>
          <Box
            component={Field}
            type="text"
            name="name"
            placeholder="Enter a name"
            width="200px"
            sx={{
              height: '30px',
              border: '1px solid',
              borderRadius: '5px',
              p: 1,
            }}
            required
          />
          <FormErrorWrapper>
            <FormError name="name" />
          </FormErrorWrapper>
          <Box
            component={Field}
            type="tel"
            name="number"
            placeholder="Enter a number"
            width="200px"
            sx={{
              height: '30px',
              border: '1px solid',
              borderRadius: '5px',
              p: 1,
            }}
            required
          />
          <FormErrorWrapper>
            <FormError name="number" />
          </FormErrorWrapper>
          <LoadingButton
            type="submit"
            endIcon={<SendIcon />}
            loading={isLoading}
            loadingPosition="end"
            variant="contained"
          >
            Add contact
          </LoadingButton>
        </Box>
      </Formik>
    </>
  );
};
