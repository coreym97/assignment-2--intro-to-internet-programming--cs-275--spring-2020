let whiteRice = document.querySelector(`[white-rice]`);
let sproutRice = document.querySelector(`[sprout-rice]`);
let riceType = document.querySelector(`[rice-type]`);
let ingredients = document.querySelector(`[ingredients]`);
let recipe = document.querySelector(`[recipe]`);

whiteRice.onchange = () => {
    let rice = whiteRice.value;
    let water = 2*rice;
    let oil = 1*rice;
    riceType.innerHTML = `White Rice`;
    ingredients.innerHTML = `<h2>Ingredients</h2>
        <ul>
            <li>${rice} cup White Rice
            <li>${water} cups Water
            <li>${oil} Tbsp Olive oil
        </ul>`;
    recipe.innerHTML = `<h2>Recipe</h2>
        <ol>
            <li>Combine ingredients
            <li>Bring to a boil
            <li>Reduce heat to lowest setting
            <li>Cook for 18 minutes
        </ol>`;
};

sproutRice.onchange = () => {
    let rice = sproutRice.value;
    let riceOz = rice*8;
    let water = 1.6*rice;
    let waterOz = water*8;
    let oil = 0.8*rice;
    let oilOz = 0.5*oil;
    rice = Math.round(rice*100)/100;
    riceOz = riceOz.toFixed(2);
    water = water.toFixed(2);
    waterOz = waterOz.toFixed(2);
    oil = oil.toFixed(2);
    oilOz = oilOz.toFixed(2);
    riceType.innerHTML = `California Sprouted Rice`;
    ingredients.innerHTML = `<h2>Ingredients</h2>
        <ul>
            <li>${rice} cup or ${riceOz} oz California Sprouted Rice
            <li>${water} cup or ${waterOz} oz Water
            <li>${oil} Tbsp or ${oilOz} oz Olive oil
        </ul>`;
    recipe.innerHTML = `<h2>Recipe</h2>
        <ol>
            <li>Combine ingredients
            <li>Bring to a boil and stir once to mix
            <li>Reduce heat to low and cover
            <li>Cook for 25 minutes
            <li>Let Stand for 5 minutes
            <li>Fluff with a fork then serve
        </ol>`;
};
