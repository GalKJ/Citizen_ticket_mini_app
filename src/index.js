    
    const colourButton = document.querySelector('#colour-button');
    const colourSelectorContainer = document.querySelector('.colour-selector-container-closed');
    const colourInputs = document.querySelectorAll('.colour-inputs');
    const iconContainer = document.querySelector('#icon-container');



    colourButton.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        console.log(colourSelectorContainer.classList);

        if (colourSelectorContainer.className === ('colour-selector-container-closed')) {
            console.log('closed');
            colourSelectorContainer.classList.remove('colour-selector-container-closed');
            colourSelectorContainer.classList.add('colour-selector-container-open');
        } else if (colourSelectorContainer.className === 'colour-selector-container-open') {
            console.log('open');
            colourSelectorContainer.classList.remove('colour-selector-container-open');
            colourSelectorContainer.classList.add('colour-selector-container-closed');
        }
    });

    function changeBackgroundColour (e) {
            iconContainer.style.background = e.currentTarget.value;
    }

    colourInputs.forEach(input => {
        input.addEventListener('input', changeBackgroundColour)
    });

            
    
    class Category {
        constructor(name, icon, colour) {
            this.name = name;
            this.icon = icon;
            this.colour = colour;
        }
    }

    // const category = new Category ()

