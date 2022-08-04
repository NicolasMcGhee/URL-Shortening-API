const shortenURL = document.getElementById("shorten-url")
const shortenBtn = document.getElementById("shorten")
const shortenURLValue = shortenURL.value
const copyBtn = document.getElementById("copy-btn")
const returnedURL = document.getElementById("return-url")


shortenBtn.addEventListener("click", handleClick)


// function copyText(data) {    
//     navigator.clipboard.writeText(data.result.short_link)
// }

function handleClick() {
    const shortenURLValue = shortenURL.value
    fetch(`https://api.shrtco.de/v2/shorten?url=${shortenURLValue}`)
        .then(res => res.json())
        .then(data => {
        
            newURL =  
            `
                <div class="new-url">
                    <p>${shortenURLValue}</p>
                    <div class="flex">
                        <p class="new-url-color">${data.result.short_link}</p>
                        <button id="copy-btn" class="get-started-squared">Copy</button>
                    </div>
                </div>
            `
            returnedURL.innerHTML += newURL
        })
    shortenURL.value = ''
    
}


console.log("CSS Sucks")