/* Functionality for Question and Explanation Form

user types in a submission
user hit a submit button
if submission is less than 50 characters
    system alerts with message "Please type a response that is at least 50 characters."
else */
  document.getElementById('submitButton').addEventListener('click', function(){
      var retVal =confirm("Are you sure you would like to submit your anwser?");
      if (retVal === true) {
        alert('Your resposne has been submitted. Thank you for learning with us today!');
        /*System saves response to database.
        webpage reloads and the form is empty again
        */
      }
  });
