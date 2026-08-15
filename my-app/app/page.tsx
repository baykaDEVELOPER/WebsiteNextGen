import Image from "next/image";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Body2 from "@/components/Body2";
import Product from "@/components/Product";
import Feet from "@/components/Feet";
export default function Home() {
  return (
    <>
      <Header />
      <Body />
      <Body2 />
      <Product />
      <Feet />
    </>
  );
}
