new WOW().init();
// clear input field on click
$(".select-input").click(function(){
$(this).select();
});

//$('#navbarContent').hide();
$('#navbartoggle').click(function() {
$('#navbarContent').toggleClass('show');
$('.zip-search').removeClass('active')
$(this).toggleClass('open');
});

//header carousel js
$(document).ready(function() {
$("#header-carousel").owlCarousel({
loop: false,
autoplay: true,
margin: 20,
responsiveClass: true,
nav: false,
dots: false,
animateIn: 'fadeIn',
animateOut: 'fadeOut',
autoplayHoverPause: true,
responsive: {
0: {
items: 1
},
600: {
items: 2
},
1000: {
items: 3
},
1200: {
items: 4,
loop: false
}
}
});
});

$(document).ready(function() {
$("#offer-carousel").owlCarousel({
loop: true,
autoplay: true,
margin: 20,
responsiveClass: true,
nav: false,
dots: true,
responsive: {
0: {
items: 1
},
600: {
items: 1
},
1000: {
items: 1
},
1200: {
items: 1
}
}
});
});

//deal banner js
$(document).ready(function() {
$("#deals-carousel").owlCarousel({
loop: true,
autoplay: true,
margin: 0,
responsiveClass: true,
nav: false,
dots: true,
animateIn: 'fadeIn',
animateOut: 'fadeOut',
items: 1,
autoplayHoverPause: true
});
});

//deal details js
$(document).ready(function() {
$("#best-deals-carousel").owlCarousel({
loop: true,
autoplay: true,
margin: 30,
responsiveClass: true,
nav: false,
dots: true,
responsive: {
0: {
items: 1
},
768: {
items: 2
},
1000: {
items: 3
},
1200: {
items: 3
}
}
});
});


$('#select-deals').on('change', function() {
if (this.value == '7') {
$('#select-deals-icon').addClass('electricity');
$('#select-deals-icon').removeClass('bundles');
$('#select-deals-icon').removeClass('television');
$('#select-deals-icon').removeClass('internet');
$('#select-deals-icon').removeClass('home_security');
$('#select-deals-icon').removeClass('wireless');
} else if (this.value == '5') {
$('#select-deals-icon').addClass('bundles');
$('#select-deals-icon').removeClass('electricity');
$('#select-deals-icon').removeClass('television');
$('#select-deals-icon').removeClass('internet');
$('#select-deals-icon').removeClass('home_security');
$('#select-deals-icon').removeClass('wireless');
} else if (this.value == '8') {
$('#select-deals-icon').addClass('home_security');
$('#select-deals-icon').removeClass('electricity');
$('#select-deals-icon').removeClass('television');
$('#select-deals-icon').removeClass('internet');
$('#select-deals-icon').removeClass('bundles');
$('#select-deals-icon').removeClass('wireless');
} else if (this.value == '3') {
$('#select-deals-icon').addClass('television');
$('#select-deals-icon').removeClass('electricity');
$('#select-deals-icon').removeClass('internet');
$('#select-deals-icon').removeClass('bundles');
$('#select-deals-icon').removeClass('home_security');
$('#select-deals-icon').removeClass('wireless');
} else if (this.value == '9') {
$('#select-deals-icon').addClass('wireless');
$('#select-deals-icon').removeClass('electricity');
$('#select-deals-icon').removeClass('bundles');
$('#select-deals-icon').removeClass('television');
$('#select-deals-icon').removeClass('home_security');
$('#select-deals-icon').removeClass('internet');
} else if (this.value == '2') {
$('#select-deals-icon').addClass('internet');
$('#select-deals-icon').removeClass('electricity');
$('#select-deals-icon').removeClass('bundles');
$('#select-deals-icon').removeClass('television');
$('#select-deals-icon').removeClass('home_security');
$('#select-deals-icon').removeClass('wireless');
} else {
$('#select-deals-icon').removeClass('electricity');
$('#select-deals-icon').addClass('internet');
$('#select-deals-icon').removeClass('television');
$('#select-deals-icon').removeClass('bundles');
$('#select-deals-icon').removeClass('home_security');
$('#select-deals-icon').removeClass('wireless');
}
});

