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
			if ((event.which < 46 || event.which > 57)) 
			{
				event.preventDefault();
			}
		});
		
		$(".allownumberwithdecimal").on("keypress keyup blur",function (event) 
		{	
			if ((event.which < 46 || event.which > 57)) 
			{
				event.preventDefault();
			}
        });
		
		$(".allowalphabetsonly").on("keypress keyup blur",function (event) 
		{ 
			if ((event.which < 97 || event.which > 122) && (event.which < 65 || event.which > 90) && (event.keyCode == 32))
			{
				event.preventDefault();
				$(this).val($(this).val() + " ");
			}
		});
	
		$('#vieDiv').hide();
		//$('#likeProfiles').hide();
		
		function goBack() 
		{
			window.history.back();
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
			
			$('#fillMessage2').hide();
			$(".existing").hide();
			
			function matrimonyReset()
			{					
				$("#aname").val("");
				$("#agender").val("");
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
				$("#amonth")[0].selectedIndex=0;
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
				$("#acity").val("");
				$("#acountry").val("");
				$("#amobileNumber").val("");
				$("#aproposalexpectation").val("");
				$("#aprofilepicture").val("");
				$("#aadditionalpicture").val("");
				$("#aastrochart").val("");
				$("#matrimony :input").css('border', ' 1px solid #d8e1b6');
				$('.borderfile').css('border', 'none');
				$('#fillMessage2').hide();
			 }
			 
			 function matrimonySubAutoComplete(getViewDetails)
			 {
					matrirgst=getViewDetails;

					$(".existing").show();
					$("#register :input").css('border', ' 1px solid #d8e1b6');
					
					$("#aname").val(matrirgst.name);
					$("#agender").val(matrirgst.gender).change();
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
					$('#amonth').val(matrirgst.month).change();
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
					$('#acity').val(matrirgst.city);
					$('#acountry').val(matrirgst.country);
					$('#amobileNumber').val(matrirgst.phoneNumber);
					$('#aproposalexpectation').val(matrirgst.proposalDetails);
					
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
					
					$('#viewExist').empty();
					$('#viewExist').append('<a> Images </a>');
					
					$(".exist").click(function() 
					{
						pic = matrirgst.profilePictureFile;
						additional = matrirgst.additionalPictureFile;
						astro = matrirgst.astroChartFile;
						
						$('#viewExist').empty();
						
						newRow = '<a><img src="/uravupaalamsource/matrimony/getImage/'+pic+'" width="100" height="100" alt="Profile Image ">Profile</img><img src="/uravupaalamsource/matrimony/getImage/'+additional+'" width="100" height="100" alt="Additionl Image"></img>Additionl<img src="/uravupaalamsource/matrimony/getImage/'+astro+'" width="100" height="100" alt="Astro Chart">Astro</img></a>';
						
						$('#viewExist').append(newRow);
					});

					//$('#aprofilepicture').val(matrirgst.profilePictureFile);
					//$('#aadditionalpicture').val(matrirgst.additionalPictureFile);
					//$('#aastrochart').val(matrirgst.astroChartFile);
			}
			
			$("#agender").change(function()
			{
				agender = $("#agender").val();
			});
			
			$("#amonth").change(function()
			{
				amonth = $("#amonth").val();
			});
			 
			 $("#astar").change(function()
			{
				astar = $("#astar").val();
			});
			
			$("#apadam").change(function()
			{
				apadam = $("#apadam").val();
			});
			
			$("#afirstmarriage").change(function()
			{
				afirstmarriage = $("#afirstmarriage").val();
			});
			
			$("#adifferentlyabled").change(function()
			{
				adifferentlyabled = $("#adifferentlyabled").val();
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
				
				var agender="";
				if($('#agender').val() == "")
				{
					 validate = false;
					$('#agender').css('border','1px solid red');	
				}
				else
				{
					agender=$('#agender').val();
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
				if($('#amonthlysalary').val() == "")
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
				if($('#amonth').val() == "")
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
				
				var acity="";
				if($('#acity').val() == "")
				{
					 validate = false;
					$('#acity').css('border','1px solid red');	
				}
				else
				{
					acity=$('#acity').val();
				}
				
				var acountry="";
				if($('#acountry').val() == "")
				{
					 validate = false;
					$('#acountry').css('border','1px solid red');	
				}
				else
				{
					acountry=$('#acountry').val();
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
						profilePictureFile = $('#aprofilepicture')[0].files[0];
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
					}
				}
				else
				{
					var profilePictureFile = "";
					if($('#aprofilepicture').val() != "")
					{
						profilePictureFile = $('#aprofilepicture')[0].files[0];
					}
					
					var aadditionalpicture = "";
					if($('#aadditionalpicture').val() != "")
					{
						aadditionalpicture = $('#aadditionalpicture')[0].files[0];
					}
					
					var aastrochart = "";
					if($('#aastrochart').val() != "")
					{
						aastrochart = $('#aastrochart')[0].files[0];
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
						
						var formData = new FormData();
					  
						  formData.append("name" , aname);
						  formData.append("gender" , agender);
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
						  formData.append("physicalDetail", adadetails );
						  formData.append("address", aaddress );
						  formData.append("city", acity );
						  formData.append("country", acountry );
						  formData.append("phoneNumber", amobileNumber );
						  formData.append("proposalDetails", aproposalexpectation );
						  
						  formData.append("profilePictureFile" , profilePictureFile ); 
						  formData.append("additionalPictureFile" , aadditionalpicture );
						  formData.append("astroChartFile" , aastrochart );
						  
						  formData.append("censusId" , censusRegistrationId );

						
						$.ajax({
						type: 'POST',
						url: baseUrl+'/uravupaalamsource/matrimony/saveDetails',
						dataType: 'json',
						data: formData,
						processData: false,
						contentType: false,
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
								
								$('.atleastOne').show();
								
							}
						},
						failure: function(response)
						{
							alertMessage("Error "+response );
						}
						});
					}
					else
					{
							
						var formData = new FormData();
					  
						  formData.append("name" , aname);
						  formData.append("gender" , agender);
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
						  formData.append("physicalDetail", adadetails );
						  formData.append("address", aaddress );
						  formData.append("city", acity );
						  formData.append("country", acountry );
						  formData.append("phoneNumber", amobileNumber );
						  formData.append("proposalDetails", aproposalexpectation );
						  
						  formData.append("profilePictureFile" , profilePictureFile ); 
						  formData.append("additionalPictureFile" , aadditionalpicture );
						  formData.append("astroChartFile" , aastrochart );
						  
						  formData.append("matrimonialId" , mId );
							
							$.ajax({
							type: 'POST',
							url: baseUrl+'/uravupaalamsource/matrimony/saveDetails',
							dataType: 'json',
							data: formData,
							processData: false,
							contentType: false,
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
									$('.borderfile').css('border', 'none');
									$("#fmdetails").prop('disabled', false);
									$("#adadetails").prop('disabled', false);
									
									viewRegister();
									$.mobile.navigate('#viewEdit');
									
								}
							},
							failure: function(response)
							{
								alertMessage("Error "+response );
							}
							});
					}						
				}
			});
			
			$("#closeButton").on('click', function(evt)
			{
				mId = "";
				backToHome();
				$('#submitButton').html("Register");
				$('.reg').html("MATRIMONIAL REGISTRATION");
				$('#aprofilepicture').show();
				$('#aadditionalpicture').show();
				$('#aastrochart').show();
				$("#fmdetails").prop('disabled', false);
				$("#adadetails").prop('disabled', false);
				matrimonyReset();
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
	
	/* Dashboard screen starts */
	
		$('#home').on('click', function() 
		{
			$('#submitButton').html("Register");
			$('.reg').html("MATRIMONIAL REGISTRATION");
			$('.borderfile').css('border', 'none');
			matrimonyReset();
			mId="";
			
			var responseString1 = localStorage.getItem("CensesPersonLogin");
			censusPersonId = JSON.parse( responseString1 );
			
			userLoginId = censusPersonId.uId;
			
			likeProfiles(userLoginId);
		});
	
	/* Dashboard screen screen ends */
	
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
						$('.atleastOne').hide();
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
			
			$(document).delegate('.logout', 'click', function(evt)
			{	
				logout();
			});
				
		});
		
	/* View screen Ends */
	
	/* Search screen Starts */
	
		$('#searchMatrimonial').on('pageinit', function()
		{
			$("#fillMessage3").hide();
			$(".splitPage").hide();
			
			$("#sgender").change(function()
			{
				sgender = $("#sgender").val();
			});
			
			$("#smiage").change(function()
			{
				smiage = $("#smiage").val();
			});
			
			$("#smaage").change(function()
			{
				smaage = $("#smaage").val();
			});
			
			$(document).delegate('#searchButton', 'click', function(evt)
			{
			   
			   validate = true;
			   
				var smiage="";
				if($('#smiage').val() == "")
				{
					 validate = false;
					$('#smiage').css('border','1px solid red');					
				}
				else
				{
					smiage=$('#smiage').val();
				}
				
				var smaage="";
				if($('#smaage').val() == "")
				{
					 validate = false;
					$('#smaage').css('border','1px solid red');					
				}
				else
				{
					smaage=$('#smaage').val();
				}
				
				var sgender="";
				if($('#sgender').val()=="")
				{
					validate = false;
					$('#sgender').css('border', '1px solid red');
				}
				else
				{
					sgender = ($('#sgender').val());
				}
				
				if (validate == false)
				{
					$('#fillMessage3').show();
				} 
				else
				{
					var pageId =1;
						 
					$.ajax({
					type: 'GET',
					url: baseUrl+'/uravupaalamsource/matrimony/matrimonialDetails?minAge='+smiage+'&maxAge='+smaage+'&gender='+sgender+'&pageNo='+pageId,
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
							searchMap=response.result;
							
							if(searchMap.length == 0)
							{
								alertMessage("No Matching Profiles Found");
							}
							else
							{
								
								if(response.totalRecords > 20)
								{
									$("#pageOrder").show();
								}
								else
								{
									$("#pageOrder").hide();
								}
								
								$('#matches').empty();
								$('#matches').append('<h2 class="list-head color">Profiles ('+response.totalRecords+' Matches)</h3>');
						
								$('#pageLists').empty();

								for(counter = 1; counter <= response.pageNumber; counter++)
								{
									if(counter == 1)
									{
										$('#pageLists').append('<li><a id="previousPage"><i class="fa fa-chevron-left"></i></a></li><li class="active" id="pageNum'+counter+'"><a class="pageIncrement" id="'+counter+'"><span>'+counter+'</span></a></li>');
										$("#previousPage").hide();
									}
									else
									{
										$('#pageLists').append('<li id="pageNum'+counter+'"><a class="pageIncrement" id="'+counter+'"><span>'+counter+'</span></a></li>');
									}
								}
								
								lastPage = counter - response.pageNumber;
								
								$('#pageLists').append('<li><a id="nextPage"><i class="fa fa-chevron-right" id="pageNum'+lastPage+'"></i></a></li>');
								
								$('#pageLists').focus();
								
								$('#profileList').empty();
								$(".splitPage").show();
								
								for ( counter= 0; counter < searchMap.length; counter++) 
								{
									ProfilePicture = searchMap[counter];
									
									newRow = '<div class="col-sm-6"><div class="user-detail"><div class="user-pic"><img src="/uravupaalamsource/matrimony/getImage/'+ProfilePicture.profilePictureFile+'" width="130" height="130"><a class="likeProfile liked" id="like'+ProfilePicture.matrimonial_id+'"></a></div><div class="usr-info"><h3><a class="viewProfile" id="'+ProfilePicture.matrimonial_id+'">'+ProfilePicture.name+'</a></h3><ul><li><div class="info-hed">Occupation</div><div class="info-value">'+ProfilePicture.occupation+'</div></li><li><div class="info-hed">Date Of Birth </div><div class="info-value">'+ProfilePicture.dob+'</div></li><li><div class="info-hed">City</div><div class="info-value">'+ProfilePicture.city+'</div></li><li><div class="info-hed">Country</div><div class="info-value">'+ProfilePicture.country+'</div></li></ul></div></div></div>';
									
									$('#profileList').append(newRow);
								}
								
								$("#viewFocus").get(0).scrollIntoView();

								$('#pageLists').empty();

								for(counter = 1; counter <= response.pageNumber; counter++)
								{
									if(counter == 1)
									{
										$('#pageLists').append('<li><a id="previousPage"><i class="fa fa-chevron-left"></i></a></li><li class="active" id="pageNum'+counter+'"><a class="pageIncrement" id="'+counter+'"><span>'+counter+'</span></a></li>');
										$("#previousPage").hide();
									}
									else
									{
										$('#pageLists').append('<li id="pageNum'+counter+'"><a class="pageIncrement" id="'+counter+'"><span>'+counter+'</span></a></li>');
									}
								}
								
								lastPage = counter - response.pageNumber;
								
								$('#pageLists').append('<li><a id="nextPage"><i class="fa fa-chevron-right" id="pageNum'+lastPage+'"></i></a></li>');
								
								totalPage = response.pageNumber;
								
								localStorage.setItem("Pagination", JSON.stringify(totalPage));
								
								getPage(lastPage);
							}
						}
					}
					});
					
				}
				
				$(document).delegate('.likeProfile','click',function(evt)
				{
					var likeId=evt.currentTarget.id;
					
					var likeMatrimonialId = likeId.replace("like", "");
					
					$("#like"+likeMatrimonialId).addClass('active');
				
					var responseString = localStorage.getItem("CensesPersonLogin");
					var response = JSON.parse( responseString );
							
					var censusPersonId = response.uId;
					
					var formData5 = 
					 { 	
						"matrimonialId":likeMatrimonialId,
						"censusId":censusPersonId,
					 };
					
					$.ajax({
					 type: 'POST',
					 url: baseUrl+'/uravupaalamsource/matrimony/storeProfile',
					 dataType: 'json',
					 data: formData5,
					 encode: true,
					 success: function(response) 
					 {

						if (response.error) 
						{
							alertMessage(response.errorMessage);
						} 
						else 
						{
							likeMap = response.result;
							
							likeProfiles(censusPersonId);

						}	
					}
					});
					
					/*var responseString = localStorage.getItem("LikedProfileDetails");
					likeProfileDetails = JSON.parse( responseString );
					
					for(counter = 0; counter < likeProfileDetails.length; counter++)
					{
						matrimontId = likeProfileDetails[counter].matrimonial_id;
						
						if(likeMatrimonialId == matrimontId)
						{
							//$("li").removeClass('active');
							
							//alertMessage("Are you sure you waht to Unlike this profile");
							alertMessage("Do you want to unlike this profile");
							
							//unLikedProfiles(censusPersonId);
							
							//$("#like"+likeMatrimonialId).removeClass('active');
							
							return;
						}
					}
					
					if(likeProfileDetails.length == 0)
					{
						$("#like"+likeMatrimonialId).addClass('active');
				
						var responseString = localStorage.getItem("CensesPersonLogin");
						var response = JSON.parse( responseString );
								
						var censusPersonId = response.uId;
						
						var formData5 = 
						 { 	
							"matrimonialId":likeMatrimonialId,
							"censusId":censusPersonId,
						 };
						
						$.ajax({
						 type: 'POST',
						 url: baseUrl+'/uravupaalamsource/matrimony/storeProfile',
						 dataType: 'json',
						 data: formData5,
						 encode: true,
						 success: function(response) 
						 {

							if (response.error) 
							{
								alertMessage(response.errorMessage);
							} 
							else 
							{
								likeMap = response.result;
								
								likedProfiles(censusPersonId);

							}	
						}
						});
					}
					else
					{
						$("#like"+likeMatrimonialId).addClass('active');
				
						var responseString = localStorage.getItem("CensesPersonLogin");
						var response = JSON.parse( responseString );
								
						var censusPersonId = response.uId;
						
						var formData5 = 
						 { 	
							"matrimonialId":likeMatrimonialId,
							"censusId":censusPersonId,
						 };
						
						$.ajax({
						 type: 'POST',
						 url: baseUrl+'/uravupaalamsource/matrimony/storeProfile',
						 dataType: 'json',
						 data: formData5,
						 encode: true,
						 success: function(response) 
						 {

							if (response.error) 
							{
								alertMessage(response.errorMessage);
							} 
							else 
							{
								likeMap = response.result;
								
								likedProfiles(censusPersonId);

							}	
						}
						});
					}*/

				});
				
				function getPage(lastPage)
				{
					
					var responseString = localStorage.getItem("Pagination");
					totalPage = JSON.parse( responseString );
					
						var current = lastPage;
						
						if(current == 1)
						{
							$("#previousPage").hide();
							$("#nextPage").show();
						}
						else
						{
							$("#previousPage").show();
						}
						
						$("#nextPage").click(function()
						{
							$("#previousPage").show();
							
						   if (current < totalPage)
							{
								var addNum = current+1;
								
								current++;

								$("li").removeClass('active');
								$("#pageNum"+current).addClass('active');
								
								if(current > 1 && addNum <= totalPage)
								{
									pageId = current;
									
									changePage(pageId);
								}
								
								if(current == totalPage)
								{
									$("#nextPage").hide();
								}
								
							}

						});
						
						if(current == totalPage)
						{
							$("#nextPage").hide();
							$("#previousPage").show();
						}
						else
						{
							$("#nextPage").show();
						}
						
						$("#previousPage").click(function()
						{
							
							$("#nextPage").show();
							
							if (current < totalPage) 
							{

								var addNum = current-1;
							
								$("li").removeClass('active');
								$("#pageNum"+addNum).addClass('active');
								
								current-=1;
								
								if(current == 1)
								{
									$("#previousPage").hide();
								}
								
								if(current > 0)
								{
									pageId = addNum;
								
									changePage(pageId);
								}
							}
							else
							{
								current -= 1;
								
								var addNum = current;
							
								$("li").removeClass('active');
								$("#pageNum"+addNum).addClass('active');
								
								pageId = addNum;
								
								changePage(pageId);
							}
						});
				}
				
				$(document).delegate('.pageIncrement','click',function(evt)
				{
					var pageId=evt.currentTarget.id;
					
					$("li").removeClass('active');
					$("#pageNum"+pageId).addClass('active');
					
					lastPage = pageId;
					
					getPage(lastPage);
					
					changePage(pageId);
					 
				});
				
				function changePage(pageId)
				{
					$.ajax({
					 type: 'GET',
					 url: baseUrl+'/uravupaalamsource/matrimony/matrimonialDetails?minAge='+smiage+'&maxAge='+smaage+'&gender='+sgender+'&pageNo='+pageId,
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
								pageMap = response.result;

								$('#profileList').empty();
								$(".splitPage").show();
							
								for (counter= 0; counter < pageMap.length; counter++) 
								{
									ProfilePicture1 = pageMap[counter];
									
									newRow = '<div class="col-sm-6"><div class="user-detail"><div class="user-pic"><img src="/uravupaalamsource/matrimony/getImage/'+ProfilePicture1.profilePictureFile+'" width="130" height="130"></div><div class="usr-info"><h3><a class="viewProfile" id="'+ProfilePicture1.matrimonial_id+'">'+ProfilePicture1.name+'</a></h3><ul><li><div class="info-hed">Occupation</div><div class="info-value">'+ProfilePicture1.occupation+'</div></li><li><div class="info-hed">Date Of Birth </div><div class="info-value">'+ProfilePicture1.dob+'</div></li><li><div class="info-hed">City</div><div class="info-value">'+ProfilePicture1.city+'</div></li><li><div class="info-hed">Country</div><div class="info-value">'+ProfilePicture1.country+'</div></li></ul></div></div></div>';
									
									$('#profileList').append(newRow);
								}
						}	
					}
					});
				}
				
				$(document).delegate('.viewProfile','click',function(evt)
				{
					userId=evt.currentTarget.id;
			
					displayProfileDetails(userId);
		  
				});
			});

			$(document).delegate('#searchMatrimonial :input', 'click', function(evt)
			{
				$(this).css('border', ' 1px solid #d8e1b6');
				$("#fillMessage3").hide();
			});
			
			$(document).delegate('.logout', 'click', function(evt)
			{	
				logout();
			});
				
		});
	
	/* Search screen Ends */
	
	/* Profile Details screen Starts */
	
		function displayProfileDetails(userId)
		{
			
			$.ajax({
			 type: 'GET',
			 url: baseUrl+'/uravupaalamsource/matrimony/displayDetails?matrimonialId='+ userId,
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
				
						profileDetailsMap = response.result;
						
						counter=0;	
								
						viewProfileDetails = profileDetailsMap[counter];
						
						$('#displayDetails').empty();
						
						$('#displayDetails ').append('<div class="col-sm-12"><div class="user-detail"><div class="user-pic"><img src="/uravupaalamsource/matrimony/getImage/'+viewProfileDetails.additionalPictureFile+'" width="240" height="240"></div><div class="usr-info"><h3><a class="disabled">'+viewProfileDetails.name+'</a></h3><ul><li><div class="info-hed">Occupation</div><div class="info-value">'+viewProfileDetails.occupation+'</div></li><li><div class="info-hed">Color </div><div class="info-value">'+viewProfileDetails.color+'</div></li><li><li><div class="info-hed">Date Of Birth </div><div class="info-value">'+viewProfileDetails.dob+'</div></li><li><div class="info-hed">Birth Time and Place </div><div class="info-value">'+viewProfileDetails.dobTP+'</div></li><li><li><div class="info-hed">Height </div><div class="info-value">'+viewProfileDetails.height+'</div></li><li><div class="info-hed">Current Dhisai  </div><div class="info-value">'+viewProfileDetails.balanceDirection+'</div></li><li><div class="info-hed">Education</div><div class="info-value">'+viewProfileDetails.education+'</div></li><li><div class="info-hed">Monthly Salary </div><div class="info-value">'+viewProfileDetails.monthlySalary+'</div></li><li><div class="info-hed">Year</div><div class="info-value">'+viewProfileDetails.year+'</div></li><li><div class="info-hed">Month</div><div class="info-value">'+viewProfileDetails.month+'</div></li><li><div class="info-hed">Day</div><div class="info-value">'+viewProfileDetails.date+'</div></li><li><div class="info-hed">Star</div><div class="info-value">'+viewProfileDetails.star+'</div></li><li><div class="info-hed">Padam</div><div class="info-value">'+viewProfileDetails.padam+'</div></li><li><div class="info-hed">Father Name</div><div class="info-value">'+viewProfileDetails.fatherName+'</div></li><li><div class="info-hed">Occupation</div><div class="info-value">'+viewProfileDetails.fatherOccupation+'</div></li><li><div class="info-hed">Ethnicity</div><div class="info-value">'+viewProfileDetails.fatherCaste+'</div></li><li><div class="info-hed">Mother Name</div><div class="info-value">'+viewProfileDetails.motherName+'</div></li><li><div class="info-hed">Occupation</div><div class="info-value">'+viewProfileDetails.motherOccupation+'</div></li><li><div class="info-hed">Ethnicity</div><div class="info-value">'+viewProfileDetails.motherCaste+'</div></li><li><div class="info-hed">Asset Details</div><div class="info-value">'+viewProfileDetails.assetsDetails+'</div></li><li><div class="info-hed">Siblings</div><div class="info-value">'+viewProfileDetails.siblings+'</div></li><li><div class="info-hed">Married Person</div><div class="info-value">'+viewProfileDetails.marriedPerson+'</div></li><li><div class="info-hed">First Marriage</div><div class="info-value">'+viewProfileDetails.firstMarriage+'</div></li><li><div class="info-hed">First Marriage Details</div><div class="info-value">'+viewProfileDetails.details+'</div></li><li><div class="info-hed">Differently Abled</div><div class="info-value">'+viewProfileDetails.physicallyChallenged+'</div></li><li><div class="info-hed">Differently Abled Details</div><div class="info-value">'+viewProfileDetails.physicalDetail+'</div></li><li><div class="info-hed">Address</div><div class="info-value">'+viewProfileDetails.address+'</div></li><li><div class="info-hed">City</div><div class="info-value">'+viewProfileDetails.city+'</div></li><li><div class="info-hed">Country</div><div class="info-value">'+viewProfileDetails.country+'</div></li><li><div class="info-hed">Caste</div><div class="info-value">'+viewProfileDetails.race+'</div></li><li><div class="info-hed">Contact Number</div><div class="info-value">'+viewProfileDetails.phoneNumber+'</div></li><li><div class="info-hed">Proposal Expectation</div><div class="info-value">'+viewProfileDetails.proposalDetails+'</div></li><li><div class="info-hed">Astrology Charts</div><div class="info-value"><img src="/uravupaalamsource/matrimony/getImage/'+viewProfileDetails.astroChartFile+'"></div></li></ul></div></div></div>');	
					   
					   $.mobile.navigate("#profileDetails");
					   
				}
			}
			});
		}
	
		$('#profileDetails').on('pageinit', function()
		{
			
			$("#closeButton2").on('click', function(evt)
			{
				goBack();
			});
			
			$(document).delegate('.logout', 'click', function(evt)
			{	
				logout();
			});
				
		});
	
	/* Profile Details screen Ends */
	
	/* Favourate Profile Details screen Starts */
	
		function likeProfiles(censusPersonId)
		{
			
			$.ajax({
				 type: 'GET',
				 url: baseUrl+'/uravupaalamsource/matrimony/likeProfile?censusId='+ censusPersonId,
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
						likedMap = response.result;
						
						localStorage.setItem("LikedProfileDetails", JSON.stringify(likedMap));
						
						$('#likeProfileList').empty();
						
						for ( counter= 0; counter < likedMap.length; counter++) 
						{
							likedProfiles = likedMap[counter];
							
							newRow = '<div class="col-sm-6"><div class="user-detail"><div class="user-pic"><img src="/uravupaalamsource/matrimony/getImage/'+likedProfiles.profilePictureFile+'" width="130" height="130"><a class="liked active" id="like'+likedProfiles.matrimonial_id+'"></a></div><div class="usr-info"><h3><a class="viewLikedProfiles" id="'+likedProfiles.matrimonial_id+'">'+likedProfiles.name+'</a></h3><ul><li><div class="info-hed">Occupation</div><div class="info-value">'+likedProfiles.occupation+'</div></li><li><div class="info-hed">Date Of Birth </div><div class="info-value">'+likedProfiles.dob+'</div></li><li><div class="info-hed">City</div><div class="info-value">'+likedProfiles.city+'</div></li><li><div class="info-hed">Country</div><div class="info-value">'+likedProfiles.country+'</div></li></ul></div></div></div>';
							
							$('#likeProfileList').append(newRow);
						}

					}	
				}
				});
				
		}
		
		/*function unLikedProfiles(censusPersonId)
		{
			
			$.ajax({
				 type: 'GET',
				 url: baseUrl+'/uravupaalamsource/matrimony/likeProfile?censusId='+ censusPersonId,
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
						likedMap = response.result;
						
						localStorage.setItem("LikedProfileDetails", JSON.stringify(likedMap));
						
						$('#likeProfileList').empty();
						
						for ( counter= 0; counter < likedMap.length; counter++) 
						{
							likedProfiles = likedMap[counter];
							
							newRow = '<div class="col-sm-6"><div class="user-detail"><div class="user-pic"><img src="/uravupaalamsource/matrimony/getImage/'+likedProfiles.profilePictureFile+'" width="130" height="130"><a class="liked active" id="like'+likedProfiles.matrimonial_id+'"></a></div><div class="usr-info"><h3><a class="viewLikedProfiles" id="'+likedProfiles.matrimonial_id+'">'+likedProfiles.name+'</a></h3><ul><li><div class="info-hed">Occupation</div><div class="info-value">'+likedProfiles.occupation+'</div></li><li><div class="info-hed">Date Of Birth </div><div class="info-value">'+likedProfiles.dob+'</div></li><li><div class="info-hed">City</div><div class="info-value">'+likedProfiles.city+'</div></li><li><div class="info-hed">Country</div><div class="info-value">'+likedProfiles.country+'</div></li></ul></div></div></div>';
							
							$('#likeProfileList').append(newRow);
						}

					}	
				}
				});
		}*/
	
		$('#likeProfiles').on('pageinit', function()
		{
			
			var responseString = localStorage.getItem("CensesPersonLogin");
			var response = JSON.parse( responseString );
					
			var censusPersonId = response.uId;

			likeProfiles(censusPersonId)
				
				$(document).delegate('.viewLikedProfiles','click',function(evt)
				{
					userId=evt.currentTarget.id;
					
					displayProfileDetails(userId);
				});
			
		});
	
	/* Favourate Profile Details screen Ends */
				
});