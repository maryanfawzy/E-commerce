// function renderBooks(){
//   const booksWrapper=document.querySelector( ".books");
//    console.log(booksWrapper)
  
//  }


// setTimeout(() => {  
//    renderBooks();
//  },3000);

function renderBooks(){
  const booksWrapper=document.querySelector(".books");

  const books = getBooks();
  books.map((book)=>{
    return  `<div class="book">
    <figure class="book__img__wrapper">
      <img class="book__img" ${books[0].url}" alt="" />
    </figure>
    <div class=${books[0].title}</div>
    <div class="book__raitings">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <div class="book__price">
      <span class="book__price__normal">$${books[0].originalprice}</span>$${bppks[0].salePrice}
    </div>
  </div>`
  });
  console.log(books)

}

setTimeout(() => {
  renderBooks();
});

// FAKE DATA
function getBooks() {
  return new Promise((resolve)=>{
    setTimeout(()=> {
      resolve([
        {
          id: 1,
          title: "Crack the Coding Interview",
          url: "assets/crack the coding interview.png",
          originalPrice: 49.95,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "Atomic Habits",
          url: "assets/atomic habits.jpg",
          originalPrice: 39,
          salePrice: null,
          rating: 5,
        },
        {
          id: 3,
          title: "Deep Work",
          url: "assets/deep work.jpeg",
          originalPrice: 29,
          salePrice: 12,
          rating: 5,
        },
        {
          id: 4,
          title: "The 10X Rule",
          url: "assets/book-1.jpeg",
          originalPrice: 44,
          salePrice: 19,
          rating: 3.5,
        },
        {
          id: 5,
          title: "Be Obsessed Or Be Average",
          url: "assets/book-2.jpeg",
          originalPrice: 32,
          salePrice: 17,
          rating: 4,
        },
        {
          id: 6,
          title: "Rich Dad Poor Dad",
          url: "assets/book-3.jpeg",
          originalPrice: 70,
          salePrice: 12.5,
          rating: 5,
        },
        {
          id: 7,
          title: "Cashflow Quadrant",
          url: "assets/book-4.jpeg",
          originalPrice: 11,
          salePrice: 10,
          rating: 2,
        },
        {
          id: 8,
          title: "48 Laws of Power",
          url: "assets/book-5.jpeg",
          originalPrice: 38,
          salePrice: 17.95,
          rating: 2.5,
        },
        {
          id: 9,
          title: "The 5 Second Rule",
          url: "assets/book-6.jpeg",
          originalPrice: 35,
          salePrice: null,
          rating: 4,
        },
        {
          id: 10,
          title: "Your Next Five Moves",
          url: "assets/book-7.jpg",
          originalPrice: 40,
          salePrice: null,
          rating: 1,
        },
        {
          id: 11,
          title: "Mastery",
          url: "assets/book-8.jpeg",
          originalPrice: 30,
          salePrice: null,
          rating: 3,
        },
      ])
    }, 1000)
  })
}
































;




// //FAKE DATA
// function getBooks() {
//     return new Promise((resolve)=>{
//       setTimeout(()=> {
//         resolve([
//           {
//             id: 1,
//             title: "Crack the Coding Interview",
//             url: "assets/crack the coding interview.png",
//             originalPrice: 49.95,
//             salePrice: 14.95,
//             rating: 4.5,
//           },
//           {
//             id: 2,
//             title: "Atomic Habits",
//             url: "assets/atomic habits.jpg",
//             originalPrice: 39,
//             salePrice: null,
//             rating: 5,
//           },
//           {
//             id: 3,
//             title: "Deep Work",
//             url: "assets/deep work.jpeg",
//             originalPrice: 29,
//             salePrice: 12,
//             rating: 5,
//           },
//           {
//             id: 4,
//             title: "The 10X Rule",
//             url: "assets/book-1.jpeg",
//             originalPrice: 44,
//             salePrice: 19,
//             rating: 3.5,
//           },
//           {
//             id: 5,
//             title: "Be Obsessed Or Be Average",
//             url: "assets/book-2.jpeg",
//             originalPrice: 32,
//             salePrice: 17,
//             rating: 4,
//           },
//           {
//             id: 6,
//             title: "Rich Dad Poor Dad",
//             url: "assets/book-3.jpeg",
//             originalPrice: 70,
//             salePrice: 12.5,
//             rating: 5,
//           },
//           {
//             id: 7,
//             title: "Cashflow Quadrant",
//             url: "assets/book-4.jpeg",
//             originalPrice: 11,
//             salePrice: 10,
//             rating: 2,
//           },
//           {
//             id: 8,
//             title: "48 Laws of Power",
//             url: "assets/book-5.jpeg",
//             originalPrice: 38,
//             salePrice: 17.95,
//             rating: 2.5,
//           },
//           {
//             id: 9,
//             title: "The 5 Second Rule",
//             url: "assets/book-6.jpeg",
//             originalPrice: 35,
//             salePrice: null,
//             rating: 4,
//           },
//           {
//             id: 10,
//             title: "Your Next Five Moves",
//             url: "assets/book-7.jpg",
//             originalPrice: 40,
//             salePrice: null,
//             rating: 1,
//           },
//           {
//             id: 11,
//             title: "Mastery",
//             url: "assets/book-8.jpeg",
//             originalPrice: 30,
//             salePrice: null,
//             rating: 3,
//           },
//         ])
//       }, 1000)
//     })
// }