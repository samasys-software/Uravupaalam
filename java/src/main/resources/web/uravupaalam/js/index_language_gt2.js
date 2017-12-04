$(document).ready(function() {
		//var baseUrl = "http://ec2-52-91-5-22.compute-1.amazonaws.com:8080";
		//var baseUrl = "../..";
	
	/* Global Variable Declaration Begins*/

	//  Multi language Start
		
			var responseString2 = localStorage.getItem("uravupaalamLanguage");
			var getLanguage = JSON.parse( responseString2 );
			
			if(getLanguage != null)
			{
					$("span[name='label']").each(function(i, elt)
					{
						$(elt).text(getLanguage[$(elt).attr("caption")]);
					});

					$("div[name='label']").each(function(i, elt)
					{
						$(elt).text(getLanguage[$(elt).attr("caption")]);
					});
					
					$("a[name='label']").each(function(i, elt)
					{
						$(elt).text(getLanguage[$(elt).attr("caption")]);
					});
					
					$("p[name='label']").each(function(i, elt)
					{
						$(elt).text(getLanguage[$(elt).attr("caption")]);
					});
					
					$("option[name='label']").each(function(i, elt)
					{
						$(elt).text(getLanguage[$(elt).attr("caption")]);
					});
				
			}
			else
			{
				getLanguage="";
				localStorage.removeItem("uravupaalamLanguage");
			}
			
			function getLanguageResources()
			{
				
				var ta = {}; var en = {};
				
				/* Census Person Start */
					
					ta['Name'] = "பெயர்"; en['Name'] = "Name";
					ta['Gender'] = "பாலினம்"; en['Gender'] = "Gender";
					ta['Date of Birth'] = "பிறந்த தேதி"; en['Date of Birth'] = "Date of Birth";
					
					ta['Father Name'] = "தந்தை பெயர்"; en['Father Name'] = "Father's Name";
					ta['Mother Name'] = "அம்மா பெயர்"; en['Mother Name'] = "Mother's Name";
					ta['Race'] = "குலம்"; en['Race'] = "Race";
					
					ta['Education'] = "கல்வி"; en['Education'] = "Education";
					ta['Occupation'] = "பணிமுறை"; en['Occupation'] = "Occupation";
					ta['Door Number'] = "கதவு எண்"; en['Door Number'] = "Door Number";
					
					ta['Pin Code'] = "அஞ்சல் குறியீடு"; en['Pin Code'] = "Pin Code";
					
					ta['Street'] = "தெரு"; en['Street'] = "Street";
					ta['Town'] = "நகரம்"; en['Town'] = "Town";
					ta['District'] = "மாவட்டம்"; en['District'] = "District";
					
					ta['KulaTheivam'] = "குலதெய்வம்"; en['KulaTheivam'] = "KulaTheivam";
					ta['Kulatheivam Location'] = "குலதெய்வம் இருப்பிடம்"; en['Kulatheivam Location'] = "Kulatheivam Location";
					ta['Taluk'] = "வட்டம்"; en['Taluk'] = "Taluk";
					
					ta['State'] = "மாநிலம்"; en['State'] = "State";
					ta['Country'] = "நாடு"; en['Country'] = "Country";
					ta['Mobile Number'] = "அலைப்பேசி எண்"; en['Mobile Number'] = "Mobile Number";
					
					ta['Email'] = "மின்னஞ்சல்"; en['Email'] = "Email";
					ta['Aadhar'] = "ஆதார்"; en['Aadhar'] = "Aadhar";
					ta['Blood Group'] = "இரத்த வகை"; en['Blood Group'] = "Blood Group";
					
					ta['Registration'] = "பதிவு செய்தல்"; en['Registration'] = "Registration";
					ta['Login'] = "உள் நுழை"; en['Login'] = "Login";
					ta['MAIN MENU'] = "முதன்மை பட்டியல்"; en['MAIN MENU'] = "MAIN MENU";
					//ta['Report'] = "அறிக்கை"; en['Report'] = "Report";

					ta['Male'] = "ஆண்"; en['Male'] = "Male";
					ta['Female'] = "பெண்"; en['Female'] = "Female";
					
					ta['Register'] = "பதிவு"; en['Register'] = "Register";
					ta['Update'] = "மேம்படுத்தல்"; en['Update'] = "Update";
					ta['Reset'] = "மீட்டமை"; en['Reset'] = "Reset";
					
					ta['Please enter values for mandatory fields'] = "தயவு செய்து கட்டாய துறைகள் மதிப்புகள் உள்ளிடவும்"; en['Please enter values for mandatory fields'] = "Please enter values for mandatory fields";
					
					ta['Clear'] = "தெளிவாக்கு"; en['Clear'] = "Clear";
					ta['Forgot Pin'] = "முள் மறந்துவிட்டதா"; en['Forgot Pin'] = "Forgot Pin";
			
					ta['OK'] = "சரி"; en['OK'] = "OK";
					
				/* Census Person Page Ends */
				
				/* Matrimony Page Start */
				
					ta['Bride Groom / Bride Name'] = "மணமகன் / மணமகள் பெயர்"; en['Bride Groom / Bride Name'] = "Bride Groom / Bride Name";
					ta['Color'] = "நிறம்"; en['Color'] = "Color";
					ta['Height'] = "உயரம்"; en['Height'] = "Height";
					
					ta['Monthly Income'] = "மாத வருமானம்"; en['Monthly Income'] = "Monthly Income";
					ta['Birth Time,Place'] = "பிறந்த நேரம், இடம்"; en['Birth Time,Place'] = "Birth Time,Place";
					ta['Current Dhisai'] = "திசை இருப்பு"; en['Current Dhisai'] = "Current Dhisai";
					
					ta['Year'] = "ஆண்டு"; en['Year'] = "Year";
					ta['Month'] = "மாதம்"; en['Month'] = "Month";
					ta['Day'] = "நாள்"; en['Day'] = "Day";
					
					ta['Star'] = "நட்சத்திரம்"; en['Star'] = "Star";
					ta['Padam'] = "பாதம்"; en['Padam'] = "Padam";
					ta['Ethnicity'] = "இனம்"; en['Ethnicity'] = "Ethnicity";
					
					ta['Asset Detail'] = "சொத்து விவரம்"; en['Asset Detail'] = "Asset Detail";
					ta['Siblings'] = "உடன்பிறந்தோர்"; en['Siblings'] = "Siblings";
					ta['Married Person'] = "திருமணமானவர்"; en['Married Person'] = "Married Person";
					
					ta['First Marriage'] = "முதல் மணமா"; en['First Marriage'] = "First Marriage";
					ta['First Marriage Details'] = "இல்லை  எனில் விவரம்"; en['First Marriage Details'] = "First Marriage Details";
					ta['Differently Abled'] = "உடம்பில் குறைபாடுகள்"; en['Differently Abled'] = "Differently Abled";
					
					ta['Differently Abled Details'] = "உண்டு எனில் விவரம்"; en['Differently Abled Details'] = "Differently Abled Details";
					ta['Address'] = "முகவரி"; en['Address'] = "Address";
					ta['Phone Number'] = "தொலைபேசி எண்"; en['Phone Number'] = "Phone Number";
					
					ta['Proposal Expectation'] = "எதிர்பார்க்கும் வரன் விவரம்"; en['Proposal Expectation'] = "Proposal Expectation";
					ta['No'] = "இல்லை"; en['No'] = "No";
					ta['Has'] = "உண்டு"; en['Has'] = "Has";
					
					ta['Yes'] = "ஆம்"; en['Yes'] = "Yes";
					ta['Profile Picture'] = "சுயவிவர படம்"; en['Profile Picture'] = "Profile Picture";
					ta['Astro Chart'] = "ஜோதிட விளக்கப்படம் "; en['Astro Chart'] = "Astro Chart";
					
					ta['Additional Picture'] = "கூடுதல் படம்"; en['Additional Picture'] = "Additional Picture";
					ta['Matrimony Registration'] = "திருமணப்  பதிவு"; en['Matrimony Registration'] = "Matrimony Registration";
					ta['ASHWINI'] = "அஸ்வினி "; en['ASHWINI'] = "ASHWINI";
					
					ta['BHARANI'] = "பரணி "; en['BHARANI '] = "BHARANI";
					ta['KRITIKA'] = "கார்த்திகை "; en['KRITIKA'] = "KRITIKA";
					ta['ROHINI'] = "ரோகிணி "; en['ROHINI'] = "ROHINI";
					
					ta['MRIGASIRA'] = "மிருகசீரிடம்"; en['MRIGASIRA'] = "MRIGASIRA";
					ta['ARIDRA'] = "திருவாதிரை "; en['ARIDRA'] = "ARIDRA";
					ta['PUNARVASU'] = "புனர்பூசம்"; en['PUNARVASU'] = "PUNARVASU";
					
					ta['PUSHYA'] = "பூசம் "; en['PUSHYA'] = "PUSHYA";
					ta['ASLESHA'] = "ஆயில்யம் "; en['ASLESHA'] = "ASLESHA";
					ta['MAGHA'] = "மகம்  "; en['MAGHA'] = "MAGHA";
					
					ta['POORVAPHALGUNI'] = "பூரம்"; en['POORVAPHALGUNI'] = "POORVAPHALGUNI";
					ta['UTTARAPHALGUNI'] = "உத்திரம் "; en['UTTARAPHALGUNI'] = "UTTARAPHALGUNI";
					ta['HASTA'] = "ஹஸ்தம்"; en['HASTA'] = "HASTA";
					
					ta['CHITRA'] = "சித்திரை "; en['CHITRA'] = "CHITRA";
					ta['SWATI'] = "சுவாதி "; en['SWATI'] = "SWATI";
					ta['VISAKHA'] = "விசாகம் "; en['VISAKHA'] = "VISAKHA";
					
					ta['ANURADHA'] = "அனுசம் "; en['ANURADHA'] = "ANURADHA";
					ta['JYEHSTA'] = "கேட்டை"; en['JYEHSTA'] = "JYEHSTA";
					ta['MOOLA'] = "மூலம் "; en['MOOLA'] = "MOOLA";
					
					ta['POORVASHADHA'] = "பூராடம்"; en['POORVASHADHA'] = "POORVASHADHA";
					ta['UTTARASHADHA'] = "உத்திராடம்"; en['UTTARASHADHA'] = "UTTARASHADHA";
					ta['SRAVANA'] = "திருவோணம் "; en['SRAVANA'] = "SRAVANA";
					
					ta['DHANSHITA'] = "அவிட்டம் "; en['DHANSHITA'] = "DHANSHITA";
					ta['SATABISHA'] = "சதயம் "; en['SATABISHA'] = "SATABISHA";
					ta['POORVABHADRAPADA'] = "பூரட்டாதி"; en['POORVABHADRAPADA'] = "POORVABHADRAPADA";
					
					ta['UTTARABHADRAPADA'] = "உத்திரட்டாதி "; en['UTTARABHADRAPADA'] = "UTTARABHADRAPADA";
					ta['REVATI'] = "ரேவதி"; en['REVATI'] = "REVATI";
					ta['Cancel'] = "ரத்து"; en['Cancel'] = "Cancel";
					
					ta['Back'] = "பின்னால்"; en['Back'] = "Back";
					ta['Logout'] = "வெளியேறு"; en['Logout'] = "Logout";
					ta['View/Edit Matrimonial Registration'] = "பார்வை / திருத்த திருமணப் பதிவு"; en['View/Edit Matrimonial Registration'] = "View/Edit Matrimonial Registration";
				
				/* Matrimony Ends */
				
				var resources = new Array();
				resources['ta'] = ta;
				resources['en'] = en;
				
				return resources;
				
			}

			function changeLanguage(lang)
			{
				var langResources = getLanguageResources()[lang];
				
				localStorage.setItem("uravupaalamLanguage",JSON.stringify(langResources));
				
				$("span[name='label']").each(function(i, elt)
				{
					$(elt).text(langResources[$(elt).attr("caption")]);
				});

				$("div[name='label']").each(function(i, elt)
				{
					$(elt).text(langResources[$(elt).attr("caption")]);
				});
				
				$("a[name='label']").each(function(i, elt)
				{
					$(elt).text(langResources[$(elt).attr("caption")]);
				});
				
				$("p[name='label']").each(function(i, elt)
				{
					$(elt).text(langResources[$(elt).attr("caption")]);
				});
				
				$("option[name='label']").each(function(i, elt)
				{
					$(elt).text(langResources[$(elt).attr("caption")]);
				});
				
			}
			
			$(document).ready(function() 
			{
				$("input[name='radio-language']").click(function(){
					changeLanguage($(this).val());
				});
			});
				
		//  Multi language Ends
				
});	 