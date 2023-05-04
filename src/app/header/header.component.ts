import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuList } from '../_model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
        {
          id: 101,
          label: 'Shopping List',
          routing: '/shopping',
          subMenu: [],
        },
      ],
    },

    {
      id: 2,
      label: 'Accounts',
      routing: '/accounts',
      subMenu: [],
    },
    {
      id: 3,
      label: 'Routing',
      routing: ['routing','home'],
      subMenu: [],
    },
    {
      id: 4,
      label: 'Testimonal',
      routing: '/testimonal',
      subMenu: [],
    },
    {
      id: 5,
      label: 'Game',
      routing: '/assignment2',
      subMenu: [],
    },
    {
      id: 6,
      label: 'Users',
      routing: '/users/active',
      subMenu: [],
    },
    {
      id: 7,
      label: 'Todo',
      routing: '/todo-app',
      subMenu: [],
    },
    {
      id: 8,
      label: 'Observable',
      routing: '/observable',
      subMenu: [],
    },
    {
      id: 9,
      label: 'Manage',
      routing: null,
      subMenu: [
        {
          id: 901,
          label: 'Action',
          routing: null,
          subMenu: [],
        },
        {
          id: 902,
          label: 'Another action',
          routing: null,
          subMenu: [],
        },
        {
          id: 903,
          label: 'Something else here',
          routing: null,
          subMenu: [],
        },
      ],
    },

  ];
  @Output() haritDataSend = new EventEmitter<{
    name: string;
    surName: string;
  }>();
  constructor() {}

  ngOnInit(): void {}
  addNameSurName(): void {
    this.haritDataSend.emit({ name: this.headerTitle, surName: this.subTitle });
  }

  onSelect(feature: string) {
    this.navigationEvent.emit(feature);
  }
}
