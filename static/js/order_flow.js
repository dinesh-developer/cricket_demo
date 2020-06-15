var is_valid_zip = true;
var is_agent_submit_order = false;

//service_start_date
$(function() {
    $("#service_start_date").datepicker({
        dateFormat: 'mm/dd/yy',
        minDate: 1,
        changeMonth: true
        // changeYear: true
    });
  });

 //only accept alphabets
function onlyAlphabets(value){
    var only_alphabets_regex = /^^[a-zA-Z][A-Za-z\s]*$/;
    var isValid =  only_alphabets_regex.test(value);
    if(isValid){
        return true;
    }else{
        return false;
    }
}

//email format validation 
function EmailFormatValid(value){
    var email_regex = /^([a-zA-Z0-9_.-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z])+$/;
    var isValid =  email_regex.test(value);
    if(isValid){
        return true;
    }else{
        return false;
    }
}

//password format validation 
function PasswordFormatValid(value){
    var password_regex = /^(?=.*\d)(?=.*[A-Z]).{8,16}$/;
    var isValid =  password_regex.test(value);
    if(isValid){
        return true;
    }else{
        return false;
    }
}

//Validation for test order
function isTestOrder(){
    //Personal Information
    var user_first_name = $('#user_first_name').val();
    var user_last_name = $('#user_last_name').val();
    var ssn = $('#ssn').val();
    var contact_number = $('#contact_number').val();
    var email =$('#user_email_address').val();
    
    if((user_first_name == "First") || (user_last_name == "Last") || (ssn == "000-00-0000") 
        ||(contact_number == "(000) 000-0000") ||(email.includes("sd_")) ){
        return true;
    }

    //Service Information
    var service_address1 = $('#service_address1').val();
    var service_city     = $('#service_city').val();
    var service_zip      = $('#service_zip').val();

    var billing_address1 = $('#billing_address1').val();
    var billing_city     = $('#billing_city').val();
    var billing_zip      = $('#billing_zip').val();

    var previous_address1 = $('#previous_address1').val();
    var previous_city     = $('#previous_city').val();
    var previous_zip      = $('#previous_zip').val();
     
    if((service_address1 == "Address Line 1") || (service_city == "City") || (service_zip == "00000")){
        return true;
    }

    if((billing_address1 == "Address Line 1") || (billing_city == "City") || (billing_zip == "00000")){
        return true;
    }

    if((previous_address1 == "Address Line 1") || (previous_city == "City") || (previous_zip == "00000")){
        return true;
    }

    //Electricity
    if(category_id == 7){
        var service_start_date = $('#service_start_date').val();
        var t_ondate = $('#t_ondate').val();

        if((service_start_date == "00/00/0000") || (t_ondate == "00/00/0000")){
             return true;
         }       
    }
     
}
//personal Information validation
function personalInfoValidation(){

    var user_first_name = $('#user_first_name').val();
    var user_last_name = $('#user_last_name').val();
    var ssn = $('#ssn').val();
    var contact_number = $('#contact_number').val();
    var alt_contact_number = $('#alt_contact_number').val();
    var email =$('#user_email_address').val();
    if (deal_provider_id == 124) {
        var a_user = document.getElementById("au_yes");
        if (a_user.checked){
            var authorized_user_first_name = $("#authorized_user_first_name").val();
            var authorized_user_last_name = $("#authorized_user_last_name").val();
            var authorized_user_phone = $("#authorized_user_phone").val();
            
            if(authorized_user_first_name.trim().length<3){
                alert('Please enter at least 3 characters in First Name')
                return false;
            }
            if(!(onlyAlphabets(authorized_user_first_name))){
                alert("First name should contains only alphabets.")
                return false;
            }

            if(authorized_user_last_name.trim().length<3){
                alert('Please enter at least 3 characters in Last Name')
                return false;
            }  
            if(!(onlyAlphabets(authorized_user_last_name))){
                alert("Last name should contains only alphabets.")
                return false;
            }

            if(authorized_user_phone.trim().length != 14 ){
                alert('Phone Number should be of 10 digits')
                return false;
            }
        }
    }

    if(user_first_name.trim().length<3){
        alert('Please enter at least 3 characters in First Name')
        return false;
    }
    if(!(onlyAlphabets(user_first_name))){
        alert("First name should contains only alphabets.")
        return false;
    }

    if(user_last_name.trim().length<3){
        alert('Please enter at least 3 characters in Last Name')
        return false;
    }  
    if(!(onlyAlphabets(user_last_name))){
        alert("Last name should contains only alphabets.")
        return false;
    }
  
    if(email.trim() == ''){
        alert('Please enter email address.')
        return false;
    }

    if(!(EmailFormatValid(email))){
        alert('Please enter a valid email address.')
        return false;
    }

    if(contact_number.trim().length != 14 ){
        alert('Contact Number should be of 10 digits')
        return false;
    }

    if(($('#alt_contact_number').length !=0) && (alt_contact_number.trim().length > 0) && (alt_contact_number.trim().length != 14) ){
        alert('Alternate Contact Number should be of 10 digits')   
        return false;
    }

    var is_dob_Valid = is_dob_valid();
    if(!is_dob_Valid){
      return false;     
    }
    
    if(($('#ssn').length !=0) && (ssn.trim().length != 11) ){
        alert('Social Security Number should be of 9 digits')
        return false;
    }
    
    else if(!EmailFormatValid(email)){
        alert('Please enter a valid email address.')
        return false;
    }
    else{
        // customer io tracking
        $("#personal_info").val('True');

        trackOrderCustomerIO();
        return true;  
    }

}

