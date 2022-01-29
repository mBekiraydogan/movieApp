import { Movie} from "./movie";

export class MovieRepository{
    private movies: Movie[];

constructor(){
    this.movies = [
        {id: 1, title:"film 1", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aspernatur id molestiae, maiores velit officiis?", imageUrl:"1.jpeg",isPopular:false,datePublished: new Date(11/7/2015)},
        {id: 2, title:"film 2", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aspernatur id molestiae, maiores velit officiis?", imageUrl:"2.jpeg",isPopular:true,datePublished: new Date(1985/11/15)},
        {id: 3, title:"film 3", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aspernatur id molestiae, maiores velit officiis?", imageUrl:"3.jpeg",isPopular:true,datePublished: new Date(1985/6/15)},
        {id: 4, title:"film 4", description:"açıklama 4", imageUrl:"4.jpeg",isPopular:false,datePublished: new Date(1985/3/15)}
    ];
}


    getMovies(): Movie[] {
        return this.movies;
    }

    getPopularMovies(): Movie[] {
        return this.movies.filter(i=>i.isPopular);
    }

    getMovieById(id : number) : Movie {
        return this.movies.find(i=>i.id==id);
    }

}

