import {Pipe, PipeTransform } from "@angular/core";
// import { Pipe } from "rxjs";

@Pipe({
    name:"dash_to_space"
})

export class spaceConverterPipe implements PipeTransform
{
    transform(value: string):string {
        return value.replace("-"," ");
    }

}