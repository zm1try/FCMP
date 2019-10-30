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
  select.addEventListener('select', onSelectChange);

  optionsList.forEach(option => select.appendChild(sourceSelectOption({
    optionValue: option.value,
    optionDescription: option.description,
  })));

  // const option1 = document.createElement('option');
  // option1.value = '1';
  // select.appendChild(option1);
  // const option2 = document.createElement('option');
  // option2.value = '2';
  // select.appendChild(option2);

  sourceForm.appendChild(select);
  component.appendChild(sourceForm);

  return component;
};

export default source;
