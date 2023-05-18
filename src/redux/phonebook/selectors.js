export const selectAllContacts = state => state.phonebook.contacts.items;

export const selectFilter = state => state.phonebook.filter;

export const selectLoading = state => state.phonebook.contacts.isLoading;

export const selectError = state => state.phonebook.contacts.error;

export const selectFilteredOutContacts = state =>
  state.phonebook.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
  );
