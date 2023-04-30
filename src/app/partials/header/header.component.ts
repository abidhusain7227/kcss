import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobile_view = false;
  dropdownActive =false
  navMobile(){
    console.log('abb')
    this.mobile_view = !this.mobile_view
  }
  dropdown(){
    this.dropdownActive = !this.dropdownActive
  }
  logoTitle = 'Kesar Creatives';
  logoSubtitle = 'Create Your Business Software'
  menuItems = [
    {
       label: 'Home',
       href: '',
    },
    {
       subitem:true,
       label: 'Company',
       href: '#',
       children: [
          {
            label: 'About Us',
            href: 'about_us',
          },
          {
            label: 'Privacy Policy',
            href: 'privacy_policy',
          },
          {
            label: 'Tech Team',
            href: 'tech_team',
          },
          {
            label: 'Career',
            href: 'career',
          }
        ],
    },
    {
       label: 'Services',
       href: 'services',
    },
    {
      label: 'www.chrcha.in',
      href:'#'
    },
    {
      label: 'Blog',
      href:'blog'
    },
    {
      label: 'Contact Us',
      href:'contact_us'
    }
   ];
   
   bannerTitle = 'ALL YOUR NEEDS @ 1 PLACE'
   bannerSubTitle = "You're having a business because you have goals. Here's how We can help you reach them!"

}
