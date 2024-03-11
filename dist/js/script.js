document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.getElementById('user-menu-button');
    var dropdownMenu = document.getElementById('isi_dropdown');

    dropdownButton.addEventListener('click', function () {
      dropdownMenu.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function (event) {
      var isClickInside = dropdownButton.contains(event.target) || dropdownMenu.contains(event.target);
      if (!isClickInside) {
        dropdownMenu.classList.add('hidden');
      }
    });
  });
  