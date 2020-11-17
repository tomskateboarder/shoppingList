// enter items needed for purchase by entering text and hitting "Return" or clicking the "Add item" button
 // uncheck items on the list by clicking the "Check" button

// permanently remove items from the list

$(function(){
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const listItem = $('.js-shopping-list-entry').val();
  
      $('#shopping-list-entry').val('');
  
  
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
  
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
  
  });