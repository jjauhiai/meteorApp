Template.myTemplate.events({
     'submit form': function(event){
        event.preventDefault();
        var radioValue = event.target.myForm.value;
        console.log(radioValue);
     }
  });
