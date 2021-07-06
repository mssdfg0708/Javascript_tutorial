function night_day_handler(self){   
    document.getElementById('dark').disabled = true;
    document.getElementById('white').disabled = true;

    if(self.value === 'dark mode'){
    document.getElementById('dark').disabled = false;
    self.value = 'normal mode';
    } 
    else {
    document.getElementById('white').disabled = false;
    self.value = 'dark mode';
    }
  }