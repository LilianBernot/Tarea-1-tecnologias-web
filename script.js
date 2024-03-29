
const addButton = document.getElementById('add-button');
const titleInput = document.getElementById('title-input');
const ingredientsInput = document.getElementById('ingredients-input');
const imageInput = document.querySelector('#image-input');
const descriptionInput = document.getElementById('description-input');
const containerRecetas = document.querySelector('.container_recetas');

function verifyReceta(title, ingredients, image, description) {
    if ( title.length === 0 || ingredients.length === 0 || image === './src/assets/imgs/undefined' || description.length === 0 ) {
        return false
    } else {
        return true
    }
}

addButton.addEventListener('click', () => {
    const title = titleInput.value;
    const ingredients = ingredientsInput.value;
    const imageFile = imageInput.files[imageInput.files.length - 1] || {};
    const image = `src/assets/imgs/${imageFile.name}`;
    const description = descriptionInput.value;

    // Verify that inputs are good
    if (!verifyReceta(title, ingredients, image, description)) {
        window.alert("Los inputs deben estar completos");
        return false;
    }

    const receta = createRecetaElement(title, ingredients, image, description);
    containerRecetas.appendChild(receta);

    return true;
});

// Create a card element
function createRecetaElement(title, ingredients, image, description) {
    const receta = document.createElement('div');
    receta.classList.add('receta');

    receta.innerHTML = `
        <h2>${title}</h2>
        <div class="wrapper">
            <div class="imagen_grid"> <img src="${image}" class="flottant"></div>
            <div class="ingredientes_grid">
                <div class="ingredientes">
                    <h3>Ingredientes</h3>
                    ${ingredients}
                </div>
            </div>
        </div>
        <div class="preparacion">
            <h4>Preparación</h4>
            Estos son los pasos a seguir:
            <p>${description}<p>
        </div>
        <div class="retour_intro">
            <p><a href="#menu">Al menu !</a></p>
        </div>
    `;
    return receta;
}
