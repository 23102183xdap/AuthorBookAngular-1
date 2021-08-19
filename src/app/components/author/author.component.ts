import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private http:AuthorService) { }  // DI

  ngOnInit(): void {
    console.log(
      this.http.getAuthors()
    )
  }

}
