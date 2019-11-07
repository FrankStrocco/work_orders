

$(function() {
  $('div').click (function(){

    // make sure nothing happens unless the blank squares in the grid are clicked
    if (($(this).hasClass('inside-grid')) && ($(this).children('ul').length === 0)) {
      var current_id = $(this).attr("id");
      var id_name = current_id.split("_")[0];
      var row_int = current_id.split("_")[1];
      var done = false;
      var x_integer = parseInt(row_int);

      //find a job before the clicked square, otherwise alert that
      function earlyJob() {

        for (var i = row_int; i > 1; i--) {
          var full_id = id_name + "_" + i;
          var schedule_hour = i + 4;
          var result;

          // make sure clicked box has a child of ul and that if it's already been found to not run again
          if (($("#" + full_id).has("ul").length) && (done == false)){
            let s_id = "#" + full_id;

            // colored the square to make sure it was selecting the correct one
            // $(s_id).css({"background-color":"lightblue"});
            result_info = $(s_id + " ul li:nth-child(3)").text().replace(/\s+/g,' ');
            let min = parseInt(result_info.split(" ")[2]);
            done = true;

            function time_convert() {
              var hours = Math.floor(min / 60);
              var minutes = min % 60;
              return (schedule_hour + hours) + ":" + minutes;
            };
            result = time_convert();
          };
        };
        return result;
      };

      // //find the job after the clicked square
      function laterJob() {
        for (var i = row_int; i < 16; i++) {
          var full_id = id_name + "_" + i;
          var result_info = "";
          var schedule_hour = i + 4;
          if ($("#" + full_id).has("ul").length) {
            let s_id = "#" + full_id;

            // colored the square to make sure it was selecting the correct one
            // $(s_id).css({"background-color":"lightgreen"});

            return schedule_hour;
          }
        }
      };

      var firstTime = earlyJob();
      var secondTime = laterJob();

      // edge case if no second job is found, alert so
      if (secondTime == undefined) {
        alert("The rest of the afternoon/ evening is free!");
        location.reload();
      };
      // edge case for no first job found, alert so
      if (firstTime == undefined) {
        alert("no Jobs till " + secondTime + ":00!");
        location.reload();
      };

      var first = firstTime.split(":").join("");

      //convert time to figure out minutes between jobs
      function time_convert2() {
        firstSplit = firstTime.split(":");
        let hrs = firstSplit[0];
        let min = firstSplit[1];
        let start = (parseInt(hrs * 60)) + parseInt(min);
        let end = parseInt(secondTime * 60);
        return end - start;
      }

      // make sure there's a job before and after the clicked square before alerting
      if ((firstTime) && (secondTime)) {
        alert("Time between jobs is: " + time_convert2() + " minutes.");
        location.reload();
      }
    };
  });
});
