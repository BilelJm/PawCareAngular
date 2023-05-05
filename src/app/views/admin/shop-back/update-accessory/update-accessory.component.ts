import { Component, OnInit } from '@angular/core';
import { AccessoryService } from 'src/app/views/shop/services/accessory.service';
import { Accessory } from 'src/app/views/shop/models/accessory';
import { Router,ActivatedRoute } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {badwordValidator} from "src/app/views/shop/models/badWordValidator";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
const badWords = Accessory.BAD_WORDS;

@Component({
  selector: 'app-update-accessory',
  templateUrl: './update-accessory.component.html',
  styleUrls: ['./update-accessory.component.css']
})
export class UpdateAccessoryComponent implements OnInit {

  idAccessory!: number;
  accessory:Accessory=new Accessory();
  message:any;
  accessoryForm!: FormGroup;

  public imageUrl: string | null = null;

  constructor(private toastr:ToastrService,private Accessoryservice:AccessoryService,private router :Router,private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit():void {
    this.accessoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern('^[a-zA-Z\\s]+$'),badwordValidator(badWords)]],
      price: ['', [Validators.required, Validators.min(10)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9\\s]*[a-zA-Z][a-zA-Z0-9\\s]*$')]],
      image: ['', [Validators.required] ]
    });
    const id = +this.route.snapshot.paramMap.get('idAccessory')!;
    this.Accessoryservice.GetAccessoryById(id).subscribe((data: any) => {
      this.idAccessory = id;
      this.accessoryForm.patchValue(data);
    });

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
    console.log(' id Accessory'+this.idAccessory);
    console.log(' Accessory' + JSON.stringify(accessory));
    this.Accessoryservice.updateAccessory(this.idAccessory, accessory, image).subscribe(
      () => {
        console.log('Accessory updated successfully!');

        this.router.navigate(['admin/listAccessory']);
        this.toastr.success('Accessory updated successfully!', 'Notification!', {timeOut: 1000});

      }
    );
  }
}
