import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  file:any = null
  constructor(private global : GlobalService , private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  handleSubmit(form:NgForm){
    if(this.file != null){
      let formData = new FormData()
      formData.append("image" , this.file[0])
      this.global.updateUserImage(formData).subscribe(data=>{
        if(data.success) this.toastr.success(data.success)
        console.log(data)
      })
    }
  

  }
  handleUploadFile(e:any){
    this.file = e.target.files
  }

}
