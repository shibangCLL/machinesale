document.writeln("<form class=\"form-horizontal\" method=\"post\" name=\"form\" action=\"//inquiry.sbmchina.com/updata.php\" onsubmit=\"return(CheckfootInput())\">");
document.writeln("<table border=\"1\" cellspacing=\"1\">");
document.writeln("<tr>");
document.writeln("<td><select name=\"products\" class=\"input-xlarge\">");
document.writeln("<option selected=\"selected\" value=\"\" style=\"color:#ff0000; font-weight:bold;\">请选择产品!</option>");
document.writeln("<option value=\"Mobile crushing plant\">Mobile Crusher</option>");
document.writeln("<option value=\"LM Vertical Grinding Mill\">Vertical Mill</option>");
document.writeln("<option value=\"Jaw Crusher\">Jaw Crusher</option>");
document.writeln("<option value=\"Cone Crusher\">Cone Crusher</option>");
document.writeln("<option value=\"MTW European Grinding Machine\">MTW European Grinding Machine</option>");
document.writeln("<option value=\"Ultrafine Mill\">Ultrafine Mill</option>");
document.writeln("<option value=\"Impact Crusher\">Impact Crusher</option>");
document.writeln("<option value=\"VSI Crusher\">VSI Crusher</option>");
document.writeln("<option value=\"Hydraulic Cylinder Cone Crusher\">Hydraulic Cylinder Cone Crusher</option>");
document.writeln("<option value=\"Sand Washing Machine\">Sand Washing Machine</option>");
document.writeln("<option value=\"Vibrating Screen\">Vibrating Screen</option>");
document.writeln("<option value=\"Vibrating Feeder\">Vibrating Feeder</option>");
document.writeln("<option value=\"Belt Conveyor\">Belt Conveyor</option>");
document.writeln("<option value=\"Stone processing production line\">Stone processing production line</option>");
document.writeln("<option value=\"Industrial milling production line\">Industrial milling production line</option>");
document.writeln("<option value=\"Beneficiation Production Line\">Beneficiation Production Line</option>");
document.writeln("<option value=\"Not Sure\" style=\"color:#ff0000; font-weight:bold;\">Not Sure !</option>");
document.writeln("</select></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td align=\"right\"><input name=\"address\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(103,103,103);\" onfocus=\"if(value==\'使用地点：\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'使用地点：\';this.style.color=\'#fff\';};\" value=\"使用地点：\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><input name=\"name\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(103,103,103);\" onfocus=\"if(value==\'您的尊称：\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'您的尊称：\';this.style.color=\'#fff\';};\" value=\"您的尊称：\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td align=\"right\"><input name=\"email\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(103,103,103);\" onfocus=\"if(value==\'您的邮箱：\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'您的邮箱：\';this.style.color=\'#fff\';};\" value=\"您的邮箱：\" size=\"25\" maxlength=\"50\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td  class=\"control-inline\"><label class=\"control-label\">物料<font style=\'color: rgb(153,153,153);\'>（请选择下面选项）</font></label> ");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Dolomite\">");
document.writeln("白云石</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Calcite\">");
document.writeln("方解石</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Quartz\">");
document.writeln("石英</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Basalt\">");
document.writeln("玄武岩</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Barite\">");
document.writeln("重晶石</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Feldspar\">");
document.writeln("长石</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Gravel\">");
document.writeln("砾石</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Bentonite\">");
document.writeln("膨润土</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Gypsum\">");
document.writeln("石膏粉</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]2\" type=\"checkbox\" value=\"Granite\" />");
document.writeln("花岗岩</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Coal\">");
document.writeln("煤</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Slag\">");
document.writeln("煤渣</label>");
document.writeln("<label class=\"checkbox inline\">");
document.writeln("<input name=\"materials[]\" type=\"checkbox\" value=\"Pebble\">");
document.writeln("卵石</label>");
document.writeln("<label class=\"checkbox  checkbox2 inline\"> 其他:");
document.writeln("<input name=\"title\" type=\"text\" value=\"如：大理石\" style=\"color: rgb(153,153,153);border:1px solid #cccccc;padding:0 5px; \" onblur=\"if(value==\'\'){value=\'如：大理石\';this.style.color=\'#fff\';};\" onfocus=\"if(value==\'如：大理石\'){value=\'\';this.style.color=\'#000\';};\" size=\"15\" />");
document.writeln("</label></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td class=\"control-inline control-inline2\"  valign=\"top\"><label class=\"control-label\">容量<font style=\'color: rgb(153,153,153);\'>（请选择下面选项）</font></label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 100 TPH \" name=\"capacity[]\">");
document.writeln("> 100 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 50 TPH \" name=\"capacity[]\">");
document.writeln("> 50 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 30 TPH \" name=\"capacity[]\">");
document.writeln("> 30 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 10 TPH \" name=\"capacity[]\">");
document.writeln("> 10 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" > 1 TPH \" name=\"capacity[]\">");
document.writeln("> 1 TPH </label>");
document.writeln("<label class=\"radio inline\">");
document.writeln("<input type=\"radio\" value=\" < 1 TPH \" name=\"capacity[]\">");
document.writeln("< 1 TPH </label></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><input name=\"phone\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(103,103,103);\" onfocus=\"if(value==\'您的电话：\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'您的电话：\';this.style.color=\'#fff\';};\" value=\"您的电话：\" size=\"25\" /></td>");
 
document.writeln("</tr>");
document.writeln("<tr>"); 
document.writeln("<td ><textarea name=\"content\" cols=\"45\" rows=\"6\" class=\"input-xlarge\" style=\"color: rgb(103,103,103);\" onfocus=\"if(value==\'留言信息，如：输出尺寸为0-10,10-15，用于粉碎的尺寸为15-20 mm，对于磨机和其他要求为75微米（200目）。\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'留言信息，如：输出尺寸为0-10,10-15，用于粉碎的尺寸为15-20 mm，对于磨机和其他要求为75微米（200目）。\';this.style.color=\'#fff\';};\">留言信息，如：输出尺寸为0-10,10-15，用于粉碎的尺寸为15-20 mm，对于磨机和其他要求为75微米（200目）。</textarea></td>");
document.writeln("</tr>");
document.writeln("<tr>");
 
document.writeln("<td   class=\"submit\" ><input  type=\"submit\" value=\"马上预约\" class=\"btn btn-primary\" /></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</form>");
function is_number(str) {
exp = /[^0-9 .+()-]/g;
if (str.search(exp) != -1) {
return false;
}
return true;
}
function is_email(str) {
if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
return false;
}
return true;
}
function CheckfootInput(){

if(document.form.name.value==''||document.form.name.value=='您的尊称：'){
alert("Please Write Your Name ^_^");
document.form.name.focus();
return false; 
}

if(document.form.email.value==''||document.form.email.value=='您的邮箱：'||!is_email(document.form.email.value)){
alert("Please Write Your Email ^_^");
document.form.email.focus();
return false; 
}

if(document.form.content.value==''||document.form.content.value=='留言信息，如：输出尺寸为0-10,10-15，用于粉碎的尺寸为15-20 mm，对于磨机和其他要求为75微米（200目）。'){
alert("Please Write Your Message ^_^");
document.form.content.focus();
return false; 
}

if(document.form.capacity.value=='As: 20 TPH'){
document.form.capacity.value='';
}

if(document.form.title.value=='如：大理石'){ 
document.form.title.value=''; 
}

if(document.form.phone.value=='您的电话：'){
document.form.phone.value = ''; 
}

return true;
}