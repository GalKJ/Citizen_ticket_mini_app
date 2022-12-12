// Global variables.
    const colourButton = document.querySelector('#colour-button');
    const iconButton = document.querySelector('#icon-button');
    const colourSelectorContainer = document.querySelector('.colour-selector-container-closed');
    const iconSelectorContainer = document.querySelector('.icon-selector-container-closed');
    const colourInputs = document.querySelectorAll('.colour-inputs');
    const iconInputs = document.querySelectorAll('.icon-inputs');
    const iconContainer = document.querySelector('#icon-container');
    const gridPickerIcon = document.querySelector('#grid-picker-icon');
    const categoryInput = document.querySelector('#category-input');
    const nextButton = document.querySelector('#next-button');
    const backButton = document.querySelector('#back-button');
    const categoryDisplay = document.querySelector('.category-display-closed');


    const categories = [];
    let incrementId = 0;

// Object class
    class Category {
        constructor(name, icon, colour) {
            incrementId++;
            this.name = name;
            this.icon = icon;
            this.colour = colour;
            this.active = false;
        }
    }

// Colour picker
    colourButton.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        // console.log(colourSelectorContainer.classList);

        if (colourSelectorContainer.className === ('colour-selector-container-closed')) {
            colourSelectorContainer.classList.remove('colour-selector-container-closed');
            colourSelectorContainer.classList.add('colour-selector-container-open');
        } else if (colourSelectorContainer.className === 'colour-selector-container-open') {
            colourSelectorContainer.classList.remove('colour-selector-container-open');
            colourSelectorContainer.classList.add('colour-selector-container-closed');
        }
    });
    
    function changePickerGridBackground (e) {
            iconContainer.style.background = e.currentTarget.value;
    }

    colourInputs.forEach(input => {
        input.addEventListener('input', changePickerGridBackground)
    });


// Icon picker
    iconButton.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        // console.log(iconSelectorContainer.classList);

        if (iconSelectorContainer.className === ('icon-selector-container-closed')) {
            iconSelectorContainer.classList.remove('icon-selector-container-closed');
            iconSelectorContainer.classList.add('icon-selector-container-open');
        } else if (iconSelectorContainer.className === 'icon-selector-container-open') {
            iconSelectorContainer.classList.remove('icon-selector-container-open');
            iconSelectorContainer.classList.add('icon-selector-container-closed');
        }
    });


    function changePickerGridIcon (e) {
            gridPickerIcon.src = e.currentTarget.src;
    }

    iconInputs.forEach(input => {
        input.addEventListener('click', changePickerGridIcon)
    });

// Next button
    function renderNewCategory() {
        const name = categoryInput.value;
        const icon = gridPickerIcon.src;
        const colour = iconContainer.style.background;
        const newCategory = new Category (name, icon, colour);
        console.log(newCategory);

        // categoryDisplay.innerHTML = `
        // <h3 style="color: white;">New Category</h3>
        // <p style="font-size: 2rem; color: white;">${name}</p>
        // <div id="icon-container" style="background: ${colour};">
        //     <img
        //       src="${icon}"
        //       id="grid-picker-icon"
        //       class="grid-picker-icon"
        //       alt=""
        //     />
        //   </div>
        //   <div id="back-button-container">
        //     <button id="back-button" class="next-back-buttons">Back</button>
        //   </div>
        //   `
        const categoryDisplayParagraph = document.querySelector('#category-display-paragraph');
        const categoryDisplayIcon = document.querySelector('#category-display-icon');
        const categoryDisplayIconContainer = document.querySelector('#category-display-icon-container');
        
        categoryDisplayParagraph.textContent = name;
        categoryDisplayIcon.src = icon;
        categoryDisplayIconContainer.style.background = colour;

        categoryDisplay.classList.replace('category-display-closed', 'category-display-open');
    }

    nextButton.addEventListener('click', renderNewCategory);

// Back button
    function addNewCategoryToList () {
        const activeCategoryList = document.querySelector('#active-category-list');
        console.log(activeCategoryList);
    }

    backButton.addEventListener('click', addNewCategoryToList);
    

            

