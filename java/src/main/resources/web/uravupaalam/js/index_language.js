$(document).ready(function() {
		//var baseUrl = "http://ec2-52-91-5-22.compute-1.amazonaws.com:8080";
		var baseUrl = "../..";
	
		/* Global Variable Declaration Begins*/

		//  Multi language Start
			
				function getLanguageResources()
				{
					var ta = new Array(); var en = new Array();
					
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
					ta['Report'] = "அறிக்கை"; en['Report'] = "Report";

					ta['Male'] = "ஆண்"; en['Male'] = "Male";
					ta['Female'] = "பெண்"; en['Female'] = "Female";
					
					ta['Register'] = "பதிவு"; en['Register'] = "Register";
					ta['Update'] = "மேம்படுத்தல்"; en['Update'] = "Update";
					ta['Reset'] = "மீட்டமை"; en['Reset'] = "Reset";
					
					ta['Please enter values for mandatory fields'] = "தயவு செய்து கட்டாய துறைகள் மதிப்புகள் உள்ளிடவும்"; en['Please enter values for mandatory fields'] = "Please enter values for mandatory fields";
					
					ta['Clear'] = "தெளிவாக்கு"; en['Clear'] = "Clear";
					ta['Forgot Pin'] = "முள் மறந்துவிட்டதா"; en['Forgot Pin'] = "Forgot Pin";
			
					ta['OK'] = "சரி"; en['OK'] = "OK";
					
					var resources = new Array();
					resources['ta'] = ta;
					resources['en'] = en;
					
					return resources;
					
				}

				function changeLanguage(lang)
				{
					var langResources = getLanguageResources()[lang];
					
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
					
					localStorage.setItem("uravupaalamLanguage",JSON.stringify(lang));
					
				}
				
				$(document).ready(function() 
				{
					$("input[name='radio-language']").click(function(){
						changeLanguage($(this).val());
					});
				});
				
				//  Multi language Ends
				
});	 