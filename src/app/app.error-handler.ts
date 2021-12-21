import { throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

export class ErrorHandlerDefault {
    static handleHttpErrorResponse(error: HttpErrorResponse | any){
        let errorMessage=''

        if(error instanceof HttpErrorResponse) {
            errorMessage = `Error ${error.status} to access ${error.url} was "${error.statusText}"`;
        } else {
            errorMessage = `Error Code: ${error.status} to access ${error.url}`
        }
        
        console.log(errorMessage);
        
        return throwError(() => new Error(errorMessage));
    }
}