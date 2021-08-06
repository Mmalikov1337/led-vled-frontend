import Router from "next/router"
export default function toPage(url:string){
    if(!url)
        throw new Error("function toPage, wrong url")
    Router.push(url)
}