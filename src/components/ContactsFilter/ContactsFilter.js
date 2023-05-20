import { findContact } from 'redux/phonebook/slice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FilterWrapper } from './ContactsFilter.styled';

const id = nanoid();
let inputValue = null;

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    inputValue = e.currentTarget.value;
    dispatch(findContact(inputValue));
  };

  return (
    <FilterWrapper>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" onChange={handleFilter} />
    </FilterWrapper>
  );
};
