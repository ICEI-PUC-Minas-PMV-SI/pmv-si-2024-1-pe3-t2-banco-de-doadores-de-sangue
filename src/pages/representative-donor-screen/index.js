const scheduleDonation = () => {
  const userId = window.location.search.split('id=')[1].split('&')[0];
  addScheduleDonationModalToDOM(userId)
}


document.addEventListener('DOMContentLoaded', () => {
  verifyRepresentativeUser();
    
  const scheduleDonationButton = document.getElementById('open-modal-schedule-donation');
  scheduleDonationButton.addEventListener('click', scheduleDonation);
});
