$(document).ready(function() 
{
		//var baseUrl = "http://ec2-52-91-5-22.compute-1.amazonaws.com:8080";
		
		var baseUrl = "../..";
		
	/* Global Variable Declaration Begins */
		
		var userUrl=window.location.href.replace(window.location.hash,'');
		var message = "";
		
		var myDateFormat = "#DD#/#MM#/#YYYY#";
		var myInputDateFormat = "DD/MM/YYYY";
		var myDateFormatDatePicker = "dd/mm/yy";
		var myDateTimeFormat = "#DD#/#MM#/#YYYY# #hh#:#mm#:#ss# #AMPM#";
		var format = "YYYY-MM-DD"
		var delimiter = "-";
		
		var mId ="";
		var viewMap ="";
		var loginMap ="";
		
	// Date Format Starts
		
		$("#adateofbirth").datepicker({
					changeYear: true,
					dateFormat: myDateFormatDatePicker
		});
		
		$('#ayear').datepicker(
		{
                changeYear: true,
                showButtonPanel: true,
                dateFormat: 'yy',
                onClose: function(dateText, inst) 
				{ 
                    var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                    $(this).datepicker('setDate', new Date(year, 1));
                }
         });
        $("#ayear").focus(function () 
		{
             $(".ui-datepicker-month").hide();
             $(".ui-datepicker-calendar").hide();
			 $('.ui-datepicker-prev').hide();
			 $('.ui-datepicker-next').hide();
        });
		
		$('#aday').datepicker(
		{
                changeDay: true,
                dateFormat: "dd",
        });

        $("#aday").focus(function () 
		{
             $(".ui-datepicker-year").hide();
             $(".ui-datepicker-month").hide();
			 $('.ui-datepicker-prev').hide();
			 $('.ui-datepicker-next').hide();
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
	
	$('#regDiv').hide();
	$('#vieDiv').hide();
	
	function goBack() 
	{
		window.history.back();
	}
	
	/*$('#home').on('pageinit', function() 
	{
		getHome();
	});
	
	/*function getHome()
	{
		var responseString = localStorage.getItem("CensesPersonLogin");
		var response = JSON.parse( responseString );
						
		 if(response.uId != null)
		 {
			 getView=response.uId;
			 
			 $.ajax({
				type: 'GET',
				url: baseUrl+'/uravupaalamsource/matrimony/viewDetails?censusId=' + getView,
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
						viewMap = response.result;
						
						if(viewMap.length == 0)
						{
							$(".atleastOne").hide();
						}
						else
						{
							$(".atleastOne").show();
						}
						
					}
				}
				});

		}
	}*/
	
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
	
	function logout()
	{	
		localStorage.removeItem("CensesPersonLogin");
		localStorage.removeItem("uravupaalamLanguage");
		window.location.href = userUrl;
	}
	
	function backToHome()
	{
		var homeUrl=window.location.href.replace(window.location.hash,'#home');
		window.location.href = homeUrl;
	}
	
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
	
	/* Global Variable Declaration Begins */

	/* Matrimony screen Starts */
	
	//if(loginMap != "")
	//{
			
			$('#fillMessage2').hide();
			
			function matrimonyReset()
			{					
				$("#aname").val("");
				$("#arace").val("");
				$("#acolor").val("");
				$("#aheight").val("");
				$("#amonthlysalary").val("");
				$("#aeducation").val("");
				$("#aoccupation").val("");
				$("#adateofbirth").val("");
				$("#abirthtimeplace").val("");
				$("#acurrentdhisai").val("");
				$("#ayear").val("");
				$("#amonth").val("");
				$("#aday").val("");
				$("#astar")[0].selectedIndex=0;
				$("#apadam")[0].selectedIndex=0;
				$("#afathername").val("");
				$("#afoccupation").val("");
				$("#afethnicity").val("");
				$("#amothername").val("");
				$("#amoccupation").val("");
				$("#amethnicity").val("");
				$("#aassetdetails").val("");
				$("#asiblings").val("");
				$("#amarriedperson").val("");
				$("#afirstmarriage")[0].selectedIndex=0;
				$("#fmdetails").val("");
				$("#adifferentlyabled")[0].selectedIndex=0;
				$("#adadetails").val("");
				$("#aaddress").val("");
				$("#amobileNumber").val("");
				$("#aproposalexpectation").val("");
				$("#aprofilepicture").val("");
				$("#aadditionalpicture").val("");
				$("#aastrochart").val("");
				$('#fillMessage2').hide();
			 }
			 
			 function matrimonySubAutoComplete(getViewDetails)
			 {
					matrirgst=getViewDetails;
					
					$("#register :input").css('border', ' 1px solid #d8e1b6');
					
					$("#aname").val(matrirgst.name);
					$("#arace").val(matrirgst.race);
					$("#acolor").val(matrirgst.color);
					$("#aheight").val(matrirgst.height);
					$('#amonthlysalary').val(matrirgst.monthlySalary);
					$('#aeducation').val(matrirgst.education);
					$('#aoccupation').val(matrirgst.occupation);
					$('#adateofbirth').val(stringToDate(matrirgst.dob));
					$('#abirthtimeplace').val(matrirgst.dobTP);
					$('#acurrentdhisai').val(matrirgst.balanceDirection);
					$('#ayear').val(matrirgst.year);
					$('#amonth').val(matrirgst.month);
					$('#aday').val(matrirgst.date);
					$('#astar').val(matrirgst.star).change();
					$('#apadam').val(matrirgst.padam).change();
					$('#afathername').val(matrirgst.fatherName);
					$('#afoccupation').val(matrirgst.fatherOccupation);
					$('#afethnicity').val(matrirgst.fatherCaste);
					$('#amothername').val(matrirgst.motherName);
					$('#amoccupation').val(matrirgst.motherOccupation);
					$('#amethnicity').val(matrirgst.motherCaste);
					$('#aassetdetails').val(matrirgst.assetsDetails);
					$('#asiblings').val(matrirgst.siblings);
					$('#amarriedperson').val(matrirgst.marriedPerson);
					$('#afirstmarriage').val(matrirgst.firstMarriage).change();
					$('#fmdetails').val(matrirgst.details);
					$('#adifferentlyabled').val(matrirgst.physicallyChallenged).change();
					$('#adadetails').val(matrirgst.physicalDetail);
					$('#aaddress').val(matrirgst.address);
					$('#amobileNumber').val(matrirgst.phoneNumber);
					$('#aproposalexpectation').val(matrirgst.proposalDetails);
					
					$('#aprofilepicture').hide();
					$('#aadditionalpicture').hide();
					$('#aastrochart').hide();
					$('.hideText').hide();
					//$('#profilePictureFile').val(matrirgst.profilePictureFile);
					//$('#aadditionalpicture').val(matrirgst.additionalPictureFile);
					//$('#aastrochart').val(matrirgst.astroChartFile);

					mId = matrirgst.matrimonial_id;
					
					if(message != "")
					{
						if (message == 'en')
						{
							$('#submitButton').html("Update");
							$('.reg').html("EDIT REGISTRATION");
						}
						else
						{
							$('#submitButton').html("மேம்படுத்து");
							$('.reg').html("பதிவை தொகுத்து அமை");
						}
					}
					else
					{
						$('#submitButton').html("Update");
						$('.reg').html("EDIT REGISTRATION");
					}
			}
			 
			 $("#astar").change(function()
			{
				astar = $("#astar").val();
			});
			
			$("#apadam").change(function()
			{
				apadam = $("#apadam").val();
			});
			
			/*$("#astar").change(function()
			{
				astar = $("#astar").val();
			});
			
			$("#apadam").change(function()
			{
				apadam = $("#apadam").val();
			});*/
			
			$("#afirstmarriage").change(function()
			{
				afirstmarriage = $("#afirstmarriage").val();
				
				/*if(afirstmarriage == 0)
				{
					$("#fmdetails").prop('disabled', true);
				}
				else
				{
					$("#fmdetails").prop('disabled', false);
				}*/
				
			});
			
			$("#adifferentlyabled").change(function()
			{
				adifferentlyabled = $("#adifferentlyabled").val();
				
				/*if(adifferentlyabled == 1)
				{
					$("#adadetails").prop('disabled', true);
				}
				else
				{
					$("#adadetails").prop('disabled', false);
				}*/
				
			});	
			
			$(document).delegate('#submitButton', 'click', function(evt)
			{
			   
			   validate = true;
			   
				var aname="";
				if($('#aname').val() == "")
				{
					 validate = false;
					$('#aname').css('border','1px solid red');	
				}
				else
				{
					aname=$('#aname').val();
				}
				
				var arace="";
				if($('#arace').val()=="")
				{
					validate = false;
					$('#arace').css('border', '1px solid red');

				}
				else
				{
					arace = ($('#arace').val());
				}
				
				var acolor = "";
				if ($('#acolor').val() == "") 
				{
					validate = false;
					$('#acolor').css('border', '1px solid red');
				}
				else 
				{
					acolor = $('#acolor').val();
				}
					
				var aheight="";
				if($('#aheight').val() == "" || isNaN($('#aheight').val()))
				{
					 validate = false;
					$('#aheight').css('border','1px solid red');	
				}
				else
				{
					aheight=$('#aheight').val();
				}
				
				var amonthlysalary="";
				if($('#amonthlysalary').val() == "" || isNaN($('#amonthlysalary').val()))
				{
					 validate = false;
					$('#amonthlysalary').css('border','1px solid red');	
				}
				else
				{
					amonthlysalary=$('#amonthlysalary').val();
				}
				
				var aeducation="";
				if($('#aeducation').val() == "")
				{
					 validate = false;
					$('#aeducation').css('border','1px solid red');	
				}
				else
				{
					aeducation=$('#aeducation').val();
				}
				
				var aoccupation="";
				if ($('#aoccupation').val() == "") 
				{
					validate = false;
					$('#aoccupation').css('border', '1px solid red');
				} 
				else 
				{
					aoccupation = ($('#aoccupation').val());
				}
				
				var adateofbirth="";
				if($('#adateofbirth').val() == "")
				{
					 validate = false;
					$('#adateofbirth').css('border','1px solid red');	
				}
				else
				{
					adateofbirth=$('#adateofbirth').val();
				}
				
				var abirthtimeplace="";
				if($('#abirthtimeplace').val() == "")
				{
					 validate = false;
					$('#abirthtimeplace').css('border','1px solid red');	
				}
				else
				{
					abirthtimeplace=$('#abirthtimeplace').val();
				}
				
				var acurrentdhisai="";
				if($('#acurrentdhisai').val() == "")
				{
					 validate = false;
					$('#acurrentdhisai').css('border','1px solid red');	
				}
				else
				{
					acurrentdhisai=$('#acurrentdhisai').val();
				}
				
				var ayear="";
				if($('#ayear').val() == "" || isNaN($('#ayear').val()))
				{
					 validate = false;
					$('#ayear').css('border','1px solid red');	
				}
				else
				{
					ayear=$('#ayear').val();
				}
				
				var amonth="";
				if($('#amonth').val() == "" || isNaN($('#amonth').val()))
				{
					$('#amonth').css('border','1px solid red');
					validate = false;
				}
				else
				{
					amonth=($('#amonth').val());
				}
				
				var aday="";
				if($('#aday').val() == "" || isNaN($('#aday').val()))
				{
					$('#aday').css('border','1px solid red');
					validate = false;				
				}
				else
				{
					aday=($('#aday').val());
				}
				
				var astar="";
				if($('#astar').val() == "")
				{
					$('#astar').css('border','1px solid red');
					validate = false;
				}
				else
				{
					astar = ($('#astar').val());
				}
				
				var apadam="";
				if($('#apadam').val()=="")
				{
					validate = false;
					$('#apadam').css('border', '1px solid red');

				}
				else
				{
					apadam = ($('#apadam').val());
				}
				
				var afathername="";
				if($('#afathername').val() == "" )
				{
					 validate = false;
					$('#afathername').css('border','1px solid red');
					
				}
				else
				{
					afathername=$('#afathername').val();
				}
				
				var afoccupation="";
				if($('#afoccupation').val() == "")
				{
					 validate = false;
					$('#afoccupation').css('border','1px solid red');	
				}
				else
				{
					afoccupation=$('#afoccupation').val();
				}

				var afethnicity="";
				if($('#afethnicity').val() == "")
				{
					 validate = false;
					$('#afethnicity').css('border','1px solid red');	
				}
				else
				{
					afethnicity=$('#afethnicity').val();
				}
				
				var amothername="";
				if($('#amothername').val() == "")
				{
					 validate = false;
					$('#amothername').css('border','1px solid red');
					
				}
				else
				{
					amothername=$('#amothername').val();
				}
			   
				var amoccupation="";
				if($('#amoccupation').val() == "")
				{
					 validate = false;
					$('#amoccupation').css('border','1px solid red');
				}
				else
				{
					amoccupation=$('#amoccupation').val();
				}
				
				var amethnicity="";
				if($('#amethnicity').val() == "")
				{
					 validate = false;
					$('#amethnicity').css('border','1px solid red');	
				}
				else
				{
					amethnicity=$('#amethnicity').val();
				}
				
				var aassetdetails="";
				if($('#aassetdetails').val() == "")
				{
					 validate = false;
					$('#aassetdetails').css('border','1px solid red');	
				}
				else
				{
					aassetdetails=$('#aassetdetails').val();
				}
				
				var asiblings="";
				if($('#asiblings').val() == "")
				{
					 validate = false;
					$('#asiblings').css('border','1px solid red');	
				}
				else
				{
					asiblings=$('#asiblings').val();
				}
				
				var amarriedperson="";
				if($('#amarriedperson').val() == "")
				{
					 validate = false;
					$('#amarriedperson').css('border','1px solid red');	
				}
				else
				{
					amarriedperson=$('#amarriedperson').val();
				}
				
				var afirstmarriage="";
				if($('#afirstmarriage').val() == "")
				{
					 validate = false;
					$('#afirstmarriage').css('border','1px solid red');	
				}
				else
				{
					afirstmarriage=$('#afirstmarriage').val();
				}
				
				var fmdetails="";
				if($('#fmdetails').val() == "")
				{
					 validate = false;
					$('#fmdetails').css('border','1px solid red');	
				}
				else
				{
					fmdetails=$('#fmdetails').val();
				}
				
				var adifferentlyabled="";
				if($('#adifferentlyabled').val() == "")
				{
					 validate = false;
					$('#adifferentlyabled').css('border','1px solid red');	
				}
				else
				{
					adifferentlyabled=$('#adifferentlyabled').val();
				}
				
				var adadetails="";
				if($('#adadetails').val() == "")
				{
					 validate = false;
					$('#adadetails').css('border','1px solid red');	
				}
				else
				{
					adadetails=$('#adadetails').val();
				}
				
				var aaddress="";
				if($('#aaddress').val() == "")
				{
					 validate = false;
					$('#aaddress').css('border','1px solid red');	
				}
				else
				{
					aaddress=$('#aaddress').val();
				}
				
				var amobileNumber="";
				if($('#amobileNumber').val() == "" || ($('#amobileNumber').val() == 0) || isNaN($('#amobileNumber').val()))
				{
					 validate = false;
					$('#amobileNumber').css('border','1px solid red');	
				}
				else
				{
					amobileNumber=$('#amobileNumber').val();
				}
				
				var aproposalexpectation="";
				if($('#aproposalexpectation').val() == "")
				{
					 validate = false;
					$('#aproposalexpectation').css('border','1px solid red');	
				}
				else
				{
					aproposalexpectation=$('#aproposalexpectation').val();
				}
				if(mId == "")
				{
					var profilePictureFile = "";
					if($('#aprofilepicture').val() == "")
					{
						 validate = false;
						$('#aprofilepicture').css('border','1px solid red');	
					}
					else
					{
						//profilePictureFile = $('#aprofilepicture');
						profilePictureFile = $('#aprofilepicture')[0].files[0];
						pic = profilePictureFile.name;
						//var x = url;
						//var x= profilePictureFile.location;
					}
					
					var aadditionalpicture = "";
					if($('#aadditionalpicture').val() == "")
					{
						 validate = false;
						$('#aadditionalpicture').css('border','1px solid red');	
					}
					else
					{
						aadditionalpicture = $('#aadditionalpicture')[0].files[0];
						additional = aadditionalpicture.name;
						//var y = aadditionalpicture.location;
					}
					
					var aastrochart = "";
					if($('#aastrochart').val() == "")
					{
						 validate = false;
						$('#aastrochart').css('border','1px solid red');	
					}
					else
					{
						aastrochart = $('#aastrochart')[0].files[0];
						chart = aastrochart.name;
						//var z = aastrochart.location;
					}
				}
				
				if (validate == false)
				{
					$('#fillMessage2').show();
				} 
				else
				{
					var responseString = localStorage.getItem("CensesPersonLogin");
					var response = JSON.parse( responseString );
					
					censusRegistrationId = response.uId;
					
					if(mId == "")
					{
						var formData = 
						{ 
							"name" : aname,
							"race" : arace,
							"color": acolor, 
							"height": aheight, 
							"monthlySalary": amonthlysalary ,
							"education": aeducation ,
							"occupation": aoccupation, 
							"dob": adateofbirth ,
							"dobTP": abirthtimeplace ,
							"balanceDirection": acurrentdhisai ,
							"year": ayear ,
							"month": amonth, 
							"date": aday ,
							"star": astar ,
							"padam": apadam, 
							"fatherName": afathername ,
							"fatherOccupation": afoccupation ,
							"fatherCaste": afethnicity ,
							"motherName": amothername ,
							"motherOccupation": amoccupation ,
							"motherCaste": amethnicity ,
							"assetsDetails": aassetdetails ,
							"siblings": asiblings ,
							"marriedPerson": amarriedperson ,
							"firstMarriage": afirstmarriage ,
							"details": fmdetails ,
							"physicallyChallenged": adifferentlyabled ,
							"physicalDetail": adadetails ,
							"address": aaddress ,
							"phoneNumber": amobileNumber ,
							"proposalDetails": aproposalexpectation ,

							"profilePictureFile" : pic  ,
							"additionalPictureFile" : additional ,
							"astroChartFile" : chart,
							
							"censusId" : censusRegistrationId
						};
						
						/*var formData = new FormData();
					  
						  formData.append("name" , aname);
						  formData.append("race" , arace);
						  formData.append("color", acolor );
						  formData.append("height", aheight );
						  formData.append("monthlySalary", amonthlysalary );
						  formData.append("education", aeducation );
						  formData.append("occupation", aoccupation );
						  formData.append("dob", adateofbirth );
						  formData.append("dobTP", abirthtimeplace );
						  formData.append("balanceDirection", acurrentdhisai );
						  formData.append("year", ayear );
						  formData.append("month", amonth );
						  formData.append("date", aday );
						  formData.append("star", astar );
						  formData.append("padam", apadam );
						  formData.append("fatherName", afathername );
						  formData.append("fatherOccupation", afoccupation );
						  formData.append("fatherCaste", afethnicity );
						  formData.append("motherName", amothername );
						  formData.append("motherOccupation", amoccupation );
						  formData.append("motherCaste", amethnicity );
						  formData.append("assetsDetails", aassetdetails );
						  formData.append("siblings", asiblings );
						  formData.append("marriedPerson", amarriedperson );
						  formData.append("firstMarriage", afirstmarriage );
						  formData.append("details", fmdetails );
						  formData.append("physicallyChallenged", adifferentlyabled );
						  formData.append("physicalDetails", adadetails );
						  formData.append("address", aaddress );
						  formData.append("phoneNumber", amobileNumber );
						  formData.append("proposalDetails", aproposalexpectation );
						  
						  formData.append("profilePictureFile" , profilePictureFile ); 
						  formData.append("additionalPictureFile" , aadditionalpicture );
						  formData.append("astroChartFile" , aastrochart );
						  
						  formData.append("censusId" , censusRegistrationId );*/
						
						$.ajax({
						type: 'POST',
						url: baseUrl+'/uravupaalamsource/matrimony/saveDetails',
						dataType: 'json',
						data: formData,
						encode: true,
						//processData: false,
						//contentType: false,
						success: function(response)
						{	
							if (response.error) 
							{
								alertMessage(response.errorMessage);
							} 
							else 
							{
								matrimonyMap=response.result;
								
								$('#fillMessage2').hide();
								matrimonyReset();
									
								$("#matrimony :input").css('border', ' 1px solid #d8e1b6');
								if(message != "")
								{
									if (message == 'en')
									{
										alertMessage("Matrimonial registration has been saved successfully");
									}
									else
									{
										alertMessage("திருமணப்  பதிவு வெற்றிகரமாக சேமிக்கப்பட்டது ");
									}
								}
								else
								{
									alertMessage("Matrimonial registration has been saved successfully");
								}
								
								$.mobile.navigate('#home');
								viewRegister();
								
								//$('.atleastOne').show();
								
							}
						},
						/*failure: function(response)
						{
							alertMessage("Error "+response );
						}*/
						});
					}
					else
					{
							var formData = 
							{ 
								"name" : aname,
								"race" : arace,
								"color": acolor, 
								"height": aheight, 
								"monthlySalary": amonthlysalary ,
								"education": aeducation ,
								"occupation": aoccupation, 
								"dob": adateofbirth ,
								"dobTP": abirthtimeplace ,
								"balanceDirection": acurrentdhisai ,
								"year": ayear ,
								"month": amonth, 
								"date": aday ,
								"star": astar ,
								"padam": apadam, 
								"fatherName": afathername ,
								"fatherOccupation": afoccupation ,
								"fatherCaste": afethnicity ,
								"motherName": amothername ,
								"motherOccupation": amoccupation ,
								"motherCaste": amethnicity ,
								"assetsDetails": aassetdetails ,
								"siblings": asiblings ,
								"marriedPerson": amarriedperson ,
								"firstMarriage": afirstmarriage ,
								"details": fmdetails ,
								"physicallyChallenged": adifferentlyabled ,
								"physicalDetail": adadetails ,
								"address": aaddress ,
								"phoneNumber": amobileNumber ,
								"proposalDetails": aproposalexpectation ,
								"matrimonialId": mId

								/*"profilePictureFile" : pic  ,
								"additionalPictureFile" : additional ,
								"astroChartFile" : chart*/							
							};
							
							$.ajax({
							type: 'POST',
							url: baseUrl+'/uravupaalamsource/matrimony/saveDetails',
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
									matrimonyMap=response.result;
									
									$('#fillMessage2').hide();
									matrimonyReset();
										
									$("#matrimony :input").css('border', ' 1px solid #d8e1b6');
									if(message != "")
									{
										if (message == 'en')
										{
											alertMessage("Matrimonial registration has been Updated successfully");
										}
										else
										{
											alertMessage("திருமணப்  பதிவு வெற்றிகரமாக புதுப்பிக்கப்பட்டது ");
										}
									}
									else
									{
										alertMessage("Matrimonial registration has been Updated successfully");
									}
									
									$('#submitButton').html("Register");
									$('.reg').html("MATRIMONIAL REGISTRATION");
									$('#aprofilepicture').show();
									$('#aadditionalpicture').show();
									$('#aastrochart').show();
									$('.hideText').show();
									$("#fmdetails").prop('disabled', false);
									$("#adadetails").prop('disabled', false);
									
									$.mobile.navigate('#viewEdit');
									viewRegister();
									
								}
							}
							});
					}
				 							
					 }
			});
			
			$("#closeButton").on('click', function(evt)
			{
				goBack();
				matrimonyReset();
			});
			
			$(document).delegate('#matrimonyResetButton', 'click', function(evt)
			{
				matrimonyReset();
				$("#matrimony :input").css('border', ' 1px solid #d8e1b6');
				$('.borderfile').css('border', 'none');
				
				$('#fillMessage2').hide();
			});
			
			$(document).delegate('#matrimony :input', 'click', function(evt)
			{
				$(this).css('border', ' 1px solid #d8e1b6');
				$('.borderfile').css('border', 'none');

				$('#fillMessage2').hide();
			});
			
			$(document).delegate('.logout', 'click', function(evt)
			{	
				logout();
			});
	
	/* Matrimony screen ends */
	
	/* View screen starts */
		
		function viewRegister()
		{
			var responseString = localStorage.getItem("CensesPersonLogin");
			var response = JSON.parse( responseString );
					
			var getRegId = response.uId;
			
			$.ajax({
			type: 'GET',
			url: baseUrl+'/uravupaalamsource/matrimony/viewDetails?censusId=' + getRegId,
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
					
					viewMap = response.result;
					
					if(viewMap.length == 0)
					{
						$('#vieDiv').hide();
						$('#vieDiv .tbl').empty();
						//$('.atleastOne').hide();
						alertMessage("You do not have any register entry.Please register one..!");
					}
					else
					{
						$('#vieDiv').show();
						$('#vieDiv .tbl').empty();
						$('#vieDiv .tbl').append('<div class="tbl-row tbl-hed"><div class="tbl-cols"></div><div class="tbl-cols"> Name </div><div class="tbl-cols"> Date of Birth </div><div class="tbl-cols"> Phone Number </div></div>');
					}
					
					for(counter = 0;counter < viewMap.length; counter++)
					{
						viewDetails = viewMap[counter];
							
						$('#vieDiv .tbl').append('<div class="tbl-row" id="rowid'+ counter +'"><div class="tbl-cols"><a href="#" class="removeUser" id="' + counter + '">X</a></div><div class="tbl-cols editRegister"><a id="'+viewDetails.matrimonial_id+'">'+viewDetails.name+'</a></div><div class="tbl-cols">'+viewDetails.dob+'</div><div class="tbl-cols ">'+viewDetails.phoneNumber +'</div></div>');

					}
				}
			}
			});
		}
		
		$('#viewEdit').on('pageinit', function() 
		{
			
			$('#vieDiv').hide();
			
			viewRegister();
			
			$(document).delegate('.removeUser', 'click', function(evt) 
			{			
					
					var clicked = evt.target;
					var rowID = clicked.id || "No ID!";
					
					$(".removeUserDialog").dialog(
					{
						modal: true,
						draggable: false,
						resizable: false,
						position: ['center'],
						show: 'blind',
						hide: 'blind',
						width: 300,
						height: 220,
						dialogClass: 'ui-dialog-osx',
					}); 

					$(document).delegate("#removeUserYes",'click',function(evt)
					{	
								//var clicked = evt.target;
								//var rowID = clicked.id || "No ID!";
								
								$('#rowid' + rowID).remove();
								alertMessage("Your Regisrtation details has been removed Successfully");
								$(".removeUserDialog").dialog("close");
								
								for(counter = 0;counter < viewMap.length; counter++)
								{
									if(rowID == counter)
									{
										matrimonyId = viewMap[counter].matrimonial_id;
									}
								}
								
								var formData=
								{
									"matrimonial_id": matrimonyId,
								};
								
								$.ajax({
								type: 'POST',
								url: baseUrl+'/uravupaalamsource/matrimony/matrimonialStatus',
								dataType: 'json',
								data:formData,
								encode: true,
								success: function(response) 
								{
									if (response.error) 
									{
										alertMessage(response.errorMessage);
									}  
									else
									{
										matrimonyChangeStatusMap = response;
										viewRegister();
									}
								}
								});
					});	
					
					$(document).delegate("#removeUserNo",'click',function(evt)
					{
						   $(".removeUserDialog").dialog("close");
					});
					
			});
			
			$(document).delegate('.editRegister','click',function(evt)
			{
							
					matrimonialId=evt.target.id;
					
					for(counter = 0;counter < viewMap.length; counter++)
					{
						viewId = viewMap[counter];
						if(matrimonialId == viewId.matrimonial_id)
						{
							getViewDetails = viewId;
						}
					}
					
					$.mobile.navigate('#matrimony');
					matrimonySubAutoComplete(getViewDetails);
			 });
		
			$("#backButton1").on('click', function(evt)
			{
				backToHome();
				
			});
			
			$(document).delegate('.logout', 'click', function(evt)
			{	
				logout();
			});
				
		});
		
	/* View screen Ends */
	
	/* Search screen Starts */
	
		$('#searchMatrimonial').on('pageinit', function()
		//$(document).delegate('#searchMatrimonial','click',function()
		{
			$("#backButton2").on('click', function(evt)
			{
				backToHome();
				
			});
			
			$(document).delegate('.logout', 'click', function(evt)
			{	
				logout();
			});
				
		});
	
	/* Search screen Ends */
				
});