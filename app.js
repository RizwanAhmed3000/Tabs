const btnContainer = document.querySelector(".btnContainer")
// console.log(btnContainer)
const btnsName = ["History", "Vision", "Goals"]

const tabContainer = document.querySelector(".tabContainer")

const imageArea = document.querySelector(".imgCon").innerHTML
console.log(imageArea)


const btn = btnsName.map((btns) => {
    return `<button class="btn">${btns}</button>`
    // string
})

// console.log(btn)

btnContainer.innerHTML = btn.join("")

const content = [
    {
        src: "https://images.unsplash.com/photo-1682364284611-b3201041f7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        title: "History",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam itaque voluptates molestiae iusto eum aperiam error modi ex dicta! Nesciunt nulla inventore, temporibus repellendus porro quam est? Facilis magnam quod cumque necessitatibus. Nostrum aliquid, vel modi aperiam dicta officiis suscipit tempore nam, repudiandae aspernatur aliquam blanditiis facilis unde repellendus dolorem ipsa, totam doloremque quibusdam neque?"
    },
    {
        src: "https://images.unsplash.com/photo-1682343161276-ac8033b14906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Vision",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quidem autem earum, consectetur facere fugit, hic expedita ducimus placeat neque optio? Vel obcaecati odio ullam officiis cumque sint sunt voluptas dicta aut in saepe, rem, provident molestiae quos id eius??"
    },
    {
        src: "https://images.unsplash.com/photo-1682343161415-6c6d6eaeaf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Goals",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam itaque voluptates molestiae iusto eum aperiam error modi ex dicta! Nesciunt nulla inventore, temporibus repellendus porro quam est? Facilis magnam quod cumque necessitatibus. Nostrum aliquid, vel modi aperiam dicta officiis suscipit tempore nam, repudiandae aspernatur aliquam blanditiis facilis unde repellendus dolorem ipsa, totam doloremque quibusdam neque?"
    },

]

// tabContainer.innerHTML = contentArray.join("")


const callingAllBtns = document.querySelectorAll(".btn")
console.log(callingAllBtns)

callingAllBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let contentArray = content.map((item) => {
            if (btn.textContent === item.title) {
                // btn.classList.toggle("active")
                return `<div class="activeContent">
                <h2>${item.title}</h2>
                <p>${item.content}</p>
                </div>`
            }
        })
        // btn.classList.toggle("active")
        // imageArea.innerHTML = `<img id="image" src="${item.src}" alt="" width="500px">`
        tabContainer.innerHTML = contentArray.join("")
    })
})