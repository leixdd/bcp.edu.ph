module.exports = function(_arguments_) {
    return /* template */ `
    <header>

      <div class="hd-nav hidden-xs">
        <div class="container-fluid">
          <div class="row hd-nav-row">

            <div class="col-lg-4 col-md-4 col-sm-4 skewedBg">
              <div class="logo-container">
                <center>
                  <a href="/"><img class="logo" src="img/logoMd.png" /></a>
                </center>
              </div>
            </div>

            <div class="col-lg-8 col-md-8 col-sm-8">
              <div class="nav-menu">
                <nav>
                  <ul>
                    
                    <li><a href="/">Home</a></li>
                    
                    <li onclick="toggleNavArrowEx(this, true)"  id="nav-ex-admission" class="nav-ex"><a>Admission &nbsp;<span class="nav-arrow"><i class="fa fa-chevron-circle-down" aria-hidden="true" data-nav-arrow="false"></i></span></a></li>
                    <li onclick="toggleNavArrowEx(this, true)"  id="nav-ex-academic" class="nav-ex"><a>Programs &nbsp;<span class="nav-arrow"><i class="fa fa-chevron-circle-down" aria-hidden="true" data-nav-arrow="false"></i></span></a></li>
                    <li onclick="toggleNavArrowEx(this, true)"  id="nav-ex-aboutus"  class="nav-ex"><a>About us &nbsp;<span class="nav-arrow"><i class="fa fa-chevron-circle-down" aria-hidden="true" data-nav-arrow="false"></i></span></a></li>

                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>

        <div class="extend-nav">
          <div id="extend-nav-content">

          </div>
        </div>

        <div id="ex-add" hidden="true">
          <div class="extend-nav-style">
            <div class="container">
              <div class="row">

                <div class="col-lg-4 col-md-4 col-sm-4 text-center">
                  <h2 class="extend-nav-head">ADMISSION</h2>
                  <div class="extend-nav-body">
                      <img src="img/icons/admission.png" width="35%"/>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-4">
                  <h2 class="extend-nav-head"><a class="btn btn-primary btn-sm">ADMISSION REQUIREMENTS &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <ul>
                      <li>
                        For Transferee
                      </li>
                      <li>Transcript of Record (TOR)</li>
                      <li>Certificate of Good Moral Character</li>
                      <li>Honorable Dismissal</li>
                      <li> NSO birth certificate (Photocopy)</li>
                      <li>Picture two pieces (1x1)</li>
                    </ul>
                  </div>


                </div>

                <div class="col-lg-4 col-md-4 col-sm-4">
                  <h2 class="extend-nav-head"><a class="btn btn-primary btn-sm">ENROLLMENT PROCEDURES &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <ul>
                      <li>
                        For Freshmen
                      </li>
                      <li>Report Card / Form 137</li>
                      <li>Certificate of Good Moral Character</li>
                      <li>Picture two pieces (1x1)</li>
                      <li> NSO birth certificate (Photocopy)</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div id="ex-acad" hidden="true">
          <div class="extend-nav-style">
            <div class="container">
              <div class="row">

                <div class="col-lg-3 col-md-3 col-sm-3 text-center">
                  <h2 class="extend-nav-head">Programs</h2>
                  <div class="extend-nav-body">
                      <img src="img/icons/acads.png" width="50%"/>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-3">
                  <h2 class="extend-nav-head"><a  class="btn btn-primary btn-sm">College &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <ul>
                      <li>BS in Information Technology</li>
                      <li>BS in Library and Information System</li>
                      <li>BS in Psychology</li>
                      <li>BS in Criminology</li>
                      <li>BS in Office Administration</li>
                      <li>&nbsp;</li>
                    </ul>

                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-3">
                  <h2 class="extend-nav-head"><a class="btn btn-primary btn-sm">K to 12 &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <ul>
                      <li>Accounting Business & Management</li>
                      <li>General Academic Strand</li>
                      <li>Science Technology Engineering & Mathematics</li>
                      <li>Humanities & Social Sciences</li>
                      <li>Information & Communication Technology</li>
                      <li>&nbsp;</li>
                    </ul>


                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-3">
                  <h2 class="extend-nav-head"><a  class="btn btn-primary btn-sm">School of Law &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <p>
                      The primary purpose of the Law School is to prepare men and women to meet the needs of progressive and modern technology in the various aspects in the practice of law.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div id="ex-about" hidden="true">
          <div class="extend-nav-style">
            <div class="container">
              <div class="row">

                <div class="col-lg-3 col-md-3 col-sm-3 text-center">
                  <h2 class="extend-nav-head">About Us</h2>
                  <div class="extend-nav-body">
                      <img src="img/icons/about.png" width="50%"/>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-3">
                  <h2 class="extend-nav-head"><a  class="btn btn-primary btn-sm">College Profile & History &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <p>
                      Bestlink College of the Philippines is a non-stock, non-profit and non-sectarian institute founded in June 2002 in Quezon City. The emergence of 4-Year CHED ladderized programs changed its name from an institute with Computer TESDA-accredited courses to a college.
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-3">
                  <h2 class="extend-nav-head"><a class="btn btn-primary btn-sm">Goals &amp; Objective &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <p>
                      BCP’s effort to provide an education which can be man’s tool to be liberated from all forms of ignorance and poverty. Hence, all its academic offerings are relevant tools to empower man to ably use his reason, intellect, and will to confront life’s challenges.
                    </p>
                  </div>
                </div>

                <div class="col-lg-3 col-md-3 col-sm-3">
                  <h2 class="extend-nav-head"><a class="btn btn-primary btn-sm">Contacts &amp; Facilities &nbsp;&nbsp;<span class="fa fa-chevron-circle-right"></span></a></h2>
                  <div class="extend-nav-body">
                    <ul>
                      <li>
                        Email: <a href="mailto:bcp-inquire@bcp.edu.ph?Subject=Hello%20BCP" style="color: #03A9F4;">bcp-inquire@bcp.edu.ph</a>
                      </li>
                      <li>
                        Website: <a href="/" style="color: #03A9F4;">www.bcp.edu.ph</a>
                      </li>
                      <li>
                        Phone: 417 - 4355
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="nav-mobile visible-xs">
        <div class="nav-mobile-brand">
          <span style="float: left">BCP</span>
          <i class="fa fa-bars dropdown-mobile-nav" data-target="#nav-m-body" data-toggle="collapse"></i>
        </div>
        <div id="nav-m-body" class="nav-mobile-body collapse">
          <!-- Mobile Accordion -->
          <div class="panel-group" id="nav-m-acc">


            <div class="panel navigation-panel">
              <div class="header" id="nav-m-home" data-home-url="/">
                <div class="title">
                  Home
                </div>
              </div>
            </div>


            <div class="panel navigation-panel">
              <div class="header" data-parent="nav-m-acc" data-toggle="collapse" href="#nav-acad">
                <div class="title">
                  Programs <i class="fa fa-chevron-circle-down nav-arrows" onclick="toggleNavArrow(this)" data-nav-arrow="false"></i>
                </div>
              </div>

              <div id="nav-acad" class="panel-collapse collapse">
                <div class="panel-body">
                  <div class="list-group">
                    <a class="list-group-item">
                      College
                    </a>
                    <a class="list-group-item">
                      Senior High
                    </a>
                    <a class="list-group-item">
                      School of Law
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div class="panel navigation-panel">
              <div class="header" data-parent="nav-m-acc" data-toggle="collapse" href="#nav-admi">
                <div class="title">
                  Admission <i class="fa fa-chevron-circle-down nav-arrows" onclick="toggleNavArrow(this)" data-nav-arrow="false"></i>
                </div>
              </div>

              <div id="nav-admi" class="panel-collapse collapse">
                <div class="panel-body">
                  <div class="list-group">
                    <a  class="list-group-item">Admission Requirements</a>
                    <a  class="list-group-item">Enrollment Procedures</a>
                  </div>
                </div>
              </div>

            </div>

            <div class="panel navigation-panel">
              <div class="header" data-parent="nav-m-acc" data-toggle="collapse" href="#nav-about">
                <div class="title">
                  About us <i class="fa fa-chevron-circle-down nav-arrows" onclick="toggleNavArrow(this)" data-nav-arrow="false"></i>
                </div>
              </div>

              <div id="nav-about" class="panel-collapse collapse">
                <div class="panel-body">
                  <div class="list-group">
                    <a  class="list-group-item">College Profile</a>
                    <a  class="list-group-item">College History</a>
                    <a  class="list-group-item">Goals &amp; Objective</a>
                    <a  class="list-group-item">Facilities</a>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <!-- End Mobile Accordion  -->
        </div>
      </div>

    </header>

    
<section id="topHome">
<div class="topBanner" style="">
    <div class="topBanner-overlay">
        <div class="grad-t-w"></div>

    </div>
</div>
</section>


    <section id="welcomebcp">
  <div class="course wBCP" >
    <div class="container text-center">
      <div class="row">
        <div class="w-title">
            <h1 class="w-title-normal">WELCOME TO <b class="w-title-emp">BCP</b></h1>
        </div>
        <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 w-subtitle">
              <center>
                <p class="w-subtitle-text text-center" style="width: 65%;">At <b>Bestlink College of the Philippines</b>, We provide and promote quality education with modern and unique techniques to able to enhance the skill and the knowledge of our dear students to make them globally competitive and productive citizens. </p>
              </center>
        </div>

        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-6 w-contents">
          <h1>22,000</h1>
          <h2>Students</h2>
          <img src="img/icons/grad.png"/>
        </div>
        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-6 w-contents">
          <h1>0</h1>
          <h2>Tuition Fee</h2>
          <img src="img/icons/tui.png"/>
        </div>
        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-6 w-contents">
          <h1>3</h1>
          <h2>Campuses</h2>
          <img src="img/icons/pop.png"/>
        </div>
        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-6 w-contents">
          <h1>K to 12</h1>
          <h2>Ready</h2>
          <img src="img/icons/zoom.png"/>
        </div>
    </div>
  </div>
  </div>
</section>


<section id="acads">
  <div class="bg-white courses">
    <div class="row">
      <div class="col-lg-12 col-sm-12 col-md-12">
        <h2 class="w-title-normal text-center">Courses Offered</h2>
        <center>
          <p class="w-subtitle-text">
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
          </p>
        </center>
      
        <div class="card col-md-8 col-md-offset-2  col-xs-12 courses-container-btn">
          <div class="header">
            <div class="text-center">
              <button type="button" onclick="openCourse('it')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">code</i>
              </button>
              
              <button type="button" onclick="openCourse('act')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">dns</i>
              </button>

              
              <button type="button" onclick="openCourse('hrm')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">local_dining</i>
              </button>

              <button type="button" onclick="openCourse('crim')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">lock</i>
              </button>

              <button type="button" onclick="openCourse('eng')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">memory</i>
              </button>

              
              <button type="button" onclick="openCourse('psy')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">remove_red_eye</i>
              </button>

              
              <button type="button" onclick="openCourse('bus')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">multiline_chart</i>
              </button>

              
              <button type="button" onclick="openCourse('oa')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">folder_open</i>
              </button>
              
              <button type="button" onclick="openCourse('blis')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">book</i>
              </button>

              
              <button type="button" onclick="openCourse('eeduc')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">edit</i>
              </button>

              
              <button type="button" onclick="openCourse('seduc')" class="btn bg-bcp-theme btn-circle-lg waves-effect waves-circle waves-float">
                  <i class="material-icons">import_contacts</i>
              </button>

            </div>
          </div>
          <div class="body text-justify">
            <div class="col-md-6 col-xs-12">
              <img src="img/courses/IT.jpg" class="img-responsive img-rounded" />
            </div>
            <div class="col-md-6 col-xs-12">
              <h4 class="courses-title" id="c-title">Information Technology</h4>
              <p class="courses-text" id="c-text">
                Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
              </p>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</section>

<section id="news">
  <div class="bg-white">
    <div class="row">
      <hr />
      <div class="col-lg-9 col-md-9 col-sm-9">

        <section id="newsann">
          <div class="container-fluid">
            <div class="row">
              <div class="w-title">
                  <h1 class="w-title-normal">Life @ <b class="w-title-emp">BCP</b></h1>
              </div>

              <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                
                <div id="instafeed-gallery-feed" class="grid">
                <div class="grid-sizer"></div>
                <!--  instagram feed will load here - markup below was used to structure images before loading them through instafeed -->
                </div>

              </div>

            </div>
          </div>
        </section>

        
      </div>

      <div class="col-lg-3 col-md-3 col-sm-3">
        <div class="row">
          <div class="col-lg-12">
            <div class="tray">
              <div class="header">
                <h3 class="title">
                    Announcements @ <i> ${new Date().getFullYear()}</i>
                </h3>
                <small class="details">Upcoming Events</small>
              </div>
              <div class="body">
                <div class="list-group scrollable-content">                   
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="row">
              <div class="col-lg-12">
                <div class="tray">
                  <div class="header">
                      <h3 class="title">
                          Facebook Updates
                      </h3>
                      <small class="details">Upcoming Events</small>
                  </div>
                  <div class="body">
                    <div class="list-group scrollable-content">

                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>

    </div>
  </div>
</section>

<footer>
<div class="footer">
          <div class="container-fluid">
              <div class="row">

                
                <div class="col-md-9 col-lg-9 col-sm-9">
                      <div class="contact-info">
                          <h2>Quick Links</h2>
                          <div class="contactsingle-info col-md-4 col-lg-4 col-sm-4">
            <h2>Admission</h2>
            <ul class="footer-list">
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;Admission Requirements</a>
              </li>
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;Enrollment Procedure</a>
              </li>
            </ul>
                          </div>
                          <div class="contactsingle-info col-md-4 col-lg-4 col-sm-4">
            <h2>About Us</h2>
            <ul class="footer-list">
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;College Profile</a>
              </li>
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;History</a>
              </li>
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;Goals</a>
              </li>
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;Objective</a>
              </li>
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;Facilities</a>
              </li>
            </ul>
                          </div>
                          <div class="contactsingle-info col-md-4 col-lg-4 col-sm-4">
            <h2>Academic Programs</h2>
            <ul class="footer-list">
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;Senior High School</a>
              </li>
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;College</a>
              </li>
              <li>
                <a><span class="fa fa-chevron-circle-right"></span>&nbsp;&nbsp;School of Law</a>
              </li>
            </ul>
          </div>
                      </div>
                  </div>


                  <div class="col-md-3 col-lg-3 col-sm-3">
                      <div class="contact-info">
                          <h2>Contact us</h2>
                          <div class="contactsingle-info">
                              <h2>Email: </h2>
                              <p>bcp-inquire@bcp.edu.ph</p>
                          </div>
                          <div class="contactsingle-info">
                              <h2>Phone:</h2>
                              <p> (+63) 417-4355, 930 1565</p>
                          </div>
                          <div class="contactsingle-info">
                              <h2>Website:</h2>
                              <p>http://www.bcp.edu.ph/</p>
          </div>
          <div class="contactsingle-info">
            <h2>Social Media</h2>
            <div class="footer-wedget1">
              <ul>
                <li>
                <a href="https://www.facebook.com/bcpofficialpage/" target="_blank"><i class="fa fa-facebook"></i></a>
                </li>
              </ul>
            </div>
          </div>
                      </div>
      </div>

              </div>
          </div>
      </div>
      <!-- Footer Copyright Area Start-->
      <div class="footer-copyright-area">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="footer-copyright">
                          <p>Copyright &copy; 2018, Bestlink College of the Philippines.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- Footer Copyright Area End-->
  </footer>


    `;
}