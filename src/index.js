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
            this.id = incrementId;
        }
    }

// Colour picker
    colourButton.addEventListener('click', (e) => {
        
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
    iconButton.addEventListener('click', () => {
        
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
        categories.push(newCategory);
        
        const categoryDisplayParagraph = document.querySelector('#category-display-paragraph');
        const categoryDisplayIcon = document.querySelector('#category-display-icon');
        const categoryDisplayIconContainer = document.querySelector('#category-display-icon-container');
        
        categoryDisplayParagraph.textContent = newCategory.name;
        categoryDisplayIcon.src = newCategory.icon;
        categoryDisplayIconContainer.style.background = newCategory.colour;

        categoryDisplay.classList.replace('category-display-closed', 'category-display-open');
    }

    nextButton.addEventListener('click', renderNewCategory);

    function closeCategoryDisplay() {
        categoryDisplay.classList.replace('category-display-open', 'category-display-closed');
        backButton.removeEventListener('click', closeCategoryDisplay);
        backButton.addEventListener('click', manageNewCategoryList);
    }



// Back button
    function manageNewCategoryList (e) {
        const activeCategoryList = document.querySelector('#active-category-list');
        const categoryDisplayParagraph = document.querySelector('#category-display-paragraph');
        const categoryDisplayIcon = document.querySelector('#category-display-icon');
        const categoryDisplayIconContainer = document.querySelector('#category-display-icon-container');
        const newListItem = document.createElement('li');
        newListItem.classList = ('category-list-item stack margin-left')
        newListItem.id = incrementId;

        newListItem.innerHTML = `
        <h2>${categoryDisplayParagraph.textContent}</h2>
        <div id="icon-container" style="background: ${categoryDisplayIconContainer.style.background};">
            <img
              src="${categoryDisplayIcon.src}"
              id="grid-picker-icon"
              class="grid-picker-icon"
              alt=""
            />
          </div>
          <i class="fa-solid fa-trash trash-icons"></i>
        `
        activeCategoryList.appendChild(newListItem)

        categoryDisplay.classList.replace('category-display-open', 'category-display-closed');

        const trashCanIcons = document.querySelectorAll('.trash-icons');
        
        trashCanIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                const listItem = e.target.closest('li');
                listItem.remove();
                e.stopPropagation();
            })
        })

        const newListItems = document.querySelectorAll('.category-list-item');
        
        newListItems.forEach(item => {
            item.addEventListener('click', (e) => {

                const currentItem = categories.find(object => object.id == e.currentTarget.id);
                
                categoryDisplayParagraph.textContent = currentItem.name;
                categoryDisplayIcon.src = currentItem.icon;
                categoryDisplayIconContainer.style.background = currentItem.colour;

                categoryDisplay.classList.replace('category-display-closed', 'category-display-open');

                backButton.removeEventListener('click', manageNewCategoryList);
                backButton.addEventListener('click', closeCategoryDisplay);
            })
        })
    }

    backButton.addEventListener('click', manageNewCategoryList);
    

            

