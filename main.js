const elCardActive = document.querySelector('.card-active');
const elJobs = document.querySelector('.js-jobs');
const elJobLink = elJobs.querySelector('.job-link');
const elLinkIcons = document.querySelector('.link-icons');
const elCloser= document.querySelector('.closer')

  elJobLink.addEventListener('click', function(){
    elCardActive.classList.add('card-active-class');


 });
 elCloser.addEventListener('click', function(){
  elCardActive.classList.remove('card-active-class');
});
  elLinkIcons.addEventListener('click', function(){
    elCardActive.classList.remove('card-active-class');
  });
