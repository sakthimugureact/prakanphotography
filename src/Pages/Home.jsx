import React from "react";
import banner from "../assets/images/IMAGES/HOME SCREEN/weddingbanner.png";
import welcomebanner from "../assets/images/IMAGES/HOME SCREEN/banner2.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div className="container-fluid weddingbanner">
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active"  data-bs-interval="1000">
      <img src="/images/weddingbanner.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"  data-bs-interval="2000">
      <img src="/images/image2.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"  data-bs-interval="3000">
      <img src="/images/image3.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
      </div>

      <div className="container secondbanner mx-auto mt-5">
        <div className="row">
          <div className="col-md-5">
            <img src={welcomebanner} className="img-fluid" />
          </div>
          <div className="col-md-7 px-lg-3 px-0 px-xl-0 px-md-3">
            <p className="fs-3 pt-4 pt-lg-5 pt-xl-4 wechead">
              Welcome to Prakan Photo Studio
            </p>
            <h6 className="fs-5 fw-bold pt-3 wecsub">
              Momemts Fade, Memories Stay - We Make Them Timeless.
            </h6>
            <p className="fs-5 wecpara">
              At Prakan Photo Studio, photography is not just our profession
              it's our passion. With years of experience in capturing life's
              most precious events, we have grown intoone of the most trusted
              photography studios in the region.We believe that every photo
              tells a story. Whether it's the joyous laughter at a wedding, the
              sparkle in a child's eyes, or a couple's quiet moment of love, we
              capture emotions that last forever. Our approach is a perfect
              blend of candidcreativity and professional precision. We are a
              passionate team of photographers dedicated to capturing life's
              most beautiful moments. Whether it's a wedding, birthday,
              maternity, or portrait shoot, we bring your vision tolife with
              high-quality photography and personalized service.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5 pt-4">
        <h2 className="text-center mb-5 fw-bold">LATEST PHOTOGRAPHY</h2>
        <div className="row pt-4">
          <div className="col-md-4">
            <Link to="/photography">
              <img
                src="/images/image5.png"
                className="d-block mx-auto img-fluid p-3"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/photography">
              <img
                src="/images/image6.png"
                className="d-block mx-auto img-fluid p-3"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/photography">
              <img
                src="/images/image7.png"
                className="d-block mx-auto img-fluid p-3"
              ></img>
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <Link to="/photography">
              <img
                src="/images/image8.png"
                className="d-block mx-auto img-fluid p-3"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/photography">
              <img
                src="/images/image9.png"
                className="d-block mx-auto img-fluid p-3"
              ></img>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/photography">
              <img
                src="/images/image5.png"
                className="d-block mx-auto img-fluid p-3"
              ></img>
            </Link>
          </div>
        </div>
      </div>

      <div className="container bannerRain mx-auto mt-5 pt-4">
        <div className="row px-5">
          <div className="col-md-6 text-center">
            <p className="fs-4 mt-4 mb-2">Candid Videos</p>
            <h5 className="fs-3 fw-bold mb-3">Capturing the Authentic You</h5>
            <p className="fs-5 lh-md mb-3 fw-medium">
              These unscripted moments capture the raw emotions,genuine
              interactions, and spontaneous joy of your wedding day. Candid
              videos offer a window intothe true essence of your celebration,
              allowing you to relive the laughter, tears, and love that unfolded
              in real time.
            </p>
            <Link className="text-decoration-none text-dark fw-semibold fs-5">
              BROWSE MORE VIDEOS
            </Link>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="ease mt-4 mb-5 pt-5 text-center">
          <h4 className="mb-4 fw-semibold">EASE AND SIMPLE</h4>
          <h2 className="fw-bold fs-1" style={{ letterSpacing: "2px" }}>
            OUR GREAT SERVICES
          </h2>
        </div>
        <div className="row px-3">
          <div className="col-md-4">
            <div className="card bg-transparent border-0">
             <img src="/images/camera.png" className="img-fluid d-block mx-auto mb-3" width="50"></img>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold fs-5">WEDDING PHOTOSHOOT</h5>
                <p className="card-text fw-semibold fs-6 pt-3">
                Your wedding day is about your love, not about perfect pictures. Let us capture its essence with our unconventional photography.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card bg-transparent border-0">
             <img src="/images/heart.png" className="img-fluid d-block mx-auto mb-3" width="50"></img>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold fs-5">FINE RETOUCHING</h5>
                <p className="card-text fw-semibold fs-6 pt-3">
                We masterfully enhance the details of your photographs, achieving a polished & professional look while preserving their authentic essence & natural beauty.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card bg-transparent border-0">
             <img src="/images/photoedit.png" className="img-fluid d-block mx-auto mb-3" width="50"></img>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold fs-5">PHOTO EDITING</h5>
                <p className="card-text fw-semibold fs-6 pt-3">
                Our photo editing artistry transforms raw images into captivating visual stories, each pixel infused with your unique blend of technical mastery & artistic expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto mt-5 pt-3"> 
        <div className="d-flex justify-content-center">
              <h1 className="special pt-0 pt-md-5">SPECIAL <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFFER</h1>
              <img src="/images/image 11.png" alt="" className="giftbox d-none d-md-block" />
        </div>
      </div>

      <div className="container offer mx-auto">
        <div className="row">
            <div className="col-md-5 leftrow text-center p-5">
              <h4  className="text-danger fs-2 fw-semibold">PHOTO PRINT</h4>
              <h5 className="fw-bold">IMAGINATION BECOME TRUE</h5>
              <div className="row mt-3 d-flex align-items-center">
                <div className="col-md-7">
                  <img src="/images/image12.png" className="img-fluid" alt="" />
                </div>
                <div className="col-md-5">
                  <h1>40%</h1>
                  <h1>OFF</h1>
                </div>
              </div>
            </div>
            <div className="col-md-7 rightrow">
              <div className="row d-flex align-items-center">
                <div className="col-md-7">
                  <img src="/images/image13.png" className="img-fluid mt-5 mt-md-4 mt-lg-5 ms-md-3 ms-lg-auto d-block mx-auto" ></img>
                </div>
                <div className="col-md-5">
                  <h2 className="text-warning fs-1 fw-bolder text-center off pt-5">60% <br></br> OFF</h2>
                  <h3 className="fw-bold text-light fs-2 fst-italic offe text-center">FOR LIMITED <br></br> TIME PERIOD</h3>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <h1 className="text-center fs-1 fw-bold pt-3">WHAT OUR HAPPY CLIENTS SAY</h1>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active caro" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="caro" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="caro" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <div className="row m-5">
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image15.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center">
                            "Absolutely Loved Our Photos! The Team At  Captured Our Special Day Perfectly. Every Moment Was Beautifully Framed. Thank You For The Amazing Memories!"
                        </p>
                        <p className="testimonial-author">- Anjali & Karthik</p>
                    </div>
                </div>
      </div>
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image16.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center fw-medium">
                        "Professional, Friendly, And Creative!"  Were Beyond Expectations. The Editing Was Subtle And Natural, And The Staff Made Me Feel So Comfortable. Highly Recommend!
                        </p>
                        <p className="testimonial-author">- Suresh</p>
                    </div>
                </div>
      </div>
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image17.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center">
                        "The Best Photo Studio Experience Ever!" From The  Final Album Delivery, Everything Was Smooth. Their Attention To Detail And Passion For Photography Really Shows.
                        </p>
                        <p className="testimonial-author">- Divya R</p>
                    </div>
                </div>
      </div>
    </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className="row m-5">
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image16.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center fw-medium">
                        "Professional, Friendly, And Creative!"  Were Beyond Expectations. The Editing Was Subtle And Natural, And The Staff Made Me Feel So Comfortable. Highly Recommend!
                        </p>
                        <p className="testimonial-author">- Suresh</p>
                    </div>
                </div>
      </div>
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image15.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center">
                        "Absolutely Loved Our Photos! The Team At  Captured Our Special Day Perfectly. Every Moment Was Beautifully Framed. Thank You For The Amazing Memories!"
                        </p>
                        <p className="testimonial-author">- Anjali & Karthik</p>
                    </div>
                </div>
      </div>
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image17.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center">
                        "The Best Photo Studio Experience Ever!" From The  Final Album Delivery, Everything Was Smooth. Their Attention To Detail And Passion For Photography Really Shows.
                        </p>
                        <p className="testimonial-author">- Divya R</p>
                    </div>
                </div>
      </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="row m-5">
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image17.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center">
                        "The Best Photo Studio Experience Ever!" From The  Final Album Delivery, Everything Was Smooth. Their Attention To Detail And Passion For Photography Really Shows.
                        </p>
                        <p className="testimonial-author">- Divya R</p>
                    </div>
                </div>
        </div>
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image16.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center fw-medium">
                        "Professional, Friendly, And Creative!"  Were Beyond Expectations. The Editing Was Subtle And Natural, And The Staff Made Me Feel So Comfortable. Highly Recommend!
                        </p>
                        <p className="testimonial-author">- Suresh</p>
                    </div>
                </div>
      </div>
      <div className="col-md-4">
      <div className="testimonial-card mx-auto">
                    <div className="d-flex flex-column align-items-center">
                        <img src="/images/image15.png" alt="Anjali & Karthik" className="testimonial-img" />
                        <p className="testimonial-text text-center">
                        "Absolutely Loved Our Photos! The Team At  Captured Our Special Day Perfectly. Every Moment Was Beautifully Framed. Thank You For The Amazing Memories!"
                        </p>
                        <p className="testimonial-author">- Anjali & Karthik</p>
                    </div>
                </div>
      </div>
    </div>
    </div>
  </div>
