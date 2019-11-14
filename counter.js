function countDown(){
    var date = new Date;
    
    var christmasDate = new Date('Dec 24, 2019 23:59:59');
    
    var christmas = christmasDate - date;
    
    var seconds = Math.floor(christmas/1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes/60);
    var days = Math.floor(hours/24);
    
    var elSecond = document.getElementById('seconds');
    elSecond.textContent = seconds%60;
    
    var elMinutes = document.getElementById('minutes');
    elMinutes.textContent = minutes%60;
    
    var elHours = document.getElementById('hours');
    elHours.textContent = hours%24;
    
    var elDays = document.getElementById('days');
    elDays.textContent = days;
    
    }
    
    setInterval(countDown, 1000);