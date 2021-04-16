const API_KEY = "ALmb5P7EFkU04YZF4y870X76q8i2";

//get all the matches[upcoming matches]

export const getMatches=()=>{
    const url="https://cricapi.com/api/matches/?apikey=ALmb5P7EFkU04YZF4y870X76q8i2";

    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("ERROR :",error));
};

export const getMatchDetail = (id) =>{
    console.log("you are in getmatchdetails");
    const url="https://cricapi.com/api/cricketScore/?apikey=ALmb5P7EFkU04YZF4y870X76q8i2&unique_id="+id;
    return fetch(url).then((response)=>response.json()).catch((error)=>console.log(error));
    
};
