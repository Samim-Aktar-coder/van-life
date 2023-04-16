import React from 'react';

function Home() {
    return (
        <section className='home'>
            <div className='home__content'> 
            <h1>You got the travel plans,we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p> 
            <button className="home__btn">Find your van</button>
            <p className="copyright">&#169;2022 #VANLIFE</p>
            </div>
        </section>
    );
}

export default Home;