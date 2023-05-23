import { findContact } from 'redux/phonebook/slice';
import { useDispatch } from 'react-redux';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const inputValue = e.currentTarget.value;
    dispatch(findContact(inputValue));
  };

  return (
    <TextField
      onChange={handleFilter}
      label="Find contacts by name"
      id="outlined-basic"
      variant="outlined"
      sx={{ mx: 'auto', mb: '30px', display: 'flex', width: '50%' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
