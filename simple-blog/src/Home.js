import { useState , useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs , setBlogs ] = useState(null);

      useEffect( () => {
          fetch('http://localhost:8000/blogs')
          .then(res => {
              return res.json()
          })
          .then(data => {
              setBlogs(data)
          })
          
      }, []);
// wenn blogs = null => false somit wird was rechts steht nicht ausgeführt
    return ( 
        <div className="home">
           {blogs && <BlogList blogs={blogs} title="All Blogs!"/>} 
        </div>
     );
}
 
export default Home;