//scrool menu js
$(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= .0001) {
$("#navbar").addClass("headercolor");
$(".zip-search").addClass("headerfix");
} else {
$("#navbar").removeClass("headercolor");
$(".zip-search").removeClass("headerfix");
}
});

$('.close').click(function() {
$(".modal").hide();
$("#current_service").hide();
$(".deal_offer_show").hide();
$("body").removeAttr("style");
});
if ($(window).width() > 750) {
$('.call_icon_deal').click(function() {
$("#call_icon_deal").show();
});
}
// modal 'call or order' on deal_details

function call_or_orders_click(str_url) {
$("#call_to_orders").show();
$('#form_call_or_order').attr('action', str_url);
}
//
//modal service open
$('#service_open').click(function() {
$('body').css('overflow', 'hidden');
var vendor = $('#vendor').val();
if (vendor == 'Other') {
$('#show_othername').removeClass('d-none');
} else {
$('#show_othername').addClass('d-none');
}

$("#current_service").show();
var is_contract = $('#no_date_contact').attr('is_contract')
if (is_contract == 'False') {
$("#no_date_contact").prop('checked', true);
$('#date_contact_show').toggleClass('d-none');
}

var is_internet = $('#internet').attr('is_internet')
if (is_internet == 'True') {
$('#internet').trigger('click');
}

var is_tv = $('#tv').attr('is_tv')
if (is_tv == 'True') {
$('#tv').trigger('click');
}

var is_phone = $('#phone').attr('is_phone')
if (is_phone == 'True') {
$('#phone').trigger('click');
}

});


//password show hide function
function passwordSHOW() {
var x = document.getElementById("user_password");
if (x.type === "password") {
x.type = "text";
} else {
x.type = "password";
}
}


$('#new-user').click(function() {
$("#signup-box").show();
$("#signin-box").hide();
$("#forget-box").hide();
});
$('#old-user,.close').click(function() {
$("#signin-box").show();
$("#signup-box").hide();
$("#forget-box").hide();
});

$('#forget-user').click(function() {
$("#forget-box").show();
$("#signin-box").hide();
$("#signup-box").hide();
});

$('.kwh').click(function() {
$(".kwh").removeClass('active');
$(this).addClass('active');
});

$('.rating').on('click', function() {
$('.rating').removeClass('active');
$(this).addClass('active');
})

$(document).ready(function() {
$('#no_date_contact').click(function() {
$('#date_contact_show').toggleClass('d-none');
});
});

