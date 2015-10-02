(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
var whp;
 function register_event_handlers()
 {
    
    
         $("#homebtn").click(function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        $("#favbtn").click(function(evt)
        {
         activate_subpage("#favorite_page"); 
        });
        $("#messagebtn").click(function(evt)
        {
         activate_subpage("#messages_page"); 
        });
        $("#profilebtn").click(function(evt)
        {
         activate_subpage("#profile_page"); 
        });
        
        $(document).on("click", ".uib_w_30", function(evt)
        {
         if (document.getElementById('af-radio-0').checked && document.getElementById('af-radio-4').checked) {
        whp = document.getElementById('whpValue').value*0.86;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
          else if (document.getElementById('af-radio-1').checked && document.getElementById('af-radio-4').checked) {
        whp = document.getElementById('whpValue').value*0.84;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
         else if (document.getElementById('af-radio-2').checked && document.getElementById('af-radio-4').checked) {
        whp = document.getElementById('whpValue').value*0.825;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
        else if (document.getElementById('af-radio-3').checked && document.getElementById('af-radio-0').checked) {
        whp = document.getElementById('whpValue').value*0.85;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
         else if (document.getElementById('af-radio-3').checked && document.getElementById('af-radio-1').checked) {
        whp = document.getElementById('whpValue').value*0.83;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
        else if (document.getElementById('af-radio-3').checked && document.getElementById('af-radio-2').checked) {
        whp = document.getElementById('whpValue').value*0.81;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
        else if (document.getElementById('af-radio-5').checked && document.getElementById('af-radio-0').checked) {
        whp = document.getElementById('whpValue').value*0.8;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
        else if (document.getElementById('af-radio-5').checked && document.getElementById('af-radio-1').checked) {
        whp = document.getElementById('whpValue').value*0.78;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
        else if (document.getElementById('af-radio-5').checked && document.getElementById('af-radio-2').checked) {
        whp = document.getElementById('whpValue').value*0.76;
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = Math.round(whp);     
         }
        });
        $(document).on("click", ".uib_w_13", function(evt)
        {
        document.getElementById('pwRatioField').readOnly = true;
        var power = document.getElementById('powerField').value;
        var weight = document.getElementById('weightField').value;
        var results = power/weight;
        document.getElementById('pwRatioField').value = results;
        });
        $(document).on("click", "#clearButton", function(evt)
        {
         document.getElementById('powerField').value = '';
         document.getElementById('weightField').value = '';
         document.getElementById('pwRatioField').value = '';
        });
        $(document).on("click", "#clearWHPButton", function(evt)
        {
        document.getElementById('whpValue').value = '';
        document.getElementById('whpResults').readOnly = true;
        document.getElementById('whpResults').value = '';
        });
}
 $(document).ready(register_event_handlers);
})();
