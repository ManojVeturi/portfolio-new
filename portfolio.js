function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.menu-icon');
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('active');
    }
  });
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.remove('active');
    }
  });
  