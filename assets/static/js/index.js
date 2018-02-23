$(function(){$('[data-typed]').each(function(){var $this=$(this)
var src=$this.attr('data-typed')
var strs=[]
$(src).each(function(){strs.push($(this).text())})
var id=$this.attr('id')
if(!id||id.length===0){throw 'data-typed elements must have id'}
Typed.new('#'+id,{strings:strs,loop:true,shuffle:true,cursorChar:'|',contentType:'text',typeSpeed:50,backSpeed:2,backDelay:2000});})
$('.ui.accordion').accordion()
$('.machina').dblclick(function(){$(this).transition('tada')})})