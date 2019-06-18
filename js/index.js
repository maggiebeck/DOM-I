const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const h1= document.querySelector

let ctaText = document.getElementsByClassName("cta-text")[0];
ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];

ctaText.getElementsByTagName("button")[0].innerHTML = siteContent['cta']['button']


 let ctaimg = document.getElementById("cta-img")
 ctaimg.setAttribute('src',siteContent['cta']['img-src'])

let features = document.getElementsByClassName('text-content')[0]
  features.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4']
  features.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["features-content"]

  let about = document.getElementsByClassName('text-content')[1]
 
  about.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4']
  about.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["features-content"]

  let nextLogo = document.getElementById('middle-img')
  nextLogo.setAttribute('src',siteContent['main-content']['middle-img-src'])

  let services = document.getElementsByClassName('text-content')[2]
  
  services.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4']
  services.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["services-content"]


  let product= document.getElementsByClassName('text-content')[3]
  
  product.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4']
  product.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["product-content"]

  vision = document.getElementsByClassName('text-content')[4]
  
  vision.getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4']
  vision.getElementsByTagName('p')[0].innerHTML = siteContent['main-content']["vision-content"]
  
  let nav =document.querySelector ("nav")