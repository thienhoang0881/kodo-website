import React, { Component } from 'react'
import ProfileCardItem from './profile-card-item'
const profiles = [
  {
    image: './assets/images/photos/team/1.jpg',
    name: 'Chi Tran',
    skills: 'FullStack/DevOps',
    description: 'I’m a Lead Software Engineer. My strengths are in building high quality UI coupled with dependable server-side business logic to produce solid applications.'
  },
  {
    image: 'assets/images/photos/team/6.jpg',
    name: 'Thu Pham',
    skills: 'UI/UX Designer',
    description: 'UX/UI Mobile design. Best practies. Best solutions. Best usability. Prototyping. Its all about me.'
  },
  {
    image: 'assets/images/photos/team/2.jpg',
    name: 'Tuyen Cao',
    skills: 'FullStack Developer',
    description: 'I have more than 8 years experience in software architecture and development. I have strong skills in Elixir, PHP.'
  },
  {
    image: 'assets/images/photos/team/3.jpg',
    name: 'Trung Cao',
    skills: 'Mobile Developer',
    description: 'I am a very enthusiastic React Native developer. Always in a good mood and happy to work on your project.'
  },
  {
    image: 'assets/images/photos/team/4.jpg',
    name: 'Phan Giam',
    skills: 'React Native Developer',
    description: 'I am React Native developer. I have a valuable experience is most famous JavaScript frameworks.'
  },
  {
    image: 'assets/images/photos/team/5.jpg',
    name: 'Trong Nguyen',
    skills: 'FullStack Developer',
    description: 'I am a FullStack Developer. My primary skill set includes React/React Native/Redux/Mobx and Nodejs'
  },

]
class ProfileCards extends Component {
  render() {
    return (
      <section className="section pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Our Team</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>We are happy to be a small team as it allows us to take a personable approach to every client and project we help</p>
              </div>
            </div>
          </div>
          <div className="row">
            {this.showProfileCardItems()}
          </div>
        </div>
      </section>
    )
  }
  showProfileCardItems = () => {
    return profiles.map((profile, index) => (
      <ProfileCardItem
        key={index}
        image={profile.image}
        name={profile.name}
        skills={profile.skills}
        description={profile.description}
      />
    ))
  }
}

export default ProfileCards
