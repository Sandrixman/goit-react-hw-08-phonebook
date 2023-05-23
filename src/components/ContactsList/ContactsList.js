import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import { Spiner } from 'components/Spiner/Spiner';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TableHead,
  Typography,
  TablePagination,
} from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

export const ContactsList = () => {
  const [open, setOpen] = useState(false);
  const [elementId, setElementId] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {Boolean(filteredOutContacts.length === 0) && (
        <Typography variant="h5" textAlign="center">
          No contacts found.
        </Typography>
      )}
      <TableContainer
        component={Paper}
        elevation={9}
        sx={{ width: '80%', m: 'auto' }}
      >
        <Table aria-label="custom pagination table">
          <TableHead sx={{ backgroundColor: '#1976d285' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? filteredOutContacts.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : filteredOutContacts
            ).map(contact => (
              <TableRow hover key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell style={{ MaxWidth: 130 }} align="right">
                  {contact.number}
                </TableCell>
                <TableCell style={{ maxWidth: 100 }} align="right">
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={() => {
                      handleClickOpen();
                      setElementId(contact.id);
                    }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <Dialog
                    sx={{ backgroundColor: '#1976d285' }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {'Are you sure you want to delete this contact?'}
                    </DialogTitle>
                    <DialogActions>
                      <Button onClick={handleClose}>No</Button>
                      <Button
                        onClick={() => {
                          dispatch(
                            phonebookOperations.deleteContact(elementId)
                          );
                          handleClose();
                        }}
                        autoFocus
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={filteredOutContacts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
