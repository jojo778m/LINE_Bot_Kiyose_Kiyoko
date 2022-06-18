window.onload = () => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

window.addEventListener('load', function(){
  // 思いついた順に作っていったのでhtmlファイルの順番と全く対応していない
  /*let node_sample1 = document.getElementById('sample1');
  node_sample1.onclick = sample1;
  node_sample1.onmouseover = write_underline;
  node_sample1.onmouseout = clear_underline;*/
  // let swiper1 = new Swiper('.swiper-container', {
  //   pagination: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   }
  // });
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
})
