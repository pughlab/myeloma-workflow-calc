function calculateTotal()
{
  let calc={}
  

  calc.bmmcs = ($("#qty_bmmcs").val())
  $("#qty_BMMCs").val(calc.bmmcs);
  // console.log(calc.bmmcs)

  calc.cd138 = ($("#qty_cd138").val() )
  $("#qty_cd138").val(calc.cd138);
  // console.log(calc.cd138)


 
  let final_string = ""
  let total = calc.bmmcs * calc.cd138/100
  if (total <= 0) {
    final_string = "Please enter both fields above"
  }
  else if(total >= 200000) {
    final_string = "Co-extract DNA/RNA from 100,000 plasma cells, viably freeze remaining plasma cells"
  } else {
    final_string = "Use low-input extraction kit to extract DNA from 10,000 cells, viably freeze remaining plasma cells"
  }

 
  $("#final_string").text(final_string);
  $("#total_value").text(total);
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})