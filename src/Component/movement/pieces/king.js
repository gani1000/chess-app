import { samePosition } from "../constants/functions";
import { squareOccupied, SquareEmptyOrOccupiedByOpponent } from "./rules/reference";

export const kingMove = (previousX, previousY, x, y, team, chessBoard) => {
    const boardWidthHeight = 2;
    
    for (let i = 1; i < boardWidthHeight; i++) {

        // KING MOVEMENT
        const multiplierX = (x < previousX) ? -1 : (x > previousX) ? 1 : 0;
        const multiplierY = (y < previousY) ? -1 : (y > previousY) ? 1 : 0;
        const passedPosition = { x: previousX + (i * multiplierX), y: previousY + (i * multiplierY) };
        
        if (samePosition(passedPosition, x, y)) {
            if (SquareEmptyOrOccupiedByOpponent(passedPosition.x, passedPosition.y, chessBoard, team)) {
                return true;
            }
        }else {
            if (squareOccupied(passedPosition.x, passedPosition.y, chessBoard)) {
                break;
            }
        }
    }
    return false;
}