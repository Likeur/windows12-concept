import { Component, OnInit } from '@angular/core';
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
    const chargeTl = gsap.timeline({
      defaults:{
        duration:1,
        ease:'power4.inOut'
      }
    })

    chargeTl.to('#chargement1',{
      width:'10vw',
      opacity:0
    }).to('#chargement2',{
      width:'10vw',
      opacity:0
    }).to('#chargement3',{
      width:'10vw',
      opacity:0
    }).to('#chargement4',{
      width:'10vw',
      opacity:0
    }).to('#chargementBox',{
      opacity:0,
      display:'none'
    }).from('#heureBox,#menuBoxLeft,#batterieBoxRight',{
      y:-10,
      opacity:0,
      stagger:0.1
    },"<")
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

  FolderTl = gsap.timeline({
    defaults:{
      duration:0.7,
      ease:'power4.inOut'
    }
  })
  openFolder(){
    this.FolderTl.to('#FolderBox',{
      y:0,
      opacity:1,
      display:'block'
    }).to('#preFolder',{
      y:50,
      opacity:0,
      display:'none'
    }, "-=0.2").from('#headFolder, #secondFolder,#asideFolder, #contentFolder',{
      y:-10,
      opacity:0,
      stagger:0.1
    }, "<")

  }
  openFolderPin(){
    this.FolderTl.to('#FolderBox',{
      y:0,
      opacity:1,
      display:'block'
    }).to('#preFolder',{
      y:50,
      opacity:0,
      display:'none'
    }, "-=0.2").from('#headFolder, #secondFolder,#asideFolder, #contentFolder',{
      y:-10,
      opacity:0,
      stagger:0.1
    }, "<")
    this.Menutl.reverse()
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
