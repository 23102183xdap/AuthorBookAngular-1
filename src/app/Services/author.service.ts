import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAuthor } from "../Interface/Iauthor";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
providedIn:'root'
})
// Define the aoutes to endpoints
// getAuthors()
// getAuthorById()

export class AuthorService{
//BaseURL to my Api.
 baseUrl:string='https://localhost:44328/api/AuthorTestBook'
  constructor(private http:HttpClient){//create a property with name http.
  }



  getAuthors():IAuthor[]
  {
    return [
      { id: 2, firstname: 'Doney', lastname: 'Shrestha' },
      { id: 3, firstname: 'Sony', lastname: 'Shrestha' }
    ];
  }

  getAuthor():Observable<IAuthor[]>
  {
  return this.http.get<IAuthor[]>(this.baseUrl);
  }

}
