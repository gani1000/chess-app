
# Chess Game

  ![front page chess](https://github.com/gani1000/ChessGame/assets/107857762/63011f0d-0a1d-4d08-8c35-b43aef5b4d26)
     
# User Interface

   - In this section, the user interface is divided into several components, react hooks handle and provides seamless navigation 
       across the application. The front page contains the starting component for the app. Dynamically changes/renders the main component
       for the chess board to start the game with a button click.

             // sartGame is react state toggle the value with a click
     
            {(!startGame) ? (
                <ListOptions 
                    setStartGame={setStartGame}
                />
            ) : (
                <ChessBoard 
                    highlightSquare={highlightSquare}
                    pawnPromotion={pawnPromotion}
                    setPawnPromotion={setPawnPromotion}
                    updatePossibleMoves={updatePossibleMoves}
                />
            )}

- Then, on the main page, all the logic is handled by several components to provide instant updates to the UI.
    It renders the chess component with the timer and records moves components with endless features. Using react hooks
    to provide the best UX.
    
    ![main](https://github.com/gani1000/ChessGame/assets/107857762/79860080-c2c5-4be5-a755-d4816456773d)


# Get Started

To run the chess game locally, follow these steps:

* Clone the repository 

      git clone https://github.com/your-username/chess-game.git
  
* Install dependencies

        npm install
