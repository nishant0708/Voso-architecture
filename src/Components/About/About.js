"use client";
import React from "react";
import style from "@/Components/theme7.module.css";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={style.about_main}>
      <div className={style.about_image}>
        <Image
          src="/Assets/about.jpeg"
          alt="Award Winning Architecture"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/Assets/about.jpeg";
          }}
        />
        <div className={style.award_text}>
          <p>Best Choices Award</p>
          <p>AWARD WON IN 2025</p>
        </div>
      </div>
      <div className={style.about_content}>
        <h5>@COMPANY NAME</h5>
        <h1>About Us</h1>
        <p>
          With buildings that are landmarks not only in design but in environmental
          responsibility. These projects highlight innovative uses of renewable
          materials and technologies that reduce ecological footprints.
        </p>
        <p>
          Welcome to Arokt, where the future of architecture intertwines with
          sustainability to create transformative spaces. Founded with a vision to
          revolutionize the architectural landscape.
        </p>
        <button className={style.book_appointment_button}>Book Appointment</button>
      </div>
    </div>
  );
};

export default AboutUs;
