const apikey = "50316f448f2828090887f4699140b550";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?&&units=metric&q=";


const searchbox = document.getElementById("name");

const searchbtn = document.getElementById("search");

const weathericon = document.querySelector(".weather-icon");
  
async function checkweather(city){
        const response = await fetch(apiurl + city +`&appid=${apikey}`);
        
        

        if(response.status == 404)
        {

        document.querySelector("#Invalid").style.display="block";
        document.querySelector("#sub-section").style.display="none";
        document.querySelector("#middlesection").style.display="none";

        }

        else{

                var data = await response.json();

        document.querySelector("#city-name").innerHTML = data.name;
        document.querySelector("h2").innerHTML =Math.round(data.main.temp)+"°C";
        document.querySelector("#humidval").innerHTML =data.main.humidity+ "%";
        document.querySelector("#windval").innerHTML =data.wind.speed + "Km/h";

        if(data.weather[0].main == 'Clouds')
          weathericon.src="Cloud.png";

        else if(data.weather[0].main == 'Smoke')
          weathericon.src="Smoke.png";

        else if(data.weather[0].main == 'Rain')
          weathericon.src="Rain.png";

        else if(data.weather[0].main == 'Haze' || data.weather[0].main == 'Fog')
          weathericon.src="Haze.png";

        else if(data.weather[0].main == 'Snow')
          weathericon.src="Snow.png";

          document.querySelector("#sub-section").style.display="flex";
          document.querySelector("#middlesection").style.display="block";
         
          document.querySelector("#Invalid").style.display="none";
        
        }

        

}  
  

searchbtn.addEventListener("click",()=>{checkweather(searchbox.value);})



