$(document).ready(function() 
{
		//var baseUrl = "http://ec2-52-91-5-22.compute-1.amazonaws.com:8080";
		
		var baseUrl = "../..";
		
	/* Global Variable Declaration Begins */
		
		var countryMap="";
		var stateMap="";
		var districtMap="";
		var talukMap="";
		
		var loginMap="";
		var regId="";
		
		var userMap="";
		
		var message = "";
		
		var myDateFormat = "#DD#/#MM#/#YYYY#";
		var myInputDateFormat = "DD/MM/YYYY";
		var myDateFormatDatePicker = "dd/mm/yy";
		var myDateTimeFormat = "#DD#/#MM#/#YYYY# #hh#:#mm#:#ss# #AMPM#";
		var format = "YYYY-MM-DD"
		var delimiter = "-";
		
	// Date Format Starts
	
		
		$("#dob").datepicker({
					changeYear: true,
					dateFormat: myDateFormatDatePicker

		});
		
		function stringToDate(_date)
		{
				var formatLowerCase=format.toLowerCase();
				var formatItems=formatLowerCase.split(delimiter);
				var dateItems=_date.split(delimiter);
				var monthIndex=formatItems.indexOf("mm");
				var dayIndex=formatItems.indexOf("dd");
				var yearIndex=formatItems.indexOf("yyyy");
				var month=parseInt(dateItems[monthIndex]);
				month-=1;
				var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
				return formatedDate.customFormat(myDateFormat);
		}
		
		Date.prototype.customFormat = function(formatString)
		{
				  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
				  YY = ((YYYY=this.getFullYear())+"").slice(-2);
				  MM = (M=this.getMonth()+1)<10?('0'+M):M;
				  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
				  DD = (D=this.getDate())<10?('0'+D):D;
				  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
				  th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
				  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
				  h=(hhh=this.getHours());
				  if (h==0) h=24;
				  if (h>12) h-=12;
				  hh = h<10?('0'+h):h;
				  hhhh = hhh<10?('0'+hhh):hhh;
				  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
				  mm=(m=this.getMinutes())<10?('0'+m):m;
				  ss=(s=this.getSeconds())<10?('0'+s):s;
				  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
		};
		
	// Date Format Ends
	
	// Country , State , District & Taluk Starts
			
		$.ajax({
			type: 'GET',
			url: baseUrl+'/uravupaalamsource/user/getCountries',
			dataType: 'json',
			encode: true,
			success: function(response) 
			{

				if (response.error) 
				{
					alertMessage(response.errorMessage);
				} 
				else 
				{
					countryMap = response.result;
					for (counter = 0; counter < countryMap.length; counter++) 
					{
						
						$('#country').append('<option value="' + countryMap[counter].countryId + '">' + countryMap[counter].countryName.trim().toUpperCase() + '</option>');                                    
						$('#LoginCountry').append('<option value="' + countryMap[counter].countryId + '">' + countryMap[counter].countryName.trim().toUpperCase() + '</option>');
						
					}	
					
					$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?').done (function(location)
					{
						for (counter = 0; counter < countryMap.length; counter++)
						{
							country = countryMap[counter].countryId;
							
								if ( location.country_code == country ) 
								{ 
									$('#LoginCountry option:eq('+counter+')').attr('selected', 'selected');
									$('#country option:eq('+counter+')').attr('selected', 'selected');
									getState();
									break;
								} 
						}
					});
				}
			}
		});
	
		function getState()
		{
			$.ajax({
				type: 'GET',
				url: baseUrl+'/uravupaalamsource/user/getStates?country='+country,
				dataType: 'json',
				encode: true,
				success: function(response) 
				{
					if (response.error) 
					{
						alertMessage(response.errorMessage);
					} 
					else 
					{
							stateMap = response.result;
							$('#state').empty();
							$('#state').append('<option value=""> SELECT STATE </option>');
							for (counter = 0; counter < stateMap.length; counter++) 
							{
								
								$('#state').append('<option value="' + stateMap[counter].stateId + '">' + stateMap[counter].stateName.trim().toUpperCase() + '</option>'); 
								
							}
							
							$('#state').append('<option value="SO"> OTHERS </option>');
							
							$("#state").change(function()
							{
								state = $("#state").val();
								
								if("SO" == state)
								{
									$('#district').empty();
									$('#district').append('<option value=""> SELECT DISTRICT </option>');
									$('#district').append('<option value="DO"> OTHERS </option>');
									
									$('#district').val(rgst.district).change();
									
									otherDistrict();
									return;
								}
							});
							
							function otherDistrict()
							{
								$('#district').val(rgst.district).change();
								
								$("#district").change(function()
								{
									district = $("#district").val();
									
									if("DO" == district)
									{
										$('#taluk').empty();
										$('#taluk').append('<option value=""> SELECT TALUK </option>');
										$('#taluk').append('<option value="TO"> OTHERS </option>');
										
										$('#taluk').val(rgst.taluk).change();
										
										return;
									}
								});
							}
							
							if(regId == "")
							{
								return;
							}
							else
							{
								$('#state').val(rgst.state).change();
							}
					}
				}
			});
		}
		
		function getDistrict()
		{
			$.ajax({
				type: 'GET',
				url: baseUrl+'/uravupaalamsource/user/getDistricts?state='+getStatesList,
				dataType: 'json',
				encode: true,
				success: function(response) 
				{

					if (response.error) 
					{
						alertMessage(response.errorMessage);
					} else 
					{

						districtMap = response.result;
						$('#district').empty();
						$('#district').append('<option value=""> SELECT DISTRICT </option>');
						for (counter = 0; counter < districtMap.length; counter++) 
						{
							
							$('#district').append('<option value="' + districtMap[counter].districtId + '">' + districtMap[counter].districtName.trim().toUpperCase() + '</option>');                                    
							
						}
						
						$('#district').append('<option value="DO"> OTHERS </option>');
						
						$("#district").change(function()
						{
							district = $("#district").val();
							
							if("DO" == district)
							{
								$('#taluk').empty();
								$('#taluk').append('<option value=""> SELECT TALUK </option>');
								$('#taluk').append('<option value="TO"> OTHERS </option>');
								return;
							}
						});
						
						if(regId == "")
						{
							return;
						}
						else
						{
							$('#district').val(rgst.district).change();
						}
					}
				}
			});
		}
		
		function getTaluk()
		{
			$.ajax({
				type: 'GET',
				url: baseUrl+'/uravupaalamsource/user/getTaluks?district='+getDistrictsList,
				dataType: 'json',
				encode: true,
				success: function(response) 
				{

					if (response.error) 
					{
						alertMessage(response.errorMessage);
					} else 
					{
						talukMap = response.result;
						$('#taluk').empty();
						$('#taluk').append('<option value=""> SELECT TALUK </option>');
						for (counter = 0; counter < talukMap.length; counter++) 
						{
							
							$('#taluk').append('<option value="' + talukMap[counter].talukId + '">' + talukMap[counter].talukName.trim().toUpperCase() + '</option>');                                    
						}	
						
						$('#taluk').append('<option value="TO">OTHERS</option>');
						
						if(regId == "")
						{
							return;
						}
						else
						{
							$('#taluk').val(rgst.taluk).change();
						}
						
					}
				}
			});
		}
	
	// Country , State , District & Taluk Ends
	
		function showHide(loginMap)
		{
			//if(loginMap!=""){
			if(userRole == "S" || userRole == "A")
			{
				$("#reportId").show();
			}
			//else
			//{
			//	$("#reportId").hide();
			//}
			//}
			//else{$("#reportId").hide();}
		}
		
		
		$("#reportId").hide();
				
		function alertMessage(message)
		{
			  $('#notificationMessage').html( message );
				  $("#saveDialog").dialog({
					   modal: true,
					   draggable: false,
					   resizable: false,
					   position: ['center'],
					   show: 'blind',
					   hide: 'blind',
					   width: 'auto',
					   height: 'auto',
					   dialogClass: 'ui-dialog-osx',
			});
		
			$(document).delegate('#okMessage', 'click', function(evt)
			{

					$('#saveDialog').dialog("close");

			});
		}
			
		$(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) 
		{ 
			if ((event.which < 48 || event.which > 57)) 
			{
				event.preventDefault();
			}
});
		/*$(document).on("pageinit" , function(event)
			   {
				   showHide();
			   });*/
		
		function goBack() 
		{
			window.history.back();
		}
		
		function logout()
		{
			uId="";
			window.location.href = 'http://ec2-52-91-5-22.compute-1.amazonaws.com:8080/uravupaalam/index.html';
		}
			
	//	Validation for email Start
			
		function validateEmail(email)
		{
			  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			  return re.test(email);
		}
			
	//	Validation for email Ends
		
	//	Multi Language start
		
		function getLanguageResources()
		{
			var ta = new Array(); var en = new Array();
			
			var resources = new Array();
			resources['ta'] = ta;
			resources['en'] = en;
			
			return resources;
		}

		function changeLanguage(lang)
		{
			var langResources = getLanguageResources()[lang];
			
			message=lang;
		}
		
		$(document).ready(function() 
		{
			$("input[name='radio-language']").click(function()
			{
				changeLanguage($(this).val());
			});
		});
			
	// Multi Language Ends
		
	/* Global Variable Declaration Ends*/
	
	/* Register screen starts */
			
		$('#fillMessage').hide();
		//showHide(loginMap);
		//$("#reportId").hide();

		function registerReset()
		{					
			$("#name").val("");
			$("#gender")[0].selectedIndex=0;
			$("#dob").val("");
			$("#fatherName").val("");
			$("#motherName").val("");
			$("#race").val("");
			$("#education")[0].selectedIndex=0;
			$("#occupation").val("");
			$("#doorNumber").val("");
			$("#street").val("");
			$("#town").val("");
			$("#kulatheivam").val("");
			$("#kulatheivamLocation").val("");
			$("#district")[0].selectedIndex=0;
			$("#taluk")[0].selectedIndex=0;
			$("#state")[0].selectedIndex=0;
			$("#country")[0].selectedIndex=0;
			$("#pinCode").val("");
			$("#mobileNumber").val("");
			$("#email").val("");
			$("#aadhar").val("");
			$("#bloodGroup")[0].selectedIndex=0;
			$('#fillMessage').hide();
			regId="";
			$('#reportId').hide();
		 }
			
		function registerSubAutoComplete(loginMap)
		{
				if(loginMap == "")
				{
					return;
				}
				else
				{
					rgst=loginMap;
					
					$("#register :input").css('border', ' 1px solid #d8e1b6');
					
					$("#name").val(rgst.name);
					$("#gender").val(rgst.gender).change();
					$("#dob").val(stringToDate(rgst.dob));
					$("#fatherName").val(rgst.fatherName);
					$('#motherName').val(rgst.motherName);
					$('#race').val(rgst.race);
					$('#education').val(rgst.education).change();
					$('#occupation').val(rgst.occupation);
					$('#doorNumber').val(rgst.doorNumber);
					$('#street').val(rgst.street);
					$('#town').val(rgst.town);
					$('#kulatheivam').val(rgst.kulatheivam);
					$('#kulatheivamLocation').val(rgst.kulatheivamLocation);
					$('#country').val(rgst.country).change();
					$('#pinCode').val(rgst.pinCode);
					$('#mobileNumber').val(rgst.mobilePhone);
					$('#email').val(rgst.email);
					$('#aadhar').val(rgst.addar);
					$('#bloodGroup').val(rgst.bloodGroup).change();

					regId=rgst.uId;
					if(message != "")
					{
						if (message == 'en')
						{
							$('#registerButton').html("Update");
							$('#logoff').html("Logout");
						}
						else
						{
							$('#registerButton').html("மேம்படுத்து");
							$('#logoff').html("வெளியேறு");
						}
					}
					else
					{
						$('#registerButton').html("Update");
						$('#logoff').html("Logout");
					}
					
					$(document).delegate('#logoff', 'click', function(evt)
					{	
						logout();
					});
				}
		}
				
		$("#gender").change(function()
		{
			gender = $("#gender").val();
		});
		
		$("#education").change(function()
		{
			education = $("#education").val();
		});
		
		$("#country").change(function()
		{
			country = $("#country").val();
			
			for(counter =0;counter < countryMap.length;counter++)
			{	
				getCountryList = countryMap[counter].countryId;
				
				if(country == getCountryList )
				{
					getState();
					break;
				}
			}
		});
		
		$("#state").change(function()
		{
			state = $("#state").val();
			
			for(counter =0;counter < stateMap.length;counter++)
			{	
				getStatesList = stateMap[counter].stateId;
				
				if(state == getStatesList )
				{
					getDistrict();
					break;
				}
			}
		});
		
		$("#district").change(function()
		{
			district = $("#district").val();
			
			for(counter =0;counter < districtMap.length;counter++)
			{	
				getDistrictsList = districtMap[counter].districtId;
				
				if(district == getDistrictsList )
				{
					getTaluk();
					break;
				}
			}
		});
		
		$("#taluk").change(function()
		{
			taluk = $("#taluk").val();
		});
				
		$(document).delegate('#registerButton', 'click', function(evt)
		{
		   
		   $('#fillMessage').hide();
		   validate = true;
		   
			var name="";
			if($('#name').val() == "")
			{
				 validate = false;
				$('#name').css('border','1px solid red');	
			}
			else
			{
				name=$('#name').val();
			}
			
			var gender="";
			if($('#gender').val()=="")
			{
				validate = false;
				$('#gender').css('border', '1px solid red');

			}
			else
			{
				gender = ($('#gender').val());
			}
			
			var dob = "";
			if ($('#dob').val() == "") 
			{
				validate = false;
				$('#dob').css('border', '1px solid red');
			}
			else 
			{
				dob = $('#dob').val();
			}
				
			var fatherName="";
			if($('#fatherName').val() == "")
			{
				 validate = false;
				$('#fatherName').css('border','1px solid red');	
			}
			else
			{
				fatherName=$('#fatherName').val();
			}
			
			var motherName="";
			if($('#motherName').val() == "")
			{
				 validate = false;
				$('#motherName').css('border','1px solid red');	
			}
			else
			{
				motherName=$('#motherName').val();
			}
			
			var race="";
			if($('#race').val() == "")
			{
				 validate = false;
				$('#race').css('border','1px solid red');	
			}
			else
			{
				race=$('#race').val();
			}
			
			var education="";
			if ($('#education').val() == "") 
			{
				validate = false;
				$('#education').css('border', '1px solid red');
			} 
			else 
			{
				education = ($('#education').val());
			}
			
			var occupation="";
			if($('#occupation').val() == "")
			{
				 validate = false;
				$('#occupation').css('border','1px solid red');	
			}
			else
			{
				occupation=$('#occupation').val();
			}
			
			var doorNumber="";
			if($('#doorNumber').val() == "")
			{
				 validate = false;
				$('#doorNumber').css('border','1px solid red');	
			}
			else
			{
				doorNumber=$('#doorNumber').val();
			}
			
			var street="";
			if($('#street').val() == "")
			{
				 validate = false;
				$('#street').css('border','1px solid red');	
			}
			else
			{
				street=$('#street').val();
			}
			
			var town="";
			if($('#town').val() == "")
			{
				 validate = false;
				$('#town').css('border','1px solid red');	
			}
			else
			{
				town=$('#town').val();
			}
			
			var district="";
			if($('#district').val() == "")
			{
				$('#district').css('border','1px solid red');
				validate = false;
			}
			else
			{
				district=($('#district').val());
			}
			
			var taluk="";
			if($('#taluk').val() == "")
			{
				$('#taluk').css('border','1px solid red');
				validate = false;				
			}
			else
			{
				taluk=($('#taluk').val());
			}
			
			var state="";
			if($('#state').val() == "")
			{
				$('#state').css('border','1px solid red');
				validate = false;
			}
			else
			{
				state = ($('#state').val());
			}
			
			var country="";
			if($('#country').val()=="")
			{
				validate = false;
				$('#country').css('border', '1px solid red');

			}
			else
			{
				country = ($('#country').val());
			}
			
			var pinCode="";
			if($('#pinCode').val() == "" || isNaN($('#pinCode').val()))
			{
				 validate = false;
				$('#pinCode').css('border','1px solid red');
				
			}
			else
			{
				pinCode=$('#pinCode').val();
			}
			
			var kulatheivam="";
			if($('#kulatheivam').val() == "")
			{
				 validate = false;
				$('#kulatheivam').css('border','1px solid red');	
			}
			else
			{
				kulatheivam=$('#kulatheivam').val();
			}

			var kulatheivamLocation="";
			if($('#kulatheivamLocation').val() == "")
			{
				 validate = false;
				$('#kulatheivamLocation').css('border','1px solid red');	
			}
			else
			{
				kulatheivamLocation=$('#kulatheivamLocation').val();
			}
			
			var mobileNumber="";
			if($('#mobileNumber').val() == "" || isNaN($('#mobileNumber').val()))
			{
				 validate = false;
				$('#mobileNumber').css('border','1px solid red');
				
			}
			else
			{
				mobileNumber=$('#mobileNumber').val();
			}
		   
			var email="";
			if($('#email').val() == "" || !validateEmail($('#email').val()))
			{
				 validate = false;
				$('#email').css('border','1px solid red');
			}
			else
			{
				email=$('#email').val();
			}
			
			var aadhar="";
			if($('#aadhar').val() == "" || isNaN($('#mobileNumber').val()))
			{
				 validate = false;
				$('#aadhar').css('border','1px solid red');	
			}
			else
			{
				aadhar=$('#aadhar').val();
			}
			
			var bloodGroup="";
			if($('#bloodGroup').val() == "")
			{
				 validate = false;
				$('#bloodGroup').css('border','1px solid red');	
			}
			else
			{
				bloodGroup=$('#bloodGroup').val();
			}
			
			if (validate == false)
			{
				$('#fillMessage').show();
			} 
			else
			{
 
				if(regId == "")
				{
						 var formData = 
						 { 
								"name":name,
								"gender":gender,
								"dob":dob,
								"fatherName":fatherName,
								"motherName":motherName,
								"race":race,
								"education":education,
								"occupation":occupation,
								"doorNumber":doorNumber,
								"street":street,
								"town":town,
								"kulatheivam":kulatheivam,
								"kulatheivamLocation":kulatheivamLocation,
								"district":district,
								"taluk":taluk,
								"state":state,
								"country":country,
								"pinCode":pinCode,
								"mobilePhone":mobileNumber,
								"email":email,	
								"aadhar":aadhar,	
								"bloodGroup":bloodGroup,							
						 };
						 
					$.ajax({
					type: 'POST',
					url: baseUrl+'/uravupaalamsource/user/registration',
					dataType: 'json',
					data: formData,
					encode: true,
					success: function(response)
					{	
						if (response.error) 
						{
							if(message != "")
							{
								if (message == 'en')
								{
									alertMessage("The Mobile Number is already Exist");
								}
								else
								{
									alertMessage("அலைப்பேசி எண் ஏற்கனவே உள்ளது");
								}
							}
							else
							{
								alertMessage("The Mobile Number is already Exist");
							}	
						} 
						else 
						{
							registrationMap=response.result;
							
							$('#fillMessage').hide();
							registerReset();
								
							$("#register :input").css('border', ' 1px solid #d8e1b6');
							if(message != "")
							{
								if (message == 'en')
								{
									alertMessage("Registration has been saved successfully");
								}
								else
								{
									alertMessage("பதிவு வெற்றிகரமாக சேமிக்கப்பட்டது");
								}
							}
							else
							{
								alertMessage("Registration has been saved successfully");
							}
						}
					}
					});
				 }
				 else
				 {
					 var formData = 
					 { 	
						"name":name,
						"gender":gender,
						"dob":dob,
						"fatherName":fatherName,
						"motherName":motherName,
						"race":race,
						"education":education,
						"occupation":occupation,
						"doorNumber":doorNumber,
						"street":street,
						"town":town,
						"kulatheivam":kulatheivam,
						"kulatheivamLocation":kulatheivamLocation,
						"district":district,
						"taluk":taluk,
						"state":state,
						"country":country,
						"pinCode":pinCode,
						"mobilePhone":mobileNumber,
						"email":email,	
						"aadhar":aadhar,	
						"bloodGroup":bloodGroup,
						"registerId":regId
					 };
					 
				$.ajax({
				type: 'POST',
				url: baseUrl+'/uravupaalamsource/user/registration',
				dataType: 'json',
				data: formData,
				encode: true,
				success: function(response)
				{
					if (response.error) 
					{
						alertMessage(response.errorMessage);
					} 
					else 
					{
						registrationMap=response.result;

							$('#fillMessage').hide();
							registerReset();
							
							$("#register :input").css('border', ' 1px solid #d8e1b6');
							
							if(message != "")
							{
								if (message == 'en')
								{
									alertMessage("Registration has been Updated successfully");
								}
								else
								{
									alertMessage("பதிவு வெற்றிகரமாக புதுப்பிக்கப்பட்டது");
								}
							}
							else
							{
								alertMessage("Registration has been Updated successfully");
							}
							
							$('#registerButton').html("Register");
							$('.login').html("LOGIN");
							
							$.mobile.navigate('#login');
								
					}
					
				}
					});
				}
			}
		});
		
		$(document).delegate('#registerResetButton', 'click', function(evt)
		{
			registerReset();
			$("#register :input").css('border', ' 1px solid #d8e1b6');
			$('#fillMessage').hide();
		});
		
		$(document).delegate('#register :input', 'click', function(evt)
		{
			$(this).css('border', ' 1px solid #d8e1b6');
			$('#fillMessage').hide();
		});
		
	/* Register screen ends */
		
	/* Login Screen Begin */
		
	$(document).delegate('#login', 'click', function(evt)
	{
		registerReset();
		regId="";
		if(message != "")
		{
			if (message == 'en')
			{
				$('#registerButton').html("Register");
			}
			else
			{
				$('#registerButton').html("பதிவு");
			}
		}
		else
		{
			$('#registerButton').html("Register");
		}
		
		$(document).delegate('#LoginButton', 'click', function(evt)
		{	

			if ($('#LoginUserId').val() != "" && $('#LoginPassword').val() != "") 
			{

			   var formDataLogin= 
				{
					
					"mobilePhone": $('#LoginUserId').val(),
					"pin":$('#LoginPassword').val(),
					"country":$('#LoginCountry').val()
					
				};
					$.ajax({
						type: 'POST',						
						url: baseUrl+'/uravupaalamsource/user/login',     
						timeout : 10000,
						dataType: 'json',
						data:formDataLogin,
						success: function(response) 
						{
							if(response.error)
							{
								$('#validationMessage').show();  
							}
							else
							{	
								loginMap=response.result;
								userRole = loginMap.role

								$.mobile.navigate('#register');
								
								
								
								registerSubAutoComplete(loginMap);
								showHide(loginMap);
								
								$('#LoginUserId').val("");
								$('#LoginPassword').val("");	
							}
						},
					});
			} 
			else 
			{
				if(message != "")
				{
					if (message == 'en')
					{
						alertMessage("Please check your Username and Password");
					}
					else
					{
						alertMessage("உங்கள் அலைப்பேசி எண் மற்றும் கடவுச்சொல் சரிபார்க்கவும்");
					}
				}
				else
				{
					alertMessage("Please check your Username and Password");
				}
				
			}
		});
	
		$(document).delegate('#clearButton', 'click', function(evt)
		{		

			$('#LoginUserId').val("");
			$('#LoginPassword').val("");
			$('#validationMessage').hide();
			 
		});
	
		$(document).delegate('#retrievePin', 'click', function(evt)
		{	
			if($('#LoginUserId').val() != "" && $('#LoginCountry').val() != "")
			{
				var formDataRetrieve= 
				{
					"mobilePhone": $('#LoginUserId').val(),
					"country":$('#LoginCountry').val()
					
				};	
					  $.ajax({
						type: 'POST',
						url: baseUrl+'/uravupaalamsource/user/retrieve',
						dataType: 'json',
						data: formDataRetrieve,
						encode:true,
						success: function(response) 
						{
							
							if (response.error) 
							{

								$('#validationMessage').show();
								if(message != "")
								{
									if (message == 'en')
									{
										alertMessage("The mobile number is not registered with URAVUPAALAM");
									}
									else
									{
										alertMessage("உங்கள் அலைப்பேசி எண் உறவுப்பாலத்தில் பதிவு செய்யப்படவில்லை ");
									}
								}
								else
								{
									alertMessage("The mobile number is not registered with URAVUPAALAM");
								}

							} 
							else 
							{
								$('#validationMessage').hide();
								if(message != "")
								{
									if (message == 'en')
									{
										alertMessage("Message has been sent to the Mobile Number with the pin");
									}
									else
									{
										alertMessage(" முள் அலைப்பேசி எண்ணுக்கு அனுப்பப்பட்டுள்ளது");
									}
								}
								else
								{
									alertMessage("Message has been sent to the Mobile Number with the pin");
								}
							}
						}
					});
			}
				else
				{
					$('#validationMessage').show();
				}
			});
		});
	
		$(document).delegate('#login :input', 'click', function(evt)
		{
			$('#validationMessage').hide();
		});
			
	/* Login Screen End*/

	// Report screen starts
			
		$(document).delegate('#reportId', 'click', function(evt)
		{   
			 $('#userDiv').hide();
			 $('#validMessage').hide();
			 
			$(document).delegate('#go', 'click', function(evt)
			{ 
			
				selectUser = $("#selectUser").val();
				
				$.ajax({
				type: 'GET',
				url: baseUrl+'/uravupaalamsource/user/getRegistrationDetails?name=' + selectUser,
				dataType: 'json',
				encode: true,
				success: function(response) 
				{
					if (response.error) 
					{
						alertMessage(response.errorMessage);
					} 
					else 
					{
						userMap = response.result;
						
						selectUser = $("#selectUser").val();
						
						if($('#selectUser').val() == "")
						{
							 validate = false;
							$('#selectUser').css('border','1px solid red');
							$('#validMessage').show();
						}
						
						for(counter = 0;counter < userMap.length; counter++)
						{
							userDetails = userMap[counter];
							
							//if(selectUser == userDetails.name )
							//{
								
								$('#userDiv').show();
								$('#userDiv .tbl').empty();

								$('#userDiv .tbl').append('<div class="tbl-row tbl-hed"><div class="tbl-cols"> Name </div><div class="tbl-cols"> Address </div><div class="tbl-cols"> Phone Number </div></div>');
								
								$('#userDiv .tbl').append('<div class="tbl-row"><div class="tbl-cols">'+userDetails.name+'</div><div class="tbl-cols">'+userDetails.doorNumber+','+userDetails.street+'<br>'+userDetails.town+','+userDetails.district+','+userDetails.taluk+'<br>'+userDetails.state+','+userDetails.country+'<br>'+userDetails.pinCode+'</div><div class="tbl-cols ">'+userDetails.mobilePhone +'</div></div>');
								
								return;
							//}
						}
					}
				}
				});
			});
				
				$.ajax({
				type: 'GET',
				url: baseUrl+'/uravupaalamsource/user/getUserDetails',
				//dataType: 'json',
				success: function(response) 
				{
					if (response.error) 
					{
						alertMessage(response.errorMessage);
					}  
					else
					{
						user_reportMap= response;

						JSONToCSVConvertor(user_reportMap, "User Details", true);
					}
				}
				});
				
				function JSONToCSVConvertor(arrData, ReportTitle) 
				{
						var CSV = arrData;

						if (CSV == '') 
						{
							alert("Invalid data");
							return;
						}

						//Generate a file name
						var fileName = ReportTitle+"_";
						//this will remove the blank-spaces from the title and replace it with an underscore
						fileName = ReportTitle.replace(/ /g,"_");

						//Initialize file format you want csv or xls
						var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

						// Now the little tricky part.
						// you can use either>> window.open(uri);
						// but this will not work in some browsers
						// or you will not get the correct file extension

						//this trick will generate a temp <a /> tag
						var link = document.getElementById("downloadUserList");
						link.href = uri;

						//set the visibility hidden so it will not effect on your web-layout
						link.download = fileName + ".csv";

				}
				
				$(document).delegate('#report :input', 'click', function(evt)
				{
					$("#report :input").css('border', ' 1px solid #d8e1b6');
					$('#validMessage').hide();
				});
			
		});
		
			$("#closeButton").on('click', function(evt)
			{
				goBack();
			});
			
			$(document).delegate('.logout', 'click', function(evt)
			{	
				logout();
			});
		
	//	Report screen ends
		
});