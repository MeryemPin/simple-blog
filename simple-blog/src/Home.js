import { useState , useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs , isPending , error } = useFetch('http://localhost:8000/blogs')
    
// wenn blogs = null => false somit wird was rechts steht nicht ausgeführt
    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs!"/>} 
        </div>
     );
}
 
export default Home;