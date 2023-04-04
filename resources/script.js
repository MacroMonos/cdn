

function checkrequired(which) {
  var pass=true;
  for (i=0;i<which.length;i++) {
    var tempobj=which.elements[i];
    if (tempobj.name.substring(0,8)=="required") {
      if (((tempobj.type=="text"||tempobj.type=="textarea")&&
          tempobj.value=='')||(tempobj.type.toString().charAt(0)=="s"&&
          tempobj.selectedIndex==0)) {
        pass=false;
        break;
      }
    }
  }
  if (!pass) {
    shortFieldName=tempobj.name.substring(8,30).toUpperCase();
    alert("The "+shortFieldName+" field is a required field.");
    return false;
  } else {
  return true;
  }
}
