
const refs = {
    body: document.querySelector('body'),
    themeSwitchToggle: document.querySelector('.theme-switch__toggle')

}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.themeSwitchToggle.addEventListener('change', setClassList);
refs.themeSwitchToggle.addEventListener('change', setLocalStorage);

function setClassList() {
    const checked = refs.themeSwitchToggle.checked;

    if (checked) {
        refs.body.classList.add(Theme.DARK),
        refs.body.classList.remove(Theme.LIGHT)
    } else {
        refs.body.classList.add(Theme.LIGHT),
        refs.body.classList.remove(Theme.DARK)    
    }
}

function setLocalStorage() {
    const checked = refs.themeSwitchToggle.checked;

    if (checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme'),
        localStorage.setItem('theme', Theme.LIGHT)    
    }
}

const saveTheme = localStorage.getItem('theme')

if (saveTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.themeSwitchToggle.checked = true;
}