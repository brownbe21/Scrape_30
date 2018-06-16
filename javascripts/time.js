var makeDate = function() {
    // save the current date to d
    var d = new Date();
   
    var formattedDate = "";
   
    formattedDate = formattedDate + (d.getMonth() + 1) + "_";
   
    formattedDate = formattedDate + d.getDate() + "_";
    // finally, then get the full year, 
    // and add that to the formatted date string
    formattedDate = formattedDate + d.getFullYear();
    // return the formatted date
    return formattedDate;
};


module.exports = makeDate;