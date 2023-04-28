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

  OurServicesTitle = 'Our Services'
  OurServicess = [
    {
      img:'our_s_01.png',
      title:'Web Development',
      subtitle:'Firstly we understand client’s business strategies and based on that we offer our tailor-made and secure IT solutions to enhance the business growth .To know more check our portfolio',
    },
    {
      img:'our_s_02.png',
      title:'Cross-Platform Apps',
      subtitle:'We skillfully execute cross-platform development process right from requirements gathering, wire-frame , UX/UI mock-ups, development and testing to build quality & featured -rich apps.To know more check our portfolio',
    },
    {
      img:'our_s_03.png',
      title:'Cloud Services',
      subtitle:'Based on our hands on experience in DevOps and Cloud environment, we help our clients gain the most from high-performing cloud environments.To know more check our portfolio',
    },
    {
      img:'our_s_04.png',
      title:'Mobile App Development',
      subtitle:'We possess expertise in customize mobile applications development. Our work consist not just development but from conceptualization of idea to actual implementation as per the client’s expectations.To know more check our portfolio',
    }
  ]
  industryPresenceTitle = 'Industry Presence'
  industryPresenceSubtitle = 'Kesar Creatives provides a wide range of industrial solutions & services to assist companies transform their business into IT initiatives'
  industryPresences = [
    {
      img:'i_1.png',
      title:'E-commerce'
    },
    {
      img:'i_2.png',
      title:'Medical & Healthcare'
    },
    {
      img:'i_3.png',
      title:'Travel & Hospitality'
    },
    {
      img:'i_4.png',
      title:'Social Networking'
    },
    {
      img:'i_5.png',
      title:'Real Estate'
    },
    {
      img:'i_6.png',
      title:'Retail & Consumer Sector'
    },
    {
      img:'i_7.png',
      title:'Education / E-Learning'
    },
    {
      img:'i_8.png',
      title:'Financial Services'
    }
  ]
  imageSizeOurProfile={width: 300, height: 250, space: 3}
  OurProfileTitle = 'Our Portfolio';
  imgCollection: Array<object> = [
    {
      image: '../../../assets/img/our_profile_1.jpeg',
      thumbImage: '../../../assets/img/our_profile_1.jpeg',
      alt: 'Image 1',
      title: 'Portfolio1',
    },
    {
      image: '../../../assets/img/our_profile_2.jpeg',
      thumbImage: '../../../assets/img/our_profile_2.jpeg',
      alt: 'Image 1',
      title: 'Portfolio2',
    },
    {
      image: '../../../assets/img/our_profile_3.jpeg',
      thumbImage: '../../../assets/img/our_profile_3.jpeg',
      alt: 'Image 1',
      title: 'Portfolio3',
    },
    {
      image: '../../../assets/img/our_profile_4.jpeg',
      thumbImage: '../../../assets/img/our_profile_4.jpeg',
      alt: 'Image 1',
      title: 'Portfolio4',
    },
    {
      image: '../../../assets/img/our_profile_1.jpeg',
      thumbImage: '../../../assets/img/our_profile_1.jpeg',
      alt: 'Image 1',
      title: 'Portfolio5',
    },
    {
      image: '../../../assets/img/our_profile_2.jpeg',
      thumbImage: '../../../assets/img/our_profile_2.jpeg',
      alt: 'Image 1',
      title: 'Portfolio6',
    },
    {
      image: '../../../assets/img/our_profile_3.jpeg',
      thumbImage: '../../../assets/img/our_profile_3.jpeg',
      alt: 'Image 1',
      title: 'Portfolio7',
    },
    {
      image: '../../../assets/img/our_profile_4.jpeg',
      thumbImage: '../../../assets/img/our_profile_4.jpeg',
      alt: 'Image 1',
      title: 'Portfolio8',
    },
    
  ];

}
