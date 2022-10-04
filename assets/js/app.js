
let cl = console.log;

let MovieInfo = document.getElementById("getData");
let Serach = document.getElementById("Search");



function movieThumbnail(array){
    let result = "";

    array.forEach(ele => {
        result += `<div class="col-md-3">
        <div class="card mb-4">
            <figure class="fig-img">
                <img src="${Img_path}${ele.poster_path}" alt="Moive" title="Moive">
                <figcaption class="p-2">
                    <div class="row align-items-center">
                        <div class="col-sm-9">
                            <h4 class="text-white movieTitle">${ele.title}</h4>
                        </div>
                        <div class="col-sm-3">
                            <p class="pratingVal ${colors(ele.vote_average)} text-center">${ele.vote_average}</p>
                        </div>
                    </div>
                </figcaption>
                <div class="overview p-4">
                    <h4>${ele.title}</h4>
                    <p>${ele.overview}</p>
                </div>
            </figure>
        </div>
    </div>`
        
        ;
        
    });

    cl(result);
   return result;
    

}

MovieInfo.innerHTML =  movieThumbnail(results);



 function colors(ele){
    if(ele>=8 ){
       return "text-success";
    }else if(ele>=5){
        return "text-warning"
    }else{
        return "text-danger"
    }
        
 }

Serach.addEventListener("keyup",onkeyup);

function onkeyup(event){
    let moiveArr = [];
    let inputVal = event.target.value
    // cl(event.target.value)
    if(inputVal.length){
        if(event.keyCode === 13){
            cl(inputVal)
            
            results.forEach(function(ele){
                if(ele.title.toLowerCase().includes(inputVal.toLowerCase()) ){
                    // cl(ele)
                    moiveArr.push(ele)
                    cl(moiveArr)
                    MovieInfo.innerHTML =  movieThumbnail(moiveArr);
                }
            })
        }
    }else{
        MovieInfo.innerHTML =  movieThumbnail(results);
    }

}

