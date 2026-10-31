var N="03284452636",W="https://wa.me/92"+N.slice(1);
document.getElementById('me').src="images/awais.png";document.getElementById('me2').src="images/awais.png";
var D=[
{n:"lion",p:2500,i:"images/lion.jpg"},
{n:"khana_kaba",p:2500,i:"images/kaba.jpg"},
{n:"Girl_3d_model",p:2200,i:"images/girl.jpg"},
{n:"flower",p:2300,i:"images/flower.jpg"},
{n:"3d_wall_flower",p:1800,i:"images/wall.jpg"},
{n:"moor",p:1900,i:"images/moor.jpg"},
{n:"Face__mask",p:1700,i:"images/mask.jpg"},
{n:"fish",p:1500,i:"images/fish.jpg"}];
function bg(id,n,k){var e=document.getElementById(id);for(var j=0;j<n;j++){var d=document.createElement('div');d.style.backgroundImage='url('+D[(j+k)%D.length].i+')';e.appendChild(d)}}
bg('pbg',5,0);bg('cbg',4,3);
var cur=null,g=document.getElementById('grid');
D.forEach(function(d,k){
 var c=document.createElement('div');c.className='card';c.style.animationDelay=(k*.1)+'s';
 c.innerHTML='<div class="iw"><img src="'+d.i+'" alt="'+d.n+'"></div><div class="in"><div class="nm">'+d.n+'.crv3d</div><button class="btn pr">Rs. '+d.p+'</button></div>';
 c.querySelector('img').onclick=function(){document.getElementById('zi').src=d.i;op('zm')};
 c.querySelector('.pr').onclick=function(){cur=d;document.getElementById('pi').src=d.i;document.getElementById('pn').textContent=d.n+'.crv3d';document.getElementById('pp').textContent='Price: Rs. '+d.p;document.getElementById('yn').style.display='flex';document.getElementById('pay2').style.display='none';op('pm')};
 g.appendChild(c)});
function op(i){document.getElementById(i).classList.add('on')}
function cl(i){document.getElementById(i).classList.remove('on')}
function yes(){
 document.getElementById('yn').style.display='none';document.getElementById('pay2').style.display='block';
 var t='Assalam o Alaikum, ma ye file buy karna chahta hon: '+cur.n+'.crv3d (Rs. '+cur.p+'). Payment JazzCash se kar di hai.';
 document.getElementById('wl').href=W+'?text='+encodeURIComponent(t);
 document.getElementById('jl').href='intent://#Intent;scheme=jazzcash;package=com.techlogix.mobilinkcustomer;S.browser_fallback_url='+encodeURIComponent('https://play.google.com/store/apps/details?id=com.techlogix.mobilinkcustomer')+';end';
 copy();}
function copy(){var m=document.getElementById('cp');
 try{navigator.clipboard.writeText(N).then(function(){m.textContent='Number copy ho gaya, JazzCash me paste karain'},function(){m.textContent='Number manually copy karain'})}catch(e){m.textContent='Number manually copy karain'}}
document.getElementById('wa').href=W;
document.getElementById('cw').href=W+'?text='+encodeURIComponent('Assalam o Alaikum, mujhe online 2D/3D course (30% off) ke bare me janna hai.');
function sendMsg(){var t='Naam: '+document.getElementById('fn').value+'\nTopic: '+document.getElementById('fs').value+'\n'+document.getElementById('ft').value;window.open(W+'?text='+encodeURIComponent(t),'_blank')}

var C=[["2D Jalies","2d jali design cnc","images/c1.jpg","Laser &amp; CNC cut jali patterns"],["3D Relief","3d relief wood carving design cnc","images/c2.jpg","Frames, murals &amp; relief carving"],["Door Panels","wooden door panel carving design cnc","images/c3.jpg","Carved main &amp; room doors"],["Beds","2d and 3d bed design wood carving cnc","images/c4.jpg","2D aur 3D carved bed designs"],["Sofas","sofa wood carving design cnc","images/c5.jpg","Luxury carved sofa sets"],["Wall Panels","3d wall panel design cnc","images/c6.jpg","Modern 3D wall panels"]];
var cg=document.getElementById('cg');
C.forEach(function(c,k){var a=document.createElement('a');a.className='cc';a.target='_blank';a.rel='noopener';a.href='https://www.pinterest.com/search/pins/?q='+encodeURIComponent(c[1]);a.style.transitionDelay=(k*.12)+'s';
 a.innerHTML='<div class="im"><img src="'+c[2]+'" alt="'+c[0]+'"></div><div class="tx"><b>'+c[0]+'</b><small>'+c[3]+'</small><i>Pinterest par dekhain →</i></div>';cg.appendChild(a)});
document.getElementById('wx').src="images/wx.jpg";
try{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.cc,.rv').forEach(function(x){io.observe(x)})}catch(e){document.querySelectorAll('.cc,.rv').forEach(function(x){x.classList.add('v')})}