</div>
      </div>

      <div className="container faq mx-auto mt-3">
        <h1 className="text-center fs-1 fw-bold">FAQ's</h1>
        <div className="accordion mt-3" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is your Photography Style?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Throughout The Years, We Have Created Our Distinctive Aesthetic That Can Be Characterized As A Fusion Of Photojournalistic, Contemporary, Fine Art, And Candid Wedding Photography. We Consider How To Effectively Express Your Tale Using Our Artistic Perspective Based On The Circumstance And The Atmosphere. We Capture Casual Photos As Well As Some Stunning Staged Shots Of The Newlyweds On Their Big Day And Their Close Relatives To Give Viewers A Complete Picture Of The Wedding Celebrations.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Do You Offer Wedding Cinematography?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yeah, We Also Provide Wedding Cinematography Services. Also, Our Clients And Fans Seem To Like Our Wedding Films, As We Have A Dedicated Video Editing Team That Will Make Your Wedding Videos Look Cinematic, With Good Production Value.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What Do You Cover In Wedding Photography?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>From The Moment The Bride And Groom Are Getting Dressed Until The Wedding Celebrations Are Done, We Capture Them. For Instance, At A Wedding, This Would Include Pictures Of The Bride And Groom Getting Ready, Their Individual And Couple Portraits, Pictures Of Their Close Family Members, Pictures Of The Guests Who Actively Participate In The Wedding, And Pictures Of All The Ceremonies And Rituals Taken In Creative Close-Ups And Documentary Wide Angle. Moreover, We Will Take Into Account Any Specific Photos The Customer Needs, And We Will Make Every Effort To Obtain Them All. Yet While Planning A Wedding, One Must Also Take Into Account Any Unforeseen Circumstances.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        How Early Should We Book?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We Typically Begin Booking Dates Six Months In Advance; For Planning Considerations, Early Booking Is Encouraged. It's Always Important To Double-Check Our Availability Because We Can Be Open Even Up To A Week Before Your Wedding.</strong>
      </div>
    </div>
  </div>
</div>
      </div>

      <div className="container mx-auto mt-5">
        <h1 className="text-center fw-bold fs-1">GLIMPSE OF OUR WORK</h1>
        <div className="row d-flex align-items-center mt-5">
          <div className="col-md-4">
            <img src="/images/IMAGE18.png" className="img-fluid d-block mx-auto" alt="" />
          </div>
          <div className="col-md-4">
          <img src="/images/image19.png" className="img-fluid d-block mx-auto" alt="" />
          </div>
          <div className="col-md-4">
          <img src="/images/image20.png" className="img-fluid d-block mx-auto" alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
