import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/operations';
import { IconButton } from '@mui/material';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ListItemAvatar>
        <Avatar alt={contact.name} src="/" />
      </ListItemAvatar>
      <ListItemText
        primary={contact.name}
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {contact.number}
          </Typography>
        }
      />
      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </>
  );
};
