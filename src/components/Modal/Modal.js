import { useDispatch } from 'react-redux';
import { phonebookOperations } from 'redux/phonebook';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

export const Modal = ({ id, open, close }) => {
  const dispatch = useDispatch();

  return (
    <Dialog sx={{ backgroundColor: '#1976d23b' }} open={open} onClose={close}>
      <DialogTitle>
        {'Are you sure you want to delete this contact?'}
      </DialogTitle>
      <DialogActions>
        <Button onClick={close}>No</Button>
        <Button
          onClick={() => {
            dispatch(phonebookOperations.deleteContact(id));
            close();
          }}
          autoFocus
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
