const searchFood=()=>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    searchField.value='';
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data.meals));

}


const displaySearchResult=foods=>{
   console.log(foods);
   const searchResult=document.getElementById('searchresult');
   foods.forEach(food => {
       console.log(food);
       const detail=food.strInstructions;
       const detailShort=detail.slice(0, 200);
       const div=document.createElement('div');
       div.classList.add('col');
       div.innerHTML=`
       <div onclick="loadFoodDetail(${food.idMeal})" class="card h-100">
       <img src="${food.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${food.strMeal}</h5>
         <p class="card-text">${detailShort}</p>
       </div>
     </div>
       `;
       searchResult.appendChild(div);
   });

}

const loadFoodDetail=foodDetail=>{
console.log("test");
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodDetail}`;
fetch(url)
.then(res=>res.json())
.then(data=>displayFoodDetail(data.meals[0]))
}

const displayFoodDetail=foodDetaildata=>{
     const foodDetailBox=document.getElementById('displayfooddetalbox');
     const div=document.createElement('div');
     div.classList.add('col');
     div.innerHTML=`
     <div class="card">
     <img src="${foodDetaildata.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title">${foodDetaildata.strMeal}</h5>
       <p class="card-text">${foodDetaildata.strInstructions.slice(0,100)}</p>
       <a href="${foodDetaildata.strYoutube}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
     `;
     foodDetailBox.appendChild(div);
}

