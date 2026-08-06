import { FaUsers, FaBuilding, FaBriefcase, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={35} />,
    number: "10,000+",
    title: "Registered Workers",
  },
  {
    icon: <FaBuilding size={35} />,
    number: "500+",
    title: "Trusted Employers",
  },
  {
    icon: <FaBriefcase size={35} />,
    number: "1,200+",
    title: "Jobs Posted",
  },
  {
    icon: <FaAward size={35} />,
    number: "98%",
    title: "Successful Placements",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted Across India
          </h2>

          <p className="text-gray-500 mt-3">
            Thousands of workers and employers use our platform every day.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;