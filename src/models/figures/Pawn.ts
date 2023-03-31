import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blacklogo from '../../assets/black-pawn.png';
import whitelogo from '../../assets/white-pawn.png';


export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color:Colors,cell:Cell){
        super(color,cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.PAWN; 
      }

      canMove(target: Cell): boolean {
        if(!super.canMove(target)){
          return false 
        }

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;
        /* Sorry for that down((( 
          target.y === this.cell.y || this.isFirstStep - check pawn movement on y axis for 1 if it is not first Step
          target.y === this.cell.y + firstStepDirection - check pawn movement on y axis for 2 if it is first Step

          this.cell.board.getCell(target.x, target.y).isEmpty()  - check target cell is empty
          */
        if((target.y === this.cell.y + direction || this.isFirstStep && 
          (target.y === this.cell.y + firstStepDirection)) && 
          target.x === this.cell.x && 
          this.cell.board.getCell(target.x, target.y).isEmpty()){
            return true
           }

        return false
      }

      moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstStep = false;
      }


}