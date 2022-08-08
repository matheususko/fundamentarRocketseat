// getElementById()
// const element = document.getElementById('blog-title')
// console.log(element);

// getElementByClassName()
// const element = document.getElementsByClassName('one');
// console.log(element)

//getElementByTagName()
// const element = document.getElementsByTagName('h1')
// console.log(element)

//querySelector()
// const element = document.querySelector('[src], .one')
// console.log(element)

//querySelectorAll()
// diferença de um node-list e um html collection,  
const elements = document.querySelectorAll('.one')

elements.forEach(el => console.log(el))

//getElementById() (element)
//getElementByClassName (HTML Collection)
//getElementByTagName (HTML Collection)
//querySelector (element)
//querySelectorAll (Nodelist)