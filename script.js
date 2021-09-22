
function runBar() {
    let elem= document.getElementById('runBar');
    let width=0;
    let id = setInterval(run,50);
    
    function run() {
        if (width == 100) {
            clearInterval(id);
            // changeAll();
            window.location='indexChange.html';
        } else {
            width++;
            elem.style.width=width+'%';
            document.getElementById('widthOfBar').innerHTML=width+'%'
        }
    }

}
runBar();
// changeAll();

