var eventList = [];

function start_cal() {
    var dt_object=new Date();
    var month=dt_object.getMonth();
    var year=dt_object.getFullYear();
    show_cal(0,0,month,year);
}

function show_cal(chm, chy,month,year) {
    document.getElementById('section').innerHTML = cal(chm,chy,month,year);
    document.getElementById('section').style.display = 'inline';
}

function show_month(month){
    var month_name = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    return month_name[month];
}
// collect all date variables
function cal(chm,chy,month,year) {
    month = month + chm;
    year = year + chy;
    var ddate = new Date();
    var dday = ddate.getDate();
    var dt = new Date(year, month, 01); // Date object with change in year and month
    var year = dt.getFullYear(); // read the current year
    var display_month = dt.getMonth();
    var return_month = display_month + 1;
    var display_month_name = show_month(display_month);
    var first_day = dt.getDate(); //, first day of present month

    dt.setMonth(month+1, 0); // Set to next month and one day backward.
    var last_date=dt.getDate(); // Last date of present month

    var dy = 1; // day variable for adjustment of starting date.

    // Top display Links with present Month & year
    var str1 = "<td><a href=# onclick=show_cal(0,-1," + display_month + "," + year +");> << </a> </td><td>   <a href=# onclick=show_cal(-1,0," + display_month + "," + year + ");><</a> </td><td colspan= 3> " + dday + " " + display_month_name + " " + year + " </td><td align=right><a href=# onclick=show_cal(1,0," + display_month + "," + year + ");>></a> </td><td> <a href=# onclick=show_cal(0,1," + display_month + "," + year + ");>>></a></td>";

    // Display calendar body
    var str = '';
    str =  '<table class="main" <tr> ' + str1 + " </tr>";
    str += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
    for(i = 0; i <= 41; i++){
        if((i % 7) == 0) {
            str = str + "</tr><tr>"; 
        } // if week is over then start a new line
        if((i >= first_day) && (dy <= last_date)){
                str = str + "<td><a href=# onclick=return_value(" + dy + "," + return_month + ","+ year + ");> "+ dy +"</a></td>";
                dy=dy+1;
        }
        else {
            str = str + "<td>*</td>";
        } // Blank dates.
    } 

    str = str + "</tr></tbody></table>";
    //alert(str);
    return str; 
}

function return_value(dt,month,year){
    var eventvalue = ""
    var eventholder = "";
    eventvalue = prompt("Type in an event for: " + dt + "/" + month + "/" + year);
    if (eventvalue === ""){
        alert("No event was added");
        return -1
    }
    eventholder = dt + "/" + month + "/" + year + " - " + eventvalue;
    doArray(eventholder);
}

function doArray(eventholder){
    eventList.push(eventholder);
    var nextEvent = eventList[eventList.length - 1];

    var newList = document.createElement("P");
    var nextEventName = document.createTextNode(nextEvent);
    newList.appendChild(nextEventName);
    document.getElementById('resulttag').appendChild(newList);
}
