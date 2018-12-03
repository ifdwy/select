$(function() {
    var availableTags = [
      "11-中国",
      "1101-湖南省",
      "1102-广东省",
      "1103-浙江省"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });


  function changeUnit() {
        var text = $("#unit1").find("option:selected").text();
        $("#tags").val(text);/*must*/
    }