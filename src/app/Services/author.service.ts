import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAuthor } from "../Interface/Iauthor";


@Injectable({
providedIn:'root'
})
// Define the aoutes to endpoints
// getAuthors()
// getAuthorById()

export class AuthorService{
//BaseURL to my Api.
 baseUrl:string='https://localhost:44328/api/AurthorTest'
  constructor(private http:HttpClient){//create a property with name http.
  }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }


  getAuthor():Observable<IAuthor[]>
  {
  return this.http.get<IAuthor[]>(this.baseUrl);
  }

   getAuthorById(authorId:number):Observable<IAuthor>{
     return this.http.get<IAuthor>(`${this.baseUrl}/${authorId}`);
   }

   deleteAuthor(authorId:number):Observable<boolean>{
      return this.http.delete<boolean>(`${this.baseUrl}/${authorId}`,this.httpOptions);
   }

   createAuthor(authorToCreate:IAuthor):Observable<IAuthor>{
     return this.http.post<IAuthor>(this.baseUrl,authorToCreate,this.httpOptions);
   }

   updateAuthor(authorId:number,author:IAuthor):Observable<IAuthor>{
    return this.http.put<IAuthor>(`${this.baseUrl}/${authorId}`,author,this.httpOptions)
   }
}
