var tz = Packages.java.util.TimeZone.getTimeZone("GMT"); //other eg. CST
var sd = new GlideDateTime();
sd.setTZ(tz);
gs.info(sd.getDisplayValue().toString())

/**********************************************************
   @ Function Name : changeDateFormat.
   @ Description   : Convert version number to version format.
   @ Param         : version - number
   @ Return        : version in version format.
   ***********************************************************/
	changeDateFormat:function(timeStamp){
	var date = timeStamp.replace(/[':''T']/g, "-").split('-');
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[parseInt(date[1])-1]+" "+parseInt(date[2])+", "+date[0]+", "+(parseInt(date[3]) > 12 ? String( parseInt(date[3]) - 12): date[3])+":"+ date[4] +" " +(parseInt(date[3]) >= 12 ? 'PM':'AM') + " UTC";
	},
  
  /**********************************************************
	@ Function Name : convertTimeZone.
   @ Description   : Method to convert timestamp to required timezone.
   @ Param         : devicename - String
   @ Return        : JSON.
   ***********************************************************/
	convertTimeZone : function (time){
		if(time == "")
			return "";
		var min = parseInt(time/60);
		var sec = time > 0 ? time - min*60 : min*60 - time;
		return  "UTC "+min +","+sec;
	},
  
  /******************************************************************************
	@ Function Name : getCurrentDatetime.
	@ Description   : Method to convert timeStamp and get get differenc as days from current time.
    @ Param         : time - String
    @ Return        : Time format.
	**************************************************************************/
	getCurrentDatetime : function(time){
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var gdt = (typeof(time) == "undefined" ?  new GlideDateTime() : new GlideDateTime(time));
		var gtime2 = gdt.getTime();
		var hour = gtime2.getByFormat('HH');
		return (months[gdt.getMonthUTC() - 1] + " "+ gdt.getDayOfMonthUTC() + ", " + gdt.getYearUTC() + ", " + gtime2.getByFormat('hh:mm') +" " +(hour > 12 ? 'PM' : 'AM') + " UTC");
	},
		
		
 /******************************************************************************
         VIA CLIENT SCRIPT...
	**************************************************************************/
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
g_form.setMandatory('check_in_date', true);
   g_form.setMandatory('entry_time', true);
if(!oldValue){
		g_form.showFieldMsg('entry_time', 'Please enter time in \'HH:MM\'');
	}
     return;
 }

 if (newValue) {
     var entry_time = g_form.getValue('entry_time');
     var format =/^([0-2][0-3]{0,1})(\:[0-5][0-9]{0,1})?%?$/gim;
     if (!entry_time.match(format)) {
         alert("Invalid format! Please enter time in 'HH:MM', e.g. 01:25 ");
 g_form.setValue('entry_time','');
     }
 }
	
   
}
