import Features from "@/components/Feature";
import Home from "@/components/Home";
import Items from "@/components/Items";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Homes() {

  return (
    <div className="">
      <Home></Home>
      <Items></Items>
      <Features></Features>
      <Testimonials></Testimonials>
      <PromoBanner></PromoBanner>
    </div>
  );
}
