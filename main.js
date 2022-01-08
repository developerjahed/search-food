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
       const div=document.createElement('div');
       div.classList.add('col');
       div.innerHTML=`
       <div class="card">
       <img src="..." class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
     </div>
       `;
       searchResult.appendChild(div);
   });

}