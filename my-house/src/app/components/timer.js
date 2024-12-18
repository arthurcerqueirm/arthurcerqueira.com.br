"use client";

import React, { useState, useEffect } from "react";

export default function ContadorDeTempo() {
    const [tempoRestante, setTempoRestante] = useState(0);

    useEffect(() => {
        function calculaTempo() {
            const dataEvento = new Date("2024-12-31").getTime(); // Data do evento
            const agora = new Date().getTime(); // Data atual
            return dataEvento - agora;
        }

        // Atualiza o estado a cada segundo
        const intervalo = setInterval(() => {
            setTempoRestante(calculaTempo());
        }, 1000);

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(intervalo);
    }, []);

    const segundos = Math.floor((tempoRestante / 1000) % 60);
    const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
    const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

    return (
        <p>
            {dias} Dias, {horas} Horas, {minutos} Minutos e {segundos} Segundos
        </p>
    );
}
