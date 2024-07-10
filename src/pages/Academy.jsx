import AcademyHeader from "../assets/components/AcademyHeader";
import AcademyInfo from "../assets/components/AcademyInfo";
import Courses from "../assets/components/Courses";
import FutureCourses from "../assets/components/FutureCourses";
import Navigation from "../assets/components/Navigation";

function Academy() {
  return (
    <div>
      <Navigation />
      <AcademyHeader />

      <Courses />
      <AcademyInfo />
      <FutureCourses />
    </div>
  );
}

export default Academy;
