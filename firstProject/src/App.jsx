import React from 'react'
import { FaBeer } from "react-icons/fa";
function App() {
  return (
<>
{/* header navbar */}
<header className='w-[100%] p-4 bg-white shadow-lg flex items-center justify-center'>
  <nav className=' w-[95%]  flex items-center justify-between'>
    <div>
      <img
      className='w-12 '
      src="../public/logo_darkas.png" alt="logo" />
    </div>

    <div className='flex gap-2'>
      <ul className='flex items-center gap-4 font-semibold capitalize'>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Service</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>


    </div>
    
    <button className='px-4 py-2 bg-[#5777FF] text-white text-center rounded-full'>
      Let's Talk
    </button>
  </nav>
</header>

{/* hero section */}
<section className='w-[95%]  flex items-center justify-between gap-4 mt-12 mx-auto'>

<div className='flex w-1/2 flex-col  gap-6'>
  <p className='font-semibold bg-[#ECEFFF] w-fit p-2 rounded-full text-[#5777FF] '>👋 Welcome to my portfolio</p>

  <h1 className='font-bold text-6xl'>I'm William Isaac
  Freelance Copywriter</h1>

  <h1 className='font-bold text-[#5777FF] text-6xl'>I'm William Isaac
  Freelance Copywriter</h1>

  <p 
  className='font-semibold text-gray-400

  '>Since 1999, we are working for business, agency or individuals for building digital content based in New York, USA.</p>
</div>

<div className='w-1/2'>
  <img
  className='w-[100%] rounded-full'
  src="../public/writer.jpg" alt="" />
</div>


</section>

{/* clinet */}
<div className='mt-24 bg-gray-200 w-full h-screen p-4'>


<div className='w-[80%] mx-auto flex flex-col gap-6'>

<h1 className='text-center text-2xl  capitalize font-semibold text-[#5777FF]'>clinet</h1>
<p className='text-4xl text-center capitalize font-bold'>Clients I've worked with</p>

<div className='w-full  mt-14 grid grid-cols-6 gap-24'>

<img className='w-[200px]'  src="../public/logos/1.png" alt="" />
<img className='w-[200px]' src="../public/logos/dell.png" alt="" />
<img className='w-[200px]' src="../public/logos/3.png" alt="" />
<img className='w-[200px]' src="../public/logos/4.png" alt="" />
<img className='w-[200px]' src="../public/logos/5.png" alt="" />
<img className='w-[200px]' src="../public/logos/6.png" alt="" />
<img className='w-[200px]' src="../public/logos/7.png" alt="" />
<img className='w-[200px]' src="../public/logos/8.png" alt="" />
<img className='w-[200px]' src="../public/logos/9.png" alt="" />
<img className='w-[200px]' src="../public/logos/10.png" alt="" />
<img className='w-[200px]' src="../public/logos/11.png" alt="" />
<img className='w-[200px]' src="../public/logos/12.png" alt="" />
<img className='w-[200px]' src="../public/logos/13.png" alt="" />
<img className='w-[200px]' src="../public/logos/14.png" alt="" />
<img className='w-[200px]' src="../public/logos/15.png" alt="" />
<img className='w-[200px]' src="../public/logos/16.png" alt="" />
<img className='w-[200px]' src="../public/logos/17.png" alt="" />
<img className='w-[200px]' src="../public/logos/18.png" alt="" />


</div>

</div>


</div>

{/* my services */}
<div className=' bg-gray-100 w-full h-screen p-4'>

  <div className='flex flex-col'>
   
  <h1 className='text-center text-2xl  capitalize font-semibold text-[#5777FF]'>MY SERVICES</h1>
<p className='text-4xl text-center capitalize font-bold'>What I DO</p>

{/* carts sections */}
<div className='w-[80%] mx-auto grid grid-cols-4  gap-4'>

<div className=' border p-8  flex flex-col gap-4 hover:shadow-lg hover:border '>
  <div>
  </div>
  <h1>web copywriter</h1>
  <p>Freelance web copyrighting include adverts, websites, digital media or posts.</p>

</div>


<div className='w-[] border p-8  flex flex-col gap-4 hover:shadow-lg hover:border '>
  <div>
  </div>
  <h1>web copywriter</h1>
  <p>Freelance web copyrighting include adverts, websites, digital media or posts.</p>

</div>
<div className='w-[] border p-8  flex flex-col gap-4 hover:shadow-lg hover:border '>
  <div>
  </div>
  <h1>web copywriter</h1>
  <p>Freelance web copyrighting include adverts, websites, digital media or posts.</p>

</div>
<div className='w-[] border p-8  flex flex-col gap-4 hover:shadow-lg hover:border '>
  <div>
  </div>
  <h1>web copywriter</h1>
  <p>Freelance web copyrighting include adverts, websites, digital media or posts.</p>

</div>

</div>

  </div>

</div>

{/* resume */}

<div className=' bg-gray-100 w-full h-screen p-4'>

  <div className='flex flex-col'>
   
  <h1 className='text-center text-2xl  capitalize font-semibold text-[#5777FF]'>^RESUME^</h1>
<p className='text-4xl text-center capitalize font-bold'>My Work Experience</p>


</div>

<div className='w-[50%] mx-auto mt-8 bg-gray-300 shadow-lg font-semibold p-8'>
<div className='flex items-center justify-between'>
  <h1>
  Brochure Copywriter</h1>
  <p>2014 - 2016</p>
</div>


<div className='p-4 flex gap-4'>
<h1>PHILIPS</h1>
  <p>
  I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
<div>

  
</div>
</div>

</div>


</div>

{/* cart portfolio */}
<div className='w-full'>

<div className='w-[80%] grid grid-cols-2 gap-4 mx-auto'>
  
<div>
  <img src="../public/carts/ps_01.jpg" alt="" />
<h1 className='font-semibold text-2xl'>Document Manager Application</h1>
<p className='text-gray-500'>Web Development</p>
</div>
<div>
  <img src="../public/carts/ps_03.jpg" alt="" />
<h1 className='font-semibold text-2xl'>Digital marketing</h1>
<p className='text-gray-500'>Web Development</p>
</div>
<div>
  <img src="../public/carts/ps_04.jpg" alt="" />
<h1 className='font-semibold text-2xl'>Creative PortFolio</h1>
<p className='text-gray-500'>Web Development</p>
</div>
<div>
  <img src="../public/carts/ps_05.jpg" alt="" />
<h1 className='font-semibold text-2xl'> Mobile App Development</h1>
<p className='text-gray-500'>Web Development</p>
</div>
</div>



</div>

{/* testimonials */}

<div className='mt-12 bg-gray-100 w-full h-screen p-4'>

  <div className='  flex flex-col p-4 gap-4'>
   
  <h1 className='text-center text-2xl  capitalize font-semibold text-[#5777FF]'>^TESTIMONIALS^</h1>
<p className='text-4xl text-center capitalize font-bold'>WHAT MY CLINET SAY</p>

</div>
{/* testimoniala */}
<div className='w-[80%] mt-16 mx-auto flex items-center justify-between'>

  <div className='w-[350px] border p-2 hover:shadow-lg  hover:border hover:border-blue-400 flex flex-col gap-4'>
 <h1 className='font-bold text-3xl'>Great Advice</h1>
 <p>Lorem ipsum dolor sit amet.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet.
 </p>
 <h1 className='font-bold text-3xl'>Mel Gibson</h1>
  <p className='text-gray-400'>clinet</p>

  </div>
  <div className='w-[350px] border p-2 hover:shadow-lg  hover:border hover:border-blue-400 flex flex-col gap-4'>
 <h1 className='font-bold text-3xl'>Great Advice</h1>
 <p>Lorem ipsum dolor sit amet.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet.
 </p>
 <h1 className='font-bold text-3xl'>Mel Gibson</h1>
  <p className='text-gray-400'>clinet</p>

  </div>
  <div className='w-[350px] border p-2 hover:shadow-lg  hover:border hover:border-blue-400 flex flex-col gap-4'>
 <h1 className='font-bold text-3xl'>Great Advice</h1>
 <p>Lorem ipsum dolor sit amet.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet.
 </p>
 <h1 className='font-bold text-3xl'>Mel Gibson</h1>
  <p className='text-gray-400'>clinet</p>

  </div>




</div>

</div>


{/* who i am  */}

<div className='w-full bg-gray-200'>

<div className='w-[80%] mx-auto flex  items-center justify-between'>

<div className='w-1/3'>
<img

  className='w-[100%] rounded-full'
  src="../public/writer-2..jpg" alt="" />
</div>

<div className='flex flex-col gap-8 w-1/2 mt-12 '>
<h1 className='text-6xl font-bold '>Who i Am</h1>

<p className=' text-2xl text-gray-500'>
Hello
I'm William Isaac, a Freelance English Creative Copywriter, Content Writer and Communications Consultant based in New York, USA. By better copying, I create value for the companies. I have spent more than 25 + years at various copywriting agencies, advertising, public relations and digital agencies, and most recently as a freelance copywriter for brands and businesses, honing my creative writing skills.</p>

</div>

</div>


</div>


{/* questions */}
<div className='w-full h-[500px]'>

  <div className='w-[80%] mt-20 mx-auto  flex items-center flex-col gap-8'>
   
   <div>
   <h1 className='text-semibold text-[#5777FF] text-center text-3xl '>FAQ</h1>
   <h1 className='text-semibold text-4xl'>Your Question and Answer</h1>
   </div>

<div>
  <p className='text-[#5777FF] text-2xl'>How do I get a quotation for my project?</p>
  <p className='text-gray-500 text-2xl'>10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.</p>
</div>

{/* questions */}
<div className='flex w-full flex-col gap-4'>

<div className='w-full shadow-lg p-2   border-2'>
How many landing pages I can work with your product?
</div>
<div className='w-full shadow-lg p-2   border-2'>
How many landing pages I can work with your product?
</div>
<div className='w-full shadow-lg p-2   border-2'>
How many landing pages I can work with your product?
</div>

</div>


  </div>





</div>


{/* latest update */}
<div className='w-[80%] h-screen mx-auto flex flex-col gap-4 items-center'>

<div>
  <h1 className='text-center text-2xl font-semibold text-[#5777FF]'>UPDATE</h1>
 <h1 className='text-4xl font-bold'> Latest News & Blogs</h1>
</div>

{/* gallery */}
<div className='w-full grid grid-cols-3'>

<div className="w-[300px] shadow-lg p-4 h-[400px]  flex flex-col items-center text-center">
  <img
  className='w-[100%]' 
  src="../public/update/up1.jpg" alt="" />
  <h1 className='text-2xl text-[#5777FF]'>Learn web dev</h1>
  <p className='text-gray-500 text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae.</p>
</div>

<div className="w-[300px] shadow-lg p-4 h-[400px]  flex flex-col items-center text-center">
  <img
  className='w-[100%]' 
  src="../public/update/2.jpg" alt="" />
  <h1 className='text-2xl text-[#5777FF]'>Learn web dev</h1>
  <p className='text-gray-500 text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae.</p>
</div>

<div className="w-[300px] shadow-lg p-4 h-[400px]  flex flex-col items-center text-center">
  <img
  className='w-[100%]' 
  src="../public/update/3.jpg" alt="" />
  <h1 className='text-2xl text-[#5777FF]'>Learn web dev</h1>
  <p className='text-gray-500 text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestiae.</p>
</div>


</div>
</div>


{/* contact us */}


<div className='w-[80%] h-screen flex  gap-4 mx-auto items-center'>


<div className='w-[50%] flex flex-col gap-6 '>
 <h1 className='text-4xl font-bold text-blue-600'> STAY CONNECTED
 </h1>
 <h1 className='text-6xl font-semibold'>
 Let’s Work Together!</h1>

 <div className='flex gap-2'>
  <p>phone</p>
  <p>36353738228</p>
 </div>

 <div className='flex gap-2'>
  <p>Email</p>
  <p>example@gmail.com</p>
 </div>

 <div className='flex gap-2'>
  <p>Email</p>
  <p>example@gmail.com</p>
 </div>

</div>



<div className='w-[50%]  flex items-center '>
<form className='w-[80%] bg-slate-600 h-[500px]  space-y-4 rounded-sm shadow-lg p-2'>
<h1 className='text-4xl text-white font-semibold'>Fill Form</h1>


<div>
<input className="w-full  p-2" type="text"  placeholder='enter name'/>
</div>   
<div>
<input className="w-full p-2" type="text" placeholder='last name' />
</div>   
<div>
<input className="w-full p-2" type="text" placeholder='enter email' />
</div>   
<div>
<input className="w-full p-2" type="text" placeholder='enter password' />
</div>   

<button className='w-fit bg-blue-500 px-3 py-1 font-semibold text-white rounded'>Submit</button>

  </form>
</div>


</div>


{/* footer */}

<div className='w-[80%] mx-auto flex flex-col items-center'>

<div>
  <img className='w-[100px]' src="../public/logo_darkas.png" alt="" />
</div>

<div>
<ul className='flex gap-4 capitalize mt-2 font-semibold text-2xl '>
  <li>Home</li>
  <li>About</li>
  <li>Contact us</li>
  <li>services</li>
  <li>portfolio</li>
  <li>Blogs</li>
  <li>Content</li>
</ul>

</div>

<div>
© 2024 Flixta. Designed by RSTheme with ❤️
</div>


</div>

</>
  )
}

export default App