function showFood(){

    let cuisine =
    document.getElementById("cuisine").value;

    let result =
    document.getElementById("result");

    if(cuisine=="biryani"){

        result.innerHTML=`
        <h2>🍛 Chicken Biryani</h2>

        <h3>Ingredients</h3>
        <ul>
            <li>Chicken</li>
            <li>Basmati Rice</li>
            <li>Onion</li>
            <li>Tomato</li>
            <li>Spices</li>
        </ul>

        <h3>Preparation Process</h3>
        <ol>
            <li>Marinate chicken.</li>
            <li>Fry onions.</li>
            <li>Add spices.</li>
            <li>Cook chicken.</li>
            <li>Add rice.</li>
            <li>Cook for 20 minutes.</li>
        </ol>

        <h3>Cooking Time</h3>
        <p>45 Minutes</p>
        `;
    }

    else if(cuisine=="noodles"){

        result.innerHTML=`
        <h2>🍜 Hakka Noodles</h2>

        <h3>Ingredients</h3>
        <ul>
            <li>Noodles</li>
            <li>Vegetables</li>
            <li>Soy Sauce</li>
        </ul>

        <h3>Preparation Process</h3>
        <ol>
            <li>Boil noodles.</li>
            <li>Fry vegetables.</li>
            <li>Add sauces.</li>
            <li>Mix noodles.</li>
        </ol>

        <h3>Cooking Time</h3>
        <p>20 Minutes</p>
        `;
    }

    else if(cuisine=="pizza"){

        result.innerHTML=`
        <h2>🍕 Italian Pizza</h2>

        <h3>Ingredients</h3>
        <ul>
            <li>Pizza Base</li>
            <li>Cheese</li>
            <li>Sauce</li>
        </ul>

        <h3>Preparation Process</h3>
        <ol>
            <li>Prepare the base.</li>
            <li>Add sauce.</li>
            <li>Add toppings.</li>
            <li>Bake.</li>
        </ol>

        <h3>Cooking Time</h3>
        <p>30 Minutes</p>
        `;
    }

    else{
        result.innerHTML="";
    }
}