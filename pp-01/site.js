$('#contact').on('submit',
  function(e) {
    var emailPattern = ^.+@.+$;
    var emailVal = $('#email').val();
    if(!(emailVal.match(emailPattern)))
    {
      alert('Please match the email format of "you@example.com"');
      return false;
    }
    $('#contact').append('The form was submitted.');
    e.preventDefault();
  }
);
