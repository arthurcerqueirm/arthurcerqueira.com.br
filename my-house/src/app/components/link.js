import Link from "next/link";
import React, { useEffect, useState } from "react";

export function LinksGenerator() {
    const [linksList, setLinksList] = useState([]);

    useEffect(() => {
        async function fetchLinks() {
            try {
                const linksListed = await fetch("https://mercado-back-end.vercel.app/links");
                const lista = await linksListed.json();
                setLinksList(lista); // Atualiza o estado com a lista recebida
            } catch (error) {
                console.error("Erro ao buscar links:", error);
            }
        }
        fetchLinks();
    }, []);

    return (
        <>
            {linksList.map((link) => (
                <li key={link.pageurl} className="list-none pr-4">
                    <Link
                        className="p-4 hover:text-green-400"
                        target="_blank"
                        href={link.pageurl}
                    >
                        {link.pagename}
                    </Link>
                </li>
            ))}
        </>
    );
}
