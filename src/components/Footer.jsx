import React, {useState, useEffect} from "react";
import '../styles/Footer.css'

function Footer() {
  const [user, setUser] = useState("")
  const [city, setCity] = useState("")

  const getRandomUser = async () => {
    await fetch("https://randomuser.me/api/", {
      method: "GET"
    }).then(res => res.json())
    .then(res => {
      const name = res.results[0].name
      const location = `${res.results[0].location.state}, ${res.results[0].location.country}`
      const userString = Object.values(name).join(" ")
      setUser(userString)
      setCity(location)
    })
  }

  useEffect(() => {
    getRandomUser()
  }, [])

  return (
    <footer>
      <p>{user ? `Today you are ${user} from ${city}` : "Loading your new identity"}</p>
    </footer>
  );
}

export default Footer;
