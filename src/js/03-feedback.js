import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector(".feedback-form textarea"),
  lable: document.querySelector(".feedback-form lable"),
};
refs.form.addEventListener('submit', onformSubmit);
refs.input.addEventListener('input', throttle(onTextareaInput, 1000));

refs.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  formData.localStorage.setItem(LOCALE_STORAGE_KEY);
  console.log(formData);
});
populateTextarea();