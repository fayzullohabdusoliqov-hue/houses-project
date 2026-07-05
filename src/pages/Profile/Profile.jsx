import React, { useEffect, useState } from 'react'
import "./Profile.css"
import Loading from '../../components/Loading/Loading'

function Profile() {
  const [profile, setProfile] = useState({image: "", name: "", email: "vositayubjano'v@gmail.com", password: "vosit1976"})
  const [profileObject, setProfileObject] = useState({})
  const [loading, setLoading] = useState(false)
  const localId = localStorage.getItem("localId")
  const token = localStorage.getItem("token")

  async function getProfile(){
    try{
      setLoading(true)
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/profile/${localId}.json?auth=${token}`)
      const data = await res.json()
      if(data){
        const array = Object.values(data)
        setProfileObject(array[0])
      }else{
        setProfileObject(data)
      }
    }catch(err){
      console.log(err.message)
    }finally{
      setLoading(false)
    }
  }
  async function postProfile(){
    try{
      const res = await fetch(`https://houses-project-1e584-default-rtdb.firebaseio.com/profile/${localId}.json?auth=${token}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
      })
      const data = await res.json()
      console.log(data)
    }catch(err){
      console.log(err.message)
    }finally{
      window.location.reload()
    }
  }

  function imageString(image) {
    const reader = new FileReader()

    reader.readAsDataURL(image)
    reader.onload = () => {
      setProfile({ ...profile, image: reader.result })
    }
  }
  useEffect(() => {
    getProfile()
  },[])

  return (<main className='site__main'>
    {
      loading? <Loading/> : 
        profileObject? <section className="profile">
          <div className="conteyner profile__wraper">
            <div className="profile__content hero">
              <img src={profileObject?.image} alt="" className="hero_img" />
              <h2 className="hero_title">{profileObject?.name}</h2>
            </div>
            <div className="profile__content">
              <h3 className="profile_subtitle">Email:</h3>
              <p className="profile_text">{profileObject?.email}</p>
            </div>
            <div className="profile__content">
              <h3 className="profile_subtitle">Password:</h3>
              <p className="profile_text">{profileObject?.password}</p>
            </div>
          </div>
        </section> : <form className='profile__form' onSubmit={(evt) => {
          evt.preventDefault()
          postProfile()
        }}>
          <h2 className="profile_title">PROFILE YARATISH</h2>
          <div className="profile__content">
            <label htmlFor="image" className="profile_label">RASMINGIZNI KIRITING:</label>
            <input id='image' type="file" className="profile_input" onChange={(evt) => {
              imageString(evt.target.files[0])
            }}/>
          </div>
          <div className="profile__content">
            <label htmlFor="name" className="profile_label">ISMINGIZNI KIRITING:</label>
            <input id='name' type="text" className="profile_input" onChange={(evt) => {
              setProfile({...profile, name: evt.target.value})
            }}/>
          </div>
          <button className="profile_btn">Jo'natish</button>
        </form>
    }
  </main>)
}

export default Profile
