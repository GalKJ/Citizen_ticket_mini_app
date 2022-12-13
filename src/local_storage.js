// Function to create object in local storage if it doesn't exist and render it in the UI.
function populateStorage(element) {

    localStorage.setItem('Categories', '[]');
    

    let classArray = localStorage.getItem('Categories');
    

    element.value = JSON.parse(classArray);
}

// Function to get values from local storage and render them in the UI.
function updateCategoryArray(element) {

    let classArray = localStorage.getItem('Categories');
    
    
    element.value = JSON.parse(classArray);
}
