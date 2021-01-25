import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface RedditPost{
  title: string;
  link: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  redditUrl: string = 'https://www.reddit.com/r/aww/.json';

  public redditPosts: RedditPost[] = [];

  constructor(private http: HttpClient) { }

  getPosts(){
    this.http.get(this.redditUrl).subscribe(
      (response: any) => {
        const posts = response.data.children;
        for (let post of posts){
          let redditPost: RedditPost = {
            title: post.data.title,
            link: 'https://reddit.com' + post.data.permalink,
            thumbnail: post.data.thumbnail
          }
          // console.log(redditPost.title);
          this.redditPosts.push(redditPost);
        }
        // console.log(response)
      }, 
      (error: any) => {
        console.log(error)
      }
    )
  }
}
