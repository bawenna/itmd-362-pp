$('#contact').on('submit',
  function(e) {
    var emailPattern = /^.+@.+$/;
    var emailVal = $('#email').val();
    var phonePattern = /\d{3}[\-]\d{3}[\-]\d{4}/;
    var phoneVal = $('#phone').val();
    e.preventDefault();
    console.log("Trying");
    if(!(phoneVal.match(phonePattern)))
    {
      console.log("Trying");
      alert('Please match the phone format of "xxx-xxx-xxxx"');
      return false;
    }
    if(!(emailVal.match(emailPattern)))
    {
      console.log("Trying");
      alert('Please match the email format of "you@example.com"');
      return false;
    }

    else
    {
    $('#contact').append('The form was submitted!');
    document.getElementById('submit').style.visibility = 'hidden';
    }
  }
);
