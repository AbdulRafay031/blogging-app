const logout = () => {
    localStorage.clear();
    location.href = "login.html"
}
// getUserData()
window.logout = logout


// new api////////////////
const celebrityData = [
    {
        name: "Alon musk",
        occupation: "business man",
        age: 40,
        nationality: "American",
        image:"imeges/img-1.jpg",
        socialMedia: {
            twitter: "@johnsmith",
            instagram: "@johnsmith_official",
            facebook: "JohnSmithOfficial"
        },
        bio: "Elon Musk is a South African-born American entrepreneur who cofounded the electronic-payment firm PayPal and formed SpaceX, maker of launch vehicles and spacecraft. He was also one of the first significant investors in, as well as chief executive officer of, the electric car manufacturer Tesla...."
    },
    {
        name: "Donald Trump",
        occupation: "ex president",
        age: 52,
        nationality: "america",
        image: "imeges/img-3.webp" ,
        socialMedia: {
            twitter: "@emilymusic",
            instagram: "@emily_music",
            facebook: "EmilyJohnsonMusic"
        },
        bio: "Donald John Trump (born June 14, 1946) is an American politician, media personality, and businessman who served as the 45th president of the United States from 2017 to 2021...."
    },
    // ... Repeat for other celebrities
    {
        name: "Michael Rodriguez",
        occupation: "Athlete",
        age: 28,
        nationality: "Spanish",
        image: "imeges/Michael Rodriguez.jpg",
        socialMedia: {
            twitter: "@michaelrodriguez",
            instagram: "@michael_rodriguez",
            facebook: "MichaelRodriguezOfficial"
        },
        bio: "Michael Rodriguez is a celebrated athlete who has brought glory to his country in various international sports events. Born in Madrid, he displayed remarkable..."
    },

    {
        name: "imran khan",
        party: "polititian(ex pm)",
        age: 52,
        nationality: "Apakistan",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/230511131823-file-imran-khan-031723.jpg?c=16x9&q=h_720,w_1280,c_fill",
        socialMedia: {
            twitter: "@imran khan",
            facebook: "imrankhanOfficial"
        },
        bio: "Imran Ahmad Khan Niazi born 5 October 1952) is a Pakistani former cricketer and politician who served as the 22nd prime minister of Pakistan from August 2018 until April 2022. He is the founder and chairman of the political party Pakistan Tehreek-e-Insaf (PTI)...."
    },
    {
        name: "Shahid Afridi",
        party: "cricketer",
        age: 45,
        nationality: "pakistan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_g4FOtLFVDgNSEhyJd_LgUf-r5Bbo5Yj4yOzNYg&s",
        socialMedia: {
            twitter: "@shahidafridi",
            facebook: "ShahidafridiOfficial"
        },
        bio: "Sahibzada Mohammad Shahid Khan Afridi ( Pashto: شاهد افریدی; born 1 March 1977) is a Pakistani former cricketer and captain of the Pakistan national cricket team. An all-rounder, Afridi was a right-handed leg spinner and a right-handed batsman..."
    },
    {
        name: "Rajesh Patel",
        party: "United Front",
        age: 60,
        nationality: "Indian",
        image: "imeges/Rajesh Patel.jpg",
        socialMedia: {
            twitter: "@rajeshpatel",
            facebook: "RajeshPatelOfficial"
        },
        bio: "Rajesh Patel is a respected politician who has worked tirelessly to bridge cultural divides and foster unity in his nation. Born and raised in Mumbai, he has led initiatives..."
    }
];

celebrityData.forEach(celebrity => {
    // console.log(`Name: ${celebrity.name}`);
    // console.log(`Occupation: ${celebrity.occupation}`);
    // console.log(`Age: ${celebrity.age}`);
    // console.log(`Nationality: ${celebrity.nationality}`);
    // console.log(`Image: ${celebrity.image}`);
    // console.log(`Twitter: ${celebrity.socialMedia.twitter}`);
    // console.log(`Instagram: ${celebrity.socialMedia.instagram}`);
    // console.log(`Facebook: ${celebrity.socialMedia.facebook}`);
    // console.log(`Bio: ${celebrity.bio}`);
    // console.log('-----------------------------------');

    const main = document.getElementById("main");
    const newPost = `
        <div class="card">
            <div class="row">
                <div class="col-md-7 px-3">
                    <div class="card-block px-6">
                        <h4 class="card-title">Name: ${celebrity.name}</h4>
                        <p class="card-text">Bio: ${celebrity.bio}</p>
                        <a href="#" class="mt-auto btn btn-primary">Read More</a>
                    </div>
                </div>
                <!-- Carousel start -->
                <div class="col-md-5">
                    <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block" width="250px" src="${celebrity.image}" alt="Celebrity Image">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of carousel -->
            </div>
        </div>`;

    // Append the new post HTML to the existing content
    main.innerHTML += newPost;
});

