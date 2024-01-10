import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content reveal">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                  <i class='bx bxl-php'></i>

                 <div>
                    <h3 className="skills__name">PHP</h3>
                    <span className="skills__level">Intermediate</span>
                 </div>
                </div>

                <div className="skills__data">
                  <i class='bx bxl-nodejs'></i>

                 <div>
                    <h3 className="skills__name">Node Js</h3>
                    <span className="skills__level">Basic</span>
                 </div>
                </div>

                <div className="skills__data">
                  <i class='bx bxl-c-plus-plus'></i>

                 <div>
                    <h3 className="skills__name">C++</h3>
                    <span className="skills__level">Intermediate</span>
                 </div>
                </div>
            </div>
            
            <div className="skills__group">
                <div className="skills__data">
                  <i class='bx bxl-java'></i>
                 <div>
                    <h3 className="skills__name">JAVA</h3>
                    <span className="skills__level">Basic</span>
                 </div>
                </div>

                <div className="skills__data">
                  <i class='bx bxs-data'></i>
                 <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level">Intermediate</span>
                 </div>
                </div>

                <div className="skills__data">
                  <i class='bx bxl-mongodb'></i>
                 <div>

                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__level">Basic</span>
                 </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend