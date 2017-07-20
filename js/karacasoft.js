var Util = new (function() {
  this.downArrowSvg = function (size=20) {
    var trSize = size / 2;
    var strokeWidth = size / 20;
    
    var v1 = {};
    var v2 = {};
    var v3 = {};
    v1.x = (size / 2) - (trSize / 2);
    v1.y = (size / 2) - (trSize * Math.cos(Math.PI / 3) / 3);
    
    v2.x = (size / 2) + (trSize / 2);
    v2.y = (size / 2) - (trSize * Math.cos(Math.PI / 3) / 3);
    
    v3.x = (size / 2);
    v3.y = (size / 2) + (trSize * Math.cos(Math.PI / 3) * 2 / 3);
    
    return "<svg width='"+size+"' height='"+size+"'>"
         + "<circle cx='"+(size/2)+"' cy='"+(size/2)+"' r='"+((size/2)-strokeWidth)+"' "
         + "stroke-width='"+strokeWidth+"' stroke='white' />"
         + "<polygon points='"+v1.x+","+v1.y+" "+v2.x+","+v2.y+" "+v3.x+","+v3.y+"'"
         + " style='fill:white' />"
         + "</svg>";
  }
})();

var BigTextController = function() {
  var btCtrl = this;
  
  btCtrl.texts = [
    "Fascinating",
    "Extraordinarily Cool",
    "Beautifully Implemented",
    "Cleverly Designed",
    "Exciting",
    "This is how I build"
  ];
  
  btCtrl.flipped = false;
  
  btCtrl.currentTextIndex = 0;
  btCtrl.currentText = btCtrl.texts[btCtrl.currentTextIndex];
  
  btCtrl.next = function() {
    if (++btCtrl.currentTextIndex >= btCtrl.texts.length) {
      btCtrl.currentTextIndex = 0;
    }
    btCtrl.currentText = btCtrl.texts[btCtrl.currentTextIndex];
    $(".switching-text").html(btCtrl.currentText);
  };
  
  setInterval(function () {
    btCtrl.flipped = true;
    $(".switching-text").addClass("flipped");
    var oldTop = $(".non-switching-text").position().top;
    var oldLeft = $(".non-switching-text").position().left;
    
    setTimeout(function () {
      btCtrl.next();
      var newTop = $(".non-switching-text").position().top;
      var newLeft = $(".non-switching-text").position().left;
      
      var diffTop = oldTop - newTop;
      var diffLeft = oldLeft - newLeft;
      
      //$(".non-switching-text").animate({"top": diffTop, "left" : diffLeft}, 500);
      
      $(".non-switching-text").css("top", diffTop);
      $(".non-switching-text").css("left", diffLeft);
      //$(".non-switching-text").stop();
      $(".non-switching-text").animate({"top": 0, "left" : 0}, 200, function() {});
      
      setTimeout(function() {
        btCtrl.flipped = false;
        $(".switching-text").removeClass("flipped");
      }, 300);
      
      
    }, 200);
    
  }, 3000);
  
};

var btCtrl = new BigTextController();

