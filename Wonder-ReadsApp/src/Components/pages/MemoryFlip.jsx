import React, { useState } from 'react';
import Header from '../pages/Header.jsx';
import '../design/header.css';
import '../design/memoryflip.css';

const MemoryFlip = () => {

    const backImage =
        "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137975/pm-f_xdfyov.jpg";

    const pokemonCards = [
        {
            id: 1,
            name: "Pikachu",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137975/pm2_vqdrp0.png"
        },
        {
            id: 2,
            name: "Charizard",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137976/pm5_ya4rhb.png"
        },
        {
            id: 3,
            name: "Bulbasaur",
            image: "https://res.cloudinary.com/o7vbtffn/image/upload/v1784137976/bul_c3vwqx.png"
        }
    ];

    const [cards, setCards] = useState(
        pokemonCards.map(card => ({
            ...card,
            flipped: false
        }))
    );

    const flipCard = (id) => {
        setCards(
            cards.map(card =>
                card.id === id
                    ? { ...card, flipped: true }
                    : card
            )
        );
    };
    return (
        <div>
            <Header title="Pokémon Flip Game" />
            <div className="card-align">
                <div className="card-grid">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className={`memory-card ${card.flipped ? "flip" : ""}`}
                            onClick={() => flipCard(card.id)}
                        >
                            <div className="card-inner">
                                {/* Back Image (hidden initially) */}
                                <div className="card-back-image">
                                    <img
                                        src={backImage}
                                        alt="card back"
                                    />
                                </div>
                                {/* Front Pokemon Image */}
                                <div className="card-front-image">
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MemoryFlip;