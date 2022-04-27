import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  slug:any=""
  providers:any=[]
  p: number = 1;
  total:any=0
  obj ={}
  constructor(private activated : ActivatedRoute , public global : GlobalService) { 
    this.slug = activated.snapshot.paramMap.get('slug')
    this.obj =  {'role_id' : this.slug}
    console.log(this.slug)
  }

  ngOnInit(): void {
   
    this.showAllProviders()
  }
  pageChanged(num:any){
    this.p = num
    console.log(num)
   this.showAllProviders()
  }

  showAllProviders(){
    this.global.getProvidersBySlug(this.obj , this.p-1).subscribe(res=>{
      console.log(res)
      this.providers = res.data
      this.total = res.Count
    })
  }

}
