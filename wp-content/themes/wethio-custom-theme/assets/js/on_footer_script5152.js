var $ = jQuery;

$("#submit-form_footer").click(function(e) 
{     
       var checked_userName=check_name();   
       var checked_userEmail=check_email();  
       var checked_userComment=check_comment();
       var checked_phoneNumber = check_phonenumber();
       var checked_country=check_country();

       var userEmail = jQuery("#check_user_email_footer_contact").val();
       var userName = jQuery("#check_user_name_footer").val();
       var userPhone = jQuery("#check_user_phone_footer").val();
       // country
       var userCountry=jQuery("#check_user_phone_footer").val();
       var userCompany = jQuery("#check_user_company_footer").val();
       // subject
       var userSubject=jQuery("#check_user_phone_footer").val();
       var userQuery = jQuery("#check_user_query_footer").val();

       var previous_url = jQuery(".previous_url").val();
       var current_url = jQuery(".current_url").val();
       // var recapta = check_recaptcha();

       var consentMsgAgree=(jQuery("#customCheck").is(":checked"));


       // function check_recaptcha(){
       //     var recp_val = jQuery('#g-recaptcha-response-1').val().trim();
       //    if(window.url.split('/')[window.url.split('/').length -2 ] == 'contact-us')
       //    {
       //     recp_val = jQuery('#g-recaptcha-response').val().trim();
       //    }
       //       if( recp_val == '' ){
       //         recp_val = jQuery('#g-recaptcha-response-2').val().trim();  
       //     }
       //     // var recp_val = jQuery('#g-recaptcha-response-1').val().trim();
       //     if( recp_val == '' ){
       //         jQuery('.error-recap').show();
       //         return recp_val;
       //     } else {
       //         jQuery('.error-recap').hide();
       //         return recp_val;
       //     }
       // }

 
//  alert(name +email +quote+ message);
 var dataString = 'name=' + userName + '&email=' + userEmail  + '&phone=' + userPhone + '&company=' + userCompany + '&query='+userQuery;
    if(checked_userEmail && checked_userName && checked_phoneNumber && checked_country && consentMsgAgree !=false){        
           e.preventDefault();
            $('#loadingmessage_footer').show();
               jQuery.ajax({
               type: "POST",
               //url: "<?php echo home_url();?>/php/mail_smtp.php",
               url: on_footer_script.base_url+"/php/mail_smtp.php",
               data: {
                   name: userName,
                   email: userEmail,
                   phone: userPhone,
                   company: userCompany,
                   query: userQuery,
                   current_url: current_url,
                   previous_url: previous_url,
                   'g-recaptcha-response': "true"

               },
               success: function (data) {
                   
                           if(data)
                           { 
                               //ajax_url = "<?php echo  admin_url( 'admin-ajax.php' )?>";
                               ajax_url=on_footer_script.ajaxurl;
                               var token = genrate_token();
                               data_value ={
                                   'action': 'store_key_value',
                                   'key' : token
                               };
                               jQuery.post(ajax_url, data_value, function(response) {

                                 var url1 =  on_footer_script.site_url+"/thankyou?key="+token;
                                  alert(url1);
                               
                               //    window.open(url1, '_top');

                               });
                               
                           }
                       }
                           });
                       }
               else{
                           return false;
               }
               
               function genrate_token(){
                   var token = "";
                   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
               
                   for (var i = 0; i < 15; i++)
                   token += possible.charAt(Math.floor(Math.random() * possible.length));
               
                   return token;
               
               }

           function check_name(){

                   var userNameValue = $('#check_user_name_footer').val().trim();

                       if ($('#check_user_name_footer').val().trim() == '')
                       {
                           $('#check_user_name_footer').css('border-color', '#d40f2a');
                           $(".name-required-field").show();
                           $(".user-name-error-invalid").hide();
                           return false;
                       }else
                       {      
                           $(".name-required-field").hide();          
                           return true;
                               }
           }


           function check_country(){

               var countryValue = $('#check_user_country_footer').val().trim();

                   if ($('#check_user_country_footer').val().trim() == '')
                   {
                       $('#check_user_country_footer').css('border-color', '#d40f2a');
                       $(".country-required-field").show();
                       // $(".user-name-error-invalid").hide();
                       return false;
                   }else
                   {      
                       $(".country-required-field").hide();          
                       return true;
                           }
       }
           function check_phonenumber(){
               var phone = $("#check_user_phone_footer").val().trim(); 

                   if($('#check_user_phone_footer').val().trim() == '') 
                   {
                       $('#check_user_phone_footer').css('border-color', '#d40f2a');
                       $(".phone-required-field").show();
                       $(".phone-error-invalid").hide();
                       return false;
                   }else{
                           $('#check_user_phone_footer').css('border-color', '');
                           if(isValidPhone(phone))
                           {
                           $('#check_user_phone_footer').css('border-color', '');
                           $('.phone-error-invalid').hide();
                           return true;
                           }else{
                                       $('#check_user_phone_footer').css('border-color', '#d40f2a');
                                       $('.phone-error-invalid').show();
                                       $(".phone-required-field").hide();
                                       $(".phone-error-invalid").addClass("error-show");
                                   return false;
                               }
                   
                   }
           }
           function isValidPhone(phoneNumber)
           {
               var pattern = new RegExp('^[0-9]+$');
   
               return pattern.test(phoneNumber);
           }




          
           function check_email(){

                   var email = $("#check_user_email_footer_contact").val().trim(); 

                   if($('#check_user_email_footer_contact').val().trim() == '') 
                   {
                       $('#check_user_email_footer_contact').css('border-color', '#d40f2a');
                       $(".email-required-field").show();
                       $(".email-error-invalid").hide();
                       return false;
                   }else{
                           $('#check_user_email_footer_contact').css('border-color', '');
                           if(isValidEmail(email))
                           {
                           $('.email').css('border-color', '');
                           
                           $('.email-error-invalid').hide();
                           return true;
                           }else{
                                       $('#check_user_email_footer_contact').css('border-color', '#d40f2a');
                                       $('.email-error-invalid').show();
                                       $(".email-required-field").hide();
                                       $(".email-error-invalid").addClass("error-show");
                                   return false;
                               }
                   
                   }
           }

           function isValidEmail(emailAddress)
           {
               var pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
   
               return pattern.test(emailAddress);
           }
           function check_comment(){
               var customCommentValue = $('#check_user_query_footer').val().trim();
               if($('#check_user_query_footer').val().trim() == '') 
               {
                       $('#check_user_query_footer').css('border-color', '#d40f2a');
                       $(".comment-required-field").show();
                       $(".user-comment-error").addClass("error-show");
                       $('.user-comment-error-invalid ').hide();
                     
                       return false;
               }else{
                   $('#check_user_query_footer').css('border-color', '');   
                   $(".comment-required-field").hide();  
                       return true;
               }
           }
});
