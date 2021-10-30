$(function(){
   
  $('#sleepcalc').combodate({
    customClass: 'form-control'
  });  
  
  $('#sleepcalc, .hour, .minute').change( function() {
    updatetime()
  })
  
  
  function updatetime(){
    var interval = moment.duration("01:30:00")
    var secondinterval = moment.duration("03:00:00")
    
    var selectedTime = $('#sleepcalc').combodate('getValue', null)
    
    var time = moment.duration("09:15:00")
    var date = moment(selectedTime)
    date.subtract(time)

    result1 = moment(date).format("h:mm a")
    result2 = moment(date).add(interval).format("h:mm a")
    result3 = moment(date).add(secondinterval).format("h:mm a")

    $('#result1').text(result1).addClass('loaded')
    $('#result2').text(result2).addClass('loaded')
    $('#result3').text(result3).addClass('loaded')
    
    setTimeout(function() {
        $('#result1, #result2, #result3').removeClass('loaded');
    }, 1500)
    
  }              

  updatetime()
  
});