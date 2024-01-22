import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { gsap } from 'gsap';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit{

  ngOnInit(): void{
    // gsap.set('#destinationBox',{
    //   y:20,
    //   opacity:0
    // })
  }
  goToDestination(){
    gsap.to('#destinationBox',{
      width:'100vw',
      height:'100vw',
      duration:0.3,
      left:'0',
      borderRadius:0,
      ease:'expo.inOut'
    })
  }
}
