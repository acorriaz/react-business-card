import EmailIcon from './../assets/icon/Mail.svg'
import LinkedInIcon from './../assets/icon/linkedin.svg'

function MainContent() {
  return (<main className={"--main"}>
    <div className={"--main-contact"}>
      <h1 className={"--main-contact_name"}>Laura Smith</h1>
      <h3 className={"--main-contact_job"}>Frontend Developer</h3>
      <p className={"--main-contact_text"}>laurasmith.website</p>
    </div>
    <div className={"--main-button"}>
      <button className={"--main-button_email"}><img src={EmailIcon}/>Email</button>
      <button className={"--main-button_linkedin"}><img src={LinkedInIcon}/>LinkedIn</button>
    </div>
    <div className={"--main-desc"}>
      <div className={"--main-desc-about"}>
        <h2 className={"--main-desc-about_header"}>About</h2>
        <p className={"--main-desc-about_text"}>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and best practices, and am always looking
          for new things to learn.
        </p>
      </div>
      <div className={"--main-desc-interest"}>
        <h2 className={"--main-desc-interest_header"}>Interests</h2>
        <p className={"--main-desc-interest_text"}>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture
          ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  </main>)
}

export default MainContent