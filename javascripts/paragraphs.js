$(document).ready(function(){
  console.log("ready!");
  // create event listener for form
  // submit ajax call to server
  $(".paragraph-submission-form").on("submit", function(event){
    event.preventDefault();
    console.log("form button clicked!");
    var formData = $(this).serialize();
    console.log(formData);
    var action = $(this).attr("action");
    var method = $(this).attr("method");
    $.ajax({
      url: action,
      type: method,
      data: formData
    })
    .done(function(response){
      console.log("success");
      console.log(response);
      // debugger
      // append corrected paragraph to formatted-paragraph
      console.log(response.corrected_paragraph);
      $(".formatted-paragraph").text(response.corrected_paragraph);
      // append meta paragraph to meta-paragraph
      $(".meta-paragraph").text(response.meta_paragraph);
      $(".paragraph-submission-form")[0].reset();
    })
    .fail(function(){
      console.log("Error");
    })

  });


});