{
 let tasks = [];

 

 const render = () => {
    let htmlString = "";

    for(const task of tasks) {
        htmlString += ` 
        <li>
            ${task.content}
        </li>
        `;
    }

    document.querySelector(".js-tasks").inneHTML = htmlString;
 };

 const init =  () => {
    render();
 };

 init();
}