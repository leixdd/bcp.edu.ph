
$("#owl-banner-carousel").owlCarousel({

  loop: true,
  dots: false,
  responsiveClass: true,
  mouseDrag: true,
  nav: true,
  navText: [
    '<i class="material-icons">keyboard_arrow_left</i>',
    '<i class="material-icons">keyboard_arrow_right</i>'
  ],
  navClass: ['prev', 'next'],
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }

});

$('.slide-courses').owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

function removeAllSelected(isXs) {
  if (isXs) {
    $('#collxs').removeClass("academe-btn-active");
    $('#solxs').removeClass("academe-btn-active");
    $('#tesdaxs').removeClass("academe-btn-active");
  } else {
    $('#coll').removeClass("academe-btn-active");
    $('#sol').removeClass("academe-btn-active");
    $('#tesda').removeClass("academe-btn-active");
  }

  panels_out();
}

openCourse('it'); //default

function openCourse(course){
  var courses = {

		it : { title : "BS in Information Technology", description : "The Bachelor of Science in Information Technology (BSIT) program prepares students to be IT professionals who are able to perform installation, operation, development, maintenance and administration of computer applications. The goal of the program is togear up students as &ldquo;information technologists&rdquo; who can assist individuals and organizations in solving problems using information technology (IT) techniques." },
		act : { title : "Associate in Computer Technology", description : "The&nbsp;<strong>Associate in Computer Technology program (ACT)</strong>&nbsp;provides knowledge and skills in the fundamental of computer programming and basic computation. The program also includes topics related to data structures, network concepts, computer organization, database management system and system analysis and design. It aims to promote analytical, critical thinking, software troubleshooting and programming skills."},
		blis : { title : "BS in Library and Information System", description : "The <strong>Bachelor of Library and Information Science program (BLIS)</strong> is designed to provide students with knowledge and skills on the theories and concepts of the provision of library and information services. It includes topics on the basic principles of and fundamental laws of library science."},
		psy : {title : "BS in Psychology", description : "The <strong>Bachelor of Science in Psychology program (BSP)</strong> is designed to help you observe human behavior through the scientific method, allowing you to gain access to the human psyche and fathom its depths. You will gain the knowledge, tools and skills needed to assess and conduct empirical research regarding individual and group behavior though the lens of various psychological theories and concepts. The BSP degree can prepare you for general careers in teaching, research, counseling and human resources. It can also be a foundation major for further studies in the fields of Medicine, Guidance and Counseling, Human Resource Development and Law. "},
		crim : {title : "BS in Criminology", description : "The&nbsp;<strong>Bachelor of Science in Criminology</strong>&nbsp;or Criminal Justice is a 4-year college degree program intended for individuals who wish to have a career in the fields of law enforcement, security administration, crime detection and prevention or correctional administration."},
		eeduc : {title : "BS in Elementary Education", description : "<strong>Bachelor of Elementary Education (BEED)</strong>&nbsp;is a four year degree program designed to prepare students to become primary school teachers. The program combines both theory and practice in order to teach students the necessary knowledge and skills a primary school teacher needs. There are several major fields of concentration in the BEED program, namely Early Childhood Education, Special Education, General Education, English, Mathematics, Science, Filipino, Social Studies Music, Arts and Physical Education (MAPE) and Technology and Home Economics (THE)."},
		seduc : {title : "BS in Secondary Education", description : "Bachelor of Secondary Education (BSED) is a four year degree program designed to prepare students for becoming high school teachers. The program combines both theory and practice in order to teach students the necessary knowledge and skills a high school teacher needs. The BSEd program trains students to teach one of the different learning areas such as English, Mathematics, General Science, Filipino, Social Studies, Biological Sciences, Physics, Chemistry, Music, Arts, Physical Education and Health (MAPEH) and Home Economics and Livelihood Education.<br />Subjects and Curriculum"},
		bus : {title : "BS in Business Administration", description : "The&nbsp;<strong>BSBA in Marketing Management</strong>&nbsp;program is designed to equip you with the knowledge and skills for effective marketing and sales strategies: how a company determines what product or service to sell, how customers and markets are delineated into target demographics, and the methods of reaching them. The course also focuses on strategic marketing issues which marketing managers assess before findings are presented to their executives. By learning to be an effective marketer and manager, you will learn to respond to the demands of competitors, the government, and larger social issues. Among the concepts and theories that will be discussed are sales management, brand, distribution, e-commerce, franchising, retailing, information technology and corporate social responsibility."},
		eng : {title : "BS in Computer Engineering", description: "The&nbsp;<strong>Bachelor of Science in Computer Engineering(BSCpE)</strong>&nbsp;program is a combination of electrical engineering and computer science. Its curriculum provides students with a foundation in basic science, mathematics, software and engineering."},
		oa : {title : "BS in Office Administration", description: "Bachelor of Science in Office Administration (BSOA) is a four year degree program designed to provide students with knowledge and skills in business management and office processes needed in different workplaces such as general business offices, legal or medical offices"},
		hrm : {title : "BS in Hotel and Restaurant Management", description: "The Bachelor of Science in Hotel and Restaurant Management (BSHRM) program is geared towards equipping students with the necessary knowledge, skills and attitude to provide quality service in the hospitality industry. The program contains subjects that will address the needs of different sectors in the hospitality industry, such as culinary, front office, tourism, resort and hotel operations. Its primary concentration is on the development of practical and management skills which are achieved through the combination of theoretical classes, practicum exercises and experiential learning."},
    //hrs : {title: "Hotel"}
		//SHS

		abm : { title: "Accounting and Business Management", description: "The Accountancy, Business and Management (ABM) strand would focus on the basic concepts of financial management, business management, corporate operations, and all things that are accounted for. ABM can also lead you to careers on management and accounting which could be sales manager, human resources, marketing director, project officer, bookkeeper, accounting clerk, internal auditor, and a lot more."},
		gas : {title: "General Academic Strand", description: "While the other strands are career-specific, the General Academic Strand is great for students who are still undecided on which track to take. You can choose electives from the different academic strands under this track. These subjects include Humanities, Social Sciences, Applied Economics, Organization and Management, and Disaster Preparedness."},
		humss: {title: "Humanities and Social Sciences", description: "The HUMMS strand is designed for those who wonder what is on the other side of the wall. In other words, you are ready to take on the world and talk to a lot of people. This is for those who are considering taking up journalism, communication arts, liberal arts, education, and other social science-related courses in college. <br/> If you take this strand, you could be looking forward to becoming a teacher, a psychologist, a lawyer, a writer, a social worker, or a reporter someday. This strand focuses on improving your communication skills. "},
		stem: {title: "Science, Technology, Engineering and Mathematics", description: "Science, Technology, Engineering, and Mathematics are intertwining disciplines when applied in the real world. The difference of the STEM curriculum with the other strands and tracks is the focus on advanced concepts and topics.<br>Under the track, you can become a pilot, an architect, an astrophysicist, a biologist, a chemist, an engineer, a dentist, a nutritionist, a nurse, a doctor, and a lot more. Those who are also interested in Marine Engineering should take this track."},
		ict: {title: "Information and Communications Technology", description: "If you are computer-savvy or a technological freak, step right into the ICT strand. Under this strand, you will be encouraged to utilize information and communication technological tools to contextualize, collaborate, and create experiences for learning in this professional strand."},
		he: {title: "Home Economics", description: "The Home Economics track offers various specializations that can lead to livelihood projects at home. This strand aims to give you job-ready skills that can help you in finding the right employment."},
		pa: {title: "Performing Arts", description: "The strand introduces the students to principles of theater, music and dance and examines the practical application of the performing arts skills in the local and global market."},
		tesdaICT: {title: "Information and Communications Technology", description: " - Programming NCIV<br> - Visual Graphics NCIII<br> - Computer Hardware Servicing NCII"},
		tesdaHRS: {title: "Hospitality and Restaurant Services", description: " - Housekeeping NCII<br> - Tour Guiding NCII<br> - Bartending NCII<br> - Cookery NCII<br> - Bread and Pastry Production NCII<br> - Food and Beverage Services NCII<br> - Front Office Services NCII"},
		tesdaASR: {title: "Assessment and Review Center", description: "- Bartending NCII<br> - Bread and Pastry Production NCII<br> - Cookery NCII<br> - Food and Beverage Services NCII<br> - Tour Guiding NCII<br> - Housekeeping NCII<br> - Bookeeping NCII<br> - Front Office NCII<br> - Computer System Services NCII"},
  };
  
  $('#c-title').html(courses[course].title);
  $('#c-text').html(courses[course].description);
}

