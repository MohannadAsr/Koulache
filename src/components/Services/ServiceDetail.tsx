import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import arrowLeft from '@iconify-icons/mdi/arrow-left-circle';
import arrowRight from '@iconify-icons/mdi/arrow-right-bold-box';
import { animate, motion } from 'framer-motion';

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const serviceDesc: { title: JSX.Element; description: JSX.Element }[] = [
    {
      title: (
        <motion.h1
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" text-3xl font-bold"
        >
          Computer Service Koulache KCS
        </motion.h1>
      ),
      description: (
        <motion.article
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" my-6 text-xl"
        >
          <h3 className=" font-bold my-3">
            IT-Systemhaus - IT-Beratung – Datenrettung
          </h3>
          <h3 className=" font-bold my-3">
            Verkauf von neuen und gebrauchten PC und Notebook & Reparatur
          </h3>
          <p>
            Das Team von Computer Service Koulache ist Ihr{' '}
            <span className=" font-bold">
              {' '}
              IT-Spezialist im Umkreis von Würzburg
            </span>
          </p>
          <p className="my-6">
            Wir bieten professionellen Service im IT-Bereich sowohl für
            Geschäftskunden und Privatkunden.
          </p>
          <p className="my-6">
            Wir bieten ebenfalls Datenrettung bei versehentlich formatierten SD,
            SSD, HDD oder defekten Laptop/PC und Handys. Die Daten werden wieder
            hergestellt.
          </p>
          <p className="my-6">
            Für Firmen bieten wir eine umfassende{' '}
            <span className="font-bold">
              Beratung und Betreuung Ihres IT-Netzwerks und Ihrer Telefonanlage
            </span>{' '}
            direkt bei Ihnen im Unternehmen vor Ort. Wir sind Ansprechpartner
            bei IT-Problemen und unterstützen Sie gerne professionell bei der
            Erweiterung und Modernisierung Ihrer IT-Struktur. Außerdem beraten
            wir Sie kompetent bei Fragen der IT-Sicherheit und bieten
            individuellen Wartungsservice mit professionellem IT-Monitoring
            Ihrer Server und PC-Arbeitsplätze. Wir bieten ebenfalls
            Sicherheitskamera und Türsprechanlage an.
          </p>
          <p className="my-6">
            Privatkunden beraten wir gerne in unserem Fachgeschäft in
            Unterpleichfeld, damit sie den richtigen Computer oder das perfekte
            Notebook <span className="font-bold"> kaufen </span>- speziell für
            ihre Bedürfnisse und Anforderungen. Für defekte Geräte bieten wir
            auch eine{' '}
            <span className="font-bold">
              {' '}
              schnelle und günstige PC-Reparatur
            </span>
            in unserer IT-Werkstatt. DSL einrichten oder auch
            Drucker-Installationen, erledigen wir direkt bei Ihnen vor Ort
            zuhause. Für Gamer bauen wir hochwertige Gamer-PC nach Wunsch.
          </p>
          <p className="my-6 font-bold">
            Wenn der alte PC oder das Notebook nicht geeignet ist für Windows 11
            müssen Sie keinen neuen PC oder Notebook kaufen ich bin Software
            Entwickler und habe eine Methode entwickelt wie man alte
            PC/Notebooks mit dem aktuellen Windows ausstattet egal wie alt.
          </p>
          <p className="my-6 font-bold">
            Windows 11 braucht einen aktuellen Prozessor TPM 2.0 und UEFI-System
            mit aktiviertem Secure Bot. Bei uns gibt es dieses Prinzip nicht wir
            haben einen Weg entwickelt wie wir Windows 11 installieren können
            und sogar schneller als üblich.{' '}
          </p>
        </motion.article>
      ),
    },
    {
      title: (
        <motion.h1
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" text-2xl font-bold"
        >
          Sie sind auf der Suche nach einer Türsprechanlage? Dann sind Sie hier
          genau richtig!
        </motion.h1>
      ),
      description: (
        <motion.article
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" my-6 text-xl flex flex-col gap-6"
        >
          <p>
            Für die Umrüstung der alten Türklingel oder alten Türsprechanlage
            brauchen wir keine neuen Kabel zulegen, das macht die neue Anlage
            viel günstiger!
          </p>
          <p>
            Dank der neuen Technologie brauchen wir keine neuen Kabel zulegen,
            wir nutzen Videowandler und 2Draht-System.
          </p>
          <p>
            Wir geben 50 Euro für ihre alte Anlage, bei Neukauf einer Anlage von
            uns.{' '}
          </p>
          <p>
            Wir sind Geschäftspartner der Marken Goliath, Metzler und Balter.
          </p>
          <p>
            Für Ihre neue Anlage haben wir auch ein sehr interessantes Angebot!
          </p>
          <p>Alle unsere Anlagen sind ausgestattet mit </p>
          <p>
            <div>
              <p>• Innenstation </p>
              <p>• Türstation mit Unterputzdose oder Aufputz dose </p>
              <p>• Modernes Design </p>
              <p>
                • Kostenlose App - egal ob zuhause oder unterwegs können Sie die
                Haustüre öffnen{' '}
              </p>
              <p>• Full HD-Kamera</p>
            </div>
          </p>
        </motion.article>
      ),
    },
    {
      title: (
        <motion.h1
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" text-3xl font-bold"
        >
          Überwachungskamera
        </motion.h1>
      ),
      description: (
        <motion.article
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" my-6 text-xl flex flex-col gap-6"
        >
          <div>
            <p>
              Herzlich willkommen bei Koulache KCS Ihrer erstklassigen Wahl für
              professionelle Überwachungskamera-Installationen! Wir sind stolz
              darauf, uns als Experten auf diesem Gebiet zu präsentieren, und
              bieten umfassende Dienstleistungen für Privat- und Geschäftskunden
              an.
            </p>
          </div>
          <div>
            <h6 className="my-2 font-bold">Unsere Profis:</h6>
            <p>
              Unsere hochqualifizierten Fachleute verfügen über langjährige
              Erfahrung in der Planung, Installation und Wartung von
              Überwachungssystemen. Wir verstehen die Bedeutung von Sicherheit
              und sind bestrebt, Ihnen maßgeschneiderte Lösungen zu bieten, die
              Ihren speziellen Anforderungen entsprechen.
            </p>
          </div>
          <div>
            <h6 className="my-2 font-bold">Vor Ort Service:</h6>
            <p>
              Wir wissen, dass jedes Objekt einzigartig ist, und deshalb bieten
              wir einen umfassenden Vor-Ort-Service an. Unsere Experten besuchen
              Ihr Gelände, um eine detaillierte Sicherheitsanalyse durchzuführen
              und Ihnen maßgeschneiderte Vorschläge für die optimale Platzierung
              und Konfiguration Ihrer Überwachungskameras zu unterbreiten.
            </p>
          </div>
          <div>
            <h6 className="my-2 font-bold">Dienstleistungen:</h6>
            <p>
              Unsere Dienstleistungen umfassen nicht nur die Installation von
              Überwachungskameras, sondern auch die Integration von hochmodernen
              Technologien, um Ihnen eine nahtlose und effektive Überwachung zu
              ermöglichen. Von der Videoanalyse bis zur Fernüberwachung bieten
              wir einen umfassenden Service, um sicherzustellen, dass Ihr
              Eigentum optimal geschützt ist.
            </p>
          </div>
          <div>
            <h6 className="my-2 font-bold">Service und Wartung:</h6>
            <p>
              Unsere Verpflichtung endet nicht mit der Installation. Wir bieten
              kontinuierlichen Service und Wartung an, um sicherzustellen, dass
              Ihre Überwachungskameras stets einwandfrei funktionieren. Unser
              engagiertes Team steht Ihnen zur Verfügung, um eventuelle Probleme
              schnell und effizient zu beheben und sicherzustellen, dass Ihr
              Sicherheitssystem jederzeit zuverlässig ist.
            </p>
          </div>
          <div>
            <h6 className="my-2 font-bold">Überwachung von Überall:</h6>
            <p>
              Mit unseren fortschrittlichen Überwachungslösungen haben Sie die
              volle Kontrolle über Ihr Sicherheitssystem, egal wo Sie sich
              befinden. Überwachen Sie Ihr Eigentum in Echtzeit über mobile Apps
              oder Webbrowser und erhalten Sie Benachrichtigungen über
              verdächtige Aktivitäten, damit Sie immer ein sicheres Gefühl
              haben.
            </p>
          </div>
          <div>
            Vertrauen Sie Koulache KCS um die Sicherheit Ihres Zuhauses oder
            Geschäfts zu gewährleisten. Kontaktieren Sie uns noch heute für eine
            umfassende Beratung und maßgeschneiderte Lösungen, die Ihren
            individuellen Bedürfnissen gerecht werden. Ihre Sicherheit ist
            unsere Priorität!
          </div>
        </motion.article>
      ),
    },
  ];
  const goTo = (dir: 'next' | 'prev') => {
    if (dir == 'next' && Number(id) < 4) {
      return navigate(`/services/${Number(id) + 1}`);
    }
    if (dir == 'prev' && Number(id) !== 1) {
      return navigate(`/services/${Number(id) - 1}`);
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      className="  section-blur-overlay  text-white hero-section  py-7 px-2 bg-center bg-no-repeat bg-cover relative   "
      style={{
        backgroundImage: `url(/services/${id}.jpg)`,
      }}
    >
      <div className=" container flex justify-between items-center">
        <div>
          <div className="z-20  relative ml-5 ">
            <Icon
              icon={arrowLeft}
              fontSize={35}
              className={`  text-white/90 cursor-pointer `}
              onClick={() => navigate({ pathname: '/services' })}
            />
          </div>
        </div>
        <div>
          <h1 className=" text-center  font-bold text-xl md:text-3xl z-20  relative">
            Dienstleistungen
          </h1>
          <h3 className="text-center  text-md md:text-xl py-1 z-20  relative">
            Was wir tun konnen
          </h3>
        </div>
        <div> </div>
      </div>

      <div className="z-20  relative bg-primary/90 w-full rounded-md py-6  md:w-3/4 mx-auto my-2 md:p-4 p-2 shadow-lg">
        <div className=" grid grid-cols-1  gap-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="    "
          >
            <img
              src={`/services/${id}.jpg`}
              className=" mx-auto w-full object-cover  "
              style={{ maxHeight: '450px' }}
            />
          </motion.div>
          <div className=" whitespace-break-spaces">
            {serviceDesc[Number(id) - 1]?.title || serviceDesc[0]?.title}
            {serviceDesc[Number(id) - 1]?.description ||
              serviceDesc[0]?.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
