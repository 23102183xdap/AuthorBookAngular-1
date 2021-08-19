import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAuthor } from 'src/app/Interface/Iauthor';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
   authors: IAuthor[] = [];
   author!:IAuthor;
   // get author by id Printout binding.
    authorID:number = 0;
    authorFN='';
    authorLN='';
   //
   profileForm = this.FB.group({ // After using Formbuilder, Declaring formcontrol is optional. FormBuilder is more practical and best practice.
     firstname:(''),
     lastname:('')
   });

   GetSingleDataForm = this.FB.group(
     {
       authorID:('')
     }
   );

  constructor(private authorService:AuthorService,private FB:FormBuilder) { }  // DI

  ngOnInit(): void {

    this.getAuthors();// Calls all the Authors data and prints out as text.
  }


  getAuthors(){
    this.authorService.getAuthor().subscribe((data)=> {console.log(data); this.authors =data;} );
  }




   getAuthorById(authorId:string){
     this.authorService.getAuthorById(parseInt(authorId)).subscribe(data =>
      {console.log(data);
        this.author = data;
        this.authorID = data.id;
         this.authorFN=data.firstname;
         this.authorLN=data.lastname;

        });

   }
    //printout single author searched by id!.


   deleteAuthor(authorId:number){
    this.authorService.deleteAuthor(authorId).subscribe(()=> this.getAuthors());

   }

   createAuthor(authorToCreate:IAuthor){
    this.authorService.createAuthor(authorToCreate).subscribe(()=> this.getAuthors());

   }

   updateAuthor(authorId:number,author:IAuthor){
    this.authorService.updateAuthor(authorId,author).subscribe(data => console.log(data));

   }
}
