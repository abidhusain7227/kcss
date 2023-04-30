import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/Service/blogs.service';

@Component({
  selector: 'app-blog-show',
  templateUrl: './blog-show.component.html',
  styleUrls: ['./blog-show.component.css']
})
export class BlogShowComponent {

  constructor(private blogservice:BlogsService, private activeRoute:ActivatedRoute){
  }
  blog_id:any = ''
  blog:any = ''
  DatabaseCount:Array<any> =[] ;
  reactCount:Array<any> =[] ;
  ngOnInit(): void{
    this.blog_id= this.activeRoute.snapshot.paramMap.get('id');
    this.blog = this.blogservice.blogs.find(x => x.id == this.blog_id);
    this.blogservice.blogs.forEach(element => {
      if (element.posted_in == 'react' ) {
        this.reactCount.push(element)
      }
      if (element.posted_in == 'database' ) {
        this.DatabaseCount.push(element)
      }
    });
  }
}
