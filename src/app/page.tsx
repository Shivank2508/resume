
const cardData = [
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "Modern Web Apps",
    description: "Building dynamic web apps with React.js and Next.js for optimal performance."
  },
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "Responsive UI/UX",
    description: "Designing mobile-friendly interfaces with TypeScript, Bootstrap, and custom CSS."
  },
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "Advanced Components",
    description: "Creating reusable components from scratch for scalable front-end architecture."
  },
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "Performance Optimization",
    description: "Enhancing app speed with code-splitting, lazy loading, and SSR."
  },
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "State Management",
    description: "Managing state with Redux, Context API, or React Query."
  },
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "API Integration",
    description: "Integrating REST APIs for efficient data handling and connectivity."
  },
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "Code Quality",
    description: "Maintaining code quality using ESLint, Prettier, and TypeScript."
  },
  {
    imgSrc: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg",
    heading: "Deployment & Monitoring",
    description: "Deploying and monitoring apps using Vercel, Netlify, or traditional servers."
  }
];
export default function Home() {
  return (
    <>
      <div className="p-4  d-flex flex-column gap-3">
        <div className="fs-2 fw-semibold  ">
          About
        </div>
        <hr className="border border-warning border-3 rounded-pill opacity-50 w-10 " />
        <div>
          <p className="pb-2 fs-6 fw-normal" style={{ color: "hsl(0, 0%, 84%)" }}>
            I am a skilled React.js and Next.js developer with a passion for building dynamic, high-performance web applications.
            I specialize in creating responsive, user-friendly interfaces using TypeScript, Bootstrap, and custom CSS.<br />
            With experience in state management (Redux, Context API, React Query) and server-side rendering, I deliver scalable and maintainable solutions.
            I thrive in agile environments, prioritizing clean, reusable code with tools like ESLint and Prettier.
            My focus is on crafting applications that are both functional and offer exceptional user experiences.
          </p>

        </div>
        <div className="pt-8">
          <div className="fs-4 fw-semibold ">What I'm doing</div>

          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-md-6 mt-6" key={index}>
                <div className="" style={{
                  background: 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
                  padding: '30px',
                  borderRadius: '10px',
                }}>
                  <div className="d-flex align-items-start gap-3">
                    <img src={card.imgSrc} style={{ fontSize: '50px' }} alt={card.heading} />
                    <div>
                      <h5 className="fs-5 fw-semibold">{card.heading}</h5>
                      <p className="text-secondary mt-2">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>

      </div>

    </>
  );
}
