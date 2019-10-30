const componentClassName = 'source-select-option';

const option = ({
  optionValue,
  optionDescription,
}) => {
  const component = document.createElement('option');
  component.classList.add(componentClassName);
  component.value = optionValue;
  component.textContent = optionDescription;
  return component;
};

export default option;
