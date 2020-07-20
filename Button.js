$ui.render({
  views:[{
    type: "button",
    props: {
      title: "Button"
    },
    layout: function(make, view){
      // position of button in a page
      make.center.equalTo(view.super);
      // size of button
      make.width.equalTo(64);
    },
    events: {
      tapped: function(sender){
        $ui.toast("Tapped");
      }
    }
  }]
})