// setup:

// Install JQuery Plugin from here:
// https://github.com/swisnl/jQuery-contextMenu
// DOCS: http://swisnl.github.io/jQuery-contextMenu/

// In HTML file, Create a text field with CSS Class to 'simple-context-menu'
// to attach the context menu

// Note when you run it and right click in the above text field a Context Menu
// appears
// Click on any menu item, you will see the name of the item click in the alert box
// For example: If you clicked on menu item 'ITEM1', The alert box will say 'ITEM1' was clicked

$.contextMenu({
  selector: '.simple-context-menu', 
  callback: function(itemKey, opt){ 
      // Alert the key of the item and the trigger element's id.
       alert("Clicked on " + itemKey + " on element " + opt.$trigger.attr("id"));
      return false;
  },
  items: {
    "fold1": {
        "name": "menu1", 
        "items": {
            "ITEM1": {"name": "ITEM1"},
            "ITEM2": {"name": "ITEM2"},
            "ITEM3": {"name": "ITEM3"},
            "ITEM4": {"name": "ITEM4"},                      
            "ITEM5": {"name": "ITEM5"}
            }
        }
    }
});
