
let testimoni = document.getElementById("testimoni");console.log(testimoni);

let testimoniInfo = [ 
    {
        src:"./assets/jpg/user-thumb-01.jpg",
        name:"Johnny Deep",
        post:"Ceo",
        intervalTime:10000,
        act:"active"
    },
    {
        src:"./assets/jpg/user-thumb-02.jpg",
        name:"Crysta Deep",
        post:"customer",
        intervalTime:2000,
        act:""
    },
    {
        src:"./assets/jpg/user-thumb-03.jpg",
        name:"Jakson S.",
        post:"customer",
        intervalTime:3000,
        act:""
    },
    {
        src:"./assets/jpg/user-thumb-04.jpg",
        name:"Tom Hanks",
        post:"customer",
        intervalTime:4000,
        act:""
    },
]

testimoniInfo.map((value) =>{
    testimoni.innerHTML += `
    
    <div class="carousel-item ${value.act}" data-bs-interval="${value.intervalTime}">
        <div class="d-flex align-items-center flex-column justify-content-center">
            <h3 class="text-center mb-4">
                Photo recently engage worldwide methodologies with in web-enabled technology.
                Interactively coordi proactive commerce via process centric outside the thinking this
                pursue technology scalable.                                        
            </h3>                                            
            <div class="row">   
                <div class="col-6 mb-5 d-flex align-items-center justify-content-end">
                    <img style="width: 25%;" src=${value.src} class="d-block rounded-circle" alt="..."> 
                </div>                                                                                
                <div class="col-6 mb-5">
                    <h5>${value.name}</h5>
                    <p>${value.post}</p>
                </div>
            </div>                                            
        </div>
    </div>    

    `
})
