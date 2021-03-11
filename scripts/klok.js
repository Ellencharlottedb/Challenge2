// var today = new Date();

// document.getElementById('clock').innerHTML = today.getHours() + ':' + addLeadingZero(today.getMinutes()) + ':' + addLeadingZero(today.getSeconds());

// function addLeadingZero (getal){
// 	if (getal < 10){
// 		getal = "0" + getal;
// 	}
// 	return getal;
// }
// var interval = setInterval (clock,1000);

// addLeadingZero();

      setInterval(()=>{
        const time = document.querySelector(".display #time");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_night = "AM";
        if(hours > 12){
          day_night = "PM";
          hours = hours - 12;
        }
        if(seconds < 10){
          seconds = "0" + seconds;
        }
        if(minutes < 10){
          minutes = "0" + minutes;
        }
        if(hours < 10){
          hours = "0" + hours;
        }
        time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
      });
