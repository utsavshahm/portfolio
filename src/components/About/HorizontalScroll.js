import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ahmd from "../../assets/Ahmedabad-city.jpg";
import iitgoa2 from "../../assets/iitgoalogo.png";
import iitgoa from "../../assets/iitgoalogo2.webp";
import dsa from "../../assets/dsadev.jpeg";
import skills from "../../assets/skills.png";
import experience from "../../assets/exp.png";
import github from "../../assets/git.png";
import myself from "../../assets/Utsav_Shah.jpg";
import poetry from "../../assets/poetry.avif";

const HorizontalScroll = (props) => {

  return (
    <div>
      <div style={{ height: "15vh", marginTop : "75px" }}></div>
      <HorizontalScrollCarousel size={props.size} />
      <div style={{ height: "60vh", marginBottom : "125px" }}></div>
    </div>
  );
};

const HorizontalScrollCarousel = (props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
  const { size } = props;
  return (
    <section
      ref={targetRef}
      style={{ position: "relative", height: "200vh" }}
    >
      <div
        style={{
          position: "sticky",
          top: "20%",
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <motion.div style={{ x, display: "flex", gap: 100, zIndex : 1 }}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} size={size} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card , size}) => {
  return (
    <div
      style={{
        height: "65vh",
        width: size >= 550 ? `${card.width}vw` : `${card.widthModified + 5}vw`,
        // border: "1px solid grey",
        boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems : "center",
        zIndex: -1,
        flexDirection: "column",
        
      }}
    >
      <div
        key={card.id}
        style={{
          position: "relative",
          height: size >= 550 ? `${card.height}vh` : `${card.heightModified}vh`,
          width: size >= 550 ? `${card.width}vw` : `${card.widthModified}vw`,
          overflow: "hidden",
          backgroundColor: "transparent",
          boxShadow: `rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px`,
          borderRadius: "10px",
        }}
        className="group"
      >
        <div
          style={{
            backgroundImage: `url(${size >= 550 ? card.img : card?.smallimg})`,
            backgroundSize: card.isCover ? "cover" : "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "transparent",
            position: "absolute",
            inset: 1,
            zIndex: 1,
            transition: "transform 0.3s",
          }}
          className="group-hover:scale-110"
        ></div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: size >= 550 ? "1.4rem" : "1.2rem",
          marginTop: "50px",
          fontWeight: 300,
          color: `rgb(130, 132, 150)`,
          zIndex: 1,
          padding : "0px 10px",
          fontFamily: "Inter Tight, sans-serif",
        }}
      >
        {card.desc}{" "}
        {card.id === 7 && (
          <a
            href="https://github.com/utsavshahm"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "bold",
              position: "relative",
              background: "linear-gradient(to right, red, orange)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
              fontWeight : 400

            }}
          >
            utsavshahm
          </a>
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    img: ahmd,
    smallimg: ahmd,
    title: "Title 1",
    id: 1,
    height: 40,
    width: 90,
    heightModified: 25,
    widthModified: 85,
    isCover: true,
    desc: "Eeee halo! Yep, I'm Gujarati :)",
  },
  {
    img: myself,
    smallimg: myself,
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
    height: 50,
    width: 90,
    heightModified: 55,
    widthModified: 85,
    isCover: true,
    desc: "This is me!",
  },
  {
    img: iitgoa,
    smallimg: iitgoa2,
    title: "Title 4",
    id: 3,
    height: 40,
    width: 85,
    heightModified: 45,
    widthModified: 85,
    isCover: false,
    desc: "A place which has given me amazing friends and so many memories!",
  },
  {
    img: dsa,
    smallimg: dsa,
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 4,
    height: 50,
    width: 85,
    heightModified: 30,
    widthModified: 90,
    isCover: false,
    desc: `Zindagi isi me sulat gayi he ${"\u{1F643}"}`,
  },
  {
    img: skills,
    smallimg: skills,
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 5,
    height: 60,
    width: 65,
    heightModified: 50,
    widthModified: 90,
    isCover: false,
    desc: `Wanna hire me ${"\u{1F609}"}?`,
  },
  {
    img: experience,
    smallimg: experience,
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 6,
    height: 60,
    width: 65,
    heightModified: 50,
    widthModified: 90,
    isCover: false,
    desc: `Experience matters!`,
  },
  {
    img: github,
    smallimg: github,
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
    height: 60,
    width: 65,
    heightModified: 50,
    widthModified: 90,
    isCover: false,
    desc: `Find me on github : `,
  },
  {
    img: poetry,
    smallimg: poetry,
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 8,
    height: 50,
    width: 60,
    heightModified: 50,
    widthModified: 90,
    isCover: true,
    desc: `Arz kiya he... Website he, mushairya thodi he ${"\u{1F611}"}`,
  },
];
