

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

gsap.from(".Learn", { opacity: 0, x: "-600%", duration: 0.5 });

gsap.from(".Contact", { opacity: 0, x: "600%", duration: 0.5 });

//====> element

gsap.from(".element", { opacity: 0, y: "200%", duration: 1 });



//================ who_we_are =================//

//====> img

gsap.from(".who_we_are>img", 
{
    scrollTrigger: 
    {
        trigger: ".who_we_are",
        start: "top 60%",     
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
        start: "top 60%",     
        toggleActions: "play none none none"
    },
    duration: 0.8,        
    opacity: 0,           
    y: "20%",
    stagger: 0.3,
});



//================ Our Location =================//



