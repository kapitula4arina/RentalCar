import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import s from './Selectors.module.css';

const Selectors = ({
  arrays,
  selectedValue,
  setSelectedValue,
  chosenValue,
}) => {
  if (!Array.isArray(arrays)) {
    return <div>Loading...</div>;
  }

  return (
    <Listbox value={selectedValue || {}} onChange={setSelectedValue}>
      {({ open }) => (
        <div>
          <ListboxButton className={s.listBoxBtn}>
            {chosenValue}
            <svg width="16" height="16" className={s.icon}>
              <use
                href={`/icons.svg#${open ? 'icon-chevron-down-active' : 'icon-chevron-down'}`}
              />
            </svg>
          </ListboxButton>
          <ListboxOptions anchor="bottom" className={s.opts}>
            {arrays.map(array => (
              <ListboxOption key={array.id} value={array} className={s.opt}>
                {array.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
};

export default Selectors;
