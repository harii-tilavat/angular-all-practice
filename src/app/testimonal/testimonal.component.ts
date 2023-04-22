import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonal',
  templateUrl: './testimonal.component.html',
  styleUrls: ['./testimonal.component.scss']
})
export class TestimonalComponent {
  testimonal:any=[
    {
      name:'John Doe',
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quisquam.",
      image:"/assets/testimonials/testimonials-1.jpg"
    },
    {
      name:'Johny Doe',
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quisquam.",
      image:"/assets/testimonials/testimonials-2.jpg",
    },
    {
      name:'Doe Jhonny',
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quisquam.",
      image:"/assets/testimonials/testimonials-3.jpg",
    },
    {
      name:'John the  Don',
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quisquam.",
      image:"/assets/testimonials/testimonials-4.jpg",
    },
  ]
}