$(document).ready(function() {
$('#internet').click(function() {
if ($('#internet').is(":checked")) {
$('#internet_show').append('<div class="row"><div class="form-style mb-1 mb-md-4 col-md-6"><label>Download Speed (mbps) <span style="color: #f00">*</span> </label><input type="number" name="download_speed" id="download_speed" class="input-style" min="1" step=1  required></div><div class="form-style mb-1 mb-md-4 col-md-6"><label>Upload Speed (mbps)</label><input type="number" name="upload_speed" id="upload_speed" class="input-style" min="1" step=1 ></div>')
$('#upload_speed').val($('#internet_show').attr('upload_speed'));
$('#download_speed').val($('#internet_show').attr('download_speed'));
} else {
$('#internet_show').empty();
}
});
$('#tv').click(function() {
if ($('#tv').is(":checked")) {
$('#tv_show').append('<div class="row"><div class="form-style mb-1 mb-md-4 col-md-6"><label>Free Channels <span style="color: #f00">*</span></label><input type="number" name="free_channels" id="free_channels"  class="input-style" min="0" required></div><div class="form-style mb-1 mb-md-4 col-md-6"><label>Premium Channels</label><input type="number" name="premium_channels"  id="premium_channels" class="input-style" min="0"></div></div>')
$('#premium_channels').val($('#tv_show').attr('premium_channels'));
$('#free_channels').val($('#tv_show').attr('free_channels'));
} else {
$('#tv_show').empty();
}
});
$('#phone').click(function() {
if ($('#phone').is(":checked")) {
$('#phone_show').append('<div class="row align-items-end"><div class="form-style mb-1 mb-md-2 col-md-6"><p>Domestic</p><div class="form-style chechbox-style"><input type="checkbox" class="input-style" id="unlimited_domestic" name="unlimited_domestic" ><label for="unlimited_domestic">Unlimited</label></div></div><div class="form-style mb-1 mb-md-2 col-md-6"><input type="number" name="domestic_call" id="domestic_call"  class="input-style" min="0" required></div></div><div class="row align-items-end"><div class="form-style mb-1 mb-md-2 col-md-6"><p>International</p><div class="form-style chechbox-style"><input type="checkbox" id="unlimited_international" class="input-style" name="unlimited_international" ><label for="unlimited_international">Unlimited</label></div></div><div class="form-style mb-1 mb-md-2 col-md-6"><input type="number" name="international_call" id="international_call"  class="input-style" min="0"></div></div>')
//            $('#unlimited_domestic').val($('#phone_show').attr('unlimited_domestic'));
$('#domestic_call').val($('#phone_show').attr('domestic_call'));
//            $('#unlimited_international').val($('#phone_show').attr('unlimited_international'));
$('#international_call').val($('#phone_show').attr('international_call'));

if ($('#phone_show').attr('unlimited_domestic') == 'True') {
$("#unlimited_domestic").prop('checked', true);
$("#domestic_call").prop('required', false);
$("#domestic_call").prop('disabled', true);
} else {
$("#unlimited_domestic").prop('checked', false);
}

if ($('#phone_show').attr('unlimited_international') == 'True') {
$("#unlimited_international").prop('checked', true);
$("#international_call").prop('disabled', true);
} else {
$("#unlimited_international").prop('checked', false);
}

} else {
$('#phone_show').empty();
}
});

});

$(".open-detail").click(function() {
$(".modal-detail").hide();
var value = $(this).attr('data');
$('#' + value).show();
})
$('.modal-detail-close').click(function() {
$(".modal-detail").hide();
});



$('#phone_show').on('click', '#unlimited_domestic', function() {
if ($("#unlimited_domestic").prop('checked') == true) {
$("#domestic_call").prop('required', false);
$("#domestic_call").prop('disabled', true);
} else {
$("#domestic_call").prop('disabled', false);
$("#domestic_call").prop('required', true);
}
});

$('#phone_show').on('click', '#unlimited_international', function() {

if ($("#unlimited_international").prop('checked') == true) {
$("#international_call").prop('disabled', true);
} else {
$("#international_call").prop('disabled', false);
}

});


//
$("#CurrentInternetService").submit(function(e) {
console.log("CurrentInternetService")
console.log($(this).attr("action"))
console.log("CurrentInternetService")
var startDate = new Date($('#start_date').val());
var endDate = new Date($('#end_date').val());
no_error = true
if (startDate >= endDate) {
$("#end_date-error").html("End date should be greater than Start date.");
no_error = false
e.preventDefault();
}
var internetIsChecked = $('#internet:checkbox:checked').length;
var tvIsChecked = $('#tv:checkbox:checked').length;
var phoneIsChecked = $('#phone:checkbox:checked').length;
var sum_service_checked = internetIsChecked + tvIsChecked + phoneIsChecked
var bundle = $('#current_bundle_title').attr('bundle')
if (sum_service_checked < 2 && bundle) {
$("#bundle-error").html("Please Select Atleast 2 services.");
no_error = false
e.preventDefault();
}

var postData = $(this).serializeArray();
var formURL = $(this).attr("action");

var redirect_url = $(this).attr("redirect_url");
postData.push({
name: 'redirect_url',
value: redirect_url
});
$.ajax({
url: formURL,
type: "POST",
data: postData,
success: function(res, NULL, jqXHR) {
if (jqXHR.status === 200 && no_error) {
window.location.replace(res.redirect_url);
}
},
error: function(data) {}
});
e.preventDefault(); //STOP default action
});
$("#FeedbackForm").submit(function(e) {
var postData = $(this).serializeArray();
var formURL = $(this).attr("action");
var redirect_url = $(this).attr("redirect_url");
postData.push({
name: 'redirect_url',
value: redirect_url
});

//        console.log("FeedbackForm")
//        console.log(postData)
//        console.log("FeedbackForm")
no_error = true
if (!$("input[name='rating']:checked").val()) {
$("#star-rating-error").html("Please choose a star.");
no_error = false
e.preventDefault();
} else {
$.ajax({
url: formURL,
type: "POST",
data: postData,
success: function(res, NULL, jqXHR) {

if (jqXHR.status === 200 && no_error) {
window.location.replace(res.redirect_url);
}

},
error: function(data) {}
});
}
e.preventDefault(); //STOP default action
});


