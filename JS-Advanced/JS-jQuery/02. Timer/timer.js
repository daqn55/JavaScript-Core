function timer() {
   let hours = $('#hours');
   let minutes = $('#minutes');
   let seconds = $('#seconds');

   $('#start-timer').off('click').on('click', timeStart);
   
   function timeStart(){
      let tim = setInterval(onStart, 1000);

      $('#stop-timer').click(timerStop);

      function timerStop(){
         clearInterval(tim);
      }

      function onStart(){
         let sec = seconds.text();
         let min = minutes.text();
         let h = hours.text();

         if(+sec < 59){
            seconds.text((+sec + 1).toString().padStart(2, '0'));
         }else{
            seconds.text('00');
            if(+min < 59){
               minutes.text((+min + 1).toString().padStart(2, '0'));
            }else{
               minutes.text('00');
               if(+h < 23){
                  hours.text((+h + 1).toString().padStart(2, '0'));
               }else{
                  hours.text('00');
               }
            }
         }
      }      
   }
}