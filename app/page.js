import Maintenance from "@/components/Maintenance";

export const metadata = {
  title: "Adesa HQ | Under Maintenance",
  description:
    "Adesa HQ is currently undergoing scheduled maintenance. We will be back shortly.",
  alternates: {
    canonical: "https://www.adesahq.com/",
  },
};

export default function Home() {
  return <Maintenance />;
}
