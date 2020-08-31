M.AutoInit()

// Datepicker
document.addEventListener('DOMContentLoaded', function() {
  const options = {
    disableWeekends: true
  }
  const date_element = document.querySelectorAll('.datepicker');
  const date_instance = M.Datepicker.init(date_element, options);
});