import Classes from "./Classes/Classes";
import Contact from "./Contact/Contact";
import Events from "./Events/Events";
import Give from "./Give/Give";
import Header from "./Header/Header";
import Plans from "./Plans/Plans";
import Progress from "../Progress/Progress";
import UpBtn from "../UpBtn/UpBtn";

export default function Home() {
  return (
    <>
      <Header />
      <Give />
      <Classes />
      <Plans />
      <Events />
      <Contact />
      <Progress />
      <UpBtn />
    </>
  );
}
