// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.tyreProducts = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name, description, imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl,
        };

        // Push the item to the items property
        this.tyreProducts.push(item);

        //"12345"  %^ - 2
        //Save items to local storage
        localStorage.setItem("tyreProducts", JSON.stringify(this.tyreProducts));
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("tyreProducts")
        if (storageItems) {
            const tyreProducts = JSON.parse(storageItems)
            for (var i = 0, size = tyreProducts.length; i < size; i++) {
                const item = tyreProducts[i];
                this.tyreProducts.push(item);
            }
        }
    }
}