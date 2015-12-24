var urlError=0;
var WL_PHY_TYPE_A='a';
var WL_PHY_TYPE_B='b';
var WL_PHY_TYPE_G='g';
function newConfirm(title,mess,icon,defbut,mods) {
   icon = (icon==0) ? 0 : 2;
   defbut = (defbut==0) ? 0 : 1;
   retVal = makeMsgBox(title,mess,icon,4,defbut,mods);
   return (retVal==6);
}

function isPstnDigit(digit) {
   	var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "*");
   	var len = hexVals.length;
   	var i = 0,j=0;
   	var temp = 0;

	if (digit.length == 1)
		temp++;   	
   	for ( j = 0; j < digit.length; j++){
   		for ( i = 0; i < len; i++ ){
    		if ( digit.charAt(j) == hexVals[i] )
    			break;
    	}
    	if ( i < len )
      		temp++;	 
    }		

	if (temp == 2)
   		return true;
   	else
   		return false;	
}

function isHexaDigit(digit) {
   var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                           "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f");
   var len = hexVals.length;
   var i = 0;
   var ret = false;

   for ( i = 0; i < len; i++ )
      if ( digit == hexVals[i] ) break;

   if ( i < len )
      ret = true;

   return ret;
}

function isValidKey(val, size) {
   var ret = false;
   var len = val.length;
   var dbSize = size * 2;

   if ( len == size )
      ret = true;
   else if ( len == dbSize ) {
      for ( i = 0; i < dbSize; i++ )
         if ( isHexaDigit(val.charAt(i)) == false )
            break;
      if ( i == dbSize )
         ret = true;
   } else
      ret = false;

   return ret;
}

function checkDhcpIpAddrRange(startaddr, endaddr){
var i=0;
var num1,num2;	
	startaddrParts = startaddr.split('.');
	endaddrParts = endaddr.split('.');
	
	
	for (i = 0; i < 3; i++){
		num1=parseInt(startaddrParts[i]);
		num2=parseInt(endaddrParts[i]);
		if (num1 != num2){
			return false;
		}
	}
	
	num1=parseInt(startaddrParts[3]);
	num2=parseInt(endaddrParts[3]);
	if (num1>num2){
	   return false;
	}
	
	

	return true;
}

/*Check a Ip address in a IP address range.-added by Shawn_zeng on 02/01/2007*/
function checkIPinIPAddrRange(startIp, Ip, endIp)
{
	var i=0;
	var num1,num2,num3;	
	startaddrParts = startIp.split('.');
	ipParts = Ip.split('.');
	endaddrParts = endIp.split('.');
	
	for (i = 0; i < 3; i++){
		num1=parseInt(startaddrParts[i]);
		num3=parseInt(ipParts[i]);
		if (num1 != num3){//startIp and endIp must be in the same net segement, so we just compare the Ip and startIp.
			return false;
		}
	}
	
	num1=parseInt(startaddrParts[3]);
	num3=parseInt(ipParts[3]);
	num2=parseInt(endaddrParts[3]);
	if (num1<=num3 && num3 <= num2){
	   return true;
	}

	return false;
}

/*
function isValidIpAddress(address) {
   var i = 0;
   if ( address == '0.0.0.0' ||
        address == '255.255.255.255' )
      return false;

   addrParts = address.split('.');
   if ( addrParts.length != 4 ) return false;

   for (i = 0; i < 4; i++) {
	  if ( isNaN(addrParts[i]) )
	  	 return false;	
      num = parseInt(addrParts[i])
      if ( isNaN(num) )
         return false;
      if ( num < 0 || num > 255 )
         return false;
   }

   return true;
}
*/

