$(function(){
    $('#pendaftaran').submit(function(event){
        var fname = $('#fname').val();
        var mail = $('#email').val();
        var telp = $('#telp').val();
        var message = $('#message').val();
        // var captcha = $('#captcha').is('checked')

        val_name(fname,event,"#fname-error");
        val_mail(mail,event,"#mail-error");
        val_phone(telp,event,"#phone-error");
        val_message(message,event,"#message-error");
        // val_captcha(captcha,event,"#captcha-error");
        
     
    });
    function val_name(name,event,error){
        if(!name){
            $(error).text('Nama Tidak boleh kosong ');
            event.preventDefault();
        }else{
            $(error).text('');
        }
    }
    function val_mail(mail,event,error) {
        if(!cekMail(mail)){
            $(error).text('Email Tidak boleh kosong dan harus ada symbol @');
            event.preventDefault();
        }else{
            $(error).text('');
        }  
    }
    function val_phone(phone,event,error) {
        if(!cekPhone(phone)){
            $(error).text('Pastikan Nomor Telepon Tidak boleh kosong dan harus angka');
            event.preventDefault();
        }else{
            $(error).text('');
        }  
    }
    function val_message(message,event,error) {
        if(!message){
            $(error).text('Pastikan Pesan di atas di isi dengan benar');
            event.preventDefault();
        }else{
            $(error).text('');
        }  
    }
    // function val_captcha(captcha,event,error) {
    //     if(!captcha){
    //         $(error).text('Pastikan Kolom retchapcha terisi dengan benar');
    //         event.preventDefault();
    //     }else{
    //         $(error).text('');
    //     }  
    // }
  
    // function cekAngka(name){
    //     var cek = /^[a-zA-Z]{1,100}$/;
    //     return cek.test(name);
    // }
    function cekMail(mail){
        var cek = /^[a-zA-Z0-9@.-_]{5,100}$/;
        return cek.test(mail);
    }
    function cekPhone(phone){
        var cek = /^[0-9]{10,13}$/;
        return cek.test(phone);
    }
   
});