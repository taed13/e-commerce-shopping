import React from "react";
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ProfileCard = () => {
  return (
    <>
      <div className="profile_card">
        <div className="card__img__profile">
          <img
            src="https://i.pinimg.com/736x/d6/a0/1f/d6a01f07a283fdf690f29edbdef7c458.jpg"
            alt=""
            className="img__style"
          />
        </div>
        <h2 className="h2__profile">Tien Dat</h2>
        <p className="p__profile">Fullstack Developer</p>
        <div className="card__social">
          <Link to="https://www.facebook.com/taed13" className="link__style">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            to="https://www.instagram.com/taed1011_/"
            className="link__style"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="https://github.com/taed13" className="link__style">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
        <button className="button__profile">Contact Me</button>
      </div>
    </>
  );
};

export default ProfileCard;
