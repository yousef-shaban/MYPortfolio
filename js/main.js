let burgerBtnOpen = document.getElementById("burger-btn-open");
let burgerBtnClose = document.getElementById("burger-btn-close");
let menu = document.getElementById("menu-overlay");
let navbar = document.getElementById("navbar")
let navItems = document.querySelectorAll(".navit .item")
let navHover = document.getElementById("navItems")



document.addEventListener("click", (e)=>{
    if(e.target.nodeName === "I")
    {
        
        burgerBtnOpen.classList.toggle("hide")
        menu.classList.toggle("show-overlay")
    }
})

navbar.addEventListener("click", (e)=>
{

    if(e.target.nodeName === "A" && window.scrollY <= 60)
    {

        navItems.forEach((i)=>
        {
            // console.log(i);
            if(i.classList.contains("active"))
            {
                i.classList.remove("active")
            }
        })
        e.target.classList.add("active")
    }
})

// navItems.addEventListener("mouseenter", (e)=>{
//     e.style.color = "red"
// });
// navHover.addEventListener("mouseover", (e) => {
// 	// e.target.lastChild.style.color = "red"
//     e.target.style.color = "red"
//     // console.log(e.target.style.color = "red");
//     // if(e.target = "A")
//     // {

//     //     console.log(e.target);
//     // }
// });

menu.addEventListener("click", (e)=>{
    if(e.target.nodeName === "A")
    {
        menu.classList.remove("show-overlay");
        burgerBtnOpen.classList.toggle("hide");
        burgerBtnClose.classList.toggle("hide");
    }
})
window.addEventListener("scroll", (e)=>{

    if(window.scrollY >= 60)
    {
        navbar.style.backgroundColor = "#DC143C";
        navItems.forEach((i)=>{
            i.classList.remove("active")

        })
        document.getElementById("ext-logo").style.color = "white"
        // navItems.removeEventListener("click");
    }
    else{
        navbar.style.backgroundColor = ""
        document.getElementById("ext-logo").style.color = "#DC143C";

    }
})

//////////////////////////////////////////////////



let jobTitle = document.getElementById("typeing-fx")
let jobTitle_2 = document.getElementById("typing-fx2");
let jobs = ["Web Developer", "Freelancer"]


let i = 0
let j = 0
let deleting = false
let end = false
let current = []

function print()
{
    // console.log(current);
    jobTitle.innerHTML = current.join("")
    jobTitle_2.innerHTML = current.join("")
    if(i < jobs.length)
    {
        if(!deleting && j <= jobs[i].length)
        {
            // console.log(i, j);
            current.push(jobs[i][j])
            j ++
        }

        if(j > jobs[i].length)
        {
            deleting = true
        }

        if(deleting)
        {
            j--
            current.pop()
            // console.log(i, j);
        }
        if(j === 0 && i < jobs.length)
        {
            i++
            deleting = false
            
        }
        if (i === jobs.length)
            {
                i = 0
            }
    }

    if(deleting)
    {
        time = 80
    }
    else{
        time = 100
    }

    setTimeout(print, time)
}
print()
