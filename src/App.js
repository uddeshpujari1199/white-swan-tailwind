import "./App.css";
import SideBar from "./Component/SideBar";
import NavBar from "./Component/NavBar";
import Card from "./Component/Card";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import MicIcon from "@mui/icons-material/Mic";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SchoolIcon from '@mui/icons-material/School';


function App() {
  return (
    <div className="flex ">
      <div className={`w-60 h-screen bg-dark-purpule sidnav `}>
        <SideBar />
      </div>
      <div
        className={` text-x font-semibol  flex-1 h-screen bg-[url('https://s3-alpha-sig.figma.com/img/c26d/22bb/e8e7d80b697ca3c2b11a75520c964a41?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXlzQZOW16d9dFfv8ediGYMiFPfSE5qu0AA27~yxPjEzjA489jM5AuDKAdNpECyjT8LI3oO4fLXmXNP0-KCS-LjrkIsP52jt~TDBVO4psJcGRtuz1bR2FEHOQGWjgUM245Pp7o8WoOd91e2FnL9OkyfgSYevaCUzO8hz7rccEstxMH7TN4eZRSPD5llzgTNpj148FidZjdtGYYeUQx2eVvUclg986DbLfwpM2Pkkv4XBaEJjaVLCFCoo6vh-GVVO3ZdPaVabAj~vhO1NmofXS0RDuPSxh~I7GLYJaMTM573reM-vd51EXclhTGFbeWgLny1uAyBYjMc8Iw75Jbhv9Q__')] bg-no-repeat bg-cover `}
      >
        <div className="bg-dark-purpule p-3">
          <NavBar />
        </div>
        <div className="main-sec  align-middle text-center flex flex-col gap-4 my-4 ">
          <h1 className="heding-text text-xl text-gradient-to-r  from-violet-500 to-fuchsia-500">
            What can I do for you today?
          </h1>
          <div className="card-align flex align-middle justify-center gap-3 text-s">
            <Card
              color="blue"
              textColor="white"
              boarderRadius="20% 0 0 0"
              text1="Ask Me"
              text2="Anything."
              subtext=""
              icon={<KeyboardArrowDownIcon/>}
            />
            <Card
              color="white"
              textColor="black"
              boarderRadius="0 0 0 0"
              text1="Ask Me about"
              text2="Education"
              subtext="specialization"
              icon={<SchoolIcon/>}
            />
            <Card
              color="white"
              textColor="black"
              boarderRadius="0 0 0 0"
              text1="Need advice on"
              text2="Medication"
              subtext="specialization"
              icon={<MedicalServicesIcon/>}
            />
          </div>
          <div>
            <div className="h-5 input-box border-solid border-2  border-black ... ">
              {/* <div className="box"> */}
              <input
                name="text"
                className="mt-5 xl:bg-transparent h-5 p-5 "
                id="text-area"
                placeholder="Enter Your Queries"
              />
              <div className="input-icon flex gap-3">
                <AddPhotoAlternateIcon />
                <MicIcon />
                <ArrowCircleRightIcon className="arrow-icon" />
              </div>
              {/* </div> */}
            </div>
            <div className="lower-text">
              <p>Try to search this-</p>
              <div className="lower-text-sub1  text-center flex  justify-center gap-2">
                <p className="sub2 border-solid border-1 p-1 mt-3 mb-3 border-black ...">
                  How do I cook pasta al dente?
                </p>
                <p className="sub2 border-solid border-1 p-1 mt-3 mb-3 border-black ...">
                  The founding story of McDonalds
                </p>
              </div>
              <p className="sub1">What are the latest trend in fashion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
