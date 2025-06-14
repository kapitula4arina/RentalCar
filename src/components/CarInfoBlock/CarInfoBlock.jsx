import css from './CarInfoBlock.module.css';

const CarInfoBlock = ({ title, items, type }) => {
  const specIcons = {
    Year: 'icon-calendar',
    Type: 'icon-car',
    'Fuel Consumption': 'icon-fuel-pump',
    'Engine Size': 'icon-gear',
  };

  const getIconId = label => {
    if (type === 'carSpecifications') {
      return specIcons[label] || 'icon-default';
    }
    return 'icon-check-circle';
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {items.map((item, index) => {
          let label = item;
          let value = '';

          if (type === 'carSpecifications' && item.includes(':')) {
            [label, value] = item.split(':').map(part => part.trim());
          }

          const iconId = getIconId(label);

          return (
            <li key={index} className={css.item}>
              <svg width="16" height="16" className={css.icon}>
                <use href={`/icons.svg#${iconId}`} />
              </svg>

              {type === 'carSpecifications' ? (
                <>
                  <span className={css.label}>{label}:</span>
                  <span className={css.value}> {value}</span>
                </>
              ) : (
                <span className={css.text}>{item}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarInfoBlock;
