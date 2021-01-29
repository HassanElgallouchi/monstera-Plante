// nav link actived

let list = document.querySelectorAll('nav ul > li > a');
// console.log(list);
let hrefLocation = window.location.href;

list.forEach(element => {
    // console.log(element);
    let href = element.firstChild.data;
    // console.log(href);
    if (hrefLocation.includes(href)) {
        // console.log('ok');
        // console.log(element);
        element.classList.add('nav-actived')
    }
});