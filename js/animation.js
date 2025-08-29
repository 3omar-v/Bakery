

gsap.registerPlugin(ScrollTrigger);


//======= body =======//

gsap.from("body", { opacity: 0, duration: 1 });



//======= nav =======//

gsap.from("nav", { opacity: 0, y: -100, duration: 1 });



//================ welcome =================//


//====> text

gsap.from(".welcome>p", { opacity: 0, y: -100, duration: 1 });

gsap.from(".welcome>h1", { opacity: 0, y: -100, duration: 1 });

//====> buttons

gsap.from(".Learn", { opacity: 0, x: "-500%", duration: 0.5 });

gsap.from(".Contact", { opacity: 0, x: "500%", duration: 0.5 });

//====> element

gsap.from(".element", { opacity: 0, y: "200%", duration: 1 });



//================ who_we_are =================//

//====> img

gsap.from(".who_we_are>img", 
{
    scrollTrigger: 
    {
        trigger: ".who_we_are",
        start: "top 80%",     
        toggleActions: "play none none none"
    },
    duration: 0.8,        
    opacity: 0,           
    x: "-50%",
});

//====> txt

gsap.from(".who_we_are>hgroup>*", 
{
    scrollTrigger: 
    {
        trigger: ".who_we_are",
        start: "top 80%",     
        toggleActions: "play none none none"
    },
    duration: 0.8,        
    opacity: 0,           
    y: "20%",
    stagger: 0.3,
});



//================ Our Location =================//

//====> txt

gsap.from(".our_location>article>*", 
    {
        scrollTrigger: 
        {
            trigger: ".our_location",
            start: "top 80%",     
            toggleActions: "play none none none"
        },
        duration: 0.8,        
        opacity: 0,           
        y: "20%",
        stagger: 0.3,
    });

//====> img

gsap.from(".our_location>img", 
    {
        scrollTrigger: 
        {
            trigger: ".our_location",
            start: "top 80%",     
            toggleActions: "play none none none"
        },
        duration: 0.8,        
        opacity: 0,           
        x: "50%",
    });



    //================ Our Baking =================//

//====>txt

gsap.from(".Our_Baking>.txt", 
    {
        scrollTrigger: 
        {
            trigger: ".Our_Baking>.txt",
            start: "top 80%",     
            toggleActions: "play none none none"
        },
        duration: 0.8,        
        opacity: 0,           
        x: "50%",
        stagger: 0.2,
    });

//====>cards

gsap.from(".Our_Baking>.cards>div", 
    {
        scrollTrigger: 
        {
            trigger: ".Our_Baking>.cards>div",
            start: "top 80%",     
            toggleActions: "play none none none"
        },
        duration: 0.8,        
        opacity: 0,           
        y: "50%",
        stagger: 0.3,
    });



//================ Contact Information =================//

//====>txt

gsap.from(".Contact_Information>div>*", 
    {
        scrollTrigger: 
        {
            trigger: ".Contact_Information>div>*",
            start: "top 80%",     
            toggleActions: "play none none none"
        },
        duration: 0.8,        
        opacity: 0,           
        y: "50%",
        stagger: 0.3,
    });

//====>iframe

gsap.from(".Contact_Information>iframe", 
    {
        scrollTrigger: 
        {
            trigger: ".Contact_Information>iframe",
            start: "top 80%",     
            toggleActions: "play none none none"
        },
        duration: 0.8,        
        opacity: 0,           
        x: "50%",
    });

//================ footer =================//

    gsap.from(".lists>*>*", 
        {
            scrollTrigger: 
            {
                trigger: ".lists>*>*",
                start: "top 80%",     
                toggleActions: "play none none none"
            },
            duration: 0.8,        
            opacity: 0,           
            y: "50%",
            stagger: 0.3,
        });

//================ footer =================//

gsap.from(".last>*", 
    {
        scrollTrigger: 
        {
            trigger: ".last>*",
            start: "top 80%",     
            toggleActions: "play none none none"
        },
        duration: 0.8,        
        opacity: 0,           
        y: "50%",
        stagger: 0.3,
    });