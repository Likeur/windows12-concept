import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { gsap } from 'gsap';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit{

  menuIsOpen = false

  Menutl = gsap.timeline({
    defaults:{
      duration:0.7,
      ease:'power4.inOut'
    }
  })
  ngOnInit(): void{
    gsap.set('#menuContextuelle',{
      height:0
    })
    gsap.set('#FolderBox',{
      y:50,
      opacity:0,
      display:'none',
    })

    this.Menutl.to('#menuContextuelle',{
      height:'70vh',
    })
    this.Menutl.pause()
  }
  OpenMenu(){
    this.menuIsOpen = !this.menuIsOpen
    if(this.menuIsOpen){
      this.Menutl.play()
    }else{
      this.Menutl.reverse()
      // gsap.to('#menuContextuelle',{
      //   height:'0vh',
      //   duration:1,
      //   ease:'power4.inOut'
      // })
    }
  }

  openFolder(){
    gsap.to('#FolderBox',{
      y:-50,
      opacity:1,
      display:'block'
    })
  }
  closeFolder(){
    const closetl = gsap.timeline({
      defaults:{
        duration:0.7,
        ease:'power4.inOut'
      }
    })
    closetl.to('#FolderBox',{
      y:50,
      opacity:0,
      display:'none',
    }).to('#FolderBox',{
      height:'70vh',
      width:'50vw',
    })
    
  }

  isFullScreen = false
  toFullScreen(){
    this.isFullScreen = !this.isFullScreen
    if(this.isFullScreen){
      gsap.to('#FolderBox',{
        height:'100vh',
        width:'100vw',
        top: 0,
        y:0
      })
    }else{
      gsap.to('#FolderBox',{
        height:'70vh',
        width:'60vw',
      })
    }
  }
}
