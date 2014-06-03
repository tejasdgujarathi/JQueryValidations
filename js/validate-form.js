$.validator.addMethod("selectDropDown", function(value, element) {
    return value != 'SELECT';
}, "Title must be selected.");

$.validator.addMethod("accept1", function(value, element) {
	return true;
}, "T");

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
		
		rules: {
			firstname: {
				required: true,
				minlength: 5,
				maxlength: 10,
				accept1: true
			},			
			title: {
				selectDropDown: true
			}
		},
		messages: {
	        firstname: {
	            required: "Please fill in your first name.",
	            minlength: "Name should be atleast of 5 characters.",
	            maxlength: "Name should be of less than 10 characters."
	        }
		}
	});
	
});

