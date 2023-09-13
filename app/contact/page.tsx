import { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Rx-Expert Contact",
  description: "Rxpert contact",
};
export default function Contact() {
  return (
    <div>
      <Header title="Contact Us" label="contact" />
    </div>
  );
}
