import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  @Input() user_id = null;
  books = [];
  displayedColumns: string[] = [
    "_id",
    "name",
    "author",
    "published_year",
    "edition",
    "issued_to_user_id",
    "issued_date",
    "return_date",
    "claim_book"
  ];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.apiService
    .getAllBooks(this.user_id)
    .subscribe((books) => (this.books = books));
  }

  claimBook(bookId) {
    const book = this.books.find(book => book._id === bookId);
    const { _id } = JSON.parse(localStorage.getItem("userData"));
    const issued_date = new Date();
    const return_date = new Date(Date.now() + 12096e5);
    this.apiService.claimBook({ ...book, 
      issued_to_user_id: _id,
      issued_date,
      return_date
    }).subscribe(resp => {
      // refresh the data
      this.getAllBooks();
    })
  }
}
