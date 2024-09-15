// topices component//

import c5 from "../assets/images/c5.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"
import c9 from "../assets/images/c9.jpg"
import c10 from "../assets/images/c10.jpg"
import c11 from "../assets/images/c11.jpg"
import c12 from "../assets/images/c12.jpg"
import c13 from "../assets/images/c13.jpg"

function Topices()
{
    return(


        <div className="topics">
        <h1 className="topics__title">Topices Recommended for you</h1>
        <div className="topics__container">
            <p>Wedsite</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>Mongo DB</p>
            <p>AWS</p>
            <p>Azure</p>
            <p>Docker</p>
            <p>Github</p>
            <p>React JS</p>
        </div>
    
                 
        <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
         
        <div className="popular__container">
             <div class="course-card">
                        <img src={c5} alt=""></img>
                        <h3>Basic to Advance Programming With </h3>
                            <p>Col Steele</p>
                            <p>4.9 ⭐⭐⭐⭐</p>
                            <p>449  <del>1999</del></p>
                        </div>   
            <div className="course-card">
                <img src={c7} alt=""></img>
                <h3>Basic to Advance Programming With EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449  <del>1999</del></p>
            </div>

            
                <div className="course-card">
                    <img src={c8} alt=""></img>
                    <h3>Basic to Advance Programming With EMC</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449  <del>1999</del></p>
                </div>
    
                
                        <div className="course-card">
                            <img src={c9} alt=""></img>
                            <h3>Basic to Advance Programming With EMC</h3>
                            <p>Col Steele</p>
                            <p>4.9 ⭐⭐⭐⭐</p>
                            <p>449  <del>1999</del></p>
                        </div>

            <div className="course-card">
                <img src={c10} alt=""></img>
                <h3>Basic to Advance Programming With EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449  <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c11} alt=""></img>
                <h3>Basic to Advance Programming With EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449  <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c12} alt=""></img>
                <h3>Basic to Advance Programming With EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449  <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={c13} alt=""></img>
                <h3>Basic to Advance Programming With EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449  <del>1999</del></p>
                </div>
              </div>
            </div>
          </div>
    

    )
}

export default Topices