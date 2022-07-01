$(document).ready(function(){

  // logging update toggle switch
  // $("#islogon").on('click', function(){
  //   if ($('#islogon').is(":checked")){
  //     var loggingOn = "True";
  //   } else {
  //     var loggingOn = "False";
  //   }
  //   $.ajax({
  //     url: "/conditions/logging-toggle",
  //     type: 'get',
  //     data: {
  //       "isOn": loggingOn
  //     },
  //     success: function(response){
  //     }
  //   });
  // });
  var apiRequestURL = globalBaseAPIUrl + "/api/get-model-options/";
  var requestType = "get";
  $.ajax({
      url:apiRequestURL,
      type: requestType,
      xhrFields: {
    withCredentials: true
 },
 crossDomain: true,
      data: {
      },
      success: function(response){
        console.log("got response from options GET: ", response);
      }
    });
  // fills logging toggle switch correctly
  // if ( $('#islogon').length ){
  //   $.ajax({
  //     url: "/conditions/logging-toggle-check",
  //     type: 'get',
  //     success: function(response){
  //       if (response["isOn"]){
  //         $('#islogon').prop("checked", true)
  //       } else {
  //         $('#islogon').prop("checked", false)
  //       }
  //     }
  //   });
  // }

  // autofills units in options drowdowns
  $('.options-dropdown').filter(function() {
    var units = $(this).attr('unit');
    $(this).val(units);
  });
});
