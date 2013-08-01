// Generated by CoffeeScript 1.6.3
$(function() {
  $("input.search").focus();
  $(document).keydown(function(e) {
    if (e.keyCode === 83 && !$("input.search:focus").length) {
      $("input.search").focus();
      return false;
    }
  });
  if (navigator.userAgent.match(/iPad|iPhone/i)) {
    $("li input, .queue").click(function() {
      this.selectionStart = 0;
      return this.selectionEnd = this.value.length;
    });
  } else {
    $("li, .storyline").on("mouseover", function() {
      var i;
      i = $(this).find("input").get(0);
      i.selectionStart = 0;
      return i.selectionEnd = i.value.length;
    });
  }
  $(".add-all").click(function() {
    return $("li:visible img").click();
  });
  $.fn.addToStoryLine = function() {
    $(this).clone().appendTo(".story").click(function() {
      $(this).remove();
      return $(".queue").val($.map($(".story img"), function(e) {
        return ":" + $(e).attr("title") + ":";
      }).join(""));
    });
    return $(".queue").val($.map($(".story img"), function(e) {
      return ":" + $(e).attr("title") + ":";
    }).join(""));
  };
  return $("li img").on("click", function(e) {
    event.stopPropagation();
    return $(this).addToStoryLine();
  });
});
