import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextMaterialService {
  private _config: { [key: string]: string };
  constructor(private http:HttpClient) { }
  AddTextMaterial(material)

{
  console.log("in func ser");
    console.log(material);
  var j=this.http.post<any>("https://localhost:44374/api/course/addtextmaterial",material);
  console.log(j);

  console.log("after the services func")
 return j;
}
DeleteMaterial( id )
{

  console.log("in delete ser");
  console.log(id);
var j=this.http.get<any>( `https://localhost:44374/api/course/deletetextmaterial/${id}`,id);
console.log(j);

console.log("after the services func")
return j;
}
// get material for text
GetTxtMaterial( id )
{

var j=this.http.get<any>( `https://localhost:44374/api/materialtext/${id}`);
console.log(j);

console.log("after the services func")
return j;
}
}
