import { Link, useForm } from "@inertiajs/react";

function Show ({post}) {
    return ( 
        <>
          <div>
             <h1 className=" text-3xl p-2 text-center">{post.title}</h1>
             <p className="mt-10 text-[20px] p-2">{post.body}</p>
          </div>
        </>
     );
}

export default Show ;