var Areas = new (function() {
  var thisAreas = this;
  
  this.areasExpert = [
    { 
      name : "Android", 
      description : "I've worked with Android from 2013 to 2015. "
      + "I've had small hobby projects though but "
      + "Android has changed significantly, and I think I have lost "
      + "my proficiency in Android.",
      experience : "3 years"
    },
    {
      name : "Visual Basic 6.0",
      description : "My first love! I've started my programming adventures "
      + "with VB6.0. I still remember how easy it was to setup a form and "
      + "quickly define some actions on buttons. Back then, programming was "
      + "editing the code until it works. Although I've had lots of brilliant(?) "
      + "ideas, the software design was not too brilliant. My persistence "
      + "was the key for me to open other gates of the software world. "
      + "I once debugged one of my simple games for a month to seek out "
      + "one single line that broke the whole game!!",
      experience : "1 year, this doesn't really matter though since no one uses VB6.0 anyways :V"
    },
    {
      name : "HTML/CSS/JS",
      description : "Every programmer should have basic knowledge of this triplet. "
      + "My story of how I met them is different for each one of them. " 
      + "So I'll keep things simple and say that I've been working with these since "
      + "when I started programming, until today where I build this website. ("
      + "With some help of jQuery though :V)",
      experience : "A lot"
    },
    {
      name : "PHP",
      description : "I remember wondering how websites with login features "
      + "were built. With some research and prior knowledge of scripting "
      + "I've learned PHP. In high-school my mates asked me to find a website "
      + "where we can store photos that we will select for our yearbook. "
      + "And then, I, like every sane person would do, decided to build it "
      + "by myself. Very few people used my site to store the photos. But "
      + "it was a great experience for me in PHP. Also the reaction of my "
      + "friends were priceless when I said I have built a site, instead of "
      + "finding one.",
      experience : "2 years (at least)"
    },
    {
      name : "Java",
      description : "I've learned Java by learning Android. (Yes, I never "
      + "learned Java before Android) It was kinda painful, though. "
      + "The great thing was, I've started learning the concepts of object oriented "
      + "programming by examining the example Android code from different people. "
      + "Since I've worked with it a lot, I'm too comfortable to write any "
      + "kind of application with Java. (Frameworks kinda scare me, though) "
      + "When I want to have some proof of concept for some application idea, "
      + "I immediately open Eclipse and start designing it. I've written a "
      + "Tetris game with Java Swing Library. And my last internship was "
      + "about writing an application with JavaFX, which makes use of "
      + "Java 8 lambda functions a lot.",
      experience : "A lot more than Android"
    },
  ];
  
  this.areasNotExpert = [
    {
      name : "C/C++",
      description : "I've not written applications in C/C++. But used it in "
      + "some everyday(!) cases like developing an operating system or writing "
      + "Android Native codes with JNI linking.",
      experience : "1-2 years"
    },
    {
      name : "OS Development",
      description : "This is my latest trend I think. One day, I decided to build "
      + "my own operating system. (Just like every sane person would think, right?) "
      + "After fiddling around with x86 assembly codes for 3 days, I've managed to "
      + "make a bootable USB drive that boots into a system that prints the text "
      + "\"Hello World!\" on screen. Later that, I've managed to build more complex "
      + "version of it (which can take keyboard inputs). Have the project on "
      + "<a href=\"https://github.com/triforce930/KaOS\">github</a>, "
      + "please have a look!",
      experience : "A few months (in total)"
    },
    {
      name : "Arduino/Microcontrollers",
      description : "Arduino was a fascinating thing for me at first. "
      + "The maker inside me was awakened, after seeing how Arduino can "
      + "be used to make "
      + "<a href=\"https://www.youtube.com/watch?v=ywfZsYApj_M\">this</a>. "
      + "Later, I bought one and worked with it for some time. Then bought some "
      + "different modules and experimented with them.",
      experience : "A few months (in total)"
    },
    {
      name : "Game Engines",
      description : "(This should not be written here. I've very few works with "
      + "these tools.) I've used Unity for some time, even developed plugins "
      + "for it. Never developed fully built games with it though. "
      + "Also attempted to make a game with libgdx.",
      experience : "A few weeks (in total)"
    },
    {
      name : "iOS",
      description : "(This should not be here.). Thought I should learn it someday. "
      + "Never learned, and I'm actually all right with it.",
      experience : "Not more than one day"
    }
  ];
  
  this.populateList = function (css_selector, list) {
    $(css_selector).html("");
    for (var i = 0; i < list.length; i++) {
      var areaString = "<li>";
      areaString += Util.downArrowSvg();
      areaString += "<span class=\"area-name\">";
      areaString += list[i].name;
      areaString += "</span>";
      
      areaString += "<span class=\"area-experience\">";
      areaString += "Experience: "
      areaString += list[i].experience;
      areaString += "</span>";
      
      areaString += "<p class=\"area-description\">";
      areaString += list[i].description;
      areaString += "</p>";
      
      areaString += "</li>";
      
      $(css_selector).append(areaString);  
    }
    
    $(css_selector + " li").click(function() {
      $(this).find(".area-description").slideToggle();
    });
    
  }
  
  
})();

var Projects = new (function() {
  this.projects = [
    {
      name : "Caps Yapıcı / Meme Generator",
      description : "Caps Yapıcı was the leading application to generate "
      + "memes that were becoming increasingly popular in Turkey. "
      + "Caps Yapıcı was the first application that attempted to "
      + "generate memes with red stripe and white text on it, which "
      + "were really popular in Turkey. Caps Yapıcı was also my very "
      + "first Android application that I've released. After a lot "
      + "of reworks and fixes, (The application was full of bugs/crashes), "
      + "the application climbed up to 500k downloads, which I was never "
      + "thinking of. At 250k downloads I've sold the application which "
      + "is probably the reason why I should never touch business related "
      + "stuff in my life, later on.",
      links : [ "https://play.google.com/store/apps/details?id=com.karacasoft.capsyapici2" ],
      status : "Sold"
    },
    {
      
    }
  ];
  
  this.populateList = function(css_selector) {
    $(css_selector).html("");
    for (var i = 0; i < this.projects.length; i++) {
      var projectString = "<li>";
      projectString += Util.downArrowSvg();
      projectString += "<span class=\"project-name\">";
      projectString += this.projects[i].name;
      projectString += "</span>";
      
      projectString += "<span class=\"project-status\">";
      projectString += "Status: "
      projectString += this.projects[i].status;
      projectString += "</span>";
      
      projectString += "<span class=\"project-links\">";
      projectString += "<ul>";
      for (var j = 0; j < this.projects[i].links.length; j++) {
        projectString += "<li>";
        projectString += "<a href=\"" + this.projects[i].links[j] + "\">";
        projectString += this.projects[i].links[j];
        projectString += "</a>";
        projectString += "</li>";
      }
      projectString += "</ul>";
      projectString += "</span>";
      
      
      projectString += "<p class=\"project-description\">";
      projectString += this.projects[i].description;
      projectString += "</p>";
      projectString += "</li>";
      
      $(css_selector).append(projectString);  
    };
    
    $(css_selector + " li").click(function() {
      $(this).find(".project-description").slideToggle();
    });
  }
  
})();



$(function() {
  Areas.populateList(".areas-expert", Areas.areasExpert);
  Areas.populateList(".areas-not-expert", Areas.areasNotExpert);
  
  Projects.populateList(".projects");
});