//Service Information validation
function serviceInfoValidation() {
    //check if service and alternate/billing/mailing address is same
    setBillingAddress();

    //service address validation
    if ($("#service_address1").val().trim() == '' || $("#service_state").val().trim() == '' || $("#service_city").val().trim() == '' || $("#service_zip").val().trim() == '' ) {
        alert('Please fill required service address fields');
        return false;
    }

    if ($("#service_zip").val().trim().length != 5){
        alert('Zip Code should be of 5 digits')
        return false; 
    }
    if($('#service_start_date').is(':visible')){
        if ($("#service_start_date").val().trim().length == ''){
        alert('Please fill service start date ')
        return false;
    }
    }


    //billing address validation     
    if($('#billing_address').is(':visible'))
    {
        if (($("#billing_address1").val().trim() == '')
          ||($("#billing_state").val().trim() == '')
          ||($("#billing_city").val().trim() == '')
          ||($("#billing_zip").val().trim() == '')){
              alert('Please fill required billing address fields');
              return false;
        }
        if (($('#billing_zip').length !=0) && ($("#billing_zip").val().trim().length != 5)){
            alert('Zip Code should be of 5 digits')
            return false; 
        }
    } 
    
    //if previous address available - put validation
    if($('#previous-address').is(':visible'))
    {
        if (($("#previous_address1").val().trim() == '')
          ||($("#previous_state").val().trim() == '')
          ||($("#previous_city").val().trim() == '')
          ||($("#previous_zip").val().trim() == '')){
              alert('Please fill required previous address fields');
             return false;
        }
        if ($("#previous_zip").val().trim().length != 5){
            alert('Zip Code should be of 5 digits')
            return false; 
        }
    }

    //Electricity
    if(category_id == 7){
        var isValid = isElectricityServiceInfoValid();
        if (!isValid){
            return false; 
        }       
    }
    //Validating zip code
    if(!is_valid_zip){
        if(category_id == 7){
            setTimeout(alert("Requested rate plan is not available for this zip code. Please recheck."), 100)
        }else{
            setTimeout(alert("Service is not available for this zip code. Please recheck."), 100)
        }
        return false; 
    }

    addReviewData();

    // customer-io tracking
    $("#service_info").val('True');
    trackOrderCustomerIO();

    return true; 
}

function validateDealForZipCode(){

      var filled_zipcode = $("#service_zip").val().trim(); 
      return $.ajax({
        type: 'GET',
        url:zip_validator_url,
        data: {"filled_zipcode":filled_zipcode,"service_category_id":category_id ,"service_provider":service_provider,"deal_id":deal_id},
        dataType: "json",
        success: function (data){
        }     
    });
    }

