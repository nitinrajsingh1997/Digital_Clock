function showTime(){
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var d = "AM";

            if(h==0){
                h = 12;
            }
            if(h>12){
                h = h - 12;
                d = "PM";
            }
            if(h<10){
                h = "0" + h;
            }
            if(m<10){
                m = "0" + m;
            }
            if(s<10){
                s = "0" + s;
            }

            var time = h + ":" + m + ":" + s + " " + d;
            document.getElementById("clock").innerHTML = time;
        }
        showTime();
        setInterval(showTime,1000);