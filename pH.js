const loadCategory = async () => {
    
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json()
    // console.log(data)
    const categoryBtn = document.getElementById("category-btn");

    data.data.forEach(category => {
        // console.log(category.category_id === '1005')
        const div = document.createElement('div')
        div.innerHTML = `
    <button onclick="displayCategory('${category.category_id}')" class="btn btn-sm">${category.category}</button>
    `
        categoryBtn.appendChild(div)
        // console.log(category.length)
    });
}






const displayCategory = async (id) => {
    
    console.log(id )

    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
    const category = await res.json();
    //  console.log(category.data);
    const disPlayId = document.getElementById("cart-container");
    disPlayId.innerHTML = ""

    category.data.forEach((video) => {



        function secondsToOthers(seconds) {
           
            const totalMinutes = Math.floor(seconds / 60);
          
            const hours = Math.floor(totalMinutes / 60);
            const remainingMinutes = totalMinutes % 60;
          
            return {
              hours: hours,
              minutes: remainingMinutes
            };
          }
          
          const totalSeconds = `${video.others.posted_date}`;
          const time = secondsToOthers(totalSeconds);
          
        


        console.log(video)

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card glass">
      <figure><img src=${video.thumbnail} alt=""/>
      
      </figure>
      
      <p class="mt-[-25px] text-white bg-black w-44 ml-2 " >
      Hours: ${time.hours? time.hours: "0"} Minutes: ${time.minutes? time.minutes: "0"}ago
      </p>
      <div class="card-body">

      <div class="flex ">
      <div class="w-10 rounded-full mr-4">
      <img src=${video.authors[0].profile_picture} />
    </div>
        <div>
        <h2 class="card-title bold-lg text-3xl">${video.title}</h2>
         </div>
      </div>
       
      <div class="flex">
       <div>
       
       <h2 class=" text-xl ml-14 ">${video.authors[0].profile_name}</h2>
       </div>
       <div>
          
       </div>
      </div>
        
       
        <p class="text-xl font-bold">Views: ${video.others.views}</p>
       
      </div>
    </div> 

            `;
          
                disPlayId.appendChild(div);
               
          
    })


    // console.log(category)
}


const sort =()=>{
    
}

loadCategory()
displayCategory(1000)