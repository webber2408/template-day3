function validate_login(){
	var vemail=document.myform1.email1.value;
	var atposition=vemail.indexOf("@");  
    var dotposition=vemail.lastIndexOf(".");  
    var vpass=document.myform1.password1.value;
    var passw=  /^[A-Za-z]\w{7,14}$/; 
    console.log("hello"); 
      if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address !");  
        
  	}
	if(!vpass.match(passw))   
	{    
		alert('Please input correct password !');
		  
	}
    else if(vpass.length < 8)
    {
    	alert('Password should be atleast 8 characters long !');
    }
   
}
function validate_registeration(){
	var vemail=document.myform.email.value;
	var contact=document.myform.contact.value;
	var atposition=vemail.indexOf("@");  
    var dotposition=vemail.lastIndexOf(".");  
    var vpass=document.myform.password.value;
  	if (isNaN(contact)){  
	  alert("Please enter only numeric contacts ! ");  
	  //return false;  
    }
    var passw=  /^[A-Za-z]\w{7,14}$/;  
	if(!vpass.match(passw))   
	{    
		alert('Please input correct password !');
		  
	}
    else if(vpass.length < 8)
    {
    	alert('Password should be atleast 8 characters long !');
    }
     if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address !");  
        
  	}
}

