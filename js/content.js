if(isBoardPage()) {
  $("#board-items a.db-item-tile > div").each(function() {
    var board_id = getBoardId();
    var item_id = getItemId($(this).parent().attr("href"));
    if(!board_id || !item_id) {
      return;
    }
    var apiUrl = removeItemFromBoardApiUrl.replace("{board_id}", board_id).replace("{item_id}", item_id);
    var div = $("<div></div>")
      .html(remove_icon)
      .addClass("remove")
      .attr("onclick", "return false;")
      .attr("link", apiUrl)
      .click(removeFromBoard);
    $(this).prepend(div);
  });
}

else if("https://offerup.com/boards/" == window.location) {
  $("div.container-fluid > div.row > a[href*=\"/board/\"] > div").each(function() {
    var board_id = getBoardId($(this).parent().attr("href"));
    if(!board_id || board_id.includes("quicksaveboard")) {
      return;
    }
    var apiUrl = removeBoardApiUrl.replace("{board_id}", board_id);
    var div = $("<div></div>")
      .html(remove_icon)
      .addClass("remove")
      .attr("onclick", "return false;")
      .attr("link", apiUrl)
      .click(removeFromBoard);
    $(this).prepend(div);
  });
}