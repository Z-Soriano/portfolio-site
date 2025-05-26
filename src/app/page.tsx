import Image from 'next/image';



export default function Home() {
    return (
        <div>
            <main>
                <h3>Free Fabian</h3>

            </main>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://github.com/Z-Soriano" target="_blank" className="image-link">
                    <Image src="/Pfp.png" alt="x" width={200} height={200} className="image"/>
                </a>
            </div>

            <div className="row">
                <div className="column">
                    <div className="image-wrapper">
                        <img src="/gametest1.png" className="projImage"/>
                        <div className="overlay-group">
                            <h1 className="overlay-title">Project #1</h1>
                            <p className="overlay-subtitle">2D Platformer</p>
                            <button className="overlay-button">View Project</button>
                        </div>
                    </div>

                </div>
                <div className="column">
                    <div className="image-wrapper">
                        <img src="/purple.png" className="projImage"/>
                        <div className="overlay-group">
                            <h1 className="overlay-title">About Me</h1>
                            <p className="overlay-subtitle">Second Year CS Major Stat Minor @SDSU</p>
                            <p className="overlay-subtitle">GPA: 3.97</p>
                            <p className="overlay-subtitle">Notable Courses:</p>
                            <p className="overlay-subtitle">Calculus II, Linear Algebra, Discrete Math, Data
                                Structures</p>
                        </div>

                    </div>

                </div>
                <div className="column">
                    <div className="image-wrapper">
                        <img src="/purple.png" className="projImage"/>
                        <div className="overlay-group">
                            <h1 className="overlay-title">Skills</h1>
                            <p className="overlay-subtitle">- I'm proficient in Java and Python</p>
                            <p className="overlay-subtitle">- I've been learning JS CSS HTML and Godot</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}
