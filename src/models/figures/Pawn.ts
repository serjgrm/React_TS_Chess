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
        /*  
          Condition for Pawn move,
          target.y === this.cell.y || this.isFirstStep -           check pawn movement on Y axis for 1 if it is not first Step
          target.y === this.cell.y + firstStepDirection -          check pawn movement on Y axis for 2 if it is first Step
          target.x === this.cell.x -                               check is it X axis 
          this.cell.board.getCell(target.x, target.y).isEmpty()  - check target cell is empty
          */
        if((target.y === this.cell.y + direction || this.isFirstStep && 
          (target.y === this.cell.y + firstStepDirection)) && 
          target.x === this.cell.x && 
          this.cell.board.getCell(target.x, target.y).isEmpty()){
            return true
           }

           /*
            Condition for atack from Pawn
              target.y === this.cell.y + direction -                          check for movement on Y axis 1 up or 1 down
              target.x === this.cell.x +1 || target.x === this.cell.x -1 -    check for movement on X axis 1 left or 1 right
              this.cell.isEnemy(target)) -                                    checj is target cell have enemy figure
            */
        if (target.y === this.cell.y + direction && 
          (target.x === this.cell.x +1 || target.x === this.cell.x -1) && 
          this.cell.isEnemy(target)){
            return true
          }  

        return false
      }

      moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstStep = false;
      }


}