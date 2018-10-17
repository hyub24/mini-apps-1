var csvGenerator = (report) => {
  //console.log(report)
  //console.log(typeof report)

  var str = '';
  var recurseKey;
  for(key in report) {
    if(!Array.isArray(report[key])){
      str += key + ',';
    } else {
      var recurseKey = key;
    }
  }
  str = str.slice(0, str.length-1);
  str += '\n';

  var recurse = (obj) => {
    for(key in obj) {
      if(!Array.isArray(obj[key])){
        str += obj[key] + ',';
      }   
    }
    str = str.slice(0, str.length-1);
    str += '\n';

    if(obj[recurseKey].length) {
      for(var i = 0; i<obj[recurseKey].length; i++) {
        recurse(obj[recurseKey][i]);
      }
    }
  }
  recurse(report);
  //console.log(str);

  return str;

}

module.exports.csvGenerator = csvGenerator;