//electricity service info validation
function isElectricityServiceInfoValid(){
    var contact_type = $('#contact_type').val();
    var service =$("input[name='load_radio']:checked").val();
    var service_start_date = $('#service_start_date').val();
    var t_ondate = $('#t_ondate').val();
    var esi_id = $('#esi_id').val();

    if(($('#contact_type').length !=0) && (contact_type.trim() == '')){
        alert('Please select contact type.')
        return false;
    }

    if ($('#esi_id').length != 0) {
        // if ($('#esi_id').val().trim().length == 0 ) {
        //     alert('Please fill required Power Meter Number')
        //     return false;
        // }

        if (($('#esi_id').val().trim().length !=0) && ($("#esi_id").val().trim().length != 17) && ($("#esi_id").val().trim().length != 22)) {
            alert('Power Meter Number should be of 17 or 22 digits')
            return false;
        }
    }
    
    //service type validation check
    if($('.t_ondate').is(':visible'))
    {
        //IE and VE
        if(($('#t_ondate').length !=0) && (t_ondate.trim() == '')){
            alert('Please fill all required fields')
            return false;

        }
        //frontier
        if(($('#service_start_date').length !=0) && (service_start_date.trim() == '')){
            alert('Please fill all required fields')
            return false;           
        }
    }
    return true;
}

//billing address checkbox clicked
$("#billing_same_service").click(function(){
    ////If user select yes for alternate same address. Set service address data in all field.
    setBillingAddress();
    
    // //If user select no for alternate same address. Set empty data in all field.
    // if(($("#billing_same_service").prop("checked") == false)){ 
    //     var is_agent = $('#is_agent').val();
    //     if (is_agent == 'False')
    //     {
    //         $("[id=billing_address1]").val('');
    //         $("[id=billing_address2]").val('');
    //         $("[id=billing_city]").val('');
    //         $("[id=billing_state]").val('');
    //         $("[id=billing_zip]").val('');
    //     }
    //     // only for agent : set all field value with dummy data so that agent can create partial order
    //     else{
    //         $("#billing_address1").val('Address Line 1');
    //         $("#billing_city")    .val('City');
    //         $("#billing_zip")     .val('00000');

    //         $("#billing_state option:selected").prop("selected", false)
    //         var index = $("#billing_state").find('option[value=' + "TX" +']').index();
    //         $('#billing_state option')[index].selected = true; 
    //     }
    // } 
     
});

//set alternate address data
function setBillingAddress(){
    if(($('#billing_same_service').length !=0) && ($("#billing_same_service").prop("checked") == true)){

        $("[id=billing_address1]").val($("#service_address1").val());
        $("[id=billing_address2]").val($("#service_address2").val());
        $("[id=billing_city]").val($("#service_city").val());
        $("[id=billing_state]").val($("#service_state").val());
        $("[id=billing_zip]").val($("#service_zip").val());

        $('#billing_address').hide()
        $('#same_as_service').show()
        $('#different_as_service').hide()       
    }else{
        $('#billing_address').show()
        $('#same_as_service').hide()
        $('#different_as_service').show()       
    }
}

