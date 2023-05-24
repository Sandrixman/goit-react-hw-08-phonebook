import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import { Modal } from 'components/Modal/Modal';
import { Spiner } from 'components/Spiner/Spiner';
import DeleteIcon from '@mui/icons-material/Delete';
import { tableCellClasses } from '@mui/material/TableCell';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Typography,
  TablePagination,
} from '@mui/material';
import styled from '@emotion/styled';

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

  const modalOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }));

  return (
    <>
      {Boolean(filteredOutContacts.length === 0) && (
        <Typography variant="h5" textAlign="center">
          No contacts found.
        </Typography>
      )}
      <TableContainer
        component={Paper}
        elevation={16}
        sx={{ width: '70%', mx: 'auto', mb: '30px' }}
      >
        <Table stickyHeader size="small">
          <TableHead sx={{ backgroundColor: '#1976d285' }}>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
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
                <StyledTableCell>{contact.name}</StyledTableCell>
                <StyledTableCell style={{ MaxWidth: 130 }} align="right">
                  {contact.number}
                </StyledTableCell>
                <StyledTableCell style={{ maxWidth: 100 }} align="right">
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    onClick={() => {
                      modalOpen();
                      setElementId(contact.id);
                    }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </StyledTableCell>
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
      <Modal id={elementId} open={open} close={handleClose} />
    </>
  );
};
