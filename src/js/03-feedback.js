import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', evt => {
  evt.preventDefault();

  const values = localStorage.getItem(STORAGE_KEY);
  localStorage.clear(STORAGE_KEY);
  const formData = new FormData(form);
  for (const key of formData.keys()) {
    form[key].value = '';
  };
  alert(values);
});

const onFormInput = throttle((event) => {
  const formData = new FormData(form);
  const data = {}
  formData.forEach((value, name) => data[name] = value);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

form.addEventListener('input', onFormInput);

const storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
  const formData = new FormData(form);
  const data = JSON.parse(storedData);
  for (const key of formData.keys()) {
    form[key].value = data[key];
  }
};