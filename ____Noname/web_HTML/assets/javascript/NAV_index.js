let main_menu = document.getElementById('main_menu');

function hover_MainMenu() {
    main_menu.addEventListener('mouseover', () => {
        main_menu.style.width = '250px';
    });
    // main_menu.addEventListener('mouseout', () => {
    //     main_menu.style.width = '60px';
    // });
    main_menu.addEventListener('mouseleave', () => {
        let is_sub = document.querySelectorAll(".is_sub:not(.d-none)");
        is_sub.forEach(function(item) {
            item.classList.add("d-none");
        });
        main_menu.style.width = '60px';
    });
}

function display_SubMenu() {
    let a = document.querySelectorAll('li.has_sub > a');
    a.forEach(function(link) {
        link.addEventListener('click', function(event) {
            let sub_Ul = this.parentElement.querySelector('ul.is_sub');
            if (sub_Ul.classList.contains('d-none')) {
                sub_Ul.classList.remove('d-none');
            } else {
                sub_Ul.classList.add('d-none');
            }
        });
    });
}

function change_LiColor() {
    let nav = document.querySelector('nav');
    let liList = document.querySelectorAll('ul:not(.is_sub)>li:not(.topNAV)>a');
    liList.forEach(function(li) {
        li.addEventListener('click', function() {
            liList.forEach(function(otherLi) {
                if (otherLi !== li) {
                    otherLi.classList.remove('bg-opacity');
                }
            });
            this.classList.add('bg-opacity');
        });
    });
}

function click_TopNAV() {
    let topNAV = document.querySelector('li.topNAV a .fa-remove');
    topNAV.addEventListener('click', () => {
        main_menu.style.width = '60px';
        let is_sub = document.querySelectorAll(".is_sub:not(.d-none)");
        is_sub.forEach(function(item) {
            item.classList.add("d-none");
        });
    });
    let topNAV2 = document.querySelector('li.topNAV a > i');
    topNAV2.addEventListener('click', () => {
        main_menu.style.width = '250px';
    });
}

function main() {
    hover_MainMenu();
    display_SubMenu();
    change_LiColor();
    click_TopNAV();
}
main();