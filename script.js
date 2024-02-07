document.addEventListener('DOMContentLoaded', function () {
   var revealButton = document.getElementById('reveal-button');
   var secretMessage = document.getElementById('secret-message');
   var acceptButton = document.getElementById('accept');
   var rejectButton = document.getElementById('reject');
   var endMessage = document.getElementById('end-message');
   var insMessage = document.getElementById('instruction');
   var name = document.getElementById('name');

   var noButtonClickCount = 0;

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

   rejectButton.addEventListener('click', function () {
      noButtonClickCount++;

      var messages = [
         "Are you sure, Peggy? 😭",
         "Really, you don't want to be my Valentine? 😭",
         "Hmm... Think again, Peggy! 😭",
         "You're still being stubborn? 😭",
         "Masa you can't say no oh 🤣 click yes and let's go",
         "And you still clicked No? 😭",
         "It's over 😭",
         "Last chance 🥹",
         "You don't love me 😭",
         "Please say Yes 🥹❤️"
      ];

      var messageElement = document.getElementById('reject-message');
      if (noButtonClickCount < messages.length) {
         messageElement.textContent = messages[noButtonClickCount - 1]; // Display the appropriate message
      } else {
         messageElement.textContent = messages[messages.length - 1]; // Display the last message
      }
   });
});