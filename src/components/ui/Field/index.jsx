import classNames from 'classnames';
import classes from './styles.module.css';

export function Field({
  label,
  value,
  onChange,
  type = 'text',
  name = '',
}) {
  return (
    <div
      className={classNames(classes.field)}
    >
      <label className={classes.label}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={classes.input}
        type={type}
      />
    </div>
  );
}
