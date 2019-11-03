import sourceSelectOption from './source-select-option';

const componentClassName = 'source-select';
const sourceFormClassName = `${componentClassName}__form`;
const selectClassName = `${componentClassName}__select`;

const source = ({
  onSelectChange,
  newsSource,
  optionsList,
}) => {
  const component = document.createElement('div');
  component.classList.add(componentClassName);

  const sourceForm = document.createElement('form');
  sourceForm.classList.add(sourceFormClassName);

  const select = document.createElement('select');
  select.classList.add(selectClassName);
  select.id = selectClassName;
  select.placeholder = 'Select some channel';
  select.value = newsSource;
  select.addEventListener('change', onSelectChange);

  optionsList.forEach(option => select.appendChild(sourceSelectOption({
    optionValue: option.id,
    optionDescription: option.name,
  })));

  sourceForm.appendChild(select);
  component.appendChild(sourceForm);

  return component;
};

export default source;
