import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CommentAdoptionService = class CommentAdoptionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:8080/commentAdoption';
    }
    addCommentToAdoption(idAdoption, comment) {
        const url = `${this.baseUrl}/${idAdoption}`;
        return this.httpClient.post(url, comment);
    }
    getCommentsForAdoption(idAdoption) {
        const url = `${this.baseUrl}/${idAdoption}`;
        return this.httpClient.get(url);
    }
};
CommentAdoptionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CommentAdoptionService);
export { CommentAdoptionService };
//# sourceMappingURL=comment-adoption.service.js.map