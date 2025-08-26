import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { useEffect, useState } from 'react';
import Avatar from '../components/Avatar';
import Status from '../components/Status';
import '../CSS/Home.css';
import {
  prismOutline,
  micCircleOutline,
  codeSlashOutline,
  musicalNotesOutline,
  bookOutline,
  peopleOutline,
  mapOutline
} from 'ionicons/icons';

const Home: React.FC = () => {
  const dayText = "Friday August 22";
  const yearText = "2025";
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Add this state near your other states
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal with project details
  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Projects data constructor
  const projectsData = [
    {
      name: 'Ongacord and Somacord',
      type: 'Personal Projects',
      date: 'June 2025 - Present',
      features: [
        { icon: codeSlashOutline, tooltip: 'App Development' },
        { icon: prismOutline, tooltip: 'Pepper\'s Ghost Illusion' },
        { icon: musicalNotesOutline, tooltip: 'Music Player' },
        { icon: micCircleOutline, tooltip: 'Speech Recognition' }
      ]
    },
    {
      name: 'Cephaline-Supabase',
      type: 'Northern Bukidnon State College',
      date: 'May 2025 - Present',
      features: [
        { icon: codeSlashOutline, tooltip: 'App Development' },
        { icon: bookOutline, tooltip: 'Coding Journal' }
      ]
    },
    {
      name: 'IT35-lab',
      type: 'Northern Bukidnon State College',
      date: 'April 2025 - Present',
      features: [
        { icon: codeSlashOutline, tooltip: 'App Development' },
        { icon: peopleOutline, tooltip: 'Social Media App' }
      ]
    },
    {
      name: 'IT24A',
      type: 'Northern Bukidnon State College',
      date: 'October 2024 - Present',
      features: [
        { icon: codeSlashOutline, tooltip: 'Web Development' },
        { icon: mapOutline, tooltip: 'Geolocation / Mapping' }
      ]
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: now.getHours() % 12,
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hourRotation = (time.hours * 30) + (time.minutes * 0.5);
  const minuteRotation = (time.minutes * 6) + (time.seconds * 0.1);
  const secondRotation = time.seconds * 6;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="header">Status Freelancing Student Projects</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen
        style={{
          '--background': '#23112b',
          '--ion-background-color': '#052c3b'
        }}
      >
        <div className="home-content-wrapper">
          {/* Left Sidebar / Label */}
          <div className="left-label">
            <h2>Greetings, I'm Arky Roel U. Balaga</h2>
            <p>Exploring web technologies is my addiction</p>
            <p>IT Student & Web Enthusiast</p>
            <p>Student at Northern Bukidnon State College with a passion for web technologies. Enjoys creating projects and occasional freelance work.</p>
          </div>

          {/* Main content */}
          <div className="main-content">
            {/* Elegant Pocket Watch */}
            <div className="pocket-watch">
              <div className="outer-ring">
                <div className="date-top">
                  {dayText.split("").map((char, i) => (
                    <span key={i} style={{ transform: `rotate(${i * 10 - 60}deg)` }}>{char}</span>
                  ))}
                </div>
                <div className="year-bottom">{yearText}</div>
              </div>

              <div className="watch-face">
                {/* Numbers 1–12 */}
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`number number${i + 1}`}>{i + 1}</div>
                ))}

                {/* Minute/second ticks */}
                {[...Array(60)].map((_, i) => (
                  <div
                    key={`tick-${i}`}
                    className="tick"
                    style={{ transform: `rotate(${i * 6}deg)` }}
                  />
                ))}

                {/* Clock hands */}
                <div className="hand hour" style={{ transform: `translate(-50%, -100%) rotate(${hourRotation}deg)` }}></div>
                <div className="hand minute" style={{ transform: `translate(-50%, -100%) rotate(${minuteRotation}deg)` }}></div>
                <div className="hand second" style={{ transform: `translate(-50%, -100%) rotate(${secondRotation}deg)` }}></div>
              </div>

            </div>

            {/* Avatar & Status */}
            <div className="avatar-status-container">
              <div className="avatar-wrapper">
                <Avatar />
                <div className="status-card-wrapper">
                  <Status />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <IonContent
          className="projects-section"
          style={{
            '--background': '#23112b',
            '--ion-background-color': '#23112b'
          }}
        >
          <div className="projects-container">
            <h2 className="projects-title">Projects</h2>
            <h3 className="projects-subtitle">Sockdrawer</h3>
            <div className="projects-list">
              {projectsData.map((project, index) => (
                <div key={index} className="project-item">
                  <div className="project-info">
                    <h3>{project.name}</h3>
                    <p className="project-type">{project.type}</p>
                    <p className="project-date">{project.date}</p>
                  </div>

                  {/* Render features if they exist */}
                  {project.features && project.features.length > 0 && (
                    <div className="coding-outlines">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="outline-item">
                          <div className="outline-icon">
                            <IonIcon icon={feature.icon} />
                            <span className="tooltip">{feature.tooltip}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </IonContent>

        {/* Footer */}
        <div className="footer">
          <p>© 2023 Arky Roel U. Balaga. All Rights Reserved</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;