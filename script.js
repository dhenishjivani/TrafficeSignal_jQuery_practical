$(document).ready(function () {
    // Varibles which will display timer 
    const east_timer = document.getElementById("east_time");
    const west_timer = document.getElementById("west_time");
    const north_timer = document.getElementById("north_time");
    const south_timer = document.getElementById("south_time");

    setInterval(() => {
        // invoke counter function for all four direction
        counter("east");
        counter("west");
        counter("north");
        counter("south");
    }, 1000);

    function counter(str) {
        let tmp = $("#" + str + "_time").text();
        let cnt = tmp - 1;

        // Make light variable for all three colors
        let light = "";
        if (cnt > 6 && cnt <= 11) {
            light = "green";
        }
        else if (cnt > 1 && cnt <= 6) {
            light = "yellow";
        }
        else if (cnt > 11 || cnt <= 30) {
            light = "red";
        }
        switch (light) {
            // Find the case when to glow which light
            case "red":
                $("#" + str + "_red").css("background-color", "red");
                $("#" + str + "_yellow").css("background-color", "#676767");
                $("#" + str + "_green").css("background-color", "#676767");
                break;
            case "yellow":
                $("#" + str + "_red").css("background-color", "#676767");
                $("#" + str + "_yellow").css("background-color", "yellow");
                $("#" + str + "_green").css("background-color", "#676767");
                break;
            case "green":
                $("#" + str + "_red").css("background-color", "#676767");
                $("#" + str + "_yellow").css("background-color", "#676767");
                $("#" + str + "_green").css("background-color", "green");
                break;
            default:
                $(".yellow").css("background-color", "#676767");
                $(".green").css("background-color", "#676767");
                $(".red").css("background-color", "#676767");
        }
        // Whenever count became Zero it will restart with 40 seconds
        if (cnt <= 0) {
            cnt = 40;
        }
        $("#" + str + "_time").text(cnt);
    }

});
