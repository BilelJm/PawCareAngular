import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styles: [
    `
      #hero {
        height: 100vh;
        width: 100vw;
        background: url(/../../assets/img/hero-bg.png);
        background-size: cover;
        position: relative;
      }
      
      .text-container {
        position: absolute;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        text-align: left;
        color: white;
        width: 80%;
        max-width: 800px;
      }
      .text-container h2 {
      font-size: 3rem; /* Adjust the font size of the heading */
      color:white;
    }

    .text-container p {
      font-size: 1rem; /* Adjust the font size of the paragraph */
      margin-top: 1rem; /* Add some margin to the top of the paragraph */
      color:white;
    }
    `
  ]

})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
