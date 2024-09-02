import {servicesLists} from "../../utils/servicesLists"
export default function Services() {
  return (
    <div className="flex antialiased justify-between gap-16 mt-6">
      {servicesLists.map((feature) => (
        <div key={feature.id} className="uppercase h-[250px] text-white text-2xl shadow-lg shadow-gray-500 w-full bg-[#7087E4] rounded-lg flex justify-center pt-16">
         {feature.title}
        </div>
      ))}
    </div>
  );
}