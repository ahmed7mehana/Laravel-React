
import { useForm } from '@inertiajs/react'
function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        body: '',
      })
      
      function submit(e) {
        e.preventDefault()
        post('/post')
      }
    return ( 
        <div className="flex flex-col justify-center ">
        <div className="flex flex-col justify-center">
          <div> 
           <h1 className="text-[25px] bg-green-400 text-center p-3 uppercase">lets Create new things</h1>
          </div>
             <div className="flex justify-center ">
                 <form onSubmit={submit} className=" m-5 flex flex-col w-[500px]">
                     <input
                     className=' border-2 p-2 rounded-lg border-red-800 '
                     placeholder='write greate title'
                        value={data.title}
                        onChange={(e)=>setData("title",e.target.value)}></input>
                     <textarea
                     className=' border-2 rounded-lg border-red-800 p-2 mt-3'
                     placeholder='write what u think'
                     rows={10}
                     value={data.body}
                     onChange={(e)=>setData("body",e.target.value)}
                     ></textarea>
                     <button className="  bg-blue-500 rounded-lg  p-2 m-5  hover:font-bold hover:bg-green-500" disabled={processing} > Create</button>
                 </form>
                 {errors.body||errors.title ?<p className='error'>{errors.body||errors.title}</p>:""}
             </div>
        </div>
         </div>
     );
}

export default Create;