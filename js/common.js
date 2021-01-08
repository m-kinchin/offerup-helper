function getBoardId() {
  var regexp = new RegExp(/board\/([\d\w]{8}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{12})/);
  return regexp.exec(window.location)[1];
}

function getItemId(url) {
  var regexp = new RegExp(/detail\/([\d]+)/);
  return regexp.exec(url)[1];
}

function removeFromBoard(e) {
  var target = e.target;
  if(e.target.tagName != "DIV") {
    target = $(target).closest("div");
  }
  $.ajax({
    url: $(target).attr("link"),
    type: 'DELETE',
    success: function() {
      window.location.reload();
    }
  });
}
