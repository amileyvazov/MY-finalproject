const add=document.getElementById('add')
add.addEventListener('click',()=>{
   fetch('https://64709d593de51400f7249cf4.mockapi.io/apilication/json/item',{
       method:"POST",
       headers:{
           'Content-Type':'application/json'
       },
       body: JSON.stringify({
           avatar:document.querySelector('#avatar').value,
           name:document.querySelector('#name').value,
           text:document.querySelector('#text').value,
           price:document.querySelector('#price').value 
       })
   })
   .then(res=>console.log(res.json()))
   .then(res =>{
           if (res.ok) {
               successAlert('Müvəffəqiyyətlə əlavə olundu!')
               document.querySelector('#avater').value = '';
               document.querySelector('#name').value = '';
               document.querySelector('#text').value = '';
               document.querySelector('#price').value = '';

           }
           else{
               errorAlert('Bir xəta baş verdi!')
           }
       })
   .catch(err=>console.log(err))

})
// fetch edit


const edit=document.getElementById('edit')
edit.addEventListener('click',()=>{
   fetch('https://64709d593de51400f7249cf4.mockapi.io/apilication/json/item',{
       method:'PUT',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        avatar:document.querySelector('#avatar').value,
        name:document.querySelector('#name').value,
        text:document.querySelector('#text').value,
        price:document.querySelector('#price').value 
       })
   })
   .then(res=>{
    if (res.ok){
     window.location.href="home.html"
    }
    else{
        alert("yenidən yükləyin")
    }
   })
})

// Fech remove

const deleteBtn=document.getElementById('delete')
deleteBtn.addEventListener('click',(e)=>{
   
    if (deleteBtn) {
        const fName = deleteBtn.parentElement.parentElement.children[1].innerText
        Swal.fire({
            title: fName,
            text: "Silinsin mi?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Bəli',
            cancelButtonText: 'Xeyr'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://64709d593de51400f7249cf4.mockapi.io/apilication/json/item'+deleteBtn.parentElement.parentElement.children[0].innerText,
                {
                    method : 'DELETE'
                })
                .then(res=>{
                    if (res.ok) {
                        Swal.fire(
                            'Silindi!',
                            'Əməliyyat uğurla başa çatdı.',
                            'success'
                        )
                        getLastestsDatas();
                    }
                    else{
                        Swal.fire(
                            'Ooops!',
                            'Xəta baş verdi.',
                            'danger'
                        )
                    }
                })
                .catch(()=>Swal.fire('Ooops!','Xəta baş verdi.','danger'))
            }
        })
    }

})