// ================================================================
//  ⚠️  KONFIGURASI WAJIB — GANTI SEBELUM PUSH KE GITHUB
//
//  Cara dapat URL Worker:
//  1. Buka terminal di folder backend
//  2. Jalankan: npm install
//  3. Jalankan: npm run deploy
//  4. Copy URL yang muncul, contoh:
//     https://fauzan-portfolio-api.fauzandwip.workers.dev
//  5. Paste di bawah ini, lalu push ulang ke GitHub
// ================================================================
const API_URL = 'https://fauzan-portfolio-api.mfauzandwiputera10.workers.dev';
// Contoh jika username Cloudflare kamu adalah "fauzandwip":
// const API_URL = 'https://fauzan-portfolio-api.fauzandwip.workers.dev';

// CUSTOM CURSOR
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,.pcard,.sktag').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='16px';cur.style.height='16px';ring.style.transform='translate(-50%,-50%) scale(1.5)';ring.style.borderColor='rgba(56,189,248,.8)';});
  el.addEventListener('mouseleave',()=>{cur.style.width='10px';cur.style.height='10px';ring.style.transform='translate(-50%,-50%) scale(1)';ring.style.borderColor='rgba(56,189,248,.5)';});
});

// NEURAL NETWORK CANVAS
const cv=document.getElementById('nc'),ctx=cv.getContext('2d');
function resize(){cv.width=window.innerWidth;cv.height=window.innerHeight;}
resize();window.addEventListener('resize',resize);
class Node{
  constructor(){this.x=Math.random()*cv.width;this.y=Math.random()*cv.height;this.vx=(Math.random()-.5)*.4;this.vy=(Math.random()-.5)*.4;this.r=Math.random()*2+1;this.o=Math.random()*.5+.2;}
  update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>cv.width)this.vx*=-1;if(this.y<0||this.y>cv.height)this.vy*=-1;}
  draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle='rgba(56,189,248,'+this.o+')';ctx.fill();}
}
const nodes=Array.from({length:80},()=>new Node());
let mox=window.innerWidth/2,moy=window.innerHeight/2;
document.addEventListener('mousemove',e=>{mox=e.clientX;moy=e.clientY;});
(function anim(){
  ctx.clearRect(0,0,cv.width,cv.height);
  for(let i=0;i<nodes.length;i++){
    for(let j=i+1;j<nodes.length;j++){
      const d=Math.hypot(nodes[i].x-nodes[j].x,nodes[i].y-nodes[j].y);
      if(d<160){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(nodes[j].x,nodes[j].y);ctx.strokeStyle='rgba(56,189,248,'+((1-d/160)*.14)+')';ctx.lineWidth=.5;ctx.stroke();}
    }
    const d=Math.hypot(nodes[i].x-mox,nodes[i].y-moy);
    if(d<130){ctx.beginPath();ctx.moveTo(nodes[i].x,nodes[i].y);ctx.lineTo(mox,moy);ctx.strokeStyle='rgba(129,140,248,'+((1-d/130)*.35)+')';ctx.lineWidth=.8;ctx.stroke();}
    nodes[i].update();nodes[i].draw();
  }
  requestAnimationFrame(anim);
})();

// NAVBAR
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar.classList.toggle('sc',window.scrollY>60));

// MOBILE MENU
function toggleMenu(){document.getElementById('mmenu').classList.toggle('open');}
function closeMenu(){document.getElementById('mmenu').classList.remove('open');}
document.addEventListener('click',e=>{if(!e.target.closest('#hambtn')&&!e.target.closest('#mmenu'))closeMenu();});

// SCROLL REVEAL
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');}),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// COUNTER ANIMATION
const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  const t=parseInt(e.target.dataset.c);
  let c=0;
  const iv=setInterval(()=>{c=Math.min(c+t/50,t);e.target.textContent=Math.round(c)+(t===100?'%':'+');if(c>=t)clearInterval(iv);},20);
  co.unobserve(e.target);
}),{threshold:.5});
document.querySelectorAll('[data-c]').forEach(el=>co.observe(el));

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  e.preventDefault();closeMenu();
  const t=document.querySelector(a.getAttribute('href'));
  if(t)t.scrollIntoView({behavior:'smooth',block:'start'});
}));

// CONTACT FORM — with robust error handling & debugging
async function sendMsg(e){
  e.preventDefault();
  const form=e.target, btn=document.getElementById('fsbtn'), msgEl=document.getElementById('fmsg');
  if(form.website.value) return;
  btn.disabled=true; btn.textContent='Sending...';
  msgEl.className='fmsg'; msgEl.textContent='';
  
  const payload = {
    name:    form.name.value.trim(),
    email:   form.email.value.trim(),
    subject: form.subject.value.trim() || 'New message from portfolio',
    message: form.message.value.trim(),
    website: ''
  };
  
  // Validate API_URL is configured
  if(API_URL.includes('GANTI_USERNAME')) {
    msgEl.className='fmsg er';
    msgEl.textContent='⚠️ API_URL belum diupdate. Edit const API_URL di index.html.';
    btn.disabled=false; btn.textContent='Send Secure Message';
    return;
  }
  
  try {
    console.log('Sending to:', API_URL+'/contact');
    
    const res = await fetch(API_URL+'/contact', {
      method:  'POST',
      headers: {'Content-Type':'application/json'},
      body:    JSON.stringify(payload)
    });
    
    console.log('Response status:', res.status);
    console.log('Response headers:', [...res.headers.entries()]);
    
    // Get raw text first, then try parse as JSON
    const text = await res.text();
    console.log('Raw response body:', text);
    
    let data;
    if(!text || text.trim() === '') {
      throw new Error(`Worker returned EMPTY response (status ${res.status}). Worker belum di-redeploy atau crash. Cek Cloudflare dashboard → Workers → Logs.`);
    }
    
    try {
      data = JSON.parse(text);
    } catch(parseErr) {
      throw new Error(`Worker mengembalikan response non-JSON (status ${res.status}): ${text.slice(0, 200)}`);
    }
    
    if(res.ok && data.success) {
      msgEl.className='fmsg ok';
      msgEl.textContent = "✅ Message sent! I'll get back to you within 24-48 hours.";
      form.reset();
    } else {
      // Show specific validation errors if available
      let errorMsg = data.error || `HTTP ${res.status}`;
      if(data.details && Array.isArray(data.details) && data.details.length > 0) {
        errorMsg = data.details.map(d => `${d.field}: ${d.msg}`).join(' | ');
      }
      throw new Error(errorMsg);
    }
    
  } catch(err) {
    console.error('Contact form error:', err);
    let errMsg = err.message || 'Unknown error';
    if(errMsg.includes('Failed to fetch') || errMsg.includes('NetworkError')) {
      errMsg = '❌ Cannot connect to Worker. Cek: (1) Worker sudah di-deploy? (2) API_URL benar?';
    }
    msgEl.className='fmsg er';
    msgEl.textContent = errMsg;
  } finally {
    btn.disabled=false; btn.textContent='Send Secure Message';
  }
}