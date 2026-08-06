import {
  FaUserTie,
  FaBriefcase,
  FaHandshake,
  FaUserShield,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserTie size={35} />,
    title: "Worker Registration",
    description:
      "Create your professional profile, add skills, experience and apply for jobs.",
  },
  {
    icon: <FaBriefcase size={35} />,
    title: "Job Posting",
    description:
      "Employers can post job vacancies and hire skilled workers easily.",
  },
  {
    icon: <FaHandshake size={35} />,
    title: "Consultancy Support",
    description:
      "Consultancies manage recruitment between workers and employers.",
  },
  {
    icon: <FaUserShield size={35} />,
    title: "Verified Profiles",
    description:
      "Every profile is verified to ensure trust and security.",
  },
  {
    icon: <FaFileAlt size={35} />,
    title: "Resume Management",
    description:
      "Upload and manage resumes and important documents securely.",
  },
  {
    icon: <FaSearch size={35} />,
    title: "Smart Job Search",
    description:
      "Search jobs based on location, skills and experience.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl font-bold mt-3 text-gray-900">
            Everything You Need for Recruitment
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our platform simplifies hiring by connecting workers,
            employers and consultancies through one secure ecosystem.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;