//order review section opended
function addReviewData(){
    //set personal info
    //name
    if($('#middle_name').length !=0){
        $("[id=review_name]").text($('#user_first_name').val()+' '+$('#middle_name').val()+' '+$('#user_last_name').val());
    }else{
        $("[id=review_name]").text($('#user_first_name').val()+' '+$('#user_last_name').val());

    }
    //email
    $("[id=review_email]").text($('#user_email_address').val());
    //dob
    $("[id=review_dob]").text(getDOB_Format());
    //contact number
    $("[id=review_contact_number]").text($('#contact_number').val());
    //alertnate contact number
    if(($('#alt_contact_number').length ==0) || $('#alt_contact_number').val() == ''){
        $('.review_alt_contact_number').hide();   
    }
    else{
        $('.review_alt_contact_number').show(); 
        $("[id=review_alt_contact_number]").text($('#alt_contact_number').val());
    }
    
    //SSN
    if(($('#ssn').length ==0) || $('#ssn').val() == ''){
        $('.review_ssn').hide();   
    }
    else{
        $('.review_ssn').show();
        $("[id=review_ssn]").text($('#ssn').val());
    }
    
    //set service info
    //power number
    if(($('#esi_id').length ==0) || $('#esi_id').val() == ''){
        $('.review_esi_id').hide();   
    }else{
        $('.review_esi_id').show();
        $("[id=review_esi_id]").text($('#esi_id').val());
    }

    //contact type
    if(($('#contact_type').length ==0) || $('#contact_type').val() == ''){
        $('.review_contact_type').hide();   
    }else{
        $('.review_contact_type').show();
        $("[id=review_contact_type]").text($('#contact_type').val());
    }
    
    //service type
    if(($("input[name='load_radio']").length ==0) || $("input[name='load_radio']:checked") == false){
        $('.review_service_type').hide(); 
    }else{
        $('.review_service_type').show();
        $("[id=review_service_type]").text($("input[name='load_radio']:checked").val());
    }
    
    //service start date
    if($('.t_ondate').is(':visible'))
    {
        $('.review_service_start_date').show(); 

        //IEand VE
        if($('#t_ondate').is(':visible')){
            $("[id=review_service_start_date]").text($('#t_ondate').val());
        }
        //viasat start date
        if($('#service_start_date_viasat').is(':visible')){
            $("[id=review_service_start_date]").text($('#service_start_date_viasat').val());
        }
        //frontier
        if($('#service_start_date').is(':visible')){
            $("[id=review_service_start_date]").text($('#service_start_date').val());
        }
    }else{
        $('.review_service_start_date').hide();
    }

    //set address header on review page
    $("#review_service_address_header").text($('#service_address_header').text());
    $("#review_billing_address_header").text($('#billing_address_header').text());

    //review service address
    $("[id=review_service_address1]").text($("#service_address1").val());
    $("[id=review_service_address2]").text($("#service_address2").val());
    $("[id=review_service_city]").text($("#service_city").val());
    $("[id=review_service_state]").text($("#service_state").val());
    $("[id=review_service_zip]").text($("#service_zip").val());
    
    //check if alternate/billing/mailing address is available or not based on that show review address for it
    if(($('#billing_address_header').length !=0) && ($('#billing_address_header').text() != '')){
        $('#review_billing_address').show();
    }else{
        $('#review_billing_address').hide();
    }

    //review billing address
    $("[id=review_billing_address1]").text($("#billing_address1").val());
    $("[id=review_billing_address2]").text($("#billing_address2").val());
    $("[id=review_billing_city]").text($("#billing_city").val());
    $("[id=review_billing_state]").text($("#billing_state").val());
    $("[id=review_billing_zip]").text($("#billing_zip").val());
    
    //review previous address
    if(($('#address_no').length != 0) && $("#address_no").is(":checked") == 1){
        $('#review_previous_address').show();
        $("[id=review_previous_address1]").text($("#previous_address1").val());
        $("[id=review_previous_address2]").text($("#previous_address2").val());
        $("[id=review_previous_city]").text($("#previous_city").val());
        $("[id=review_previous_state]").text($("#previous_state").val());
        $("[id=review_previous_zip]").text($("#previous_zip").val());
        $('#previous_different_as_service').show();
        $('#previous_same_as_service').hide();

    }
    
    if(($('#address_no').length != 0) && $("#address_yes").is(":checked") == 1){
        $('#previous_different_as_service').hide();
        $('#previous_same_as_service').show();
    }

    if($('#address_no').length == 0){
        $('#review_previous_address').hide();
        $('#previous_same_as_service').hide();
    }

    //equipment review section
    addEquipmentReviewSection(); 
}

function isTosAgreed(){
    if ($("#tnc_1").length && $("#tnc_1").is(":checked") == false) {
        alert("Please accept all terms & conditions");
        return false;
    };

    if ($("#tnc_5").length && $("#tnc_5").is(":checked") == false) {
        alert("Please accept all terms & conditions");
        return false;
    };
    if ($("#tnc_2").length && $("#tnc_2").is(":checked") == false) {
        alert("Please accept all terms & conditions");
        return false;
    };
    if ($("#tnc_3").length && $("#tnc_3").is(":checked") == false) {
        alert("Please accept all terms & conditions");
        return false;
    };
    if ($("#tnc_4").length && $("#tnc_4").is(":checked") == false) {
        alert("Please accept all terms & conditions");
        return false;
    };
    // tnc is terms and condition of provider
    //tnc_gust is terms and condition of servicedealz on order flow signup page
    if (($("#tnc").length) && (($("#tnc").is(":checked") == false) || ($('#signup_show').is(':visible') && $("#tnc_gust").is(":checked") == false ))){
        alert("You must agree to the Terms of Service");
        return false;
    }else{        
        return true;
    }
}

