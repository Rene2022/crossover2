import React from 'react';

export default function Tournament_Card({ name, place }) {
    const colorIndex = [
        "Red",
        "Blue",
        "Green",
        "rgb(255, 125, 0)",
        "rgb(106, 90, 205)",
        "rgb(123, 145, 41)",
        "rgb(42, 52, 61)",
        "Black"
    ];

	return (
        <>
            <div style={
                {backgroundColor: colorIndex[place],
                    width: "20%",
                    height: "25px",
                    margin: "2.5%",
                    fontSize: "85%"
                }}>
                {name}
            </div>
        </>
    );
}
