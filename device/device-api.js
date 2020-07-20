// prepare data
const data = [
  {
    name: "$device",
    page: {
      views: [
        {
          type: "list",
          props: {
            data: ["info", "space", "SSID"],
          },
          layout: $layout.fill,
          events: {
            didSelect(tableView, { row }) {
              switch (row) {
                case 0:
                  $ui.alert($device.info);
                  break;
                case 1:
                  $ui.alert($device.space);
                  break;
                case 2:
                  $ui.alert($device.ssid.SSID);
                  break;
                default:
                  break;
              }
            },
          },
        },
      ],
    },
  },
];


data.forEach(({ page, name }) => {
  page.props = {
    title: name,
  };
});

// Prepare view
$ui.render({
  props: {
    title: "device API ",
  },
  views: [
    {
      type: "list",
      props: {
        id: "main-list",
      },
      layout: $layout.fill,
      events: {
        didSelect(tableView, { row }) {
          $ui.push(data[row].page);
        },
      },
    },
  ],
});

// Render
$("main-list").data = data.map(({ name }) => name);


