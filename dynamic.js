// setup:

// Install JQuery Plugin from here:
// https://github.com/swisnl/jQuery-contextMenu
// DOCS: http://swisnl.github.io/jQuery-contextMenu/

// In HTML file, Create a text field with CSS Class to 'simple-context-menu'
// to attach the context menu


// !!!!!NOTE:
// Creating Dynamic Context Menu is described here:
//https://github.com/swisnl/jQuery-contextMenu/issues/15

// Note when you run it and right click in the above text field a Context Menu
// appears
// Click on any menu item, you will see(the alert box), the menu item index position eg. 0, 1 2...  
// instead of the name of the item clicked in
// I would like to see the name of the menu item 

var menu1_item_names = ['item1', 'item2', 'item3'];
var menu2_item_names = ['item4', 'item5', 'item6'];

$.contextMenu({
    selector: '.test-context-menu',
    build: function($trigger, e) {
        var options = { 
          callback: function(key, options) {
            alert("Clicked on " + key + " on element " + options.$trigger.attr("id"));
            // TODO:
            // Display NAME of the menu item clicked(example: item1)
            //alert("Clicked on item:  " + JSON.stringify(options.items));                    
            return false;
          },
          // start with an empty map
          items: {
            "fold1": { 
              "name": "menu 1",
              "items": {}
            },
            "fold2": {}                  
          }
        };

        $.each(menu1_item_names, function(k, v) {
            options.items.fold1.items[k] = {
             name: v
            };
        });

        if (typeof menu2_item_names !== 'undefined' && menu2_item_names.length > 0) {
          options.items.fold2 = {
                                  "name": "menu 2",
                                  "items": {} 
                                }

          $.each(menu2_item_names, function(k, v) {
              options.items.fold2.items[k] = {
                name: v
              };
          });
        }
          
        options.items.sep1 = "---------";
        options.items.quit = {
            name: "Quit"
        };
        return options;
    }
});