function setLoginSectionData (){
    $("[id=guest_login_email]").val($("#user_email_address").val());

    if($('#signup_show').is(':visible')){
        $(".login_signup_header").text("Sign Up");
    }else{
        $(".login_signup_header").text("Login");
    }
     

}
//submit order of user as guest
$(".submit_form_as_guest").click(function(){
    $('#user_action').val('as_guest');

    SubmitOrder('As_guest submit order');
});

// submit order of user after login
$(".submit_form_login").click(function(){
    var email = $('#guest_login_email').val();
    var password = $('#guest_login_password').val();

    if (email.trim() == '' || password.trim() == '') {
        alert('Please fill required fields');
        return false;
        }
    if(password.trim().length < 8){
        alert('Password should be of min 8 characters');
        return false;
    }
    if(!(EmailFormatValid(email))){
        alert('Please enter a valid email address.')
        return false;
    }
    scrollToForm();
    $('#user_action').val('login');

    SubmitOrder('Login and submit order');
});

//submit order of user after signup
$(".submit_form_after_signup").click(function(){
    
    var first_name = $('#guest_first_name').val();
    var last_name = $('#guest_last_name').val();
    var email = $('#guest_email').val();
    var zipcode = $('#guest_zip_code').val();
    var password = $('#guest_password').val();
    var confirm_password = $('#guest_confirm_password').val();
    var refferal_code = $('#guest_refferal_code').val();               

    if (email.trim() == '' || password.trim() == '' || first_name.trim() == '' || last_name.trim() == '' || zipcode.trim() == '' || confirm_password.trim() == '') {
        alert('Please fill required fields');
        return false;
    } 

    if(!(onlyAlphabets(first_name))){
        alert("First name should contains only alphabets.")
        return false;
    }
    
    if(!(onlyAlphabets(last_name))){
        alert("Last name should contains only alphabets.")
        return false;
    }

    if(zipcode.trim().length != 5){
        alert('Zipcode should be of 5 digits.')
        return false;
    }        
    if(password.trim().length < 8){
        alert('Password should be of min 8 characters');
        return false;
    }
    if(!(EmailFormatValid(email))){
        alert('Please enter a valid email address.')
        return false;
    }
    if(refferal_code != ''){
        if(refferal_code.trim().length != 6){
            alert('Referral should be of 6 digits.')
            return false;
        }
    }        
    if(password.trim() != confirm_password.trim()){
        alert("Password & confirm password does'nt match")
        return false;
    }
    $('#user_action').val('signup');

    SubmitOrder('Signup and submit order');
    
});

// submit order of user who already logined 
$(".submit_form_loggedin").click(function(){
    var is_agent = $('#is_agent').val();
    // Cheched if agent is logined. If yes than for agent show comment popup
    // Agent can add comment on order submittion 
    if (is_agent == 'True'){
        // Here flag is set true to check if order is being getting submitted by agent
        is_agent_submit_order = true;
        if(!isTosAgreed()){
            return  
        }
        if (isTestOrder()){
            alert('You can not submit order with test data.')
            return
        }
        show_comment_popup();       
    }
    else{
        SubmitOrder('Already logged-in submit order');
    }
    
});

