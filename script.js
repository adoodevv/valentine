document.addEventListener('DOMContentLoaded', function () {
   var revealButton = document.getElementById('reveal-button');
   var secretMessage = document.getElementById('secret-message');
   var acceptButton = document.getElementById('accept');
   var rejectMessage = document.getElementById('reject');
   var endMessage = document.getElementById('end-message');
   var insMessage = document.getElementById('instruction');
   var name = document.getElementById('name');


   revealButton.addEventListener('click', function () {
      secretMessage.style.display = 'block';
      revealButton.style.display = 'none';
      insMessage.style.display = 'none';
      name.style.display = 'none';
   });

   acceptButton.addEventListener('click', function () {
      endMessage.style.display = 'block';
      secretMessage.style.display = 'none';
   });

   rejectMessage.addEventListener('click', function () {

   })
});