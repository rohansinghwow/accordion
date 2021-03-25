const accordionItemsEl = document.getElementsByClassName("accordion__item")

function expandDetails(){
    for(let items of accordionItemsEl){
        let accHeader = items.firstElementChild
        accHeader.addEventListener("click", function(){
            let accDetails  = this.nextElementSibling
            if(accDetails.style.maxHeight){
                accDetails.style.maxHeight = null;
            } else{
                accDetails.style.maxHeight = accDetails.scrollHeight + "px";
            }

        })
    }
}
expandDetails()