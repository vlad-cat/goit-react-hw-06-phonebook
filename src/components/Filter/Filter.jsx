// import React from 'react';
import { filterContact } from 'redux/contactSlice/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
import filterStyles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contactsData.filter);

  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className={filterStyles.box}>
      <label htmlFor="inputSearch">Find contacts by name</label>
      <input
        className={filterStyles.inputField}
        id="inputSearch"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChangeFilter}
        value={filter}
        required
      />
    </div>
  );
};

export default Filter;
