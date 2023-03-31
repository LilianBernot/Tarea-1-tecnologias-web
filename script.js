
const addButton = document.getElementById('add-button');
const titleInput = document.getElementById('title-input');
const imageInput = document.querySelector('#image-input');
const descriptionInput = document.getElementById('description-input');
const containerRecetas = document.querySelector('.container_recetas');


function verifyReceta(title, image, description) {
    if ( title.length === 0 || image === './src/assets/imgs/undefined' || description.length === 0 ) {
        return false
    } else {
        return true
    }
}


// Save card and add it to the cards section
addButton.addEventListener('click', () => {
    const title = titleInput.value;
    const imageFile = imageInput.files[imageInput.files.length - 1] || {};
    const image = `src/assets/imgs/${imageFile.name}`;
    const description = descriptionInput.value;

    // Verify that inputs are good
    if (!verifyReceta(title, image, description)) {
        window.alert("Los inputs deben estar completos");
        return false;
    }

    // Creamos la carta, notar que más abajo debemos completar la función
    // createCardElement
    const receta = createRecetaElement(title, image, description);

    // TODO: agregar la carta a la sección de cartas (HINT: appendChild)
    containerRecetas.appendChild(receta);

    // TODO: guardar la tarjeta nueva en localStorage
    // saveCardToLocalStorage(title, image, description);

    return true;
});

// Create a card element
function createRecetaElement(title, image, description) {
    const receta = document.createElement('div');
    receta.classList.add('receta');

    // TODO: Modificar el innerHTML de la carta
    // para mostrar la imagen, título y descripción
    // aquí pueden usar las clases card-title y card-description del CSS.
    receta.innerHTML = `
        <h2>${title}</h2>
        <div class="wrapper">
            <div class="imagen_grid"> <img src="${image}" class="flottant"></div>
            <div class="ingredientes_grid">
                <div class="ingredientes">
                    <h3>Ingredientes</h3>
                    <ul>
                        <li>pocas</li>
                        <li>ingre</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="preparacion">
            <h4>Preparación</h4>
            Estos son los pasos a seguir:
            <p>${description}<p>
            Conclusion
        </div>
        <div class="retour_intro">
            <p><a href="#menu">Al menu !</a></p>
        </div>
    `;

    

    return receta;
}
