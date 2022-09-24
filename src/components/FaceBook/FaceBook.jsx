import React, { Component } from 'react'
import profiles from '../../data/berlin.json'
import './Facebook.css'

const countries = Array.from(
  new Set(profiles.map(profile => profile.country))
)

class FaceBook extends Component {
  state = {
    country: null
  }

  onCountryClick = (event) => {
    const value = event.target.value

    this.setState({ country: value || null })
  }

  render() {
    const { country: countryState } = this.state

    const profileToRender = countryState
      ? profiles.filter(profile => profile.country === countryState)
      : profiles

    return (
      <div className="Facebook">
        <button className={!countryState ? 'selected' : ''}>All</button>

        {countries.map((country, i) => (
          <button
            value={country} key={i} onClick={this.onCountryClick}
            className={countryState === country ? 'selected' : ''}
          >
            {country}
          </button>
        ))}

        {profileToRender.map((profile, i) => (
          <div key={i} className={`Facebook__item ${profile.country === countryState ? 'selected' : ''}`}>
            <div>
              <img src={profile.img} alt="profile" />
            </div>
            <div>
              <p>
                <strong>First name:</strong> {profile.firstName}
              </p>
              <p>
                <strong>Last name:</strong> {profile.lastName}
              </p>
              <p>
                <strong>Country:</strong> {profile.country}
              </p>
              <p>
                <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default FaceBook