import React from 'react';
import './App.css';
import GalleryItem from './Components/GalleryItem';
import img4 from "./img4.jpeg"
import img5 from "./img5.jpeg"
import img6 from "./img6.jpeg"
import TourDate from './Components/TourDate';

let images = [
  { link: "/img1.jpeg" },
  {
    link: "/img2.jpeg"
  },
  {
    link: "/img3.jpeg"
  },
  {
    link: img4
  },
  {
    link: img5
  },
  {
    link: img6
  }
]

let tourDates = [
  {
    date: "Sept 19 - 29 - Deluxe Haute Route– Chamonix to Zermatt – Classic trek has a new standard",
    spot: "SOLD OUT"
  },
  {
    date: "Sept 26 - Oct 5 - Scenic Alps by Rail– The Grand Train Tour of Switzerland",
    spot: "SOLD OUT"
  },
  {
    date: "Sept 29 - Oct 5 - Discover Swiss Cuisine - Italian Inspired - A culinary adventure in Lugano",
    spot: "SOLD OUT"
  },
  {
    date: "Oct 9 - 18 - Scenic Alps by Rail – The Grand Train Tour of Switzerland",
    spot: "ONLY 4 SPOT AVAILABLE"
  },
  {
    date: "Dec 3 - 11 - Christmas in Switzerland - Enjoy authentic Switzerland at its holiday best",
    spot: "AVAILABLE"
  },
  {
    date: "Dec 5 - 13 - Christmas in Switzerland - Enjoy authentic Switzerland at its holiday best",
    spot: "AVAILABLE"
  }
]

function App() {
  return (
    <div className="App">
      <section id="gallery">
        <GalleryItem link={images[0].link} />
        <GalleryItem link={images[1].link} />
        <GalleryItem link={images[2].link} />
        <GalleryItem link={images[3].link} />
        <GalleryItem link={images[4].link} />
        <GalleryItem link={images[5].link} />
      </section>
      <section id="tour">
        <h2>Tour Dates</h2>
        <ul>
          <TourDate
            date={tourDates[0].date}
            spot={tourDates[0].spot}
          />
           <TourDate
            date={tourDates[1].date}
            spot={tourDates[1].spot}
          />
           <TourDate
            date={tourDates[2].date}
            spot={tourDates[2].spot}
          />
           <TourDate
            date={tourDates[3].date}
            spot={tourDates[3].spot}
          />
             <TourDate
            date={tourDates[4].date}
            spot={tourDates[4].spot}
          />
             <TourDate
            date={tourDates[5].date}
            spot={tourDates[5].spot}
          />
        </ul>
      </section>

    </div>
  );
}

export default App;
