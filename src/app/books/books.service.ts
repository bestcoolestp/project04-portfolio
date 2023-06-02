import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: "The Twilight Saga White Collection",
        author: " Stephenie Meyer",
        image:
          "https://m.media-amazon.com/images/I/41fE74kaPHL._SY383_BO1,204,203,200_.jpg",
        amount: 84900,
      },
      {
        name: "The Lord of the Rings 3-Book Paperback Box Set ",
        author: "J.R.R. Tolkien",
        image:
          "https://m.media-amazon.com/images/I/41fx2jOQMfL._SX424_BO1,204,203,200_.jpg",
        amount: 39900,
      },
      {
        name: "Harry Potter Paperback Box Set (Books 1-7)",
        author: "J. K. Rowling",
        image:
          "https://m.media-amazon.com/images/I/41mo3-FGjXL._SY239_BO1,204,203,200_.jpg",
        amount: 49900,
      },
      {
        name: "Percy Jackson & the Olympians 5 Children Book Collection Box Set",
        author: "Rick Riordan",
        image:
          "https://m.media-amazon.com/images/I/51TLqLRM-hL._SX380_BO1,204,203,200_.jpg",
        amount: 49900,
      },
    ];
  }
}
