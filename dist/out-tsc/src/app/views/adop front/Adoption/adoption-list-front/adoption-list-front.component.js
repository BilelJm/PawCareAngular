import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdoptionListFrontComponent = class AdoptionListFrontComponent {
    constructor(commentService, adoptionService, router, http) {
        this.commentService = commentService;
        this.adoptionService = adoptionService;
        this.router = router;
        this.http = http;
        this.showComments = {};
        this.commentText = ''; // Add this line
        this.likeClicked = false;
    }
    getPictureUrl(adoption) {
        return `http://localhost:8080/adoption/adoption/${adoption.idAdoption}/picture`;
    }
    ngOnInit() {
        this.getAdoptionList();
    }
    get filteredAdoptions() {
        if (!this.searchTerm && !this.searchDate) {
            return this.adoptions;
        }
        else if (this.searchTerm && this.searchDate) {
            return this.adoptions.filter(adoption => (adoption.title && adoption.title.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
                (adoption.cDate.toString().substring(0, 10) === this.searchDate));
        }
        else if (this.searchDate) {
            return this.adoptions.filter(adoption => (adoption.cDate.toString().substring(0, 10) === this.searchDate));
        }
        else {
            return this.adoptions.filter(adoption => (adoption.title && adoption.title.toLowerCase().includes(this.searchTerm.toLowerCase())));
        }
    }
    getAdoptionList() {
        this.adoptionService.getAdoptionList().subscribe(data => {
            this.adoptions = data.sort((a, b) => b.idAdoption - a.idAdoption);
            // Iterate over each adoption post and get the comments for each one
            for (let i = 0; i < this.adoptions.length; i++) {
                const adoptionId = this.adoptions[i].idAdoption;
                this.commentService.getCommentsForAdoption(adoptionId).subscribe(comments => {
                    this.adoptions[i].comments = comments;
                });
            }
        });
    }
    goToEmailFormPage() {
        this.router.navigate(['/email-form']);
    }
    toggleComments(id) {
        this.showComments[id] = !this.showComments[id];
    }
    addComment(id) {
        if (!this.commentText) {
            return;
        }
        const newComment = {
            text: this.commentText,
            cDate: new Date() // set the current date
        };
        if (this.commentText.includes('bad')) {
            alert('Your comment contains the word "bad". Please revise your comment.');
            return;
        }
        this.commentService.addCommentToAdoption(id, newComment).subscribe(() => {
            const adoption = this.adoptions.find((adoption) => adoption.idAdoption === id);
            if (adoption) {
                console.log(newComment);
                adoption.comments.push(newComment);
                this.commentText = '';
            }
        });
    }
    like(idAdoption) {
        if (!this.likeClicked) { // check if the button has already been clicked
            this.likeClicked = true; // set the flag to true to disable the button
            this.http.put(`http://localhost:8080/adoption/${idAdoption}/like`, {}).subscribe((nbLikes) => {
                const adoption = this.adoptions.find(a => a.idAdoption === idAdoption);
                if (adoption) {
                    adoption.nbLikes = nbLikes;
                }
            }, (error) => {
                console.log(error);
            });
        }
    }
};
AdoptionListFrontComponent = __decorate([
    Component({
        selector: 'app-adoption-list-front',
        templateUrl: './adoption-list-front.component.html',
        styleUrls: ['./adoption-list-front.component.css']
    })
], AdoptionListFrontComponent);
export { AdoptionListFrontComponent };
//# sourceMappingURL=adoption-list-front.component.js.map