function panels_out() {
  $('#college-acad').hide();
  $('#law-acad').hide();
  $('#tesda-acad').hide();
}

function toggleNavArrow(arrow) {

  if (arrow.getAttribute("data-nav-arrow") === 'false') {
    $(arrow).removeClass('fa-chevron-circle-down');
    $(arrow).addClass('fa-chevron-circle-up');
    $(arrow).attr('data-nav-arrow', 'true');
  } else {
    $(arrow).removeClass('fa-chevron-circle-up');
    $(arrow).addClass('fa-chevron-circle-down');
    $(arrow).attr('data-nav-arrow', 'false')
  }

}

var fadeT = false;
var pastEx = '';

function toggleNavArrowEx(tarAr, clicked) {


  // Navigation Extension
  var nav_contents = {

    'nav-ex-admission': $('#ex-add').html(),
    'nav-ex-academic': $('#ex-acad').html(),
    'nav-ex-aboutus': $('#ex-about').html(),
  };



  var arrow = $(tarAr).find('i');

  var currentEx = $(tarAr).attr('id');

  $('#extend-nav-content').html(nav_contents[$(tarAr).attr('id')]);

  if (!fadeT) {
    $('.extend-nav').slideDown();
    pastEx = $(tarAr).attr('id');
    fadeT = true;
  } else {

    if(!clicked){
        pastEx = $(tarAr).attr('id');
        ResetNavArrowEx();
    }else{
      if(pastEx === currentEx){
        $('.extend-nav').slideUp('fast');
        pastEx = $(tarAr).attr('id');
        fadeT = false;
      }else{
        pastEx = $(tarAr).attr('id');
        ResetNavArrowEx();
      }
    }

  }

  if (arrow.attr('data-nav-arrow') === 'false') {
    $(arrow).removeClass('fa-chevron-circle-down');
    $(arrow).addClass('fa-chevron-circle-up');
    $(arrow).attr('data-nav-arrow', 'true');
  } else {
    $(arrow).removeClass('fa-chevron-circle-up');
    $(arrow).addClass('fa-chevron-circle-down');
    $(arrow).attr('data-nav-arrow', 'false');
  }

}

