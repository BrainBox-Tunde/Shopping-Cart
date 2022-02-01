// renderShoppingList => "A shopping list should be rendered to the page"
// handleNewItemSubmit => "You should be able to add items to the list"
// handleItemCheckClicked => "You should be able to check items on the list"
// handleDeleteItemClicked() => "You should be able to delete items from the list"
$(function () {
    $('#js-shopping-list-form').submit(
        function (event) {
            event.preventDefault()
            let value = $("#shopping-list-entry").val();
            $('ul').append(`
      <li>
      <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `)
            $("#shopping-list-entry").val('');
        })
    $('ul').on('click', '.shopping-item-delete', function () {
        $(this).parent().parent().remove();
    })
    $('ul').on('click', '.shopping-item-toggle', function () {
        const input = $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked')
        console.log(input)
    })

    
})