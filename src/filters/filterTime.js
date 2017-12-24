export default  function filterTime(time) {
  if(time) {
    var years = time.getFullYear();
    var monthes = time.getMonth() + 1;
    var days = time.getDay();
    return years + '/' + monthes + '/' + days;
  } else {
    return false;
  }

}
