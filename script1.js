function main() {
    const btnCount = document.getElementById("btnCount")
    const txtCounter = document.getElementById("txtCounter")
    //lambda function
    let count = 0;
    btnCount.addEventListener('click', ()  => {
       count = count + 1 //count++ 
       txtCounter.textContent = count;
       console.log(count)
       console.log("Clicked")
    })
        
}
main();