function SubmitOrder(value_order_option){
    var is_tos_agreed = isTosAgreed();
    
    if(!is_tos_agreed){
        return  
    }else{
        // customer io tracking
        $('#customer_io_submit_order').val(value_order_option);
        trackOrderCustomerIO();

        $('body').addClass("loaders");

        var comment = $('#comment').val();
        order_data = $("#orderForm").serialize() + "&comment="+ comment
        //check for agent        
        if ($('#is_agent').val() == 'True'){
           var agent_user_email         =$('#agent_user_email').val()
           var email_notification       = $("input[name='email_notification']").is(':checked');
           var submit_order_to_provider = $("input[name='submit_order_to_provider']").is(':checked');

           order_data = $("#orderForm").serialize() + "&agent_user_email="+ agent_user_email + "&comment="+ comment + "&email_notification="+ email_notification + "&submit_order_to_provider="+ submit_order_to_provider
        }

        $.ajax({
            type: 'POST',
            url: submit_order_url,
            data: order_data,
            dataType: "json",
            success: function (data) {
                $('body').removeClass("loaders");
                if (data.url) {
                    $('#customer_io_submit_order').val("Thank you page");
                    trackOrderCustomerIO();
                    var order_redirection_url = data.url
                    window.location.href = order_redirection_url;
                }else{
                    alert(data.message);
                    return false;
                }
            }

    });
}

}

// customer io tracking
function trackOrderCustomerIO(){

    $.ajax({
        type: 'POST',
        url: customer_io_url,
        data: $("#orderForm").serialize(),
        dataType: "json",
        success: function (data) {

            $("#service_info").val(data.service_info);
            $("#is_customer_io_tracking").val(data.is_customer_io_tracking);
            $("#personal_info").val(data.personal_info);

            return false;
            }
      });
}


$(".go_to_login").click(function() {
    $("#login_show").show();
    $("#btn-login").hide();
    $("#signup_show").hide();
    $("#btn-login").removeClass('d-flex');
    $(".login_signup_header").text("Login"); 

    $("[id=guest_login_email]").val($("#user_email_address").val());  
});

$(".go_to_signup").click(function() {
    $("#login_show").hide();
    $("#signup_show").show();
    $(".login_signup_header").text("Sign Up");
    
    $("[id=guest_login_email]").val($("#user_email_address").val());
    $("[id=guest_first_name]").val($("#user_first_name").val());
    $("[id=guest_last_name]").val($("#user_last_name").val());
    $("[id=guest_email]").val($("#user_email_address").val());
    $("[id=guest_zip_code]").val($("#service_zip").val());
});

  var phoneMask = IMask(
    document.getElementById('contact_number'), {
        mask: '(000) 000-0000'
    });
    if($('#authorized_user_phone').length !=0){
  var authorizedphoneMask = IMask(
    document.getElementById('authorized_user_phone'), {
        mask: '(000) 000-0000'
    });
    }

  if($('#alt_contact_number').length !=0){
  var phoneMask = IMask(
    document.getElementById('alt_contact_number'), {
        mask: '(000) 000-0000'
    });
  }

  if($('#ssn').length !=0){
  var ssnMask = IMask(
    document.getElementById('ssn'), {
        mask: '000-00-0000'
    });
    }

function addEquipmentReviewSection(){
    if(!questions_data){
        return
    }
    $.ajax({
        type: 'POST',
        url: '/deals/review/',
        data: $("#orderForm").serialize(),
        dataType: "json",
        success: function (data) {
            var html = getEquipmentSection(data);
            $("#price_review").html(html);

        $("#price_breakdown").val(JSON.stringify(data));
        }
    });
}

function getEquipmentSection(data){
    var html = ""
    html += "<h5 class='mb-2 mt-2'>Price detail</h5><table width='100%' cellpadding='0' cellspacing='0' border='0' class='list address'><tbody><tr>";
    $.each(data.price_detail, function( index, value ) {
        html +="<th>"
    +value.title+"</th><td>"+value.price+"</td></tr>"
    })
    html +="<tr><th>Sub Total</th><td>"+data.price_detail_subtotal+"</td></tr><tbody></table>";

    if (data.one_time_charges_subtotal != "$0") {
        html += "<h5 class='mb-2 mt-3'>One-Time Charges</h5><table width='100%' cellpadding='0' cellspacing='0' border='0' class='list address'><tbody><tr>";
        $.each(data.one_time_charges, function( index, value ) {
        html +="<th>"+value.fee_name+"</th><td>"+value.fee_amount+"</td></tr>"
        })
        html +="<tr><th>Sub Total</th><td>"+data.one_time_charges_subtotal+"</td></tr><tbody></table>";
    }
    
    if (data.additional_items_subtotal != "$0") {
        html +="<h5 class='mb-2 mt-3'>Additional Items</h5><table width='100%' cellpadding='0' cellspacing='0' border='0' class='list address'><tbody><tr>";
        $.each(data.additional_items, function( index, value ) {
        html +="<th>"+value.fee_name+"</th><td>"+value.fee_amount+"</td></tr>"
        })
        html +="<tr><th>Sub Total</th><td>"+data.additional_items_subtotal+"</td></tr><tbody></table>";
    }             
    
    html += "<h5 class='mb-2 mt-3'>Initial Order Total*</h5><table width='100%' cellpadding='0' cellspacing='0' border='0' class='list address'><tbody><tr>";
    html += "<th>First Month + One-Time-Charges<br> <small style='font-weight:400'>Additional taxes & fees apply<small></th><td>"+data.initial_total+"</td></tr><tbody></table>";
    
    html += "<table width='100%' cellpadding='0' cellspacing='0' border='0' class='list address'><tbody><tr>";
    html += "<th>Ongoing Monthly Charge<br><small style='font-weight:400'>Additional taxes & fees apply</small></th><td>"+data.ongoing_monthly_charge+"</td></tr><tbody></table>";

    return html;
}