//add by yh 2005/03/24
function isValidIpAddress(Address)
{
  var address = Address.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
  var address2 = Address.split('.');
  var digits;
  var i;

  if(address == null)
  	{ alert('Invalid IP address '+ Address); return false; }
  else
  	if(address2.length != 4)
		{ alert('Invalid IP address '+ Address); return false; }
  digits = address[0].split(".");
  for(i=0; i < 4; i++)
  {
    if((Number(digits[i]) > 255 ) || (Number(digits[i]) < 0 ))
    { alert('Invalid IP address '  + address[0]); return false; }
  }
  if(Number(digits[3])==0 || Number(digits[3])==255)
  {
        alert("Invalid IP address.");
        return false;
  }
  if(Number(digits[0]) ==0 || Number(digits[0]) == 127 )
  {
        alert("Invalid IP address.");
        return false;
  }
  if(Number(digits[0]) > 223)
  {
        alert("Invalid IP address.");
        return false;
  }
   return true;
}

// ASKEY 20090105 Marcus for firewall ip check
function isValidIpAddressSub(Address, Lanaddress, Lanmask)
{
  var address = Address.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
   var digits;
  var lanaddress = Lanaddress.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
  var lanmask= Lanmask.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
  var landigits;
  var maskdigits;
  var i;

  digits = address[0].split(".");
  landigits = lanaddress[0].split(".");
  maskdigits = lanmask[0].split(".");  
  for(i=0; i < 4; i++)
  {
   if((Number(digits[i]) & Number(maskdigits[i])) != (Number(landigits[i]) & Number(maskdigits[i])) )
    { return false; }	
  }

   return true;
}

function doValidateMask(Mask)
{
  var mask = Mask.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
  var mask2 = Mask.split('.');
  var digits;
  var bMask = 0;
  var watch = false;
  var i;

  if(mask == null) 
  	{ alert('Invalid netmask ' + Mask); return false; }
  else
  	if(mask2.length != 4)
		{ alert('Invalid netmask ' + Mask); return false; }
  digits = mask[0].split(".");
  for(i=0; i < 4; i++)
  {
    if((Number(digits[i]) > 255 ) || (Number(digits[i]) < 0 ))
     { alert('Invalid netmask ' + mask[0]); return false; }
        bMask = (bMask << 8) | Number(digits[i]);
  }
  bMask = bMask & 0x0FFFFFFFF;
  for(i=0; i<32; i++)
  {
    if((watch==true) && ((bMask & 0x1)==0)) { alert("Invalid netmask " + Mask); return false; }
        bMask = bMask >> 1;
        if((bMask & 0x01) == 1) watch=true;
  }
  if(Mask == "255.255.255.254" || Mask == "255.255.255.255" || Mask == "0.0.0.0")
  {
        alert('Invalid netmask ' + Mask);
        return false;
  }
   return true;
}
function doValidateGateway(Address)
{
  var address = Address.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
  var address2 = Address.split('.');
  var digits;
  var i;

  if(address == null)
  	{ alert('Invalid IP address '+ Address); return false; }
  else
  	if(address2.length != 4)
		{ alert('Invalid IP address '+ Address); return false; }
  digits = address[0].split(".");
  for(i=0; i < 4; i++)
  {
    if((Number(digits[i]) > 255 ) || (Number(digits[i]) < 0 ))
    { alert('Invalid getway IP address '  + address[0]); return false; }
  }
  if(Number(digits[3])==0 || Number(digits[3])==255)
  {
        alert("Invalid getway IP address.");
        return false;
  }
  if(Number(digits[0])==127 || Number(digits[0])==0)
  {
        alert("Invalid getway IP address.");
        return false;
  }
  if(Number(digits[0])>233)
  {
        alert("Invalid getway IP address.");
        return false;
  }
   return true;
}

