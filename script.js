
document.querySelectorAll('.tablink').forEach(btn => {
  btn.addEventListener('click', function(e) {
    document.querySelectorAll('.tabcontent').forEach(tc => tc.style.display = 'none');
    const target = this.textContent.toLowerCase();
    document.getElementById(target).style.display = 'block';
  });
});
