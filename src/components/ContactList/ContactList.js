import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export default function ContactList({ contacts, onButtonDeleteClick }) {
  if (contacts.length === 0) return;
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <span className={css.contactName}>{name}</span>
          <span className={css.contactNumber}>{number}</span>
          <button
            type="button"
            onClick={() => onButtonDeleteClick(id)}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  onButtonDeleteClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
