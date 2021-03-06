$.validator.addMethod("selectDropDown", function(value, element) {
    return value != 'SELECT';
}, "Title must be selected.");

$.validator.addMethod("isFirstNameValid", function(value, element) {
	var firstnamePattern = /^[A-z]+$/;
	return firstnamePattern.test(value);
}, "Please enter only characters.");

$.validator.addMethod("isContactNumberValid", function(value, element) {
	var numberPattern = /^[0-9]+$/;
	return numberPattern.test(value);
}, "Please enter only digits.");

$(document).ready(function(){
	$('#aboutMe').validate({
		debug: true,
		
		submitHandler: function(form) {
            form.submit();
	    },
	    
	    invalidHandler: function(event, validator) {
	    	var numberOfErrors = validator.numberOfInvalids();
	    	if(numberOfErrors){
	    		$('#errorCount').text(numberOfErrors);
	    		$('#error').show()
	    	}else{
	    		$('#error').hide()
	    	}
	    	
	    },
	    
	    errorClass: "showError", 
	    
	    focusCleanup: true,
		
		rules: {
			firstname: {
				required: true,
				minlength: 5,
				maxlength: 10,
				isFirstNameValid: true
			},			
			title: {
				selectDropDown: true
			},
			email: {
				required: true,
				email: true
			},
			contact: {
				required: true,
				isContactNumberValid: true
			}
		},
		
		messages: {
	        firstname: {
	            required: "Please fill in your first name.",
	            minlength: "Name should be atleast of 5 characters.",
	            maxlength: "Name should be of less than 10 characters."
	        },
	        contact: {
	            required: "Please fill in your contact number.",
	        },
	        email: {
	            required: "Please type your email.",
	            email: "Please enter a valid email."
	        }
		},		
		
		highlight: function(element, errorClass, validClass) {
			$(element).addClass(errorClass);
			$(element).addClass('errorOnElement');
		},
		
		unhighlight: function(element, errorClass, validClass) {
			$(element).removeClass(errorClass);
			$(element).removeClass('errorOnElement');
		}
	});
	
});

