/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const API= 'https://platzi-avo.vercel.app'
const appNode= document.querySelector('#app')

const fetchData= async () => {
    const allItems= []
    const response= await fetch(`${API}/api/avo`)
    const data= await response.json()
    console.log(data)
    const info= await data.data.forEach(element => {
        //create image
        const image= document.createElement('img')
        image.src= `${API}/${element.image}`
        image.className= "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

        //create title
        const title= document.createElement('h2')
        title.textContent= element.name
        title.className= "text-lg"

        //create description
        const description= document.createElement('p')
        description.textContent= element.attributes.description
        description.className= "text-sm"

        //create price
        const price= document.createElement('div')
        price.textContent= `$${element.price}`
        price.className= "text-gray-600"

        //put everything together
        const info= document.createElement('div')
        info.className= "text-center md:text-left"
        info.append(title, price, description)

        //create card
        const card= document.createElement('div')
        card.className= "md:flex bg-white rounded-lg p-6 hover:bg-gray-300"
        card.append(image, info)

        //create container
        const container= document.createElement('div')
        container.append(card)

        allItems.push(container)
    });
    appNode.append(...allItems)
}

fetchData()