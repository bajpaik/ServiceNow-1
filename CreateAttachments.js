//fetch the attachment file that needs to be edited   

var attachmentGR = new GlideRecord("sys_attachment");   

attachmentGR.addEncodedQuery('GOTOtable_name=ecc_agent_attachment^content_type=test/csv^file_nameSTARTSWITH1');   

attachmentGR.orderByDesc('sys_created_on');   

attachmentGR.query();   



if(attachmentGR.next()){   

   var table_sys_id = attachmentGR.table_sys_id;   

   // read the attachment...   

   var stringUtil = new GlideStringUtil();   

   var sa = new GlideSysAttachment();   

   var binData = sa.getBytes(attachmentGR);   

   // convert it to Encoded Data..   

   var encData = stringUtil.base64Encode(binData);   

   // decode the encoded data into string..   

   var csv_string = stringUtil.base64Decode(encData) + '';   

   var csv_array = csv_string.split("\r\n");

   csv_array.shift(); //removes the first row, edit file   

   // convert this back into a CSV string...   

   csv_string = csv_array.join("\r\n");

   // attach it back...   

   var base64EncodeString = stringUtil.base64Encode(csv_string);   

   var data = stringUtil.base64DecodeAsBytes(this.base64EncodeString);   

   //attach the attachment. 

   var attachment = new Attachment();   

   var attachment_sys_id = attachment.write("ecc_agent_attachment", table_sys_id, "1111.csv", "test/csv", data);   

}   
