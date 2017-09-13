window.onload = function(){
    var list = document.querySelector("#products > ol");
    var url = '/getproducts';
    var gotResponse = function(res){
        makeList(list,res);
    }
    var gotErr = function(err){
        console.log(err);
    }
    
    axios.get(url).then(gotResponse).catch(gotErr);
    /*this for loop takes each object or row out of the array and we break
    it apart and place each row in the list element on our document */
    function makeList(list,res){
        console.log(res.data.data);
        for(var i in res.data.data){
            var childList = document.createElement("li");
            var product = res.data.data[i];
            console.log(product);
            var returnList = `
                name: ${product.product_name}
                id: ${product.item_id}
                price: ${product.price}  
            `;
            var text = document.createTextNode(returnList);
            childList.appendChild(text);
            console.log(list);
            list.appendChild(childList);
        }
    };
    var buyButton = document.querySelector("#buyButton");
    buyButton.addEventListener("click",function(e){
        var answer = prompt("What would you like to purchase?");
        console.log(answer);
        var answer2 = prompt("How many would you like to purchase?");
        console.log(answer2);
        var nodepkg = {
            answers:{
                one: answer,
                two: answer2
            }
        };
        axios.post("/check", nodepkg).then(function(res){
            console.log(res);
        }).catch(gotErr);
    });
};