//-----------end add
function checkLan1andLan2(lan1, sub1, lan2, sub2){
	var temp0,temp1,temp2,temp3;
	lan1Part = lan1.split('.');
	sub1Part = sub1.split('.');
	temp0 = (parseInt(lan1Part[0])& parseInt(sub1Part[0]));
	temp1 = (parseInt(lan1Part[1])& parseInt(sub1Part[1]));
	temp2 = (parseInt(lan1Part[2])& parseInt(sub1Part[2]));
	temp3 = (parseInt(lan1Part[3])& parseInt(sub1Part[3]));

	lan2Part = lan2.split('.');
	sub2Part = sub2.split('.');
	temp4 = (parseInt(lan2Part[0])& parseInt(sub2Part[0]));
	temp5 = (parseInt(lan2Part[1])& parseInt(sub2Part[1]));
	temp6 = (parseInt(lan2Part[2])& parseInt(sub2Part[2]));
	temp7 = (parseInt(lan2Part[3])& parseInt(sub2Part[3]));

	if (temp0 == temp4 && temp1 == temp5 && temp2 == temp6 && temp3 == temp7)
		return false;
	else
		return true;	
}

function isValidMacAddress(address) {
   var c = '';
   var i = 0, j = 0;

   if ( address == 'ff:ff:ff:ff:ff:ff' ) return false;

   addrParts = address.split(':');
   if ( addrParts.length != 6 ) return false;

   for (i = 0; i < 6; i++)
   {
	  if(addrParts[i].length > 2) return false;
   	  if(addrParts[i].length < 1) return false;
      for ( j = 0; j < addrParts[i].length; j++ ) { 
         c = addrParts[i].toLowerCase().charAt(j);
         if ( (c >= '0' && c <= '9') ||
              (c >= 'a' && c <= 'f') )
            continue;
         else
            return false;		 
      }
   }

   return true;
}

var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
              "A", "B", "C", "D", "E", "F");
var unsafeString = "\"<>%\\^[]`\+\$\,'#&";
// deleted these chars from the include list ";", "/", "?", ":", "@", "=", "&" and #
// so that we could analyze actual URLs

function isUnsafe(compareChar)
// this function checks to see if a char is URL unsafe.
// Returns bool result. True = unsafe, False = safe
{
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}

function decToHex(num, radix)
// part of the hex-ifying functionality
{
   var hexString = "";
   while ( num >= radix ) {
      temp = num % radix;
      num = Math.floor(num / radix);
      hexString += hexVals[temp];
   }
   hexString += hexVals[num];
   return reversal(hexString);
}

function reversal(s)
// part of the hex-ifying functionality
{
   var len = s.length;
   var trans = "";
   for (i = 0; i < len; i++)
      trans = trans + s.substring(len-i-1, len-i);
   s = trans;
   return s;
}

function convert(val)
// this converts a given char to url hex form
{
   return  "%" + decToHex(val.charCodeAt(0), 16);
}


function encodeUrl(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;
   
   urlError = 0;
   	
   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         // hack to eliminate the rest of unicode from this
         if (isUnsafe(val.substring(i,i+1)) == false)
            newStr = newStr + val.substring(i,i+1);
         else
            newStr = newStr + convert(val.substring(i,i+1));
      } else {
         // woopsie! restore.
         alert ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
         newStr = original;
         // short-circuit the loop and exit
         i = len;
         urlError = 1;
      }
   }

   return newStr;
}

var markStrChars = "\"'";

// Checks to see if a char is used to mark begining and ending of string.
// Returns bool result. True = special, False = not special
function isMarkStrChar(compareChar)
{
   if ( markStrChars.indexOf(compareChar) == -1 )
      return false; // found no marked string chars, return false
   else
      return true;
}

// use backslash in front one of the escape codes to process
// marked string characters.
// Returns new process string
function processMarkStrChars(str) {
   var i = 0;
   var retStr = '';

   for ( i = 0; i < str.length; i++ ) {
      if ( isMarkStrChar(str.charAt(i)) == true )
         retStr += '\\';
      retStr += str.charAt(i);
   }

   return retStr;
}

function isValidPort(port) {
   if ( isNaN(port) )
       return false;
   
   if ( port < 1 || port > 65535)
       return false;
   
   return true;
}

