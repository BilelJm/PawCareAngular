import { Component, OnInit } from '@angular/core';
import { Accessory } from 'src/app/views/shop/models/accessory';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AccessoryService } from 'src/app/views/shop/services/accessory.service';
import {badwordValidator} from "src/app/views/shop/models/badWordValidator";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
const badWords = Accessory.BAD_WORDS;
@Component({
  selector: 'app-add-accessory',
  templateUrl: './add-accessory.component.html',
  styleUrls: ['./add-accessory.component.css']
})
export class AddAccessoryComponent implements OnInit {
  accessory: Accessory=new Accessory();
  message:any;
  accessoryForm!: FormGroup;
  public imageUrl: string | null = null;

  constructor(private accessoryService:AccessoryService,private formBuilder: FormBuilder,private router:Router,private toastr:ToastrService) {
  }

    ngOnInit():void {
      this.accessoryForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern('^[a-zA-Z\\s]+$'),badwordValidator(badWords)]],
        price: ['', [Validators.required, Validators.min(10.00)]],
        description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9\\s!@#$%^&*()_+\\-=\\]{};\':\"\\\\|,.<>/?]*$')]],
        image: ['', [Validators.required] ]
      });
  }

  public addAccessory() {
    if (this.accessoryForm.valid) {
      let resp = this.accessoryService.addAccessory(this.accessory);
      resp.subscribe(
        (data) => {
          this.message = data;
        },
        (error) => {
          this.message = "Error: " + error.message;
        }
      );
    } else {
      console.log("Form validation errors");
    }
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.accessoryForm.patchValue({ image: file });
      this.imageUrl = URL.createObjectURL(file);
    }
  }
  onSubmit() {
    if (this.accessoryForm.invalid) {
      return;
    }

    const accessory = this.accessoryForm.value;
    const image = this.accessoryForm.get('image')?.value;

    this.accessoryService.addAccessoryUpload(accessory, image).subscribe(
      imageUrl => {
        console.log('Accessory added successfully!', imageUrl);
        this.router.navigate(['admin/listAccessory']);
        this.toastr.success('Accessory added successfully!','Notification!', {timeOut: 1000});

      },
      error => {
        console.log('Error adding accessory:', error);
        this.toastr.error('Error adding accessory','Notification!', {timeOut: 1000});
      }
    );
  }




}
