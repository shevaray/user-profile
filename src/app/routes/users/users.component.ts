import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/core/services/all-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any[] = [];
  current_page!:any;
  pageSize!:any;
  total!:any;
  from!:any;
  to!:any;
  page:any[] = [];



  constructor(
    private allServices: AllServicesService
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    this.allServices
      .listEmployees()
      .subscribe({
        next:(res:any)=>{
          this.users = res?.data
        },
        error:(error:any) => {
          console.log(error);

        }

      })
  }

  // next(id:any): void {
  //   this.isloading = true;
	// 	let url = `?start_date=${this.searchParams.date_from}&end_date=${this.searchParams.date_to}`+'&page=' + id;
    // this.certificateService
    //   .nextLogs(url)
    //   .then((res) => {
    //     this.loading = false;
    //     if (res.error) {
    //       this.notify.error("", res.error, "confirmation-history");
    //       this.isloading = false;
    //       return;
    //     }
    //     let verification_history = res?.data?.data.sort(
    //       (a: any, b: any) => b.created_date - a.created_date
    //     );
    //     let currentPage = res?.data?.pagination?.current_page;
    //     let pageSize = res?.data?.pagination?.per_page;
    //     let pageCount =  res?.data?.pagination?.count;

    //     this.verification_history = this.formatText(verification_history);
    //     this.current_page = currentPage
    //     this.from = (currentPage * pageSize) - pageSize + 1;
    //     this.pageSize = pageSize
    //     this.to = ((currentPage - 1) * pageSize) + pageCount;
    //     this.total = res?.data?.pagination?.total;
    //     this.isloading = false;
    //   })
    //   .catch((err) => {
    //     this.isloading = false;
    //   });
  //

  next(id:any){
    console.log(id);

  }


}
