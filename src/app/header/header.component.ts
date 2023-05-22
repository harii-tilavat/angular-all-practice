import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MenuList, Recipe, User } from '../_model';
import { AuthService, AuthenticationService, DataStorageService, RecipeService } from '../_services';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() demo!: string;
  @Output() navigationEvent = new EventEmitter<string>();
  public subTitle!: string;
  public headerTitle: string = 'Recipe Book';
  public menuList: Array<MenuList> = [
    {
      id: 1,
      label: 'Recipes',
      routing: '/recipes',
      subMenu: [
      ],
    },

    {
      id: 2,
      label: 'Shopping',
      routing: '/shopping',
      subMenu: [
      ],
    },

    {
      id: 3,
      label: 'Accounts',
      routing: '/accounts',
      subMenu: [],
    },
    {
      id: 4,
      label: 'Routing',
      routing: ['routing', 'home'],
      subMenu: [],
    },
    {
      id: 5,
      label: 'Testimonal',
      routing: '/testimonal',
      subMenu: [],
    },
    {
      id: 6,
      label: 'Game',
      routing: '/assignment2',
      subMenu: [],
    },
    {
      id: 7,
      label: 'Users',
      routing: '/users/active',
      subMenu: [],
    },
    {
      id: 9,
      label: 'Observable',
      routing: '/observable',
      subMenu: [],
    },
    {
      id: 10,
      label: 'Forms',
      routing: ['/forms','form1'],
      subMenu: [],
    },
    {
      id: 11,
      label: 'Pipe',
      routing: '/pipes',
      subMenu: [],
    },
    {
      id: 12,
      label: 'Http',
      routing: '/http-request',
      subMenu: [],
    },
    {
      id: 13,
      label: 'Manage',
      routing: null,
      subMenu: [
        {
          id: 1101,
          label: 'Action',
          routing: null,
          subMenu: [],
        },
        {
          id: 1102,
          label: 'Another action',
          routing: null,
          subMenu: [],
        },
        {
          id: 1103,
          label: 'Something else here',
          routing: null,
          subMenu: [],
        },
      ],
    },

  ];
  public userSub!: Subscription;
  @Output() haritDataSend = new EventEmitter<{
    name: string;
    surName: string;
  }>();
  public isAuthenticated: boolean = false;
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService, private authenticationService: AuthenticationService , private router:Router) { }

  ngOnInit(): void {
    this.userSub = this.authenticationService.user.subscribe({
      next: (user: User) => {
        this.isAuthenticated = Object.values(user).every(value=>value);
      }
    });
  }
  addNameSurName(): void {
    this.haritDataSend.emit({ name: this.headerTitle, surName: this.subTitle });
  }

  onSelect(feature: string) {
    this.navigationEvent.emit(feature);
  }
  onFetchData(): void {
    this.dataStorageService.fetchData<Recipe[]>().subscribe((res: Recipe[]) => {

    });
  }
  onSaveData(): void {
    this.dataStorageService.storeData();
  }
  onLogout():void {
    this.authenticationService.onLogout();
    this.isAuthenticated=false;
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
