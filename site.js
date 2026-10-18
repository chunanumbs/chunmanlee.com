document.documentElement.classList.add('js');
const menu=document.querySelector('.menu-toggle'),links=document.querySelector('.navlinks');
menu.hidden=false;
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);menu.textContent=open?'Close':'Menu'});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&links.classList.contains('open')){menu.click();menu.focus()}});
const modal=document.querySelector('dialog'),preview=modal.querySelector('img');
document.querySelectorAll('.zoomable').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');preview.src=img.src;preview.alt=img.alt;document.querySelector('#modal-title').textContent=button.dataset.title||img.alt;modal.showModal()}));
modal.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
