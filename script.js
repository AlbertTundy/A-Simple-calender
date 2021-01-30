$(document).ready(function(){
   
    $("#currentDay").text(moment().format("dddd, MMMM Do "))

    //grab text value from text area and save it into local storage. 
   $(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id")
    var textValue = $(this).siblings(".description").val()
    localStorage.setItem(time,textValue)


   })
    //get from local storage for persistance 
    //military time because moment.hours is in military time.

    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
    $("#18 .description").val(localStorage.getItem("18"))


    
    
    //create if block to change colors of the hour updater based on the time update. 
   function colorChanger(){
        var currentTime = moment().hours()
        $(".time-block").each(function(){
        var divHour = $(this).attr("id")
        
            if (divHour < currentTime) {

                $(this).addClass("past")

            } else if (divHour == currentTime) {

                $(this).removeClass("past future")

                $(this).addClass("present")

            } else {

                $(this).removeClass("past present")

                $(this).addClass("future")
            }

     })
    }
    colorChanger()
})