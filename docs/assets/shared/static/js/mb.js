var mb={}
mb.meta=function(name){if(!mb._meta){mb._meta={}
$('meta').each(function(){var $this=$(this)
mb._meta[$this.attr('name')]=$this.attr('content')})}
return mb._meta[name]}
mb._meta=null
mb.nicePercentage=function(val){return Math.floor(val*10000)/100+"%"}
mb.getErrorMessage=function(xhrOrObj,status,message){console.info(arguments)
var msg="Oops, something went wrong - check the console for more details"
if(message){msg=message}
if(xhrOrObj&&xhrOrObj.responseJSON&&xhrOrObj.responseJSON.error){msg=xhrOrObj.responseJSON.error}
if(xhrOrObj&&xhrOrObj.error){msg=xhrOrObj.error}
return msg}
$(function(){$('.ui.accordion').accordion()
$('.tabular.menu .item').tab()
$("a[href]").click(function(e){var dest=$(this).attr('href')
dest=dest.substr(dest.indexOf('#')+1)
var destEl=$('[id="'+dest+'"]')
if(destEl.length>0){e.preventDefault()
$('html,body').animate({scrollTop:destEl.offset().top},'slow')
if(history.pushState){history.pushState(null,null,'#'+dest);}else{location.hash='#'+dest;}}})
function guid(){var S4=function(){return(((1+Math.random())*0x10000)|0).toString(16).substring(1);};return(S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());}
if(Clipboard.isSupported()){$('pre.console').each(function(){var $this=$(this).addClass('with copy')
var $code=$this.find('code')
var id=$code.attr('id')
if(!id){id="console_"+guid()
$code.attr('id',id)}
var btn=$('<button>',{'class':'ui mini copy bottom attached right floated icon button','data-clipboard-target':'#'+id,'data-tooltip':'Copy to clipboard'}).append("<i class='copy icon'></i>")
$this.after(btn)})
new Clipboard('.copy.button')}
$(function(){$('[data-confirm]').each(function(){var $this=$(this)
$this.click(function(e){if(!confirm($this.attr('data-confirm'))){e.preventDefault()}})})})})