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

else if(isListOfBoardsPage()) {
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

else if(isDetailPage()) {
  $("table").siblings("img").show();
  $("table").siblings("img[src*='left']")[0].onclick = (function(e){
    var row = document.getElementsByTagName("table")[0].getElementsByTagName('tr')[0];
    var cells = row.getElementsByTagName('td');
    for(i = cells.length - 2; i >= 0; i--)
      row.insertBefore(row.removeChild(cells[i == cells.length ? 0 : i + 1]), cells[i]);
  });
  $("table").siblings("img[src*='right']")[0].onclick = (function(e){
    var row = document.getElementsByTagName("table")[0].getElementsByTagName('tr')[0];
    var cells = row.getElementsByTagName('td');
    for(i = 0; i < cells.length - 1; i++)
      row.insertBefore(row.removeChild(cells[i == cells.length ? 0 : i + 1]), cells[i]);
  });
}
