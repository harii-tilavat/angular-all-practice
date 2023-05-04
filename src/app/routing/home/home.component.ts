import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthGuard, AuthService } from 'src/app/_services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public loadSecond: number = 1;
  public isRedirect: boolean = false;

  constructor(private router: Router,private route:ActivatedRoute,private authService:AuthService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
  // loadServer(id: number): void {
  //   this.isRedirect = true;
  //   console.log('Server Loaded');
  //   setInterval(() => {
  //     this.loadSecond = this.loadSecond - 1;
  //     if (this.loadSecond == 0) {
  //       this.router.navigate(['routing', 'servers', id, 'edit'], {
  //         queryParams: { allowEdit: '1' },
  //         fragment: 'fragment',
  //       });
  //       console.warn('Redirected');
  //     }
  //   }, 1000);
  // }
  loadServer(id: any) {
    console.log('Server Loaded ' + id);
    this.router.navigate(['routing', 'servers', id], {
      queryParams: { allowEdit: 1 }
    });
  }

  onLogin():void{
    this.authService.login();
    // alert("Login Successfully! ");
  }
  onLogout():void{
    this.authService.logout();
    // alert("Logout Successfully! ");
  }
}
