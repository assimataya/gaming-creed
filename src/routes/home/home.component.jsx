// import { Outlet } from "react-router-dom";
import cpu from "../../assets/cpu.jpg";
import gpu from "../../assets/gpu.jpg";
import mobo from "../../assets/mobo.jpg";
import amd from "../../assets/amd.jpg";
import intel from "../../assets/intel.jpg";
import nvidia from "../../assets/nvidia.jpg";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "CPUs",
      imageUrl: cpu,
    },
    {
      id: 2,
      title: "GPUs",
      imageUrl: gpu,
    },
    {
      id: 3,
      title: "Motherboards",
      imageUrl: mobo,
    },
    {
      id: 4,
      title: "AMD",
      imageUrl: amd,
    },
    {
      id: 5,
      title: "Intel",
      imageUrl: intel,
    },
    {
      id: 6,
      title: "Nvidia",
      imageUrl: nvidia,
    },
  ];

  return (
    <div>
      {/* <Outlet /> */}
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