function show_comment_popup(){
    if(is_agent_submit_order){
        $('#send_order_email_notification').show();
    }else{
        $('#send_order_email_notification').hide();
    }
    $('#open_comment_model').show();
    $("[id=agent_user_email]").val($("#user_email_address").val());
}
// save as draft from personal information section 
$(".save_as_draft_personal_info").click(function(){
    var isPersonalInfoValid = personalInfoValidation();
    if(isPersonalInfoValid){
        is_agent_submit_order = false;
        show_comment_popup();
    }
});

// save as draft from service information section 
$(".save_as_draft_service_info").click(function(){ 
    var isServiceInfoValid = serviceInfoValidation();
    if(isServiceInfoValid){
        is_agent_submit_order = false;
        show_comment_popup();
    } 
});

// save as draft from order review section 
$(".save_as_draft_order_review").click(function(){ 
    // var is_tos_agreed = isTosAgreed();
    // if(is_tos_agreed){
        // Here flag is set false so that if user/agent can save the order to draft
        is_agent_submit_order = false;
        show_comment_popup();
    // } 
});

// check user existance 
$("#check_user_existance").click(function(e){

    // validate user email address
    var email = $('#agent_user_email').val(); 
    if(!(EmailFormatValid(email))){
        $('#agent_user_email_error').text("Please enter a valid email address.");
        return false;
    }
    
    $('#agent_user_email_error').text("");
    
    var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

    $.ajax({
        type: 'POST',
        url: '/agent/user-email-check/',
        data:{"email":email, 'csrfmiddlewaretoken': csrftoken},
        dataType: "json",
        success: function (response) {

        $('#save_order_as_draft').prop('disabled', false);

        if(response.message == 'failed'){
            $('#agent_user_email_error').text("User is not registered with us. Still you can submit as guest. You can also update this user as Registered from User Management. ");
        }else{
            $('#agent_user_email_error').text("User is registered with us!");
        }
        return false;
        }
        });
});

// save as draft when user click on comment modal submit button 
$("#save_order_as_draft").click(function(e){
    
    var comment            = $('#comment').val(); 
    var agent_user_email   = $('#agent_user_email').val();
    var user_email_address = $('#user_email_address').val(); 
    
    if(($('#agent_user_email').length !=0)  && agent_user_email.trim().length >0 &&  agent_user_email!= user_email_address){
        alert("Email entered in previous form doesn't matched");
        return false;
    }  
    $('#open_comment_model').hide();

    //is_agent_submit_order = true means agent is submitting the order
    //is_agent_submit_order = False means agent is saving the order as draft
    if (is_agent_submit_order){
        SubmitOrder('Already logged-in submit order');
    }
    else{
        $('body').addClass("loaders");
        $.ajax({
            type:'POST',
            url:'/deals/save-order-as-draft/',
            data: $("#orderForm").serialize() + "&agent_user_email="+ agent_user_email + "&comment="+ comment,
            dataType: "json",
            success: function (response) {
                $('body').removeClass("loaders");
                if(response.status == 1)
                {
                    window.location.href = response.redirect_url
                }else{
                    alert(response.message);
                }
                return false;                              
            }
        });
    }
});