
// ////////////////////////////////////////////////////////////////

// إغلاق القائمة وإظهار زر القائمة عند الضغط خارجها
window.addEventListener('click', (e) => {
    if (e.target !== sideMenu && !sideMenu.contains(e.target) && e.target !== menuButton) {
        sideMenu.classList.remove('active');
        menuButton.classList.remove('hidden'); // إظهار الزر
    }
});
// //////////////////////////////////////////////////////////////////////////
// فتح القائمة عند الضغط على زر "Menu"
menuButton.addEventListener('click', () => {
    sideMenu.classList.add('active'); // إظهار القائمة
    closeButton.style.display = 'block'; // إظهار زر الإغلاق
    menuButton.classList.add('hidden'); // إخفاء زر القائمة
});

// إغلاق القائمة عند الضغط على زر الإغلاق
closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('active'); // إخفاء القائمة
    closeButton.style.display = 'none'; // إخفاء زر الإغلاق
    menuButton.classList.remove('hidden'); // إظهار زر القائمة
});
