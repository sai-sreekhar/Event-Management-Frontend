import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/Bootstrap.css";
import "./../styles/Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa6";
import Navbar from "./HomeNavBar";
import EventWhixFooter from "./EventWhizFooter";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="TestimonialsWholeBody">
      <div className="container-fluid">
        <div
          className="container container-body "
          style={{ borderRadius: "35px" }}
        >
          <Navbar />
          <div className="TestimonialsBody pt-2">
            <div className="row py-5">
              <div className="col-12 text-center">
                <div className="TestimonialsBodyHeading1">
                  WHAT DO THEY SAY?
                </div>
                <div className="TestimonialsBodyHeading2">RECENT REVIEWS</div>
              </div>
            </div>
            <div className="slideshow-container pb-5">
              <Slider {...settings}>
                <div>
                  <div className="card">
                    <h1 className="CardName">Godala Sai Sreekar</h1>
                    <div className="CardCaption">
                      <FaQuoteLeft />
                      <br />
                      If you trouble the trouble trouble troubles you, I am not
                      the trouble. I am the truthh
                      <div className="SubCaption">-Godala Sai Sreekar</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <h1 className="CardName">Nalam Guna Sri Krishna</h1>
                    <div className="CardCaption">
                      <FaQuoteLeft />
                      <br />
                      Em ledu next kottu mowa
                      <div className="SubCaption"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <h1 className="CardName">Sam Pillutla</h1>
                    <div className="CardCaption">
                      <FaQuoteLeft />
                      <br />
                      The most vibrant vocational sparkingly sparingly
                      activating and cool
                      <div className="SubCaption">-Balayya</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <h1 className="CardName">CH DEVAK REDDY</h1>
                    <div className="CardCaption">
                      <FaQuoteLeft />
                      <br />
                      okkadu naaku yeduru vachina vade risku, nenu okkadiki
                      yeduru vellina risku thoki padestha.
                      <div className="SubCaption"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card">
                    <h1 className="CardName">MANCHUKONDA ABHIRAM</h1>
                    <div className="CardCaption">
                      <FaQuoteLeft />
                      <br />
                      Naa Saavu Nenu Sasta Neekenduku
                      <div className="SubCaption">-Pelli Choopulu</div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <EventWhixFooter />
    </div>
  );
};

export default Testimonials;
