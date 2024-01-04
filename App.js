import './js/main.js';
import './css/style.css';
import './App.css';

function App() {
  return (
    <div>
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="languages d-none d-md-flex align-items-center">
        </div>
      </div>
    </div>
    <header id="header" className="fixed-top d-flex align-items-cente">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
       <nav id="navbar" className="navbar order-last order-lg-0">
       <ul>
         <li><a className="nav-link scrollto active fs-5" href="#hero">Home</a></li>
         <li><a className="nav-link scrollto fs-5" href="#about">About Us</a></li>
         <li><a className="nav-link scrollto fs-5" href="#menu">Career Library</a></li>
         <li><a className="nav-link scrollto fs-5" href="#contact">Contact</a></li>
       </ul>
       <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      <a href="#login" className="book-a-table-btn scrollto d-none d-lg-flex">Login</a>
  
      </div>
    </header>
  
    <section id="hero" className="d-flex align-items-center">  
        <div id="video-container">
          <video autoPlay muted loop id="bg-video">
            <source src="./assets/img/course-video.mp4" target="_blank" type="video/mp4" />
        </video>
        </div>
       <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-8">
            <h1>Welcome to <span>CareerSwift</span></h1>
            <h2>Navigating Careers, Elevating Futures - Powered by AI!</h2>
  
            <div className="btns">
              <a href="#menu" className="btn-menu animated fadeInUp scrollto">Take a free test</a>
            </div>
          </div>
  
        </div>
      </div> 
    </section>
  
    <main id="main">
  
      
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
  
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="about-img">
                <img src="./assets/img/college-mates-studying-together.jpg" alt=""/>
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <p className="fs-4  ">
                <ul>
                <li>Welcome to CareerSwift, where innovation meets emotional well-being. Our mission is to revolutionize counseling with advanced AI technology, making support accessible to all.</li>
               <li>At CareerSwift, we utilize artificial intelligence to offer personalized counseling experiences. To provide customized advice, we evaluate your abilities, preferences, and objectives. It assists you in making wise choices concerning your career path.</li>
               <li>We care about your security and privacy. Your journeys are personalized and your data is protected.</li>
               <li>With CareerSwift, you have the power to take control of your career destiny. Embrace the future of career counseling and embark on a successful journey with us. Your pathway to a dream career is just a click away!</li>
               </ul>
              </p>
            </div>
          </div>
  
        </div>
      </section>
  
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Choose Your Level</h2>
            <p></p>
          </div>
  
          <div className="row">
  
            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <span>01</span>
                <h4>Secondary School</h4>
                <p>Students normally begin secondary education in className 6 around the age of 11 or 12 and continue until className 8 wraps up by the age of 14 or 15.</p>
              </div>
            </div>
  
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="200">
                <span>02</span>
                <h4>High School</h4>
                <p>High school generally refers to the educational level of students, who are typically between the ages of 14 and 18.</p>
              </div>
            </div>
  
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="300">
                <span>03</span>
                <h4>University</h4>
                <p>Under graduate college programs,starts around the age of 18 or 19. This typically follows the completion of className 12 with a defined stream.</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
  
      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Career Library</h2>
            <p>Guiding Your Path to Success: Your Career Library.</p>
          </div>
  
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>
  
          <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
  
            <div className="col-lg-6 menu-item filter-starters">
              <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Lobster Bisque</a><span>$5.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-specialty">
              <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Bread Barrel</a><span>$6.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-starters">
              <img src="assets/img/menu/cake.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Crab Cake</a><span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and tartar sauce
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-salads">
              <img src="assets/img/menu/caesar.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Caesar Selections</a><span>$8.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-specialty">
              <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Tuscan Grilled</a><span>$9.95</span>
              </div>
              <div className="menu-ingredients">
                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-starters">
              <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Mozzarella Stick</a><span>$4.95</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-salads">
              <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Greek Salad</a><span>$9.95</span>
              </div>
              <div className="menu-ingredients">
                Fresh spinach, crisp romaine, tomatoes, and Greek olives
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-salads">
              <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Spinach Salad</a><span>$9.95</span>
              </div>
              <div className="menu-ingredients">
                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
              </div>
            </div>
  
            <div className="col-lg-6 menu-item filter-specialty">
              <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt=""/>
              <div className="menu-content">
                <a href="#">Lobster Roll</a><span>$12.95</span>
              </div>
              <div className="menu-ingredients">
                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
  
      <section id="specials" className="specials">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Specials</h2>
            <p>Check Our Specials</p>
          </div>
  
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Architecto ut aperiam autem id</h3>
                      <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-1.png" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                      <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                      <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-2.png" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                      <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                      <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-3.png" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                      <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                      <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-4.png" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                      <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                      <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src="assets/img/specials-5.png" alt="" className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
      <section id="events" className="events">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Events</h2>
            <p>Organize Your Events in our Restaurant</p>
          </div>
  
          <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
  
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src="assets/img/event-birthday.jpg" className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Birthday Parties</h3>
                    <div className="price">
                      <p><span>$189</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src="assets/img/event-private.jpg" className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p><span>$290</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="swiper-slide">
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src="assets/img/event-custom.jpg" className="img-fluid" alt=""/>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p><span>$99</span></p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
  
            </div>
            <div className="swiper-pagination"></div>
          </div>
  
        </div>
      </section>
      <section id="login" className="login">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Login</h2>
          </div>
        </div>
      
      </section>
  
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What they're saying about us</p>
          </div>
  
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">
  
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
  
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
  
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
  
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
  
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
  
            </div>
            <div className="swiper-pagination"></div>
          </div>
  
        </div>
      </section>
  
      <section id="gallery" className="gallery">
  
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>Some photos from Our Restaurant</p>
          </div>
        </div>
  
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
  
          <div className="row g-0">
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
                  <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                </a>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
  
      <section id="chefs" className="chefs">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Chefs</h2>
            <p>Our Proffesional Chefs</p>
          </div>
  
          <div className="row">
  
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt=""/>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt=""/>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="300">
                <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt=""/>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                  </div>
                  <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
  
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>
  
        <div data-aos="fade-up">
          <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div>
  
        <div className="container" data-aos="fade-up">
  
          <div className="row mt-5">
  
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
  
                <div className="open-hours">
                  <i className="bi bi-clock"></i>
                  <h4>Open Hours:</h4>
                  <p>
                    Monday-Saturday:<br/>
                    11:00 AM - 2300 PM
                  </p>
                </div>
  
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
  
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
  
              </div>
  
            </div>
  
            <div className="col-lg-8 mt-5 mt-lg-0">
  
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
  
            </div>
  
          </div>
  
        </div>
      </section>
  
    </main>
  
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Restaurantly</h3>
                <p>
                  A108 Adam Street <br/>
                  NY 535022, USA<br/><br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email"/><input type="submit" value="Subscribe"/>
              </form>
  
            </div>
  
          </div>
        </div>
      </div>
  
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  
    <div id="preloader"></div>
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  
   
  
  </div>
  );
}

export default App;
