document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');



  hamburgerBtn.addEventListener('click', function () {

    const isHidden = mobileMenu.classList.contains('hidden');
    const currentScrollPosition = window.scrollY;

    if(currentScrollPosition > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      //Show if hidden
      if(isHidden) {
        mobileMenu.classList.toggle('hidden');
      }
    }
    else{
      mobileMenu.classList.toggle('hidden');

    }
  });

  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.textContent.toLowerCase();
  
      const portfolioItems = document.querySelectorAll('.portfolio-item');
  
      portfolioItems.forEach(item => {
        const itemCategories = item.querySelector('span').textContent.toLowerCase();
  
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
  
});



