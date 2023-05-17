import { findContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { FilterWrapper } from './Filter.styled';

const id = nanoid();
let inputValue = null;

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    inputValue = e.currentTarget.value;
    dispatch(findContact(inputValue));
  };

  return (
    <FilterWrapper>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" onChange={changeFilter} />
    </FilterWrapper>
  );
};

export default Filter;
