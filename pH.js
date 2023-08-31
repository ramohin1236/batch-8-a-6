const loadCategory = async()=>{
 const response= await fetch("https://openapi.programming-hero.com/api/videos/categories");
 const data = await response.json()
 console.log(data)
 const categoryBtn= document.getElementById("category-btn");
 
 data.data.forEach(category => {
    const div= document.createElement('div')
    div.innerHTML=`
    <button onclick="displayCategory('${category.category_id}')" class="btn btn-sm">${category.category}</button>
    `
    categoryBtn.appendChild(div)
    // console.log(category)
 });
}
const displayCategory =async(id)=>{
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
    const category= await res.json();
    //  console.log(category.data);
    const disPlayId = document.getElementById("cart-container");
    disPlayId.innerHTML=""

    category.data.forEach((video)=>{
 console.log(video)
        
            const div =document.createElement('div');
            div.innerHTML=`
            <div class="card glass">
      <figure><img src=${video.thumbnail} alt="car!"/></figure>
      <div class="card-body">
        <h2 class="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
            `;
            disPlayId.appendChild(div);
          
        

        console.log(video)
    })
    

    // console.log(category)
}




loadCategory()
displayCategory(1000)