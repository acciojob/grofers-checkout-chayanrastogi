const totalButton = document.querySelector('#total');
      totalButton.addEventListener('click', () => {
        // Get all prices from the table
        const prices = document.querySelectorAll('.price');
        
        // Calculate the total price
        let totalPrice = 0;
        prices.forEach(price => {
          totalPrice += parseInt(price.textContent);
        });
        
        // Create a new row for the total price
        const table = document.querySelector('table');
        const newRow = table.insertRow();
        const newCell= newRow.insertCell();
        newCell.setAttribute('colspan', '2');
        newCell.textContent = `${totalPrice}`;
      });