document.getElementById('parent').addEventListener('click',function(){
    console.log('parent is clicked..')
})

document.getElementById('child').addEventListener('click',function(){
    event.stopPropagation();
    console.log('child is clicked..')
})