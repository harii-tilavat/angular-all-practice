import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public loadSecond: number = 1;
  public isRedirect: boolean = false;
  @ViewChild('redirect') redirect!: ElementRef;
  constructor(private router: Router,private route:ActivatedRoute) {}
  ngAfterViewInit(): void {
    console.log('Value of redirect! ');
  }

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
  loadServer(id: number) {
    console.log('Server Loaded ' + id);
    this.router.navigate(['routing', 'servers', id, 'edit'], {
      queryParams: { allowEdit: 1 },
      fragment: 'Loading',
    });
    console.warn(this.route.snapshot);
  }
}
