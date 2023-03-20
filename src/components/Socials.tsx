import React from "react";
import { Nav } from "react-bootstrap";
import { SocialURL } from "../schemas/shared";
import { ReactComponent as FacebookIcon } from "./../icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "./../icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "./../icons/twitter.svg";
import { ReactComponent as YouTubeIcon } from "./../icons/youtube.svg";

type SocialsProps = {
  socialUrls: SocialURL[];
}

function Socials(props: SocialsProps) {
  return (
    <>
      {props.socialUrls.map((socialUrl, index) => (
        <Nav.Item key={index}>
          <Nav.Link
            className="link-light"
            href={socialUrl.URL}
            target="_blank"
          >
            <div className="icon">
              {(() => {
                switch (socialUrl.socialNetwork) {
                  case "Facebook":
                    return <FacebookIcon width="24" />;
                  case "Instagram":
                    return <InstagramIcon width="24" />;
                  case "Twitter":
                    return <TwitterIcon width="24" />;
                  case "YouTube":
                    return <YouTubeIcon width="24" />;
                }
              })()}
            </div>
          </Nav.Link>
        </Nav.Item>
      ))}
    </>
  );
}

export default Socials;
