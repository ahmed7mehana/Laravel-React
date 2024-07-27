import { Link, useForm } from "@inertiajs/react";
import {useRoute}from '../../../vendor/tightenco/ziggy'


function Home({posts}) {

   const route = useRoute();
   const {delete:destroy}=useForm();

   function submit(e,post) {
    e.preventDefault()
    destroy(route('post.destroy',post))
  }
   return ( 
        <div className=" flex justify-center flex-col bg-green-400	">


<h1 className="text-[25px] bg-green-400 text-center p-3 uppercase">First Laravel & react & inertia project</h1>

          <div className=" flex justify-center flex-row flex-wrap	 items-center ">
          {posts.data.map(post=>(
            <div key={post.id} className=" w-[500px] p-4 border-2 border-black m-2    ">
              <p className=" border-b-2 border-red-700 text-sm"><span className=" text-lg">title : </span> {post.title}</p>
              <p><span className=" text-lg">des : </span> {post.body}</p>  
                  <div className="border-b-3 border-blue-500">
                    <form onSubmit={(e)=>(
                       e.preventDefault(),
                       destroy(route('post.destroy',post))
                    )}>
                    <button  className="m-2 p-2 rounded-[20%] hover:bg-red-500 text-center bg-amber-500">Del</button>
                    <Link className="m-2 p-2 rounded-[20%] hover:bg-red-500 text-center bg-amber-500"
                       href={route("post.edit",post)}
                         >update</Link>
                    <Link className="m-2 p-2 rounded-[20%] hover:bg-red-500 text-center bg-amber-500"
                                href={route("post.show",post)}>Viow</Link>
                    </form>
                </div>     

            </div>
          ))}
         
          </div>

          <div className="text-center p-6">
            {posts.links.map(link=>(
              <Link key={link.label}
              href={link.url}
               dangerouslySetInnerHTML={{__html:link.label}}
               className={`p-1 mx-1 ${link.active?"text-blue-500 font-bold":""}
                 `}
               />
            ))}
          </div>
        </div>
     );
}
export default Home;