function UnsubscribeService(unsubscribe_action_url, redirect_url) {
data = JSON.stringify({
'redirect_url': redirect_url
})
$.ajax({
url: unsubscribe_action_url,
data: data,
type: "POST",
dataType: "json",
contentType: false,
processData: false,
success: function(res, NULL, jqXHR) {
if (jqXHR.status === 200) {
window.location.replace(res.redirect_url);
}
},
error: function(xhr, status, error) {}
});
e.preventDefault();
}


$(".allownumericonly").on("keypress keyup blur", function(event) {
$(this).val($(this).val().replace(/[^\d].+/, ""));
if ((event.which < 48 || event.which > 57)) {
event.preventDefault();
}
});


// New Theme
//scrool menu js
$(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll >= 100) {
$("#navigation").addClass("smallheader");
} else {
$("#navigation").removeClass("smallheader");
}
});


$('#menucontent').removeClass('show');
$('#navigationtoggle').removeClass('open');
$('body').removeClass('body-overflow');
$('#navigationtoggle').click(function() {
$('#menucontent').toggleClass('show');
$('body').toggleClass('body-overflow');
$(this).toggleClass('open');

});


//home_offer_carousel carousel js
$(document).ready(function() {
$("#home_offer_carousel").owlCarousel({
loop: true,
autoplay: true,
margin: 20,
responsiveClass: true,
nav: false,
dots: true,
items: 1,
autoplayHoverPause: true
});
});


//header carousel js
$(document).ready(function() {
$(".home_card_carousel").owlCarousel({
loop: false,
autoplay: true,
margin: 20,
responsiveClass: true,
nav: false,
dots: false,
stagePadding: 10,
lazyLoad: true,
responsive: {
0: {
items: 1
},
768: {
items: 2
},
1000: {
items: 3
},
1200: {
items: 4
},
1600: {
items: 4
}
}
});
});

$(document).ready(function() {
$(".offers_carousel").owlCarousel({
loop: false,
autoplay: true,
margin: 5,
responsiveClass: true,
nav: false,
rtl: true,
dots: false,
items: 3,
responsive: {
1200: {
margin: 3
},
600: {
margin: 5
}
}
});
});


//hide alert
$('#close_alert_box').click(function() {
$("#alert_box").hide();
});

$(".reset_form").click(function() {
$("#LoginForm").trigger("reset");
$("#SignUpForm").trigger("reset");
$("#ForgetForm").trigger("reset");
$(".error").text('');
//    $(".input-style").val('');
});

function wishlist(deal){
if (is_login == 'False'){
$("#myModal").show();
$('#wishlist_'+deal+':checkbox').prop('checked',false);
return false
};
var like = 0;
if ($("#wishlist_" +deal).prop("checked") == true){
var like = 1;
$('#text_wishlist_'+deal).html('Remove from wishlist');
}
else{
$('#text_wishlist_'+deal).html('Add to wishlist');
}
var csrftoken = $("[name=csrfmiddlewaretoken]").val();
$.ajax({
type: 'POST',
url: '/webuser/wishlist/',
dataType: "json",
data: {'deal':deal,'like':like,'csrfmiddlewaretoken': csrftoken},
success: function (data) {
if (data.message != "success") {

} else {
window.location.href
}
}
});


};

$(window ).on( "load", function() {
$('.w_checked:checkbox').prop('checked',true);
});

//on click select all value of input
$('#contact_number, #alt_contact_number, #ssn, #esi_id').on( "click", function() {
$(this).select();
});