function ResetNavArrowEx(){

  $.each($('.nav-ex'),function(){
    var arrow = $(this).find('i');

    if (arrow.attr('data-nav-arrow') === 'true') {
      $(arrow).removeClass('fa-chevron-circle-up');
      $(arrow).addClass('fa-chevron-circle-down');
      $(arrow).attr('data-nav-arrow', 'false');
    }
  });
}


$(document).ready(function() {

  wow = new WOW({
    mobile: false
  });
  wow.init();

  
  panels_out();
  $('#college-acad').show()
  $('.freshie').click(function() {
    $('.fresh-panel').show();
    $('.oldie-panel').hide();
  });

  $('.oldie').click(function() {
    $('.oldie-panel').show();
    $('.fresh-panel').hide();
  });

  $('.oldie-panel').hide();


  $('#coll').click(function() {
    $('.academe-text').text("College Programs");
    removeAllSelected(false);
    $(this).addClass("academe-btn-active");
    $('#college-acad').show();
  });


  $('#sol').click(function() {
    $('.academe-text').text("School of Law");
    removeAllSelected(false);
    $(this).addClass("academe-btn-active");
    $('#law-acad').show();
  });

  $('#tesda').click(function() {
    $('.academe-text').text("Tesda Programs");
    removeAllSelected(false);
    $(this).addClass("academe-btn-active");
    $('#tesda-acad').show();
    
  });


  $('#collxs').click(function() {
    $('.academe-text').text("College Programs");
    removeAllSelected(true);
    $(this).addClass("academe-btn-active");
    $('#college-acad').show();
  });

  $('#solxs').click(function() {
    $('.academe-text').text("School of Law");
    removeAllSelected(true);
    $(this).addClass("academe-btn-active");
    $('#law-acad').show();
  });

  $('#tesdaxs').click(function() {
    $('.academe-text').text("Tesda Programs");
    removeAllSelected(true);
    $(this).addClass("academe-btn-active");
    $('#tesda-acad').show();
  });

  var item_list = [];
  $.each($('.item'), function() {
    item_list.push($(this));
  });

  $('#news-bg').css({
    "background": "url(" + item_list[item_list.length - 2].find('img').attr('src') + ") no-repeat center center",
    "background-size": "cover"
  });
  $('#news-title-feat').text('#' + item_list[item_list.length - 2].find('span')[2].innerText);
  $('#news-content-feat').html(item_list[item_list.length - 1].find('span')[3].innerText + "<br /> <br/> <small> <i class='fa fa-user'>&nbsp;&nbsp;</i>" + item_list[item_list.length - 2].find('span')[0].innerText + " &nbsp;|&nbsp; <i class='fa fa-clock-o'>&nbsp;&nbsp;</i>" + item_list[item_list.length - 2].find('span')[1].innerText + " &nbsp;|&nbsp; <a class='btn btn-xs btn-primary' href='" + item_list[item_list.length - 2].find('span')[4].innerText + "'>Read More</small>");
  


  /*
     0: image
     1: author
     2: date
     3: title
     4: content
     5: url
  */

  $('.item').click(function() {
    $('#news-bg').css({
      "background": "url(" + $(this).find('img').attr('src') + ") no-repeat center center",
      "background-size": "cover"
    });
    $('#news-title-feat').text('#' + $(this).find('span')[2].innerText);
    $('#news-content-feat').html($(this).find('span')[3].innerText + "<br /> <br/> <small> <i class='fa fa-user'>&nbsp;&nbsp;</i>" + $(this).find('span')[0].innerText + " &nbsp;|&nbsp; <i class='fa fa-clock-o'>&nbsp;&nbsp;</i>" + $(this).find('span')[1].innerText + " &nbsp;|&nbsp; <a class='btn btn-xs btn-primary' href='" + $(this).find('span')[4].innerText + "'>Read More</small>");

    $.each($('.item'), function() {
      $(this).removeClass('loaded-item');
      $(this).addClass('load-item');
    });
    $(this).removeClass('load-item');
    $(this).addClass('loaded-item');

  });

  // Mobile Navigation - Javascript codes
  var dmn = false;
  var nav_arrows = false;

  $('.dropdown-mobile-nav').click(function() {
    if (!dmn) {
      $(this).removeClass('fa-bars');
      $(this).addClass('fa-close');
      dmn = true;
    } else {
      $(this).removeClass('fa-close');
      $(this).addClass('fa-bars');
      dmn = false;
    }
  });

  $('#nav-m-home').click(function() {
    location.assign($(this).attr('data-home-url'));
  });


  $('.extend-nav').hide();

  resizeAcad();
});


function resizeAcad(){
  $('.academe').css('height', $('.academe-overlay').height()+'px');

  var ch = $('.panel-card-shs').height(); //getting first card element
  $.each($('.panel-card-shs'), function(){

    if($(this).height() > ch){
      ch = $(this).height();
    }
  }); //settings

  $.each($('.panel-card-shs'), function(){
      $(this).css('height', ch + 'px');
  }); //generate

  $('.logo-container').css('height', $('.hd-nav').height()+'px');
}


//Sticky Menu
$(window).on('scroll', function(){
  if( $(window).scrollTop() > 0 ){
      $('.hd-nav').addClass('sticky-menu');
    } else {
      $('.hd-nav').removeClass('sticky-menu');
    }
});