function isNameUnsafe(compareChar) {
   var unsafeString = "\"<>%\\^[]`\+\$\,='#&@.: \t";
	
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}   

// Check if a name valid
function isValidName(name) {
   var i = 0;	
   
   for ( i = 0; i < name.length; i++ ) {
      if ( isNameUnsafe(name.charAt(i)) == true )
         return false;
   }

   return true;
}

function getLeftMostZeroBitPos(num) {
   var i = 0;
   var numArr = [128, 64, 32, 16, 8, 4, 2, 1];

   for ( i = 0; i < numArr.length; i++ )
      if ( (num & numArr[i]) == 0 )
         return i;

   return numArr.length;
}

function getRightMostOneBitPos(num) {
   var i = 0;
   var numArr = [1, 2, 4, 8, 16, 32, 64, 128];

   for ( i = 0; i < numArr.length; i++ )
      if ( ((num & numArr[i]) >> i) == 1 )
         return (numArr.length - i - 1);

   return -1;
}

function isValidSubnetMask(mask) {
   var i = 0, num = 0;
   var zeroBitPos = 0, oneBitPos = 0;
   var zeroBitExisted = false;

   if ( mask == '0.0.0.0' )
      return false;

   maskParts = mask.split('.');
   if ( maskParts.length != 4 ) return false;

   for (i = 0; i < 4; i++) {
      if ( isNaN(maskParts[i]) == true )
         return false;
      num = parseInt(maskParts[i]);
      if ( num < 0 || num > 255 )
         return false;
      if ( zeroBitExisted == true && num != 0 )
         return false;
      zeroBitPos = getLeftMostZeroBitPos(num);
      oneBitPos = getRightMostOneBitPos(num);
      if ( zeroBitPos < oneBitPos )
         return false;
      if ( zeroBitPos < 8 )
         zeroBitExisted = true;
   }

   return true;
}

function encodeUrlPM(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;
   urlError = 0;

	if( val.indexOf('"')!= -1 || val.indexOf('<')!= -1 || val.indexOf('>')!= -1
		|| val.indexOf('/')!= -1 || val.indexOf('&')!= -1 || val.indexOf(',')!= -1){
  		alert('Valid string cannot contain any of the following characters: \" < > / & ,');
   		urlError = 1;
   		return newStr;
   	}

   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         // hack to eliminate the rest of unicode from this
         if (isUnsafe(val.substring(i,i+1)) == false)
            newStr = newStr + val.substring(i,i+1);
         else
            newStr = newStr + convert(val.substring(i,i+1));
      } else {
         // woopsie! restore.
         alert ("A non-ISO-8859-1 character is found at position " + (i+1) + ". Please eliminate it before continuing.");
         newStr = original;
         // short-circuit the loop and exit
         i = len;
         urlError = 1;
      }
   }

   return newStr;
}
function isNumerals(str) {
	var NumVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
   	var len = NumVals.length;
   	var strlen = str.length;
   	var i = 0;
   	var ret = true;

	for ( j = 0; j < strlen; j++){
   		for ( i = 0; i < len; i++ ){
    		if ( str.charAt(j) == NumVals[i] )
    			break;
    	}
    	if ( i >= len ){
      		ret=false;
      		break;
      	}
	}

	return ret;
}
//Remove all the space from the string
function removeSpace(val)
{
	var len = val.length;
	while(len>0)
	{
		val = val.replace(" ", "");
		len--;
	}
	return val;
}
function btnCancel(link)
{
	var loc = link;
	var code = 'window.location.href="/';
	code += "status.cgi?thisfile=" + loc + '"';
	eval(code);
}

function encodeUrl(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;
  
   urlError = 0;
   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         if (isUnsafe(val.substring(i,i+1)) == false)
            newStr = newStr + val.substring(i,i+1);
         else
            newStr = newStr + convert(val.substring(i,i+1));
      } else {
         alert ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
         newStr = original;
         i = len;
         urlError = 1;
      }
   }
   return newStr;
}
