function eventDivListener(ele) {
    var zIndexValue = 1000;

    console.log(zIndexValue);
    zIndexValue = eventdivListener(ele, zIndexValue);
    console.log(zIndexValue);

}

function eventdivListener(ele, zIndexValue) {
    var Id = ele.id;
    var targetId = ".company-category-" + Id;
    console.log(Id);
    console.log(targetId);
    var targetid = document.querySelector(targetId);
    console.log(targetid);
    targetid.style.zIndex = zIndexValue;
    console.log(targetid.style);

    zIndexValue++;
    return zIndexValue;
}