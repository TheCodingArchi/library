const mainContainer = document.querySelector('.main-container');

document.addEventListener('DOMContentLoaded', getContentForEmptyLibrary);

function getContentForEmptyLibrary() {
    const div = document.createElement('div');
    const para = document.createElement('p');
    const span = document.createElement('span');
    div.innerHTML = '<i class="fas fa-book fa-8x"></i>';
    div.style.color = '#c2bfbf';
    para.innerHTML = 'You have no books added yet!<br>';
    span.textContent = 'Your books will be displayed here when they get added to the Library';
    para.appendChild(span);
    mainContainer.appendChild(div);
    mainContainer.appendChild(para);
}