function uncheckOther(checkbox) {
  if (checkbox.checked) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(el) {
      if (el !== checkbox) {
        el.checked = false;
      }
    });
  }
}