import { Component } from '@angular/core';
import { BlogShowComponent } from '../blog-show/blog-show.component';
import { BlogsService } from 'src/app/Service/blogs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs:any;
  blog_category:any;
  blogslider1:Array<any> =[];
  constructor(private blogservice:BlogsService, private activeRoute:ActivatedRoute){
    
  }
  DatabaseCount:Array<any> =[] ;
  reactCount:Array<any> =[] ;
  ngOnInit(): void{
    this.blog_category = this.activeRoute.snapshot.paramMap.get('category');
    this.blogs = this.blogservice.blogs;
    this.blogservice.blogs.forEach(element => {
      if (element.posted_in == 'react' ) {
        this.reactCount.push(element)
      }
      if (element.posted_in == 'database' ) {
        this.DatabaseCount.push(element)
      }
    });
    for (let index = 0; index < this.blogs.length; index++) {
      const element = this.blogs[index];
      if(element.posted_in == this.blog_category){
        this.blogslider1.push(element)
      }
    }
    if(this.blogslider1.length > 0){
      this.blogs = this.blogslider1
    }else{
      this.blogs = this.blogservice.blogs;
    }
  }
  title = 'THIS THEME SUPPORTS A CUSTOM FRONTPAGE'
}
