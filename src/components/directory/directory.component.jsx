import { DirectoryContainer } from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";

import cpu from "../../assets/cpu.jpg";
import gpu from "../../assets/gpu.jpg";
import mobo from "../../assets/mobo.jpg";
import amd from "../../assets/amd.jpg";
import intel from "../../assets/intel.jpg";
import nvidia from "../../assets/nvidia.jpg";

const categories = [
  {
    id: 1,
    title: "CPUs",
    imageUrl: cpu,
    route: "shop/hats"
  },
  {
    id: 2,
    title: "GPUs",
    imageUrl: gpu,
    route: "shop/jackets"
  },
  {
    id: 3,
    title: "Motherboards",
    imageUrl: mobo,
    route: "shop/sneakers"
  },
  {
    id: 4,
    title: "AMD",
    imageUrl: amd,
    route: "shop/womens"
  },
  {
    id: 5,
    title: "Intel",
    imageUrl: intel,
    route: "shop/mens"
  },
  {
    id: 6,
    title: "Nvidia",
    imageUrl: nvidia,
    route: ""
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
