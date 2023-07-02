import { useState } from "react"

function AddLink() {

    const [link, setLink] = useState("")

    const handleChange = e => {
        setLink(e.target.value)
    }

    const shortenLinkUsingAPI = _ => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector(".hill").innerHTML = `${data.result.short_link}`
        })
    }

    const shortenLink = _ => {
        let shortenLink = document.querySelector(".short-links")
        let card = document.createElement("div")
        card.setAttribute("class", "bg-white my-4 shadow-md p-4 rounded-md grid grid-cols-12 justify-between items-center gap-2")
        let tallLink = document.createElement("div")
        tallLink.setAttribute("class", "col-span-12 md:col-span-7 text-dviolet")
        tallLink.innerHTML = `${link}`
        card.appendChild(tallLink)
        let div = document.createElement("div")
        div.setAttribute("class", "col-span-12 md:col-span-5 grid grid-cols-12 md:grid-cols-5 justify-between items-center gap-2")
        let shortLink = document.createElement("div")
        shortLink.setAttribute("class", "hill col-span-12 md:col-span-3 text-center text-cyan")
        shortenLinkUsingAPI()
        let copy = document.createElement("button")
        copy.setAttribute("class", "copy col-span-12 md:col-span-2 bg-cyan text-white rounded-md p-3 text-lg hover:opacity-50")
        copy.innerHTML = "Copy"
        div.appendChild(shortLink)
        div.appendChild(copy)
        card.appendChild(div)
        shortenLink.prepend(card)
    }

    // SUBMIT

    const handleSubmit = e => {
        e.preventDefault()
        let label = document.querySelector("label")
        let input = document.querySelector("input")
        if(link === "") {
            label.classList.remove("hidden")
            input.style.border = "2px solid hsl(0, 87%, 67%)"
        }else {
            label.classList.add("hidden")
            input.style.border = "none"
            setLink("")
            shortenLink()
            window.onbeforeunload = _ => {
                let localStorageCont = document.querySelector("#hill").innerHTML
                window.localStorage.setItem("links", localStorageCont)
            }
        }
    }

    window.onload = _ => {
        let localStorageCont = document.querySelector("#hill")
        if(window.localStorage.links !== "") {
            localStorageCont.innerHTML = window.localStorage.getItem("links")

        }else {
            console.log("local storage is empty")
        }
    }

        let copy = document.querySelectorAll(".copy")
        copy.forEach(copy => {
            copy.addEventListener("click", e => {
                e.currentTarget.classList.add("bg-dviolet")
                e.currentTarget.innerHTML = "Copied!"
                let shortLink = e.currentTarget.previousElementSibling.innerHTML
                navigator.clipboard.writeText(shortLink)
            })
        })

    return(
        <>
            <section className="">
                <div className="form absolute w-11/12 left-1/2 -translate-x-1/2 -top-16 bg-dviolet rounded-md p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-12 gap-5 md:gap-3 justify-center items-center"
                    >
                        <div className="col-span-12 md:col-span-10 relative">
                            <input
                                value={link}
                                onChange={handleChange}
                                type="text"
                                name="link"
                                id="link"
                                className="p-4 rounded-md w-full"
                                placeholder="Shorten alink here..."
                            />
                            <label htmlFor="link" className="absolute -bottom-6 left-2 hidden text-Red">
                                Please add a link
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="p-4 rounded-md bg-cyan hover:opacity-90 text-white col-span-12 md:col-span-2"
                        >
                            Shorten It!
                        </button>
                    </form>
                </div>
                <div className="short-links md:-mt-5 mt-5 w-11/12 mx-auto" id="hill">
                </div>
            </section>
        </>
    )
}

export default AddLink