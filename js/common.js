function getBoardId(url) {
  if(!url) {
    url = window.location;
  }

  var regexp = new RegExp(board_parg_url_regexp);
  var result = regexp.exec(url);
  return result ? result[1] : null;
}

function getItemId(url) {
  var regexp = new RegExp(/detail\/([\d]+)/);
  return regexp.exec(url)[1];
}

function isBoardPage() {
  var regexp = new RegExp(board_parg_url_regexp);
  return window.location.href.match(regexp) != null;
}

function isListOfBoardsPage() {
  var regexp = new RegExp(board_list_page_url);
  return window.location.pathname.match(regexp) != null;
}

function isDetailPage() {
  var regexp = new RegExp(detail_page_url);
  return window.location.pathname.match(regexp) != null;
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

var remove_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>';

var board_parg_url_regexp = /\/board\/([\d\w]{8}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{4}\-[\d\w]{12}|quicksaveboard_[\d]*)\//;
var detail_page_url = /\/item\/detail\/[\d]+[\/]*/;
var board_list_page_url = /\/boards[\/]*/;

var removeItemFromBoardApiUrl = "https://offerup.com/webapi/offer_boards/v1/boards/{board_id}/items/{item_id}/";
var removeBoardApiUrl = "https://offerup.com/webapi/offer_boards/v1/boards/{board_id}/";
