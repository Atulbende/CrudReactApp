import $ from "jquery";
export const Validation={
    IsValid:function(_v,obj){
                const _f=[];
                const _d=[]
                for(let [key,val] of Object.entries(obj)){
                        $('#'+key).removeClass('border border-danger');
                        $('.Valid__Msg').remove();
                        if(_v[0].text.includes(key)){
                                if(val=='' || val==undefined)_f.push(key);
                        }
                }
                if(_f.length>0){
                        _f.map((v)=>{
                                $('#'+v).addClass('border border-danger');
                                $('#'+v).after(`<div class="Valid__Msg required-msg-shake"><p>Input Required  : ${v.match(/[a-z]+|[0-9]+/g)?.join(" ")?.toString()}</p></div>`);
                        })
                        return false;
                }
               

             return true;
           

    }                
}