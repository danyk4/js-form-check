'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const patterns = {
    notEmpty: {
      rule: /.+/,
      message: 'Please fill the field'
    },
    phone: {
      // rule: /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g,
      rule: /^\d{7,14}$/,
      message: 'Enter phone number'
    },
    email: {
      rule: /^.+@.+\..+$/,
      message: 'Enter valid email address'
    },
  };
  const form = document.querySelector('.feedback');
  const inputs = form.querySelectorAll('.check');
  const errors = form.querySelectorAll('.errors');
  const checkbox = document.getElementById('terms');
  const checkboxErr = document.querySelector('.errors-chk');

  form.addEventListener('submit', (e) => {
    let err = false;

    for (let i = 0; i < inputs.length; i++) {
      const inp = inputs[i];
      inp.value = inp.value.trim();
      const pattern = patterns[inp.dataset.valid].rule;

      if (!pattern.test(inp.value)) {
        inp.classList.add('err');
        errors[i].innerHTML = patterns[inp.dataset.valid].message;
        err = true;
      }
    }

    if (!checkbox.checked) {
      err = true;
      checkboxErr.innerHTML = 'You have to obey!';
    }

    if (err) {
      e.preventDefault();

    }


  });

  checkbox.addEventListener('change', () => {
    if (this.checked) {
      checkboxErr.innerHTML = '';
    } else {
      checkboxErr.innerHTML = 'You have to obey!';
    }
  });

  form.addEventListener('focusin', (e) => {
    if (e.target.classList.contains('check')) {
      e.target.classList.remove('err');
      e.target.nextElementSibling.innerHTML = '';
    }
  });


});
