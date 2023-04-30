import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }
  blogs = [
    {
      id:'1',
      posted_in:'react',
      date:'01 May',
      image:'../../../assets/img/blog/blog_01.jpeg',
      thumbImage:'../../../assets/img/blog/blog_01.jpeg',
      title:'WHY SHOULD YOU CHOOSE LARAVEL FRAMEWORK FOR YOUR NEXT WEBSITE/WEB APPLICATION?',
      content:'Are you planning to start a new website/web application development project on the PHP platform? Well, one cannot deny the fact that technology has bought a revolutionary change in the exposure as well as revenue building strategies in corporate and businesses. But, when it comes to choosing the right platform for your diversified requirements, Laravel'
  },
  {
    id:'2',
    posted_in:'react',
    date:'01 May',
    image:'../../../assets/img/blog/blog_02.jpeg',
    thumbImage:'../../../assets/img/blog/blog_02.jpeg',
    title:'LARAVEL VS CODEIGNITER: WHICH ONE TO CHOOSE FOR YOUR NEXT WEBSITE/WEB APPLICATION',
    content:'Laravel and Codeigniter, both is PHP frameworks applications. But both are having different features from each other. Laravel development growth is much higher than the Codeigniter. Everyone nowadays is confused between these two frameworks to choose. Hire laravel developers or Codeigniter developers will help you in solving your problems. Firstly, let us know what isRead'
  },
  {
    id:'3',
    posted_in:'react',
    date:'01 May',
    image:'../../../assets/img/blog/blog_03.jpeg',
    thumbImage:'../../../assets/img/blog/blog_03.jpeg',
    title:'TOP 10 WORDPRESS PAYPAL PLUGINS TO EASILY ACCEPT ONLINE PAYMENT',
    content:'No one can deny this fact that online shopping has very much become a part of our daily lives. What makes this possible is the availability of a number of payment gateways such as PayPal and Stripe that make it easy to collect payment right from the website. Immediately after choosing a product or selectingRead'
  },
  {
    id:'4',
    posted_in:'react',
    date:'29 APR',
    image:'../../../assets/img/blog/blog_04.jpeg',
    thumbImage:'../../../assets/img/blog/blog_04.jpeg',
    title:'BLOG2',
    content:'Here KC'
  },
  {
    id:'5',
    posted_in:'database',
    date:'27 APR',
    image:'../../../assets/img/blog/blog_05.png',
    thumbImage:'../../../assets/img/blog/blog_05.png',
    title:'BLOG1',
    content:'Welcome. Here KC Blog1….'
  },
  ]
}
