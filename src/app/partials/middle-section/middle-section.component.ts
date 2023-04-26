import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.css']
})
export class MiddleSectionComponent {
   
  bannerTitle = 'ALL YOUR NEEDS @ 1 PLACE'
  bannerSubTitle = "You're having a business because you have goals. Here's how We can help you reach them!"

  title = "We've got what you need!"
  content ="Our professional designers spend their days creating user friendly, that are ready to be customized to your specifications. Your performance should be a reflection of your efforts and also with ease. Ready to Catch the Demo now.??"
  btnTitle = "GET START"

  s2_title = 'Why Kesar Creatives?'

  Kesars=[
    {
      img : 'solution-kc.png',
      title : 'Solution Expertise',
      subtitle : 'Having worked for small to the complex and critical web applications, we have proven parts to deliver the best web development projects.',
    },
    {
      img : '01.png',
      title : 'Multiple Platforms',
      subtitle : 'We use Mobile App client SDKs to build a native experience ,and It is now easier than ever to add a mobile app to your existing enterprise apps.',
    },
    {
      img : '02.png',
      title : '24×7 Availability',
      subtitle : 'Our clients have always trusted us without any second thought because we have good experience in delivering various successful projects.'
    },
    {
      img : '03.png',
      title : 'Support & Integration',
      subtitle : 'Our business web applications are open to third-party integration of features and functionalities that are not a part of the core CMS framework.'
    },
    {
      img : '04.png',
      title : 'Customize Software Solution',
      subtitle :'This is our work and faith of our client in us because of which we have a good amount of experience in delivering various successful projects.'
    },
    {
      img : '05.png',
      title : 'Enterprise Portals',
      subtitle :'We have expertise in building user-friendly enterprise portals for internal use as well as web portals to be deployed in wide area networks.'
    }
  ]

  technologyTitle='Technology Stack'
  technologyImgs = [
    {
      img_bg:true,
      img:'te_1.png'
    },
    {
      img_bg:'',
      img:'te_2.png'
    },
    {
      img_bg:'',
      img:'te_3.png'
    },
    {
      img_bg:'',
      img:'te_4.png'
    },
    {
      img_bg:'',
      img:'te_5.jpeg'
    },
    {
      img_bg:'',
      img:'te_6.png'
    },
    {
      img_bg:true,
      img:'te_7.png'
    },
    {
      img_bg:'',
      img:'te_8.png'
    },
    {
      img_bg:'',
      img:'te_9.png'
    },
    {
      img_bg:'',
      img:'te_10.png'
    },
    {
      img_bg:'',
      img:'te_11.png'
    },
    {
      img_bg:'',
      img:'te_12.jpeg'
    },
    {
      img_bg:true,
      img:'te_13.png'
    },
    {
      img_bg:'',
      img:'te_14.jpeg'
    },
    {
      img_bg:'',
      img:'te_15.jpeg'
    },
    {
      img_bg:'',
      img:'te_16.png'
    },
    {
      img_bg:'',
      img:'te_17.png'
    },
    {
      img_bg:'',
      img:'te_18.png'
    },
    {
      img_bg:true,
      img:'te_19.png'
    },
    {
      img_bg:'',
      img:'te_20.jpeg'
    },
    {
      img_bg:'',
      img:'te_21.jpeg'
    },
    {
      img_bg:'',
      img:'te_22.jpeg'
    },
    {
      img_bg:'',
      img:'te_23.jpeg'
    },
    {
      img_bg:'',
      img:'te_24.png'
    },
  ]

  ourProductstitle='Our Products and Solutions';
  ourProducts = [
    {
      img:'or_1.png',
      title:'Custom Clearance System',
    },
    {
      img:'or_2.png',
      title:'Import-Export System',
    },
    {
      img:'or_3.png',
      title:'Customize Account System',
    },
    {
      img:'or_4.png',
      title:'eCommerce Portal',
    },
    {
      img:'or_5.png',
      title:'Kesar All In One Management System',
    },
    {
      img:'or_6.png',
      title:'Fullfilment and eProcurement Software',
    },
  ]

}
