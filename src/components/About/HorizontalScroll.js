import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ahmd from "../../assets/Ahmedabad-city.jpg";
import iitgoa from "../../assets/iitgoa.jpeg";
import dsa from "../../assets/dsadev.jpeg";
import skills from "../../assets/skills.png";
import experience from "../../assets/exp.png";
import github from "../../assets/git.png";
import myself from "../../assets/Utsav_Shah.jpg";
import poetry from "../../assets/poetry.avif";

const HorizontalScroll = () => {
  return (
    <div>
      <div style={{ height: "30vh", border : "2px solid blue", marginTop : "200px" }}></div>
      <HorizontalScrollCarousel />
      <div style={{ height: "30vh" }}></div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} style={{ position: "relative", height: "200vh", border: "10px solid red", zIndex : 1 }}>
      <div
        style={{
          position: "sticky",
          top: "20%",
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <motion.div style={{ x, display: "flex", gap: 50 }}>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      style={{
        position: "relative",
        height: "450px",
        width: "450px",
        overflow: "hidden",
        backgroundColor: "#e5e7eb",
        border : "2px solid red"
      }}
      className="group"
    >
      <div
        style={{
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transition: "transform 0.3s",
        }}
        className="group-hover:scale-110"
      ></div>
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    img: ahmd,
    title: "Title 1",
    id: 1,
  },
  {
    img: myself,
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    img: iitgoa,
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    img: dsa,
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    img: skills,
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    img: experience,
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    img: github,
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    img: poetry,
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
