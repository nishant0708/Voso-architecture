"use client";
import React from "react";
import style from "@/Components/theme7.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={style.banner_main}>
      <div className={style.banner_image}>
        <Image
          src="/Assets/bannerimg.jpeg"
          alt="Dream Home"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/Assets/bannerimg.jpeg";
          }}
        />
      </div>
      <div className={style.overlay}></div>
      <div className={style.banner_content}>
        <h5>WELCOME TO AROCKT</h5>
        <h1>
          Discover Your <br /> Dream <span>Home</span>
        </h1>
        <p>
          where the future of architecture intertwines with sustainability to
          create transformative spaces. We are pioneers in crafting environments
          that enhance human interactions and respect our planet.
        </p>
        <button className={style.get_started_button}>Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
