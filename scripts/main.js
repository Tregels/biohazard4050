$(document).ready(function(){
  $("#nav-placeholder").load("static-elements/nav.html");
  $("#footer-placeholder").load("static-elements/footer.html");

  //Init stuff
  $('ul.tabs').tabs('select_tab', 'tab_id');
});

$("#home-slider").glide({
  type: "carousel",
  autoheight: "true"
});