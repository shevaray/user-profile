import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private notifyService: NzNotificationService,
  ) { }

  error(title:any, content: string):void{
    this.notifyService.error(title, content, {nzPlacement: 'topRight', nzDuration: 2000})
  }

  success(title:any, content:string):void{
    this.notifyService.success(title, content, {nzPlacement:'topRight'})
  }

  warn(title:any, content:string):void{
    this.notifyService.warning(title, content, {nzPlacement:'topRight'})
  }
}
