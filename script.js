const events=[
 {name:"CodeSprint",date:"October 10, 2026",time:"10:00 AM",venue:"Innovation Lab",category:"Technology",icon:"bi-code-slash",desc:"A fast-paced coding challenge for problem solvers."},
 {name:"Battle of Bands",date:"October 10, 2026",time:"4:00 PM",venue:"Open Air Auditorium",category:"Music",icon:"bi-music-note-beamed",desc:"Live music, energetic performances and campus bands."},
 {name:"Dance Fiesta",date:"October 11, 2026",time:"11:00 AM",venue:"Main Auditorium",category:"Cultural",icon:"bi-person-arms-up",desc:"Solo and group dance performances across styles."},
 {name:"Design Arena",date:"October 11, 2026",time:"2:00 PM",venue:"Design Studio",category:"Creative",icon:"bi-palette",desc:"Show your creativity through posters and digital designs."},
 {name:"Quiz Quest",date:"October 12, 2026",time:"10:30 AM",venue:"Seminar Hall",category:"Academic",icon:"bi-patch-question",desc:"Test your knowledge across science, technology and culture."},
 {name:"Photography Walk",date:"October 12, 2026",time:"3:00 PM",venue:"College Campus",category:"Creative",icon:"bi-camera",desc:"Capture the best moments and stories around campus."}
];

const cards=document.getElementById("eventCards");
const schedule=document.getElementById("scheduleBody");
const select=document.getElementById("eventSelect");

events.forEach((e,i)=>{
 cards.insertAdjacentHTML("beforeend",`<div class="col-md-6 col-lg-4"><div class="card event-card p-4"><div class="event-icon mb-3"><i class="bi ${e.icon}"></i></div><span class="badge text-bg-light align-self-start mb-2">${e.category}</span><h4>${e.name}</h4><p class="text-secondary">${e.desc}</p><div class="small text-secondary mb-3"><div><i class="bi bi-calendar3 me-2"></i>${e.date}</div><div><i class="bi bi-clock me-2"></i>${e.time}</div><div><i class="bi bi-geo-alt me-2"></i>${e.venue}</div></div><button class="btn btn-primary" onclick="chooseEvent(${i})">Register</button></div></div>`);
 schedule.insertAdjacentHTML("beforeend",`<tr><td>${e.date}</td><td>${e.time}</td><td class="fw-semibold">${e.name}</td><td>${e.venue}</td></tr>`);
 select.insertAdjacentHTML("beforeend",`<option value="${e.name}">${e.name}</option>`);
});

function chooseEvent(i){select.value=events[i].name;document.getElementById("register").scrollIntoView({behavior:"smooth"});}

document.getElementById("registrationForm").addEventListener("submit",function(e){
 e.preventDefault();
 if(!this.checkValidity()){this.classList.add("was-validated");document.getElementById("formAlert").innerHTML='<div class="alert alert-danger">Please complete all required fields correctly.</div>';return;}
 const name=document.getElementById("name").value.trim(), event=document.getElementById("eventSelect").value;
 document.getElementById("successText").textContent=`Thank you, ${name}. Your registration for ${event} has been recorded successfully.`;
 bootstrap.Modal.getOrCreateInstance(document.getElementById("successModal")).show();
 this.reset();this.classList.remove("was-validated");document.getElementById("formAlert").innerHTML="";
});

document.getElementById("contactForm").addEventListener("submit",function(e){
 e.preventDefault();
 if(!this.checkValidity()){this.classList.add("was-validated");return;}
 document.getElementById("contactAlert").innerHTML='<div class="alert alert-success"><i class="bi bi-check-circle me-2"></i>Your enquiry has been sent successfully.</div>';
 this.reset();
});

document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>{const nav=document.getElementById("nav");if(nav.classList.contains("show"))bootstrap.Collapse.getOrCreateInstance(nav).hide();}));
