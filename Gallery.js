const places = [
{      
    id : 1,
    name : "Fashion",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium at vitae saepe quod \
                velit nam beatae molestias rem architecto mollitia quisquam quis \
                labore voluptatem fugit culpa impedit officia dignissimos. ",
    src : "img/img.jpg",            
},   


{      
    id : 2,
    name : "Women Fashion 2024",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium at vitae saepe quod \
                velit nam beatae molestias rem architecto mollitia quisquam quis \
                labore voluptatem fugit culpa impedit officia dignissimos. ",
    src : "img/img1.jpg",            
},   


{      
    id : 3,
    name : "COLORFUL FACE POWDER",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium at vitae saepe quod \
                velit nam beatae molestias rem architecto mollitia quisquam quis \
                labore voluptatem fugit culpa impedit officia dignissimos. ",
    src : "img/img2.jpg",            
},  


{      
    id : 4,
    name : "face powder new products 2024",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium at vitae saepe quod \
                velit nam beatae molestias rem architecto mollitia quisquam quis \
                labore voluptatem fugit culpa impedit officia dignissimos. ", 
    src : "img/img3.jpg",            
},   



{      
    id : 5,
    name : "our brands products",
    description : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium at vitae saepe quod \
                velit nam beatae molestias rem architecto mollitia quisquam quis \
                labore voluptatem fugit culpa impedit officia dignissimos. ",
    src : "img/img4.jpg",            
}   


]


const imgs = document.querySelectorAll(".all-imgs img");
const currentImage = document.querySelector (".current-img");
const titleImage = document.querySelector (".image-title");
const descImage = document.querySelector (".image-desc");


imgs.forEach((image, index) => {
    image.src = places[index].src;


    image.addEventListener("click", function () {
        currentImage.src = places[index].src;
        titleImage.innerHTML = places[index].name;
        descImage.innerHTML = places[index].description ;

        currentImage.classList.add("animate-imgs");

        setTimeout(function() {
                currentImage.classList.remove ("animate-imgs")
        },400)

    })

})


currentImage.src = places[0].src;
        titleImage.innerHTML = places[0].name;
        descImage.innerHTML = places[0].description ;