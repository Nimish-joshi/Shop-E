export interface productinterface
{
    id:number,
    img:string,
    name:string,
    description:string,
    price:number,
    bgcolor:boolean,
    category:string,
    Release_date:Date,
    code:string,
    rating:number
}

 export enum category
{
    ALL="all",
    MOBILE="mobile",
    TV="tv",
    FRIDGE="fridge",
    HEADPHONES="headphones"

}