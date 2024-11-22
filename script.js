window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > window.innerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

const professions = ["Software Engineer", "Android Developer", "Flutter Enthusiast"];
let professionIndex = 0;
const professionElement = document.getElementById('profession');

function typeProfession() {
    if (professionIndex < professions.length) {
        let professionText = professions[professionIndex];
        let typedText = '';
        let typeSpeed = 50;
        let typeInterval = setInterval(function() {
            if (typedText.length < professionText.length) {
                typedText += professionText.charAt(typedText.length);
                professionElement.textContent = typedText;
            } else {
                clearInterval(typeInterval);
                setTimeout(function() {
                    professionIndex++;
                    if (professionIndex < professions.length) {
                        typeProfession();
                    } else {
                        professionIndex = 0;
                        typeProfession();
                    }
                }, 4000);
            }
        }, typeSpeed);
    }
}

typeProfession();
