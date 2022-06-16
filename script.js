setTimeout(()=>{
let linkedInProfile = {};
linkedInProfile['Name'] = document.querySelector(".text-heading-xlarge.inline.t-24.v-align-middle.break-words").innerHTML;
linkedInProfile['profilePic'] = document.querySelector(".pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.ember-view").src;
linkedInProfile['Company'] = document.querySelector(".inline-show-more-text.inline-show-more-text--is-collapsed.inline-show-more-text--is-collapsed-with-line-clamp.inline").innerText;
linkedInProfile['Designation'] = document.querySelector(".text-body-medium.break-words").innerText;
linkedInProfile['Location'] = document.querySelector(".text-body-small.inline.t-black--light.break-words").innerText;
let tags = document.querySelector(".text-body-small.t-black--light.break-words.pt1");
if (tags == null ){
linkedInProfile['Tags'] = "";
}else{
    linkedInProfile['Tags'] = tags.innerText;
}

linkedInProfile['About'] =document.querySelector(".display-flex.ph5.pv3").innerText;

let openInfo = (function() {
    let link = document.querySelector(".ember-view.link-without-visited-state.cursor-pointer.text-heading-small.inline-block.break-words").click();
    link;
    setTimeout(()=>{ 
        // linkedInProfile[0]['Profile Link'] = document.querySelector(".pv-contact-info__contact-link.link-without-visited-state.t-14").innerText;
        let contactInfo = document.querySelectorAll(".pv-contact-info__ci-container.t-14");
        linkedInProfile['Profile Link'] = contactInfo[0].innerText;

        let emailId = contactInfo[2];
        if (emailId == null ){
            linkedInProfile['Email'] = "";
            }else{
                linkedInProfile['Email'] =emailId.innerText;
            }
        // linkedInProfile['Email'] = contactInfo[2].innerText;
        // linkedInProfile['Phone'] = contactInfo[1].innerText;
        document.querySelector(".artdeco-modal__dismiss.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--2.artdeco-button--tertiary.ember-view").click();
        console.log(linkedInProfile);
        function copy(value) { 
            navigator.clipboard.writeText(value);
        };
        
        copy(JSON.stringify(linkedInProfile));
    },3000)

   
   return false;  
});


setTimeout(openInfo,5000);

// setTimeout(console.log(JSON.stringify(linkedInProfile)),5000)
},5000);

