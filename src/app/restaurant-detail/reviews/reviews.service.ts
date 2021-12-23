import { Reviews } from "./reviews.model"


export class ReviewsService {

    reviews!:Reviews

    constructor(){}

    // imgReactPath():string{
  
    //     return this.reviews.getimgReact() 
    // }

    getimgReact():string {
        console.log('inside of getimgReact');
        
        if (this.reviews.rating !== undefined &&
            this.reviews.rating  > 4) {
            return 'assets/img/reactions/loved.png'
        } 
        else if (this.reviews.rating !== undefined &&
            this.reviews.rating > 3 && 
            this.reviews.rating < 4) {
            return 'assets/img/reactions/soso.png'
        }
        else {
            return 'assets/img/reactions/pissed.png'
        }
      }
}