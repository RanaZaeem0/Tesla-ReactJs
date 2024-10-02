import cyberLogo from '../assets/CyberLogo.png'
import './Section.css';
import Fade from 'react-reveal/Fade';
// import modelY from "../assets/model-y-right.jpg";
function Section({image, title, rightBtnText, headline}) {
  
  return (
        <section
        className="w-full h-full bg-blue-400 flex flex-col justify-between  items-center pt-16 pb-7 
        
        max-sm:px-5 max-sm:pt-28 "
        id='section'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* top */}
        <Fade bottom>
        <div className="text-center flex flex-col items-center    ">
          {/* title */}
            {title=="Cybertruck"?
            (<img className='h-[65%] w-[90%] 
              max-sm:h-[100%] max-sm:w-[100%]' src={cyberLogo} alt='cyberlogo'/>):
            (<h1 className="text-[#ffffff] text-[56px]  font-bold
              
              max-sm:text-[50px]">{title}</h1>)
            }

          {/* subtitle */}
          {title !== "Cybertruck" && title!=="PowerWall" && title!=="Accessories" && (
          <p className="text-[#ffffff] font-semibold text-[25px]
          
          max-sm:text-[20px]">{headline}</p>
  )}  
        </div>
        </Fade>

        {/* bottom */}

        <Fade bottom>
        <div>
        <div className="flex gap-5 max-sm:flex-col " >
          {/* left-btn */}
           <button className="text-[#ffffff] text-sm font-bold px-24 py-3 rounded-full
              max-sm:py-[10px] max-sm:px-12 max-sm:text-xl " style={{backgroundColor: 'rgba(0, 0, 0, 0.7'}}>
             Order Now
           </button>
           
          {/* right-btn */}
           {/* <button className="text-[#393c41] text-sm font-bold px-24 py-3 rounded-full " style={{backgroundColor: 'rgba(255, 255, 255, 0.7'}}>  
             {rightBtnText}
           </button> */}

           {title!=="Accessories" && (<button className="text-[#393c41] text-sm font-bold px-24 py-3 rounded-full 
            max-sm:py-[10px] max-sm:px-12 max-sm:text-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.7'}}>  
             {rightBtnText}
           </button>)}
        </div>

        <div className="flex justify-center items-center mt-5 text-3xl">
        {title=="Model Y" && (
          <i className={`fa-solid fa-arrow-down bounce-arrow`}></i>
        )}
        </div>
        </div>
        </Fade>

     
      </section>
  )
}

export default Section