import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Kidshow() {
    const [kids,setKids] = useState();
   
    
    let {id} = useParams()
    useEffect(()=>{
        fetch('/data.json').then((res)=>res.json()).then((data)=>{
            const store = data.kids;
            const kidsImage = store.find((p)=>p.id===parseInt(id));
            setKids(kidsImage)
            console.log(kidsImage);
            
        })
    },[id])
  return (
    <>
    <div className="weddingbanner"> 
    <img src='/images/KIDS/image.png' style={{width:"100%"}} className='img-fluid'></img>
    </div>
    <div className="container mx-auto mt-5">
    {kids&& <div className="gallery container mx-auto">
        <div className="gallery-item">
            <img src={kids.sub1} alt="Christmas photo" className="christmas-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub4} alt="Studio photo" className="pink-bg  img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub7} alt="Guitar photo" className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub9} alt="Music photo" className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub2} alt="Standing photo" className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub5} alt="Music setup" className="orange-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub10} alt="Studio setup" className="pink-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub3} alt="Guitar pose" className="pink-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub6} alt="Christmas setup" className="teal-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub8} alt="Music equipment" className="pink-bg img-fluid mt-2"/>
        </div>
        <div className="gallery-item">
            <img src={kids.sub11} alt="Guitar standing" className="pink-bg img-fluid mt-2"/>
        </div>
    </div>}
    </div>
    </>
  )
}

export default Kidshow