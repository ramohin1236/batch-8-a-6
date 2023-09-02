const loadCategory = async () => {

    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json()
    // console.log(data)
    const categoryBtn = document.getElementById("category-btn");
    //  console.log(data.data.length)
    data.data.forEach(category => {
        console.log(category.category)
        // if(category.category === "Drawing"){
        //     console.log("drawondf")
        // }
        // else{
        //     console.log("not")
        // }
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

    // console.log(id )


    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
    const category = await res.json();
    //  console.log(category.data);
    const disPlayId = document.getElementById("cart-container");
    const displayError= document.getElementById("div-container")
    disPlayId.innerHTML = ""

    category.data.forEach((video) => {

        console.log(video.category_id);

        if (video.category_id === "1001" && video.category_id === "1003" ) {

             alert("there is no data")
            // times calculation
            console.log("dhureraw");
            const div = document.createElement('div');
            div.innerHTML = `
      ${video.title}
        `;
        displayError.appendChild(div);

          
        }

        else{
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
            //end time calculation   



            // console.log(video)

            const div = document.createElement('div');


            var times = {
                hours: time.hours,
                minutes: time.minutes
            };

            div.innerHTML = `
    <div class="card glass">
<figure><img src=${video.thumbnail} alt=""/>

</figure>

<p class="mt-[-25px] text-white bg-black w-44 ml-2 " >
Hours: ${times.hours} Minutes: ${times.minutes}ago
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

        }

      



        // console.log(id.length)


        const views = video.others.views;
        const newA = new Array(views)
        newA.push(views)
        // console.log(newA);
        //     const stored= views.sort()
        //    console.log(stored)
        //     const number= parseFloat(views)
        //     console.log(number)   
        //     category.data.sort(function(a, b) {

        //         return a.views - b.views;

        //       });   

    })




    // console.log(category)
}

const sort = async (id) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${id}`)
    const category = await res.json();
    // console.log(category)
    category.data.forEach((v) => {
        // const views = v;
        console.log(v)
    })
    // const number= parseFloat(views)
    // console.log(number)   
    // category.data.sort(function (a, b) {
    //     return a.number - b.number;
    //   }); 
}

const blog =()=>{
    window.location.href='https://64f31fdfd2209b6d91574bfd--comfy-granita-eb0703.netlify.app/'
}


loadCategory()
displayCategory(1000)