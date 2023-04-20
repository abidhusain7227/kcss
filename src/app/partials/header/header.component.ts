import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoTitle = 'Kesar Creatives';
  logoSubtitle = 'Create Your Business Software'
  menuItems = [
    {
       label: 'Home',
       href: '/home',
    },
    {
       subitem:true,
       label: 'Company',
       href: '#',
       children: [
          {
            label: 'About Us',
            href: '/about_us',
          },
          {
            label: 'Privacy Policy',
            href: '/privacy_policy',
          },
          {
            label: 'Tech Team',
            href: '/tech_team',
          },
          {
            label: 'Career',
            href: '/career',
          }
        ],
    },
    {
       label: 'Services',
       href: '/services',
    },
    {
      label: 'www.chrcha.in',
      href:'#'
    },
    {
      label: 'Blog',
      href:'#'
    },
    {
      label: 'Contact Us',
      href:'#'
    }
   ];
   

}
