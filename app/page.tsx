"use client";
import { gsap } from "gsap";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { dotGothic16 } from "@/utils/fonts";
import { ProjectsCard, ShowMore, SkillsCard, VideoPlayer } from "@/components";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const handleDownload = () => {
    const pdfUrl = "/daniel-adama-resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "daniel-adama-resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
    } else if (!isOpen && modalRef.current) {
      modalRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const links = document.querySelectorAll("nav ul a");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href") as string;
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: targetId, offsetY: 70 },
        });
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href") as string;
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetId, offsetY: 70 },
          });
        });
      });
    };
  }, []);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <main className="w-full text-black overflow-hidden bg-white h-full ">
      <section
        id="section1"
        className="w-full flex px-4 relative z-50 md:px-8 items-center justify-between"
      >
        <h1 className="text-[36px] font-bold">dan.</h1>

        <nav className="w-full h-full fixed z-50 hidden md:flex items-center justify-center ">
          <ul className="flex flex-row-reverse md:fixed relative px-4  py-1 bg-black text-white  font-thin gap-5">
            <a href="#section5">
              <li className=" hover:underline cursor-pointer ">contact</li>
            </a>

            <a href="#section4">
              <li className=" hover:underline cursor-pointer ">about me</li>
            </a>

            <a href="#section3">
              <li className=" hover:underline cursor-pointer ">projects</li>
            </a>

            <a href="#section2">
              <li className=" hover:underline cursor-pointer  ">cases</li>
            </a>

            <a href="#section1">
              <li className=" hover:underline cursor-pointer  ">home</li>
            </a>
          </ul>
        </nav>

        <div className="flex flex-col items-start">
          <button onClick={handleDownload} className="text-[18px]">
            checkout my cv 😎
          </button>
          <span className="w-[18px] h-[2px] bg-black border-solid border-black "></span>
        </div>
      </section>
      <nav className="w-full fixed h-full md:hidden flex bottom-8 z-40  items-end justify-center ">
        <ul className="flex flex-row-reverse md:fixed relative z-10 px-4 rounded-lg py-2 bg-black text-white  font-thin gap-5">
          <a href="#section5">
            <li className=" hover:underline cursor-pointer ">contact</li>
          </a>

          <a href="#section4">
            <li className=" hover:underline cursor-pointer ">about me</li>
          </a>

          <a href="#section3">
            <li className=" hover:underline cursor-pointer ">projects</li>
          </a>

          <a href="#section2">
            <li className=" hover:underline cursor-pointer  ">cases</li>
          </a>

          <a href="#section1">
            <li className=" hover:underline cursor-pointer  ">home</li>
          </a>
        </ul>
      </nav>
      <section className={`scroll-section-outer ${dotGothic16.className}`}>
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="scroll-section-inner border-y-4 border-black"
          >
            <div className="scroll-section">
              <h3>Artificial</h3>
            </div>
            <div className="scroll-section">
              <h3>Intelligence/Backend</h3>
            </div>

            <div className="scroll-section">
              <h3>Engineer</h3>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section2"
        className="second w-full px-5 md:px-5 md:py-[100px] "
      >
        <div className="flex md:flex-row flex-col w-full justify-between items-center">
          <div className="flex md:flex-row flex-col md:py-0 py-16 md:px-14 w-full md:w-fit ">
            <h1 className="font-extrabold text-[30px] md:[writing-mode:sideways-lr] ">
              amazing cases
            </h1>
            <span className="md:w-2 w-[80px] bg-black md:h-[80px] h-2 md:[writing-mode:sideways-lr]"></span>
          </div>

          <div className="w-full flex md:flex-row flex-col gap-8 md:px-3 justify-between">
            <div className="w-full flex-col flex gap-6">
              <h1 className="text-2xl uppercase font-semibold  ">Survprompt</h1>
              <p className="text-lg font-thin">
                Survprompt is an advanced surveillance system designed to
                enhance camera footage analysis and retrieval using
                state-of-the-art technologies. It provides a range of key
                features including footage and image retrieval using prompts,
                notifications and alerts for specific events, event predictions,
                and advanced analysis based on camera captures. Key features
                include:
              </p>

              <ul className="list-disc text-lg font-thin">
                <li>
                  Footage/Image Retrieval: Retrieve specific footage or images
                  using text prompts.
                </li>
                <li>
                  Notifications and Alerts: Receive notifications for specific
                  events, configured via prompts.
                </li>
                <li>
                  Event Predictions: Provides predictive insights based on
                  captured events.
                </li>
                <li>
                  Advanced Analysis: Analyzes camera footage to recognize
                  objects, track movements, and summarize scenes.
                </li>
              </ul>

              <div className="text-lg font-thin">
                <h1>Technologies Used:</h1>
                <ul>
                  <li>Kafka: For messaging and streaming data.</li>
                  <li>
                    Chroma DB: Vector database for storing embedded vision
                    records.
                  </li>
                  <li>
                    LLM (Large Language Model): Powers the conversational
                    interface.
                  </li>
                  <li>
                    NFS (Network File System): For file storage and sharing.
                  </li>
                  <li>
                    Embeddings: Converts vision records into searchable vectors.
                  </li>
                  <li>
                    Kubernetes: For container orchestration and management.
                  </li>
                  <li>Flask: Web framework for the API.</li>
                  <li>OpenCV: Image processing library.</li>
                  <li>
                    YOLO (You Only Look Once): Object detection algorithm.
                  </li>
                  <li>
                    RunPod Serverless: Serverless GPU infrastructure for
                    scalable processing.
                  </li>
                </ul>

                <p>
                  Survprompt combines cutting-edge technologies to offer a
                  robust solution for managing and analyzing surveillance
                  footage, simplifying the process of retrieving, analyzing, and
                  acting on camera data.
                </p>
              </div>

              <div className="w-full flex gap-16">
                <div>
                  <button
                    className="btn w-fit px-6 py-4 rounded-none text-black border border-black  bg-white hover:border-none ease-in hover:bg-slate-500 hover:text-white "
                    onClick={() => setIsOpen(true)}
                  >
                    Demo
                  </button>
                  <dialog id="my_modal_4" className="modal" ref={modalRef}>
                    <div className="modal-box bg-white w-11/12 max-w-5xl">
                      <h3 className="font-bold text-lg">
                        SurvPrompt Demo video
                      </h3>
                      <div className="w-full">{/* <VideoPlayer /> */}</div>
                      <div className="modal-action">
                        <button
                          className="btn text-white hover:"
                          onClick={() => setIsOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </dialog>
                </div>
                <a href="#" target="_blank">
                  <button className="btn w-fit px-6 py-4 rounded-none text-black border border-black  bg-white hover:border-none ease-in hover:bg-slate-500 hover:text-white ">
                    Live
                  </button>
                </a>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 ">
              <Image src="/surprompt1.jpg" alt="" width={500} height={200} />
              <Image src="/survprompt2.jpg" alt="" width={500} height={200} />
              <Image src="/survprompt3.jpg" alt="" width={500} height={200} />
            </div>
          </div>
        </div>
      </section>

      <section
        id="section3"
        className="third w-full h-full border-solid border-[#E7E7E7] border-b flex flex-col items-center  px-5 py-[150px] "
      >
        <div className="w-full">
          <div className="flex flex-col gap-1 items-end w-full">
            <h1 className="text-[30px] font-extrabold">personal projects</h1>
            <span className="w-[90px] h-2 bg-black"></span>
          </div>
          <div className="w-full py-20 md: px-6 grid gap-8 grid-cols-1 md:grid-cols-2 place-items-center justify-between">
            <ProjectsCard
              seeprojectlink="https://github.com/danielAdama/AI_Body_Decoder"
              img="/facereg.jpg"
              name="Realtime Face Recognition"
              tool1="Dlib"
              tool2="OpenCV"
              tool3="Imutils"
              descrp1="The system is capable of processing live video feeds to accurately recognize and label individuals in real-time, ensuring high accuracy and speed."
              descrp2="This project demonstrates expertise in computer vision, deep learning, and real-time data processing."
            />
            <ProjectsCard
              seeprojectlink="https://github.com/danielAdama/Hand_Sign_recognition"
              img="/handreg.jpg"
              name="AI Hand Gesture Recognition"
              tool1="Sklearn"
              tool2="OpenCV"
              tool3="Imutils"
              descrp1="Successfully completed a Hand Sign Recognition System capable of identifying gestures such as Cool, Peace, Hi, and One."
              descrp2="It demonstrates proficiency in gesture recognition algorithms, feature extraction, and pattern matching, ensuring high accuracy and responsiveness."
            />
            <ProjectsCard
              seeprojectlink="https://github.com/danielAdama/AI_Body_Decoder"
              img="/bodyreg.jpg"
              name="AI Body Decoder System"
              tool1="Sklearn"
              tool2="OpenCV"
              descrp1="Successfully built an Artificial Intelligence Body Decoder System to identify emotional and physical states such as Sad, Happy, Neutral, Wakanda, and Victorious."
              descrp2="This system utilizes advanced machine learning and computer vision techniques to analyze body language and facial expressions in real-time."
            />
            <ProjectsCard
              img="/analyser.jpg"
              name="AI-based Sentiment Analyser deployed using Flask "
              tool1="Dlib"
              tool2="Sklearn"
              tool3="Flask"
              descrp1="Completed and deployed an AI-based Sentiment Analyser on Heroku. The application takes a user’s review as input and then measures the attitude/sentiment of that user towards the aspect of a movie which can either be Positive or Negative."
              descrp2="This project demonstrates expertise in computer vision, deep learning, and real-time data processing."
            />
          </div>
        </div>
        <ShowMore />
      </section>

      <section
        id="section4"
        className="fourth py-20 px-4 md:px-32 w-full border-solid border-[#E7E7E7] border-b "
      >
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-1">
            <h1 className="text-[30px] font-extrabold ">about me</h1>
            <span className="w-[90px] h-2 bg-black"></span>
          </div>

          <div className="w-full flex md:flex-row flex-col items-center gap-16 justify-center h-fit py-16">
            <Image src="/avatar.png" alt="avatar" width={198} height={198} />
            <div className="md:w-[761px] flex flex-col gap-4 ">
              <h1 className="text-[30px]">Daniel Adama</h1>
              <p className="text-sm font-extralight">
                I am a Machine Learning Engineer with 3+ years of experience in
                Data Analytics and Computer Vision, proficient in Python and
                SQL. I excel in data preparation, model building and deployment,
                and evaluating algorithms to improve performance for regression,
                classification, gradient boosting, KNN, object detection, NLP,
                and recommender systems. Skilled in optimizing CNNs and
                employing deep learning methodologies, I am eager to apply my
                expertise to a challenging role in the machine and deep learning
                space.
              </p>
              <div className="flex w-fit gap-3 uppercase text-sm ">
                <a
                  target="_blank"
                  href="http://www.linkedin.com/in/danieladama"
                >
                  <p className="cursor-pointer">linkedin</p>
                </a>
                <a target="_blank" href="http://github.com/danielAdama">
                  <p className="cursor-pointer">github</p>
                </a>
                <a href="adamadaniel321@gmail.com" className="cursor-pointer">
                  <p>email</p>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-10">
            <SkillsCard
              img="/icons8-website-builder-64.svg"
              name="Tools and Languages"
              descrip="Python, SQLite, MySQL, Docker, Git, Linux, Jupyter Notebook, Heroku, Tensorflow, Deep Learning, Neural Networks (CNN). and others..."
            />
            <SkillsCard
              img="/icons8-website-builder-64.svg"
              name="Technical Skills"
              descrip="Regression(Linear/Logistic, Lasso and Ridge), Gradient Boosting, KNN, Data Manipulation, and Analysis, Python (Scikit-learn, Numpy, OpenCV, Mediapipe, Pytesseract, Matplotlib, Pyaudio, Seaborn, Deep Speech, Face recognition, Dlib.)"
            />
          </div>

          <div className="w-full flex md:flex-row flex-col items-start justify-center gap-12 py-10 md:py-16 ">
            <div className="md:w-[374px] w-full flex gap-4 p-4 border rounded-[10px]">
              <span className="h-full w-[2px] bg-[#D9D9D9]"></span>
              <div>
                <h1 className="font-extrabold ">Work Experience</h1>
                <ul className="text-sm font-extralight">
                  <li>Software Engineer </li>
                  <li>Machine Learning Developer</li>
                  <li>IoT Computer Vision Intern</li>
                  <li>Machine Learning Intern</li>
                  <li>Telecommunication Engineering Intern</li>
                </ul>
              </div>
            </div>

            <div className="md:w-[374px] flex gap-4 p-4 border rounded-[10px]">
              <span className="h-full w-[2px] bg-[#D9D9D9]"></span>
              <div>
                <h1 className="font-extrabold ">Education</h1>
                <ul className="text-sm font-extralight">
                  <li>
                    Bachelor of Engineering {`(B.E.)`} Information and
                    Communication Engineering
                  </li>
                  <li>Covenant University</li>
                </ul>
              </div>
            </div>

            <div className="md:w-[374px] flex gap-4 p-4 border rounded-[10px]">
              <span className="h-full w-[2px] bg-[#D9D9D9]"></span>
              <div>
                <h1 className="font-extrabold ">Certifications</h1>
                <ul className="text-sm font-extralight">
                  <li>Getting started with Docker (Simplilearn)</li>
                  <li>
                    Machine Learning Certification Course (Analytics Vidhya)
                  </li>
                  <li>Neural Networks and Deep Learning (Deeplearning.ai)</li>
                  <li>Data Science Course 2020 (365 Data Science)</li>
                  <li>OpenCV Basics - OpenCV101 (Pyimagesearch)</li>
                  <li>
                    Bounding Box Regression - Object Detection 202
                    (Pyimagesearch)
                  </li>
                  <li>
                    Fundamentals of Deep Learning Object Detection - Object
                    Detection 201 (Pyimagesearch)
                  </li>
                  <li>Figma, Adobe XD, Sketch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section5"
        className="fifth w-full py-28 flex flex-col items-center justify-center"
      >
        <div className="outer">
          <div className="inner">
            <div className="bg" />

            <div className="w-full items-center flex flex-col gap-2">
              <h1 className="text-[30px] font-extrabold ">contact me</h1>
              <span className="w-[90px] h-[7px] bg-black "></span>
            </div>

            <div className="w-full flex items-center justify-center gap-14 pb-24 pt-16 ">
              <Image
                className="cursor-pointer"
                src="/figma.svg"
                alt="figma"
                width={23.72}
                height={35.57}
              />
              <Image
                className="cursor-pointer"
                src="/linkedin.svg"
                alt="linkedin"
                width={35.57}
                height={35.57}
              />
              <Image
                className="cursor-pointer"
                src="/instagram.svg"
                alt="linkedin"
                width={35.57}
                height={35.57}
              />
              <Image
                className="cursor-pointer"
                src="/github.svg"
                alt="linkedin"
                width={35.57}
                height={35.57}
              />
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div
                onClick={handleDownload}
                className="w-fit flex flex-col cursor-pointer "
              >
                <p className="font-semibold text-lg  ">download my cv</p>
                <span className="w-[19px] h-[2px] bg-black"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-between px-4 items-center md:px-20 py-8">
        <h1 className="text-[36px] font-bold">dan.</h1>
        <p className="text-[12px] text-[#808080] font-light">
          design & coding by <span className="font-bold">me</span>
        </p>
      </div>
    </main>
  );
}
