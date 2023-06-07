function getDataBase(){
    fetch('https://64709d593de51400f7249cf4.mockapi.io/apilication/json/item')
    .then(res=>res.json())
    .then(data =>{
        data.forEach(el => {
            const rowCard=document.querySelector('#card-sec .row')
           rowCard.innerHTML +=`
           <div class="col-5  m-5">
             <div class="card-img"><img src="${el.avatar}" alt=""></div>
             <div class="card-body">
               <div class="card-text">
                <h2>${el.name}<h2>
                <p>${el.text}<p>
                </div>
               <div class="card-foot d-flex justify-content-between">
                <div class="card-price">
                    <span>$${el.price}</span>
                </div>
                <div class="cars-btn d-flex justify-content-end">
                <a>Add to Card</a>
                </div>
               </div>
              </div>
           </div>
           ` 
        });
    })
    .catch(err=> console.log(err))
} getDataBase()