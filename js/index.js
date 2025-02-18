const numCount = document.getElementById("numCount");
console.log(numCount);

let numData = [
  {
    num: 1650,
    desc: "Project Complete",
  },
  {
    num: 502,
    desc: "Happy Customers",
  },
  {
    num: 16,
    desc: "Years of Experience",
  },
  {
    num: 10,
    desc: "Award Winning",
  },
];

numData.map((value) => {
  numCount.innerHTML += `
        <div class="col-6 col-md-6 col-lg-6 col-xl-3 px-5 d-flex align-items-center justify-content-center gap-3">
            <span class="fw-bold display-3">${value.num}+</span><p class="px-4 fw-bold" d-flex flex-column >${value.desc}</p>
        </div>
    `;
});

let accordCount = document.getElementById("accordionFlushExample");
console.log(accordCount);

let accordData = [
  {
    src: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-window-split" viewBox="0 0 16 16">
        <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h6.5v8H2a1 1 0 0 1-1-1m7.5 1V6H15v7a1 1 0 0 1-1 1z"/>
        </svg>`,
    title: "Web Application Development",
  },
  {
    src: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
        </svg>`,
    title: "Front-End Developer",
  },
  {
    src: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
        <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
        </svg>`,
    title: "API Development",
  },
  {
    src: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16">
        <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
        </svg>`,
    title: "Back-End Developer",
  },
];

accordData.map((value, i) => {
  accordCount.innerHTML += `
    
<div >
    <div style="width:100%;">
        <div class="accordion-item">
            <h2 class="accordion-header p-3">
                <div class="d-flex gap-3 align-items-center accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
                    <div style="color: #5777FF;">${value.src}</div>
                    <h3 class="fw-bolder m-0">${value.title}</h3 class="fw-bolder">
                </div>
            </h2>
            <div id="flush-collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><P>Ensure your website is responsive for optimal viewing on various devices. <a href="#">Read more</a></P></div>
            </div>
        </div>
    </div>
</div>
    
    `;
});

const carousalCount = document.getElementById("carousalCount");
console.log(carousalCount);

let carousalInfo = [
  {
    src: "./assets/png/carousal-img-1.png",
    title: "API Devlopment",
  },
  {
    src: "./assets/png/carousal-img-2.png",
    title: "Web Devlopment",
  },
  {
    src: "./assets/png/carousal-img-3.png",
    title: "React Devlopment",
  },
  {
    src: "./assets/png/carousal-img-4.png",
    title: "Java Devlopment",
  },
];

carousalInfo.map((value) => {
  carousalCount.innerHTML += `

  <div style="background-image: url();" class="caro-card">
      <div style="background-image: url(${value.src}); background-repeat: no-repeat; background-position: center;"
          class="col-11 d-flex flex-column align-items-start justify-content-end  h-100 mx-auto bg-primary">                            
         <div class="mx-2">
            <p class="m-0 fw-bold text-white">Mern Stack</p>
            <h3 class="fw-bolder text-white">${value.title}</h3>
         </div>
      </div>
  </div>

`;
});

let workExp = document.getElementById("workExp");console.log(workExp);

let workExpInfo = [
  {
    titleLeft:"Web Developer",
    descLeft:"2021 - 20023 (Present)",
    titleRight:"Envato Marketplace",
    descRight:""
  },
  {
    titleLeft:"Online Marketing",
    descLeft:"",
    titleRight:"Sr. Developer",
    descRight:"2019 - 2020"
  },  {
    titleLeft:"UI/UX Designer",
    descLeft:"2018 - 2019",
    titleRight:"Dribbble",
    descRight:""
  },  {
    titleLeft:"Upwork Market",
    descLeft:"",
    titleRight:"Jr. Developer",
    descRight:"2016 - 2017"
  },
]

workExpInfo.map((value) => {
  workExp.innerHTML += `
  
  <div class=" position-relative d-flex align-items-start  justify-content-between">
      <div class="pb-5">
          <h5 class="fw-bolder">${value.titleLeft}</h5>
          <p>${value.descLeft}</p>
      </div>
      <div class="position-absolute start-50">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <div style="border: 1px dashed;" class="rounded-circle py-1 px-2 border-black"><span style="background-color: #5777ff; padding: 1px 10px;" class="rounded-circle"></span></div>
          <div style="border: 1px dashed black; width: 0px; height: 90px;"></div>
        </div>
      </div>      
      <div class="pb-5">
          <h5 class="fw-bolder">${value.titleRight}</h5>
          <p>${value.descRight}</p>
      </div>
  </div>
  
  `
})

let secEducation = document.getElementById("secEducation");console.log(secEducation);


let educationInfo = [
  {
    titleLeft:"Web Design Course",
    descLeft:"2021 - 20023 (Present)",
    titleRight:"University of California",
    descRight:""
  },
  {
    titleLeft:"University of California",
    descLeft:"",
    titleRight:"Bsc In CSE",
    descRight:"2016 - 2020"
  },  {
    titleLeft:"Diploma In CSE",
    descLeft:"2016 - 2016",
    titleRight:"University of California",
    descRight:""
  },  {
    titleLeft:"University of California",
    descLeft:"",
    titleRight:"Higher Secondary",
    descRight:"2010 - 2012"
  },
]

educationInfo.map((value) => {
  secEducation.innerHTML += `
  
  <div class=" position-relative d-flex align-items-start  justify-content-between">
      <div class="pb-5">
          <h5 class="fw-bolder">${value.titleLeft}</h5>
          <p>${value.descLeft}</p>
      </div>
      <div class="position-absolute start-50">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <div style="border: 1px dashed;" class="rounded-circle py-1 px-2 border-black"><span style="background-color: #5777ff; padding: 1px 10px;" class="rounded-circle"></span></div>
          <div style="border: 1px dashed black; width: 0px; height: 90px;"></div>
        </div>
      </div>      
      <div class="pb-5">
          <h5 class="fw-bolder">${value.titleRight}</h5>
          <p>${value.descRight}</p>
      </div>
  </div>
  
  `
})





