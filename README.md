## Inspiration 💡
**Water is the most critical resource for development**. Globally, **Agriculture** accounts for over **80%** of our water usage, and a significant amount of water is *wasted* in all agricultural activities. This happens because the majority of the irrigation systems that farmers use are *manual* and even the automatic irrigation systems irrigate regardless of the soil and weather conditions. There are several places which remain highly vulnerable to this water crisis in the coming years. Affordable and efficient methods in water management will be key to the production of food and economic security for sustained livelihoods in both irrigated and rain-fed scenarios.

We believe with creative thinking and a proper approach we can innovate novel methods that’ll help us tackle the same seamlessly. Thus, we build, **Hydroptimum** ✨

![toplogo-devpost.png](https://i.postimg.cc/G2DnMrJz/toplogo-devpost.png)

## What it does 🤔
With the help of AI, anyone can provide simple information about their crops like planting location, type of crop, and type of soil to obtain personalized recommendations on the volume of water necessary to achieve optimal crop production. Then users select what area of the farm they want to get an estimate for, and Hydroptimum automatically combines the data with weather forecasts and machine learning to provide accurate crop water requirement estimations. Hydroptimum gives detailed statistics including gallons of water that could be saved and dollars unnecessarily spent. Users are incentivised to make their farming more efficient, and in doing so, help Earth solve its water problem.

> **Targeted Track** : **Sustainability**


## How we built it ⚙️

First and foremost, it is Crafted with 💙. 
We are using ReactJs as the Front-end framework which's fueled via MaterialUI CSS. The authentication is performed via Firebase, then inside the dashboard, we leverage few 3rd party API's to retrieve *Weather Data*, and other climatic attributes. The polygon plot is made using *Leaflet.js* on the map-surface. To obtain the total surface-area, we used [this](https://gis.stackexchange.com/questions/8495/converting-longitude-and-latitude-coordinates-to-square-miles/8496#8496) formula.

![System-Architecture-modded.png](https://i.postimg.cc/BZFbwPq5/System-Architecture-modded.png)

Moreover, we are also leveraging **MageAI**'s platform for crafting our ML model (followed by specific steps, e.g. Training, Evaluating, & even for Hyperparameter Tuning). The dataset is prepared by combining 2-3 different Kaggle datasets by intersecting common attributes & then finetuning.

![Main-Mage-AI.gif](https://i.postimg.cc/PqJL7y43/Main-Mage-AI.gif)

![break](https://res.cloudinary.com/devpost/image/fetch/s--B0JC0SQ_--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/QmaNVVQELQk7EVBZRCWhNbdxDbMBVU5a4koeH7yBK1dojC)

## Design 🎨

We were heavily inspired by the revised version of **Double-Diamond** design process, which not only includes visual design, but a full-fledged research cycle in which you must discover and define your problem before tackling your solution & then finally deploy it.

![Double-Diamond](https://i.postimg.cc/kMR56cRT/Double-Diamond.png)

> 1. **Discover**: a deep dive into the problem we are trying to solve.
> 2. **Define**: synthesizing the information from the discovery phase into a problem definition.
> 3. **Develop**: think up solutions to the problem.
> 4. **Deliver**: pick the best solution and build that.

Moreover, we utilized design tools like Figma,  Photoshop & Illustrator to prototype our designs before doing any coding. Through this, we are able to get iterative feedback so that we spend less time re-writing code.

![Figma-Devpost-snap-1.png](https://i.postimg.cc/Ghz702Kt/Figma-Devpost-snap-1.png)

![break](https://res.cloudinary.com/devpost/image/fetch/s--B0JC0SQ_--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/QmaNVVQELQk7EVBZRCWhNbdxDbMBVU5a4koeH7yBK1dojC)

# Research 📚
Research is the key to empathizing with users: we found our specific user group early and that paves the way for our whole project. Here are a few of the resources that were helpful to us —

- The global value of water in agriculture : https://www.pnas.org/content/117/36/21985
- California Agricultural Production Statistics : https://www.cdfa.ca.gov/Statistics
- Water Wastage in Agriculture : https://worldfinancialreview.com/water-wastage-in-agriculture
- Water Usage @ Agricultural Industry : https://htt.io/water-usage-in-the-agricultural-industry
- Sustainable Water Management in Agriculture : https://bit.ly/3pkgCVL
- Sustainable Agricultural Water Management: https://bit.ly/33USIIQ
- Water Pollution from Agriculture : https://www.fao.org/3/i7754e/i7754e.pdf


![research.png](https://i.postimg.cc/pL3zFbkR/research.png)

**CREDITS**
- **Design Resources** : Freepik
- **Icons** : Icons8, fontawesome
- **Font** : Roboto / Orbitron / Raleway / Righteous

![break](https://res.cloudinary.com/devpost/image/fetch/s--B0JC0SQ_--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://ipfs.infura.io/ipfs/QmaNVVQELQk7EVBZRCWhNbdxDbMBVU5a4koeH7yBK1dojC)

## Challenges we ran into 😤
We face some challenges during the hackathon. One of the major challenges was the time difference. All of us are in different time zones which creates some communication challenges.

- **Gathering Data**: This was by far the most tiresome work that we all invested in our time in. We did extensive research while collecting data & datasets from various sources, including Kaggle.
- **MageAI**: This is the first time we're used MageAI for turning our ideas into reality. Initially it seemed hard, but it kept on being simple as we moved forward.
- **Optimizing Datasets**: Manually labeling and filtering datasets takes a lot of time which had to be done for training the model.
- **React components**: Transforming highly dynamic ideas created in Figma into React Components and Layouts.
- **Integration of Modules** - Connecting the Various APIs, SDK’s and JSON data with front-end UI Components was challenging!
- **Filtering specific plants** - As the title says, every plant is actually dependent on the soil, climate & root type, which defines it's growth, height, colors, etc. All of these were very *sensitive data* for us as we took it into consideration.

## Accomplishments that we're proud of ✨
We are proud of finishing the project on time which seemed like a tough task as we started working on it quite late due to other commitments and were also able to add most of the features that we envisioned for the app during ideation. Moreover, we learned a lot about new web technologies and libraries that we could incorporate into our project to meet our unique needs. And as always, working overnight was pretty fun! :)

This project was especially an achievement for us because this time the experience was very different than what we have while building typical hackathon projects, which also includes heavy brainstorming, extensive research, and yes, hitting the final pin on the board.

## What we learned 🙌
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon :)

![team-transp.png](https://i.postimg.cc/QCQMBcFQ/team-transp.png)

## What's next for Hydroptimum 🚀
*We believe that our App has great potential*. Besides, we plan to expand it's capabilities by *incorporating other languages*. Our next step is to expand the number of variables taken into account from our dataset. This will not only permit a *greater audience* but also facilitate the exchange of diverse information and technical expertise globally. Additionally, we intend to continue improving the accuracy to provide better accuracy & low-spec support. 
 
**Note ⚠️ — API credentials have been revoked. If you want to run the same on your local, use your own credentials.**

![footer-devpost.png](https://i.postimg.cc/6qXWNTMy/footer-devpost.png)
