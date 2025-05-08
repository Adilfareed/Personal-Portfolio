// import { useGlobalContext } from "../context/GlobalContext";
import "./About.css";
import { Timeline } from "./Timeline";
import "../footer/Footer.css";
export function About() {
  // const { lightThemeGlobal } = useGlobalContext();

  const openSocial = (socialLink: string) => {
    window.open(socialLink);
  };

  return (
    <div id="about" className="about-page flex">
      <div className="screen-max flex">
        <div className="about-page-container">
          {/* Section one - short description */}
          <div className="about-section-one">
            {/* Multiple about me titles */}
            <div className="about-title-container">
              <div className="about-title about-title-other ">
                About Me<span> .</span>
              </div>
              <div className="about-title ">
                About Me<span> .</span>
              </div>
              <div className="about-title about-title-other ">
                About Me<span> .</span>
              </div>
              <div className="about-title about-title-other ">
                About Me<span> .</span>
              </div>
            </div>

            <div className="about-body-container">
              <div className="about-body">
                Hey! I'm <span>Adil Fareed</span>, a MERN Stack Developer.
                I enjoy creating things and have a passion for technology and design,
                 from engineering to UI/UX. I specialize in building user-friendly websites and apps,
                leveraging the MERN stack to craft seamless digital experiences and innovative solutions.
                <br></br>
                <br></br>I am based in Karachi , Pakistan - currently working as a
                MERN stack Developer.
                <span
                  className="about-body-link"
                  onClick={() => {
                    openSocial("https://hived.space");
                  }}
                >
                  Hived
                </span>
                .<br></br>
                <br></br>
                Feel free to contact me by{" "}
                <a
                  className="about-body-link"
                  href="mailto:adilkhan56888@gmail.com"
                >
                  email
                </a>{" "}
                or check out my work on{" "}
                <span
                  className="about-body-link"
                  onClick={() => {
                    openSocial("https://github.com/adilfareed");
                  }}
                >
                  GitHub
                </span>
                .

                
              </div>
              <div className="footer-socials flex-c">
              <div onClick={() => openSocial("https://github.com/adilfareed")}>
                <i className="fa-brands fa-2xl fa-github hover-target"></i>
              </div>
              <div
                onClick={() =>
                  openSocial("https://www.linkedin.com/in/adil-fareed/")
                }
              >
                <i className="fa-brands fa-2xl fa-linkedin hover-target"></i>
              </div>
              <div onClick={() => openSocial("https://www.instagram.com/adi_fareed1/")}>
                <i className="fa-brands fa-2xl fa-instagram hover-target"></i>
              </div>
              <div onClick={() => openSocial("https://www.linkedin.com/in/adil-fareed/")}>
                <i className="fa-brands fa-2xl fa-twitter hover-target"></i>
              </div>
            </div>
              {/* <div className="about-me-pic"> */}
              <img
                className="about-me-pic"
                src={process.env.PUBLIC_URL + "/assets/profile.png"}
                alt="aboutMyPic"
              />
              {/* </div> */}
            </div>
          </div>

          {/* Section two - timeline */}
        
        </div>
      </div>
    </div>
  );
}
