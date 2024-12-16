import Link from "next/link";

export default function linkGenerator(){
    return(
        <div className="flex items-center justify-center rounded-3xl bg-zinc-800">
            <div>Header</div>
            <div>Conteudo</div>
        </div>
    );
}


export async function linksGenerator(){
    const linksListed = await fetch("https://mercado-back-end.vercel.app/links")
    const lista = await linksListed.json()
    console.log(lista[0].pageurl)
    const linksList = new Array;
    lista.forEach(link => {
      linksList.push(<li className="list-none pr-4"><Link target="Blank" href={link.pageurl}>{link.pagename}</Link></li>)
    });
    return linksList
  }