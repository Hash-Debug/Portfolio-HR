import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);
    // await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 8
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#c770f0"
        },
        links: {
          color: "#2d1950",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 1000
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "star"
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }}
  />
  );
}

export default Particle;
