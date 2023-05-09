import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EmailFormComponent = class EmailFormComponent {
    constructor(http) {
        this.http = http;
        this.details = {
            senderEmail: '',
            recipient: '',
            subject: '',
            msgBody: ''
        };
    }
    sendEmail() {
        const url = 'http://localhost:8080/email/send-email';
        const body = this.details;
        this.http.post(url, body).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
};
EmailFormComponent = __decorate([
    Component({
        selector: 'app-email-form',
        templateUrl: './email-form.component.html',
        styleUrls: ['./email-form.component.css']
    })
], EmailFormComponent);
export { EmailFormComponent };
//# sourceMappingURL=email-form.component.js.map