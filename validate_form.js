$(function(){
    load_json_data('country');
    function load_json_data(name, parent_id)
     {
      var html_code = '';
      $.getJSON('country_state_city.json', function(data){
       html_code += '<option value="">Select '+name+'</option>';
       $.each(data, function(key, value){
        if(name== 'country')
        {
         if(value.parent_id == '0')
         {
          html_code += '<option value="'+value.name+'">'+value.name+'</option>';
         }
        }
        else
        {
         if(value.parent_id == parent_id)
         {
          html_code += '<option value="'+value.name+'">'+value.name+'</option>';
         }
        }   
       });
       $('#'+name).html(html_code);
      });
     }
     $(document).on('change', '#country', function(){
      var country_id = $(this).val();
      if(country_id != '')
      {
       load_json_data('state', country_id);
      }
      else
      {
       $('#state').html('<option value="">Select state</option>');
       $('#city').html('<option value="">Select city</option>');
      }
     });
     $(document).on('change', '#state', function(){
      var state_id = $(this).val();
      if(state_id != '')
      {
       load_json_data('city', state_id);
      }
      else
    {
       $('#city').html('<option value="">Select city</option>');
      }
    });  

    $("#myform").validate({
        rules: {
            fname : "required",
            lname : "required",
            email : {
                required:true,
                email:true,
            },
            phone :{
                required : true,
                number : true,
                minlength: 10
            }, 
        },
        messages : {
            fname : "Please enter your first name",
            lname : "Please enter your lastname",
            email :{
                required : "Please enter a email address",
                email :"Please enter a valid email address"
            },
            phone :{
                required : "Please enter a phone number",
                number : "Please enter a valid phone number",
                minlength:"Mobile number must be atleast 10 digits long"
            } 
        }
    });
});
function submitform(){
    if ($("#fname").val()!==""&&$("#lname").val()!==""&&$("#email").val()!==""&&$("#phone").val()!==""&&$("#country").val()!==""&&$("#state").val()!==""&&$("#city").val()!==""){
        console.log("Form-Details")
        console.log("Name    : "+$("#fname").val()+" "+$("#lname").val());
        console.log("Email   : "+$("#email").val())
        console.log("Phone   : "+$("#phone").val())
        console.log("Address : "+$("#country").val()+","+$("#state").val()+","+$("#city").val()  );
    }  
} 