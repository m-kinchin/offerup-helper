var removeItemFromBoardApiUrl = "https://offerup.com/webapi/offer_boards/v1/boards/{board_id}/items/{item_id}/";
//window.location.href.replace("/board","/webapi/offer_boards/v1/boards").slice(0, -1);

$("#board-items a.db-item-tile > div").each(function() {
  var board_id = getBoardId();
  var item_id = getItemId($(this).parent().attr("href"));
  var apiUrl = removeItemFromBoardApiUrl.replace("{board_id}", board_id).replace("{item_id}", item_id);
  var div = $("<div></div>")
    .html('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>')
    .addClass("remove")
    .attr("onclick", "return false;")
    .attr("link", apiUrl)
    .click(removeFromBoard);
  $(this).prepend(div);
});
