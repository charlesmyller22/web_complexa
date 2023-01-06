import initScrollSuave from "./Modules/scroll-suave.js";
import initAnimacaoScroll from "./Modules/scroll-animacao.js";
import initAccordion from "./Modules/accordion.js";
import initTabNav from "./Modules/active-tab.js";
import initModal from "./Modules/modal.js";
import initTooltip from './Modules/tooltip.js'
import initDropDown from './Modules/dropdown-menu.js';
import initMenuMobile from './Modules/menu-mobile.js';
import initAnimaNumeros from './Modules/anima-numeros.js';
import initFuncionamento from './Modules/funcionamento.js'


initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDown();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();

const linkInt = document.querySelectorAll('a[href^="#"]');

function handleCallback(event) {
    event.preventDefault();
    linkInt.forEach((item) => {
        item.currentTarget.classList.add('ativo')
    })
    event.currentTarget.classList.remove('ativo')
}

linkInt.forEach((item) => {
    item.addEventListener('click', handleCallback)
})
