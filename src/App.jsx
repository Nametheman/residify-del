import { useState } from "react";
import logo from "./assets/images/logo.svg";
import seeya from "./assets/images/bye.gif";
import "./App.css";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [form, setForm] = useState({ email: "", reason: "" });
  const [loading, setloading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    setTimeout(() => {
      setloading(false);
      setSubmitted(true);
    }, 3000);
  };
  return (
    <section className="w-sreen">
      <nav className="px-[1em] py-[1em] lg:px-[3rem]">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] cursor-pointer"
          onClick={() => {
            setSubmitted(false);
          }}
        />
      </nav>
      {!submitted ? (
        <>
          <section className="flex flex-col items-center min-h-screen w-screen mt-[3rem]">
            <div className="mt-[0.2rem] w-full">
              <h3 className="text-3xl text-center text-[#484848]">
                Why are you leaving us?
              </h3>
              <form
                action="#"
                className="mt-[4rem] px-[1rem] md:w-[430px] md:mx-auto"
                onSubmit={handleFormSubmit}
              >
                <div className="flex flex-col gap-[0.8rem]">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm((prev) => {
                        return { ...prev, email: e.target.value };
                      });
                    }}
                    placeholder="Please enter your email"
                    className="border w-full h-[50px] px-[1em] outline-none active:border-[#002DCC] focus:border-[#002DCC] rounded-md"
                  />
                </div>
                <div className="flex flex-col mt-[2rem] gap-[0.8rem]">
                  <label htmlFor="email">Why are you leaving?</label>
                  <textarea
                    type="email"
                    name="email"
                    id="email"
                    value={form.reason}
                    onChange={(e) => {
                      setForm((prev) => {
                        return { ...prev, reason: e.target.value };
                      });
                    }}
                    placeholder="Tell us why you are leaving us"
                    className="border w-full h-[200px] px-[1em] py-4 outline-none active:border-[#002DCC] focus:border-[#002DCC] rounded-md resize-none"
                  />
                </div>
                <button
                  disabled={!form.email}
                  className="mt-[2rem] w-full h-[50px] bg-[#002DCC] disabled:bg-[#474747] text-white rounded-lg"
                >
                  {loading ? (
                    <TailSpin
                      height="30"
                      width="30"
                      color="#ffffff"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    "See ya later!"
                  )}{" "}
                </button>
              </form>
            </div>
          </section>
        </>
      ) : (
        <>
          {" "}
          <section className="flex justify-center flex-col min-h-screen">
            <h3 className="text-[4rem] text-center text-[#002DCC] thankYou font-extrabold">
              <div className="waviy">
                <span>T</span>
                <span>H</span>
                <span>A</span>
                <span>N</span>
                <span>K</span>
                <br />
                <span>Y</span>
                <span>O</span>
                <span>U</span>
              </div>{" "}
            </h3>
          </section>
        </>
      )}
    </section>
  );
}

export default App;