//get dummy email id
function getRandomEmail(domain,length)
{
var text = "sd_";
// var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

for( var i=0; i < length; i++ )
text += possible.charAt(Math.floor(Math.random() * possible.length));

return text + domain;
}


//function on ctrl+click on card
function productclick(name,deal_id,price,brand,category){
if (window.event.ctrlKey) {
var variant=null;
var position=null;
deal_url = $("#deal_url_"+deal_id).attr("href");
if ('{{request.user.is_authenticated}}' == 'True'){
dataLayer.push({
// 'event': 'productClick',
'ecommerce': {
'click': {
'actionField': {'list': 'Search Results'},
'products': [{
'name': '{{request.user.decrypted_get_full_name}}',
'id': deal_id,
'price': price,
'brand': name+'-'+brand,
'category': category,
'variant': '{{request.user.email}}',
'position': position
}]
}
},
'eventCallback': function() {
document.location = deal_url
}
});
}else{
dataLayer.push({
//'event': 'productClick',
'ecommerce': {
'click': {
'actionField': {'list': 'Search Results'},
'products': [{
'name': 'Guest User',
'id': deal_id,
'price': price,
'brand': name+'-'+brand,
'category': category,
'variant': 'Guest User',
'position': position
}]
}
},
'eventCallback': function() {
document.location = deal_url
}

});
}
}else{
var variant=null;
var position=null;
deal_url = $("#deal_url_"+deal_id).attr("href");
if ('{{request.user.is_authenticated}}' == 'True'){
dataLayer.push({
'event': 'productClick',
'ecommerce': {
'click': {
'actionField': {'list': 'Search Results'},
'products': [{
'name': '{{request.user.decrypted_get_full_name}}',
'id': deal_id,
'price': price,
'brand': name+'-'+brand,
'category': category,
'variant': '{{request.user.email}}',
'position': position
}]
}
},
'eventCallback': function() {
document.location = deal_url
}
});
}else{
dataLayer.push({
'event': 'productClick',
'ecommerce': {
'click': {
'actionField': {'list': 'Search Results'},
'products': [{
'name': 'Guest User',
'id': deal_id,
'price': price,
'brand': name+'-'+brand,
'category': category,
'variant': 'Guest User',
'position': position
}]
}
},
'eventCallback': function() {
document.location = deal_url
}

});
}
}
}


//add and remove class on I, hereby, allow ServiceDealz to contact me in future.
$(document).ready(function(){
$('#is_sd_authorize_to_contact_on_phone').addClass('per_info_checked');
$('#is_sd_authorize_to_contact_on_phone').on('click', function(){
if(document.getElementById("is_sd_authorize_to_contact_on_phone").className == "per_info_checked"){
$(this).addClass('per_info_unchecked').removeClass('per_info_checked');
}else{
$(this).removeClass('per_info_unchecked').addClass('per_info_checked');
}
});
});


$('#subscribe').click(function () {
$('#subscribe_show').show();
});
$('.close').click(function () {
$('#subscribe_show').hide();
});

function subscribe(){
if ($("#SubscribeForm").valid()) {
$('body').addClass("loaders");
$.ajax({
type: 'POST',
url: '/webuser/subscription/',
data: $("#SubscribeForm").serialize(),
dataType: "json",
success: function (data) {
if (data.message != "success") {
$('body').removeClass("loaders");
$("#subscription-credentials-error").text(data.message);
$("#subscription-credentials-error").show();
return false;
} else {
window.location.href = ("/");
}
}
});
}
}

// Deal listing filters onchange or onclick
function found_filtered_deals(){
$('body').addClass("loaders");
$("#FilterForm").submit()
}

//click select all
$('input').on("click",function(){
    $(this).select();
})


//$( "#tdu_fixed_charge" ).focusout(function(){
//    var add0 = $(this).val();
//    $(this).val('0.'+ add0);
//});
// 
//var tduMask = IMask(
//document.getElementById('tdu_fixed_charge'), {
// mask: '0.0000'
//});
//
//var tduMask2 = IMask(
//document.getElementById('charge_name_2'), {
// mask: '0.0000'
//});