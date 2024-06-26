// Βρες το στοιχείο <footer> με το id 'add_footer'
const addFooter = document.getElementById('add_footer');

if (addFooter) {
    // Περιεχόμενο HTML που θα προστεθεί στο footer
    const htmlContent = `<ul class="social">
    <li class="social-item"> <a class="facebook" href="https://www.facebook.com/grcode.club/" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
    <li class="social-item"> <a class="instagram" href="https://www.instagram.com/grcode.club" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
    <li class="social-item"> <a class="github" href="https://github.com/GrCodeClub" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-github" aria-hidden="true"></i></a></li>
    <li class="social-item"> <a class="youtube" href="https://www.youtube.com/@grcodeclub" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
  </ul>`;
    addFooter.innerHTML = htmlContent;
}
