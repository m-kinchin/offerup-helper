var webApiUrl = window.location.href.replace("/board","/webapi/offer_boards/v1/boards").slice(0, -1);

$("#board-items a.db-item-tile > div").each(function() {
  var styles = {
    position: "absolute",
    pointer: "cursor",
    "z-index": "1",
    "padding-left": "4px",
    "border-radius": "0.5rem",
    "padding-right": "4px",
    "line-height": "20px",
    "margin-left": "calc(100% - 21px)",
    background: "#00ab80"
  };
  var href = $(this).parent().attr("href").replace("/detail","").replace("/item","/items");
  console.log(webApiUrl + href);
  var div = $("<div></div>")
    .html('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>')
    .css(styles)
    .attr("onclick", "return false;")
    .attr("link", webApiUrl + href)
    .click(onXClick);
  $(this).prepend(div);
});

function onXClick(e) {
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
