
import $ from "jquery";
export const Screen={  
            LoaderON:function(){$('.Loader_overlay').addClass('d-flex').removeClass('d-none');},
            LoaderOff: function (){$('.Loader_overlay').addClass('d-none').removeClass('d-flex'); }
}
export  function getUniqueId() {
    const randomNumber = Math.floor(10000 + Math.random() * 90); 
    return randomNumber;
  }