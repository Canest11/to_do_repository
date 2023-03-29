
// const main = document.getElementById("main");
// console.log(main);

// const listItems = document.getElementsByTagName("li");
// const listItems = document.getElementsByClassName("example-list-item");
// console.log(listItems);


// QUERY SELECTORS
// let main = document.querySelector("#main");
// console.log("Main: ", main);
// main = document.querySelector("[data-main-el]");
// console.log("Ex2 Main", main);
// querySelectorAll - returns an array
// const listItems = document.querySelectorAll(".example-list-item");
// const listItems = document.querySelectorAll("li");
// console.log("List items: ", listItems);


const pageWrapper = document.getElementById("page-wrapper");
// create element
const greeting = "Hello, world!";
const header = document.createElement("header");
header.innerHTML = `
    <h1 class="text-center">${greeting}</h1>
`;

// header.classList = "bg-dark text-light m-0";
// header.classList.add("bg-dark", "text-light")
// console.log(header.classList);
// header.classList.remove("bg-dark");
// console.log(header.classList);
// header.classList.replace("text-light", "text-info");
// console.log(header.classList);

header.classList.add("bg-dark", "text-light", "m-0", "p-2");
header.style.height = "120px";

pageWrapper.appendChild(header);


const main = document.createElement("main");
main.id="main-section";
main.classList.add("container", "py-2", "px-4", "my-4");


const p = document.createElement("p");
p.classList.add("text-monospace");
p.textContent = "I'm in the main section.";

// const columnWrapper = `
// <div class="row">
//     <div class="col-md-6 col-sm-12">
//         <section>
//             <h1>Section One</h1>
//         </section>
//     </div>
// </div>
// `;

main.appendChild(p);
// main.innerHTML = columnWrapper;
pageWrapper.appendChild(main);


//function createCustomEl(element) {
    // alert("This is my custom element function!");
    // const paragraphTag = document.createElement("p");
    // paragraphTag.classList.add("text-center");

    // return paragraphTag;  
    


//function createCustomElEx(element, text, classes = []) {
    //const el = document.createElement(element);
    //el.textContent ===main;
    //if(classes.length >=1) {
        //el.class.add(...classes);
        //return el;
    //} else {
      // return el; 
    //}
    






//console.log(createCustomElEx(""));
// console.log(createCustomEl("ul"));

//const main2 = createCustomEl("main, [bg-info]")
//const header2 = createCustomEl("header");
//console.log(main2);