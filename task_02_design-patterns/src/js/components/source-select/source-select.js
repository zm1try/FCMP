import sourceSelectOption from './source-select-option';

const componentClassName = 'source-select';
const sourceFormClassName = `${componentClassName}__form`;
const selectClassName = `${componentClassName}__select`;

const sourceSelectComponent = ({
  onSelectChange,
  optionsList,
}) => {
  const component = document.createElement('div');
  component.classList.add(componentClassName);

  const sourceForm = document.createElement('form');
  sourceForm.classList.add(sourceFormClassName);

  const select = document.createElement('select');
  select.classList.add(selectClassName);
  select.id = selectClassName;

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.textContent = 'Select some channel';
  placeholder.selected = true;
  placeholder.disabled = true;
  select.appendChild(placeholder);

  select.addEventListener('change', onSelectChange);

  select.appendChild(sourceSelectOption({
    optionValue: 'error&apiKey=1',
    optionDescription: '!!!Unauthorized',
  }));
  select.appendChild(sourceSelectOption({
    optionValue: '111',
    optionDescription: '!!!Failed to fetch',
  }));

  optionsList.forEach(option => select.appendChild(sourceSelectOption({
    optionValue: option.id,
    optionDescription: option.name,
  })));

  sourceForm.appendChild(select);
  component.appendChild(sourceForm);

  return component;
};

export default sourceSelectComponent;
