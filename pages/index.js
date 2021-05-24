import Head from 'next/head';
import Image from 'next/image';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPhoneAlt,
  faGlobeEurope,
  faEnvelopeOpen,
  faUser,
  faSuitcase,
  faCodeBranch,
  faDatabase,
  faClipboardCheck,
  faStar,
  faComments,
  faVectorSquare,
  faMusic,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import {
  faConnectdevelop,
  faCss3,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJsfiddle,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
  return (
    <div className='lg:w-full xl:w-10/12 xl:m-auto 2xl:w-8/12'>
      <Head>
        <title>CV Bourrel David</title>
        <meta
          name='description'
          content='CV Bourrel David with NextJS and Tailwind'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='flex items-center flex-col flex-wrap justify-around bg-gray-700 text-white text-base lg:flex-row'>
        <div className='flex my-6 border-2 rounded-xl hover:scale-110 transform transition hover:rotate-6 transform-gpu'>
          <Image
            src='/profil.jpg'
            alt='Ma photo de profil'
            width={100}
            height={130}
            className='rounded-lg flex-auto'
          />
        </div>
        <div className='mb-4'>
          <h1 className='text-2xl font-semibold lg:text-4xl'>
            Développeur Web Junior
          </h1>
          <p className='text-base mt-1 text-center lg:text-left'>
            David Bourrel
          </p>
        </div>
        <div className='my-4'>
          <p className='flex items-center'>
            <FontAwesomeIcon icon={faUser} className='w-4 h-4' />
            <span className='pl-4 font-light'>29 ans</span>
          </p>
          <p className='flex items-center'>
            <FontAwesomeIcon icon={faPhoneAlt} className='w-4 h-4' />
            <span className='pl-4 font-light'>06 50 46 10 31</span>
          </p>
          <p className='flex items-center'>
            <FontAwesomeIcon icon={faGlobeEurope} className='w-4 h-4' />
            <span className='pl-4 font-light'>Toulouse, France</span>
          </p>
          <a
            href='mailto:david-bourrel@hotmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center hover:text-gray-900 transition-colors'
          >
            <FontAwesomeIcon icon={faEnvelopeOpen} className='w-4 h-4' />
            <span className='pl-4 font-light'>david-bourrel@hotmail.fr</span>
          </a>
          <a
            href='https://github.com/davidbourrel'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center hover:text-gray-900 transition-colors'
          >
            <FontAwesomeIcon icon={faGithub} className='w-4 h-4' />
            <span className='pl-4 font-light'>github.com/davidbourrel</span>
          </a>
        </div>
      </header>

      <main className='text-gray-700 lg:flex'>
        <div className='px-8 flex-1'>
          <section>
            <h2 className='flex items-center border-b-2 border-gray-700 font-semibold text-xl my-1 py-2'>
              <FontAwesomeIcon icon={faSuitcase} className='w-5 h-5' />
              <span className='pl-4'>EXPERIENCES</span>
            </h2>
            <div className='my-4'>
              <h3 className='underline'>
                Wheels on Mars
                <span className='italic font-light text-sm'>
                  {' '}
                  (React, Material UI, Scrum)
                </span>
              </h3>
              <p>- Projet de suivi des rovers sur Mars :</p>
              <ul>
                <li className='ml-8 my-1 list-disc font-light text-sm'>
                  Obtenir des informations sur les rovers.
                </li>
                <li className='ml-8 my-1 list-disc font-light text-sm'>
                  Visionner et trier les photos par sol (jour martien).
                </li>
              </ul>

              <p className='font-semibold text-sm'>
                avril – mai 2021 | Toulouse, France
              </p>
            </div>
            <div className='my-4'>
              <h3 className='underline'>
                Guide SST{' '}
                <span className='italic font-light text-sm'>
                  (HTML, CSS, Javascript)
                </span>
              </h3>
              <p>- Projet personnel pour la création d'un guide SST :</p>
              <ul>
                <li className='ml-8 my-1 list-disc font-light text-sm'>
                  S'informer sur les nouvelles méthodes de secourisme en
                  vigueur.
                </li>
                <li className='ml-8 my-1 list-disc font-light text-sm'>
                  Images, vidéos et quiz pour mettre les connaissances en
                  application.
                </li>
              </ul>
              <p className='font-semibold text-sm'>
                2020 - 2021 | Toulouse, France
              </p>
            </div>
            <div className='my-4'>
              <h3 className='underline'> SSIAP 1 - ONET Sécurité</h3>
              <ul>
                <li className='ml-8 my-1 list-disc font-light text-sm'>
                  Contrôle du PC Sécurité, maîtrise du SSI
                  <span className='italic text-sm'>
                    (Système de sécurité incendie)
                  </span>
                  .
                </li>
                <li className='ml-8 my-1 list-disc font-light text-sm'>
                  Maîtrise des logiciels CH-400, UAE
                  <span className='italic text-sm'>
                    (Unité d'aide à exploitation)
                  </span>{' '}
                  et GTB
                  <span className='italic text-sm'>
                    (Gestion technique du bâtiment)
                  </span>
                  .
                </li>
              </ul>
              <p className='font-semibold text-sm'>
                2016 - 2021 | Toulouse, France
              </p>
            </div>
          </section>
          <section>
            <h2 className='flex items-center border-b-2 border-gray-700 font-semibold text-xl my-1 py-2'>
              <FontAwesomeIcon icon={faCodeBranch} className='w-5 h-5' />
              <span className='pl-4'>COMPETENCES PROFESSIONNELLES</span>
            </h2>
            <ul className='flex flex-row flex-wrap my-4'>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faHtml5} className='w-4 h-4' />
                <span className='ml-2'>HTML5</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faCss3Alt} className='w-4 h-4' />
                <span className='ml-2'>CSS3</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faSass} className='w-4 h-4' />
                <span className='ml-2'>Sass</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faReact} className='w-4 h-4' />
                <span className='ml-2'>React</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faJsSquare} className='w-4 h-4' />
                <span className='ml-2'>Javascript</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faNodeJs} className='w-4 h-4' />
                <span className='ml-2'>NodeJs/Express</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faDatabase} className='w-4 h-4' />
                <span className='ml-2'>MySQL</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faConnectdevelop} className='w-4 h-4' />
                <span className='ml-2'>Git/Github</span>
              </li>
            </ul>
          </section>
        </div>
        <div className='px-8 flex-1'>
          <section>
            <h2 className='flex items-center border-b-2 border-gray-700 font-semibold text-xl my-1 py-2'>
              <FontAwesomeIcon icon={faClipboardCheck} className='w-5 h-5' />
              <span className='pl-4'>FORMATIONS</span>
            </h2>
            <div className='my-4'>
              <h3 className='underline'>Wild Code School</h3>
              <p className='font-light text-sm my-1'>
                - Formation "Développeur Web et Web Mobile" (équivalent Bac+2).
              </p>
              <p className='font-semibold text-sm'>
                mars - juillet 2021 | Toulouse, France
              </p>
            </div>
            <div className='my-4'>
              <h3 className='underline'>
                Openclassrooms - Pierre Giraud - Grafikart
              </h3>
              <p className='font-light text-sm my-1'>
                - Apprentissage du HTML, CSS, Sass et JavaScript en autodidacte
                sur ces diverses plateformes.
              </p>
              <p className='font-semibold text-sm'>
                2019 - 2021 | Toulouse, France
              </p>
            </div>
            <div className='my-4'>
              <h3 className='underline'>GRETA</h3>
              <p className='font-light text-sm my-1'>
                - CQP Agent de prévention et de sécurité, SSIAP
                <span className='italic'>
                  (Service de sécurité incendie et d'assistance à personnes)
                </span>
                , SST
                <span className='italic'>
                  (Sauveteur secouriste du travail)
                </span>
                , Habilitation électrique H0B0.
              </p>
              <p className='font-semibold text-sm'>
                2015 - 2016 | Castelnaudary, France
              </p>
            </div>
          </section>
          <section>
            <h2 className='flex items-center border-b-2 border-gray-700 font-semibold text-xl my-1 py-2'>
              <FontAwesomeIcon icon={faStar} className='w-5 h-5' />
              <span className='pl-4'>QUALITES PERSONNELLES</span>
            </h2>
            <ul className='flex flex-row flex-wrap my-4'>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faCircle} className='w-4 h-4' />
                <span className='ml-2'>Sérieux</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faCircle} className='w-4 h-4' />
                <span className='ml-2'>Autonome</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faCircle} className='w-4 h-4' />
                <span className='ml-2'>Rigoureux</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faCircle} className='w-4 h-4' />
                <span className='ml-2'>Curieux</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faCircle} className='w-4 h-4' />
                <span className='ml-2'>Esprit d'équipe</span>
              </li>
              <li className='flex items-center flex-comp mr-1 my-1 hover:bg-gray-500 hover:text-white transition'>
                <FontAwesomeIcon icon={faCircle} className='w-4 h-4' />
                <span className='ml-2'>Adaptation</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 className='flex items-center border-b-2 border-gray-700 font-semibold text-xl my-1 py-2'>
              <FontAwesomeIcon icon={faComments} className='w-5 h-5' />
              <span className='pl-4'>LANGUES</span>
            </h2>
            <div className='my-4 flex items-center'>
              <Image
                src='/french-flag.png'
                alt='Drapeau français'
                width={70}
                height={45}
              />
              <span className='ml-4'>Français - langue maternelle</span>
            </div>
            <div className='my-4 flex items-center'>
              <Image
                src='/english-flag.png'
                alt='Drapeau anglais'
                width={70}
                height={45}
              />
              <span className='ml-4'>Anglais - B1 - compréhension écrite</span>
            </div>
          </section>
          <section>
            <h2 className='flex items-center border-b-2 border-gray-700 font-semibold text-xl my-1 py-2'>
              <FontAwesomeIcon icon={faVectorSquare} className='w-5 h-5' />
              <span className='pl-4'>CENTRES D'INTERETS</span>
            </h2>
            <ul className='my-4'>
              <li className='flex items-center'>
                <FontAwesomeIcon icon={faMusic} className='w-4 h-4' />
                <span className='ml-2'>| La MAO avec Ableton live 10.</span>
              </li>
              <li className='flex items-center'>
                <FontAwesomeIcon icon={faComments} className='w-4 h-4' />
                <span className='ml-2'>
                  | Apprentissage de l'anglais avec Babbel et TEFL Toulouse.
                </span>
              </li>
              <li className='flex items-center'>
                <FontAwesomeIcon icon={faProjectDiagram} className='w-4 h-4' />
                <span className='ml-2'>| L'informatique en générale.</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
