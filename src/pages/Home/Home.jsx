import React from 'react'
import "./Home.css"
import HomeCard from '../../components/HomeCard/HomeCard'
import HomeOweners from '../../components/HomeOweners/HomeOweners'
import HomeSold from '../../components/HomeSold/HomeSold'

function Home() {
  return (<main className='site__main'>
    <section className="dashboard">
      <div className="conteyner">
        <h1 className="dashboard_title">DASHBOARD</h1>
        <div className="dashboard__wraper">
          <HomeCard title={"Uylar soni:"} info={13}/>
          <HomeCard title={"Arendadagi uylar:"} info={10}/>
          <HomeCard title={"Uylar narhi:"} info={"100000000 so'm"}/>
          <HomeCard title={"Oylik daromat:"} info={"80000000 so'm"}/>
        </div>
      </div>
    </section>
    <section className="oweners">
      <div className="conteyner">
        <h2 className="oweners_title">OWENERS</h2>
        <ul className="oweners__list">
          {/* {
            Array.map((el) => <HomeOweners owener={el}/>)
          } */}
          <HomeOweners owener={{id: 1,name: "Vosir",username: "Ayubjanov",tel: 330059036}}/>
          <HomeOweners owener={{id: 2,name: "Vosir",username: "Ayubjanov",tel: 330059036}}/>
          <HomeOweners owener={{id: 3,name: "Vosir",username: "Ayubjanov",tel: 330059036}}/>
          <HomeOweners owener={{id: 4,name: "Vosir",username: "Ayubjanov",tel: 330059036}}/>
          <HomeOweners owener={{id: 5,name: "Vosir",username: "Ayubjanov",tel: 330059036}}/>
        </ul>
      </div>
    </section>
    <section className="sold">
      <div className="conteyner">
        <h2 className="sold_title">SOLD</h2>
        <ul className="sold__list">
          {/* {
            Array.map((el) => <HomeSold sold={el}/>)
          } */}
          <HomeSold/>
        </ul>
      </div>
    </section>
  </main>)
}

export default Home
