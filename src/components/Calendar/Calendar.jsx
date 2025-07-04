import { forwardRef } from 'react';
import { enUS } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import c from './Calendar.module.css';

const CustomInputForCalendar = forwardRef(function Calendar(
  { value, onClick, placeholderText },
  ref
) {
  const displayValue = value ? value : placeholderText || 'Booking date';
  return (
    <button className={c.calendar} onClick={onClick} ref={ref} type="button">
      <span className={value ? c.dateValue : c.placeholderText}>
        {displayValue}
      </span>
    </button>
  );
});

const Calendar = ({ value, handleChange, placeholder }) => {
  const customLocale = {
    ...enUS,
    options: {
      ...enUS.options,
      weekStartsOn: 1,
    },
  };

  registerLocale('custom-en', customLocale);

  return (
    <DatePicker
      locale="custom-en"
      selected={value}
      onChange={handleChange}
      name="date"
      placeholderText={placeholder}
      dateFormat="dd.MM.yyyy"
      customInput={
        <CustomInputForCalendar value={value} placeholderText={placeholder} />
      }
      calendarStartDay={1}
      showPopperArrow={false}
      popperPlacement="bottom-start"
    />
  );
};

export default Calendar;
